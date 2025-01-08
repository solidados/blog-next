import { FC } from "react";
import type { Post } from "@/app/lib/definition";
import Link from "next/link";

type PostProps = Post;

const Post: FC<PostProps> = ({ id, title, content, date }) => {
  return (
    <div key={id} className={"border border-gray-200 my-4 p-4"}>
      <Link href={`/blog/post/${id}`}>
        <h2>{title}</h2>
        <p className="text-grey-500">{date}</p>
        <p>{content}</p>
      </Link>
    </div>
  );
};

export default Post;
