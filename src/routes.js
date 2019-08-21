import React from "react";

const BasicUseState = React.lazy(() => import("./basic_state/BasicUseState"));
const Effect = React.lazy(() => import("./effects/Effect"));
const Memo = React.lazy(() => import("./memo/Memo"));
const Ref = React.lazy(() => import("./ref/Ref"));

const routes = [
  {
    path: "/1",
    title: "Basic state",
    Component: BasicUseState
  },
  {
    path: "/2",
    title: "Component mount/unmount/update",
    Component: Effect
  },
  {
    path: "/3",
    title: "Memoizing",
    Component: Memo
  },
  {
    path: "/4",
    title: "Ref",
    Component: Ref
  }
];

export default routes;
