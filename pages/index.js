import Layout from "../components/layout";
import Post from "../components/post";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout title="Things and stuff!">
      <main className="py-8 space-y-4">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl leading-tight">
            Welcome to
            <br />
            things and stuff
          </h1>
          <p className="text-lg font-medium text-gray-600">
            This is where I talk about my things and my stuff!
            <br />
            You can read my posts below!
          </p>
          <Link href="/about">
            <div className="text-blue-500 hover:text-blue-700 cursor-pointer">
              Go to the about page
            </div>
          </Link>
        </div>
        <ul>
          {allPostsData.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
