import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";
import { metadata } from "app/layout";
import { format } from "date-fns";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  // console.log(allBlogs.length);

  return (
    <div>
      <h1>{allBlogs.length} articles found</h1>

      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-start">
              <div className="pt-1 mr-6 text-center">
                <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                  <p className="text-sm text-blue-gray-700 uppercase dark:text-neutral-400 ">
                    {format(post.metadata.publishedAt, "MMM")}
                  </p>
                </div>
                <div className="px-2">
                  <p className="text-lg font-bold">
                    {format(post.metadata.publishedAt, "dd")}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-700 dark:text-neutral-100 tracking-tight text-base">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
