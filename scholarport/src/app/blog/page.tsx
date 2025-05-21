// app/blog/page.tsx
import { sanityClient } from "@/lib/sanity";

export default async function BlogPage() {
  const posts = await sanityClient.fetch(`*[_type == "post"]{_id, title, slug}`);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
