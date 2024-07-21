import React from "react";
import ReactionButton from "./ReactionButton";
import { addReaction, getReactions } from "@/firebase/reactions.actions";

const defaultReactions = [
  {
    id: "like",
    emoji: "👍",
    count: 0,
  },
  {
    id: "dislike",
    emoji: "👎",
    count: 0,
  },
  {
    id: "love",
    emoji: "❤️",
    count: 0,
  },
  {
    id: "laugh",
    emoji: "😂",
    count: 0,
  },
  {
    id: "confused",
    emoji: "😕",
    count: 0,
  },
];

export default async function Reactions({ blogId }: { blogId: string }) {
  const existingReactions = await getReactions(blogId);
  console.log(existingReactions);
  const reactions = defaultReactions.map((reaction) => {
    const existingReaction = existingReactions.find((existingReaction) => {
      return existingReaction.emoji === reaction.emoji;
    });
    return existingReaction || reaction;
  });
  return (
    <div className="flex items-center gap-2">
      {reactions.map((reaction) => {
        return (
          <ReactionForm
            key={`reactions-${reaction.id}-${blogId}`}
            id={reaction.id}
            blogId={blogId}
            count={reaction.count}
            emoji={reaction.emoji}
          />
        );
      })}
    </div>
  );
}

function ReactionForm({
  id,
  count,
  emoji,
  blogId,
}: {
  id: string;
  blogId: string;
  count: number;
  emoji: string;
}) {
  const addReactionHandler = async () => {
    "use server";
    const newCount = await addReaction(blogId, emoji, count);
    console.log(newCount);
  };
  return (
    <form key={`reactions-${id}-${blogId}`} action={addReactionHandler}>
      <ReactionButton emoji={emoji} count={count} />
    </form>
  );
}
