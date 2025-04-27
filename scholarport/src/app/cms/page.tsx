// src/app/cms/page.tsx
import { sanityClient } from "@/lib/sanityClient";

async function getBlogs() {
  return sanityClient.fetch(`*[_type == "blog"]`);
}

export default async function CMSPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Resources</h1>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {blogs.map((post: any) => (
          <div key={post._id} className="p-4 border rounded">
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
