import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

const Page = ({ params }: { params: { id: string } }) => {
  const post = posts.find((post): boolean => post.id === params.id);

  return (
    <>
      <h2>Post</h2>
      {post ? <Post {...post} /> : <p>Post not found</p>}
    </>
  );
};

export default Page;
