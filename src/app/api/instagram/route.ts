import { NextResponse } from "next/server";

export async function GET() {
    let responseData = [];
    try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error("Failed to fetch Instagram feed");
        }
        responseData = await data.json();
    } catch (err: any) {
        console.error("Error fetching Instagram feed:", err.message);
        return NextResponse.json(
            {
                message: "Unable to process request",
            },
            {
                status: 403,
            }
        );
    }
    return NextResponse.json(
        {
            message: "Successfully retried data",
            data: responseData,
        },
        {
            status: 200,
        }
    );
}
