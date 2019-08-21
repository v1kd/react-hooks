import React from "react";

const BasicUseState = React.lazy(() => import("./basic_state/BasicUseState"));
const ComponentMount = React.lazy(() =>
  import("./component_mount/ComponentMount")
);
const Memo = React.lazy(() => import("./memo/Memo"));

const routes = [
  {
    path: "/1",
    title: "Basic state",
    Component: BasicUseState
  },
  {
    path: "/2",
    title: "Component mount/unmount",
    Component: ComponentMount
  },
  {
    path: "/3",
    title: "Memo",
    Component: Memo
  }
];

export default routes;
