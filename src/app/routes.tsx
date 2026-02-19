import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { LiveBetting } from "./components/pages/LiveBetting";
import { Sports } from "./components/pages/Sports";
import { MyBets } from "./components/pages/MyBets";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "live", Component: LiveBetting },
      { path: "sports/:sport", Component: Sports },
      { path: "my-bets", Component: MyBets },
      { path: "*", Component: NotFound },
    ],
  },
]);
