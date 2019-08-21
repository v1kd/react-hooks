import React from "react";

const BasicUseState = React.lazy(() => import("./basic_state/BasicUseState"));
const ComponentMount = React.lazy(() => import("./effects/Effect"));
const Memo = React.lazy(() => import("./memo/Memo"));

const routes = [
  {
    path: "/1",
    title: "Basic state",
    Component: BasicUseState
  },
  {
    path: "/2",
    title: "Component mount/unmount/update",
    Component: ComponentMount
  },
  {
    path: "/3",
    title: "Memoizing",
    Component: Memo
  }
];

export default routes;
