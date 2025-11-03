
// export const GET = async () => {
//     return Response.json({
//         id: 1,
//         name: "Next Book A",
//         price: 4000,
//     });
// };

const items = [
    {
        id: 1,
        name: "Next Book A",
        price: 4000,
    },
    {
        id: 2,
        name: "Next Book B",
        price: 5000,
    },
    {
        id: 3,
        name: "Next Book C",
        price: 3000,
    },
];

export const GET = async (request: Request) => {
    
    // レスポンスが遅い状況を作る
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const item = items.find((item) => item.id === Number(id));

    if (!item) {
        return new Response("item not found", {
            status: 404,
        });
    }

    return Response.json(item);
}