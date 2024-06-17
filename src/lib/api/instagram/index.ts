export const getInstagramPosts = async (types: string[] = []) => {
    try {
        const data = await fetch(`${process.env.HOSTNAME}/api/instagram`);
        if (!data) throw Error();
        const jsonData = await data.json();
        const posts = jsonData.data.data.filter((post: any) =>
            types.includes(post["media_type"])
        );
        return posts;
    } catch {
        return [];
    }
};
