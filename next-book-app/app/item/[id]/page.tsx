import { notFound } from "next/navigation";


export const generateMetadata = async ({ params }: { params : { id: string }}) => {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api?id=${id}`);
    const item = await response.json();
    console.log('generateMetadata');
    return {
        // title: `Item${id}`,
        title: item.name,
    };
};

const Item = async ({ params }: { params: { id: string }}) => {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api?id=${id}`);
    if (response.status === 404) {
        notFound();
    }

    const item = await response.json();
    
    // return <h1>Item{id}ページ</h1>;

    return (
        <div>
            <h2>{item.name}</h2>
            <p>価格： {item.price}円</p>
        </div>
    );
};

export default Item;
