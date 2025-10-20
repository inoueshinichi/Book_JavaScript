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

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    // ローカルストレージから初期値を取得
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageState = (value) => {
    setState((prevState) => {
      // 新しい状態を計算 (関数の場合、現在の状態を引数にして呼び出し)
      const newState = typeof value === "function" ? value(prevState) : value;

      // ローカルストレージに新しい状態を保存
      localStorage.setItem(key, JSON.stringify(newState));

      return newState;
    });
  };

  return [state, setLocalStorageState];
}
