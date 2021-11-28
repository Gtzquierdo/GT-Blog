import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';

// demo data
const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React Testing 2', excerpt: 'Learn React Testing 2' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>GT Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div>

          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => <PostCard key={post.title} post={post} />)}
          </div>
      </div>
      <div className=";g:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>

      </div>
    </div>
      
    </div>
  )
}
