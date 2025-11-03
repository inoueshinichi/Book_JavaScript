import { notFound } from "next/navigation";

const StreamingPage = async ({ id }: { id: string }) => {
    const response = await fetch(`http://localhost:3000/api?id=${id}`, {
        cache: "no-store",
    });
    if (response.status === 404) {
        notFound();
    }
    const item = await response.json();
    return (
        <div>
            <h2>{item.name}</h2>
            <p>価格: {item.price}円</p>
        </div>
    );
};

export default StreamingPage;