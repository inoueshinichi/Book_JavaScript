"use client";

// const ServerFunctions = () => {
//     const handleClick = async () => {
//         "use server";
//         console.log("クリックされました");
//     };
//     return (
//         <button type="button" onClick={handleClick}>
//             click SSR with server-functions!
//         </button>
//     );
// };

import { handleClick } from "./actions";
import { incrementClick } from "./actions";
import { useState } from "react";
import { useTransition } from "react";
import { useActionState } from "react";

import { checkText } from "./actions";

const ServerFunctions = () => {
    const [count, setCount] = useState<number>(0);
    const [isPending, startTransition] = useTransition();
    const [state, submitAction, isFormPending] = useActionState(checkText, {
        default: "テキストを入力してください",
    });
    const [text, setText] = useState<string>('');

    const handleClick = async () => {
        startTransition(async () => {
            const newCount: number = await incrementClick();
            setCount(newCount);
        });
    };

    return (
        <>
            <div>
                <button type="button" onClick={handleClick} disabled={isPending}>
                click CSR with server-functions!
                </button>
            </div>
            {isPending ? <p>incrementing...</p> : <p>Count: {count}</p>}
            <hr />
            <form action={submitAction}>
                テキスト :
                <input
                    type="text"
                    name="myText"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" disabled={isFormPending}>
                    submit!
                </button>
                {state.default && <p>state.default</p>}
                {state.error && <p style={{ color: "red" }}>{state.error}</p>}
                {state.success && <p style={{ color: "green" }}>{state.success}</p>}
            </form>
        </>
    );
};

export default ServerFunctions;