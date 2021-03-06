import Exploretab from '../components/Exploretab/Exploretab'
import Layout from "../components/Layout/Layout"

const hot = ({data, popularSubreddits}) => {
      return (
            <Layout title = "reddit | Hot">
            <div>
                  <Exploretab posts={data} popularSubreddits={popularSubreddits}/>
            </div>
            </Layout>
      )
}

export default hot

export const getServerSideProps = async () => {
      const response = await fetch('https://www.reddit.com/hot.json')
      const { data } = await response.json()
      const popularSubredditsResponse = await fetch('https://www.reddit.com/subreddits/popular.json')
      const popularSubreddits = await popularSubredditsResponse.json()
      return {
        props: {
          data: data.children,
          popularSubreddits: popularSubreddits.data.children
        }
      }
}