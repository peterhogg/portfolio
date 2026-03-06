import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "My thoughts on development and projects"
};

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto mt-8 px-4">
      <AnimatedSection>
        <section id="blog">
          <h2 className="text-4xl font-bold mb-2 text-center">Blog</h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            My thoughts on development and projects
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-3 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Blog;
