"use server";

export const handleClick = async () => {
    console.log("クリックされました");
};

let count: number = 0;
export const incrementClick = async () => {
    /* ここでAPI通信を行なったりする */
    await new Promise((resolve) => setTimeout(resolve, 2000));
    count++;
    return count;
};


export const checkText = async (prevState: any, formData: FormData) => {
    const text: string = formData.get('myText') as string;
    if (!text) {
        return {
            error: "必須項目です。テキストを入力してください。"
        };
    }
    if (text.length > 10) {
        return {
            error: "テキストは10文字以内で入力してください。"
        }
    }
    return {
        success: `入力されたテキスト「${text}」は正しいです。`
    };
};