export const getBlogPath = (blogUrl: string) => {
  return blogUrl.split("/").pop();
};