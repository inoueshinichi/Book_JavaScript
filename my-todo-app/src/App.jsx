import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, // タグ形式をオブジェクト配列に変換する関数
} from "react-router-dom";

import { AppLayout } from "./components/AppLayout";
import { TaskList } from "./components/TaskList";

function App() {
  const scaffold = createBrowserRouter([
    {
      element: (
        <AppLayout>
          <Outlet />
        </AppLayout>
      ),
      children: createRoutesFromElements(
        <>
          <Route path="/" element={<TaskList />} />
          <Route path="/trash" element={<div>ゴミ箱</div>} />
        </>,
      ),
    },
  ]);

  return <RouterProvider router={scaffold} />;
}

export default App;
