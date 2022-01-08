import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function BlogPost({ post }) {
  return (
    <Layout title="Blog Post">
      <main className="py-8 space-y-4">
        <span className="font-bold font-mono text-gray-500 uppercase">
          {post.date}
        </span>
        <div className="space-y-2">
          <h1 className="font-bold text-3xl leading-tight">{post.title}</h1>
          <h2 className="font-medium text-xl text-gray-600">{post.summary}</h2>
        </div>
        <hr />
        <article
          className="prose prose-lg prose-gray"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const post = await getPostData(id);
  return {
    props: {
      post,
    },
  };
}
