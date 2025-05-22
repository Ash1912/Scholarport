import { allBlogs, type Blog } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function BlogPage() {
  const posts: Blog[] = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: Blog) => (
          <li key={post._id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
