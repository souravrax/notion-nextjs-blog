"use client";
import { InfinitySpin } from "react-loader-spinner";
export default function BlogLoading() {
  return (
    <section className="flex h-[400px] w-full items-center justify-center">
      {/* <GridLoader className="bg-transparent dark:text-white" loading={true} /> */}
      <InfinitySpin color="#808080" />
    </section>
  );
}
