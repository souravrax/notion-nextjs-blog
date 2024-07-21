import { convertTimestampToDate } from "@/lib/utils";
import { ThumbsUpIcon } from "lucide-react";
import React from "react";

export default function Comments({ id }: { id: string }) {
  return (
    <section className="space-y-4">
      <p>Comments</p>
      <div>
        <button className="w-full rounded-lg border px-4 py-2 text-left text-muted-foreground transition-all hover:bg-accent/30">
          Write a new comment
        </button>
      </div>
      <CommentList id="some_random_id" />
    </section>
  );
}

type CommentType = {
  id: string;
  has_children: boolean;
  author: string;
  content: string;
  created_at: string;
  likes: number;
  children_id: string | null;
};

const sampleComments: Record<string, CommentType[]> = {
  some_random_id: [
    {
      id: "something",
      has_children: false,
      author: "John Doe",
      content: "This is a comment",
      created_at: "2023-01-01T00:00:00.000Z",
      likes: 9,
      children_id: null,
    },
    {
      id: "something2",
      has_children: false,
      author: "John Doe",
      content: "This is a comment",
      created_at: "2023-01-01T00:00:00.000Z",
      children_id: null,
      likes: 99,
    },
    {
      id: "something3",
      has_children: false,
      author: "John Doe",
      content: "This is a comment",
      created_at: "2023-01-01T00:00:00.000Z",
      children_id: null,
      likes: 999,
    },
  ],
};

function CommentList({ id }: { id: string }) {
  return sampleComments[id].map((comment) => {
    return <SingleComment key={comment.id} comment={comment} />;
  });
}

function SingleComment({ comment }: { comment: CommentType }) {
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded border px-4 py-2">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2 text-xs">
          <p className="font-medium text-accent">{comment.author}</p>
          <p className="text-muted-foreground">
            {convertTimestampToDate(comment.created_at)}
          </p>
        </div>
        <p className="text-base text-foreground">{comment.content}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-full border bg-secondary/10 px-2 py-0.5 text-xs text-muted-foreground">
          <ThumbsUpIcon size={14} />
          <span>{comment.likes}</span>
        </button>
        <button className="flex items-center gap-2 rounded-full border bg-secondary/10 px-2 py-0.5 text-xs text-muted-foreground">
          Reply
        </button>
      </div>
    </div>
  );
}
