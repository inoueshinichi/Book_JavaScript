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

import { cva } from "class-variance-authority";

// 入力フィールドのスタイルを定義
const inputVariants = cva("flex-1 border px-2 py-1 border-gray-300 bg-white", {
  variants: {
    completed: {
      true: "text-gray-400 line-through disabled:cursor-not-allowed",
      // 完了したタスクのスタイル
    },
  },
});

export function TaskItem({ task }) {
  return (
    <div className="flex items-center gap-3 rounded bg-white px-4 py-2">
      {/* タスクのタイトルを編集可能な入力フィールド */}
      <input
        type="text"
        className={inputVariants({ completed: task.status === "completed" })}
        defaultValue={task.title}
        disabled={task.status === "completed"}
      />
    </div>
  );
}
