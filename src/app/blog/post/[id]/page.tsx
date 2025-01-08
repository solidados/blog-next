import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

const Page = ({ params }: { params: { id: string } }) => {
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

export default Page;
