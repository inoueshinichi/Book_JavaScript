import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useLayoutEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useTransition,
  useMemo,
  useCallback,
  memo,
  useId,
  useDeferredValue,
  useDebugValue,
  useSyncExternalStore,
  useActionState,
  useInsertionEffect,
  useOptimistic,
} from "react";

import { Plus } from "lucide-react";

export function CreateTaskForm({ onSubmit }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current) {
      // console.log("inputRef.current is null");
      return;
    }

    // inputの値を取得
    // console.log(`inputRef.current?.value: ${inputRef.current?.value}`);
    const inputValue = inputRef.current?.value.trim();
    if (!inputValue) {
      // console.log("inputRef.current is no string")
      return;
    }

    // タスクを作成
    onSubmit(inputValue);
    // console.log("submit");

    // 入力値をリセット
    inputRef.current.value = "";
  };

  return (
    <form className="flex gap-0.5" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="新しいタスクを入力してください"
        className="grow rounded-s border border-gray-300 p-2 bg-white"
      />

      <button
        type="submit"
        className="rounded-e bg-blue-600 p-2 transition-colors
                   hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        aria-label={"タスクを作成する"}
      >
        <Plus className="text-white" />
      </button>
    </form>
  );
}
