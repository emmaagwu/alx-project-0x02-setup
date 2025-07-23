import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">User ID: {userId}</p>
      <p className="mt-2">{body}</p>
    </div>
  );
};

export default PostCard;