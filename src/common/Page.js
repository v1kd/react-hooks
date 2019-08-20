import React, { useEffect } from "react";

function Page(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return <div className="container">{props.children}</div>;
}

export default Page;
