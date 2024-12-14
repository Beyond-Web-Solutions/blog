import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description:
    "Blogs over de ontwikkeling van webapplicaties met praktische inzichten en tips voor kwalitatieve softwareoplossingen.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
