import React from "react";

const BasicUseState = React.lazy(() => import("./basic_state/BasicUseState"));
const ComponentMount = React.lazy(() =>
  import("./component_mount/ComponentMount")
);

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
  }
];

export default routes;
