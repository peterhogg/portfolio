import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} - Blog`,
      description: post.description,
    };
  } catch {
    return {
      title: "Blog Post Not Found",
    };
  }
}

const BlogPost = async ({ params }: Props) => {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const options = {
    theme: "github-dark",
    keepBackground: false,
  };

  return (
    <div className="container mx-auto mt-8 px-4 max-w-3xl">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-6 inline-block dark:text-blue-400"
      >
        ← Back to Blog
      </Link>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, options]],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
