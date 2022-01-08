import Layout from "../components/layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout title="Things and stuff!">
      <main className="py-8 space-y-4">
        <h1 className="font-bold text-3xl">About this blog</h1>
        <p className="text-lg font-medium text-gray-600">
          This is where I talk about my things and my stuff!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Donec euismod, nisl eget consectetur consectetur,
          <br />
          nisl nunc euismod nisi, euismod euismod nisi
        </p>
        <Link href="/">
          <div className="text-blue-500 hover:text-blue-700 cursor-pointer">
            Go to the home page
          </div>
        </Link>
      </main>
    </Layout>
  );
}
