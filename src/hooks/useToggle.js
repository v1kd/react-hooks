import React, { useState } from "react";

function useToggle() {
  const [show, setShow] = useState(false);
  const button = (
    <button
      type="button"
      className="btn btn-light"
      onClick={() => setShow(show => !show)}
    >
      {show ? "Hide" : "Show"}
    </button>
  );
  return node => (
    <div>
      {button}
      {show ? <div style={{ marginTop: "20px" }}>{node}</div> : null}
    </div>
  );
}

export default useToggle;
