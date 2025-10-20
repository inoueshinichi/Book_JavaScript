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

import { dummyTaskList } from "../data/dummyTaskList";
import { TaskItem } from "./TaskItem";
import { CreateTaskForm } from "./CreateTaskForm";
import { useTasks } from "../hooks/useTasks";

export function TaskList() {
  // タスク一覧の状態を管理
  // const [taskList, setTaskList] = useState([]);

  // const [taskList, setTaskList] = useState(() => {
  //   // タスクリストをローカルストレージから引っ張ってくる
  //   const taskListStorage = localStorage.getItem("taskList");
  //   return JSON.parse(taskListStorage ?? "[]");
  // });

  // タスクに対する操作をカスタムフックとして外に出して参照
  const { activeTaskList, createTask, updateTask } = useTasks();

  // // ローカルストレージへのタスクリストの保存
  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(taskList));
  // }, [taskList]);

  // 新しいタスクを追加
  // const createTask = (title) => {
  //   setTaskList((prevTaskList) => {
  //     // 新しいタスクオブジェクトを作成
  //     const newTask = {
  //       id: Date.now(),
  //       title,
  //       status: "notStarted",
  //     };

  //     return [...prevTaskList, newTask];
  //   });
  // };

  // ゴミ箱のタスクを除いたタスク一覧
  // const activeTaskList = taskList.filter(({ status }) => status !== "trashed");

  // タスクを更新する
  // const updateTask = (id, updatedTask) => {
  //   setTaskList((prevTaskList) => {
  //     return prevTaskList.map((task) =>
  //       // 対象のタスクのidが一致する場合、そのタスクを更新
  //       task.id === id ? { ...task, ...updatedTask } : task,
  //     );
  //   });
  // };

  return (
    <div className="relative">
      <div className="sticky top-0 flex flex-col items-end gap-2 bg-slate-100 px-10 py-5">
        <div className="w-full">
          <CreateTaskForm onSubmit={createTask} />
        </div>
      </div>
      <div className="space-y-3 px-10 pb-10">
        {activeTaskList.length === 0 ? (
          <p className="text-center text-sm">タスクがありません</p>
        ) : (
          activeTaskList.map((task) => <TaskItem key={task.id} task={task} onChange={updateTask} />)
        )}
      </div>
    </div>
  );
}
