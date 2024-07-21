"use server";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  updateDoc,
  increment,
  addDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

export async function addReaction(
  blogId: string,
  emoji: string,
  count: number = 1,
) {
  const q = query(
    collection(db, "reactions"),
    where("emoji", "==", emoji),
    where("blogId", "==", blogId),
  );

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    let updatedCount = count;
    for (const doc of querySnapshot.docs) {
      await updateDoc(doc.ref, {
        count: increment(1),
      });

      const updatedDoc = await getDoc(doc.ref);
      updatedCount = updatedDoc.data()?.count;
    }
    return updatedCount;
  } else {
    const newDocRef = await addDoc(collection(db, "reactions"), {
      emoji,
      count: 1,
      blogId,
    });
    return 1;
  }
}

export async function getReactions(blogId: string) {
  const reactionsCollection = collection(db, "reactions");
  const reactionsQuery = query(
    reactionsCollection,
    where("blogId", "==", blogId),
  );
  const reactionsDocs = await getDocs(reactionsQuery);
  return reactionsDocs.docs.map((doc) => {
    return {
      id: doc.id!,
      emoji: doc.data().emoji as string,
      count: doc.data().count as number,
    };
  });
}
