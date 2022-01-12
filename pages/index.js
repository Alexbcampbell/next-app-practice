import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  
  return (
    <div >
      <Head><title>PRODJEX SUPPORT DASHBOARD</title>
      <meta name='keywords' content='support, web dev'/>
      </Head>
      <ArticleList />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}