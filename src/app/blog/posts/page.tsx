import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

const Page = () => {
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post: Post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
};

export default Page;
