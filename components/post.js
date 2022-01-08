import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <li className="py-4 border-t space-y-2">
        <span className="font-mono uppercase font-bold text-gray-500 text-sm">
          {post.date}
        </span>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-600 font-medium">{post.summary}</p>
          <div className="hover:underline cursor-pointer text-sm text-blue-600">
            Read post &rarr;
          </div>
        </div>
      </li>
    </Link>
  );
}
