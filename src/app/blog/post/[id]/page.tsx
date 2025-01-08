import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

type PageProps = {
  params: { id: string };
};

const Page = ({ params }: PageProps) => {
  const post: Post | undefined = posts.find(
    (post: Post): boolean => post.id === params.id,
  );

  return (
    <>
      <h2>Post</h2>
      {post ? <Post {...post} /> : <p>Post not found</p>}
    </>
  );
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default Page;
