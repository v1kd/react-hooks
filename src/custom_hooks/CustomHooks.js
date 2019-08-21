import React, { useState, useCallback, useRef, useEffect } from "react";
import Page from "../common/Page";
import { fakeSave } from "../common/util";
import useToggle from "../hooks/useToggle";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [isSaving, setIsSaving] = useState(false);

  const saveWithDispose = useSave();

  const save = () => {
    setIsSaving(true);
    saveWithDispose({ firstName, lastName }, response => {
      console.log(response);
      setIsSaving(false);
    });
  };

  return (
    <>
      <p>
        Hi {firstName}, {lastName}
      </p>
      <div className="row">
        <div className="col-sm">
          <input
            className="form-control"
            value={firstName}
            placeholder="First name"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            value={lastName}
            placeholder="Last name"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button
            disabled={isSaving}
            type="submit"
            className="btn btn-primary"
            onClick={save}
          >
            {isSaving ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Saving...
              </>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </>
  );
}

function useSave() {
  const saveDisposable = useRef(null);

  useEffect(() => {
    return () => saveDisposable.current && saveDisposable.current.dispose();
  }, []);

  return useCallback((name, callback) => {
    saveDisposable.current && saveDisposable.current.dispose();
    saveDisposable.current = fakeSave(name, callback);
  }, []);
}

export default function() {
  const render = useToggle();
  return <Page title="Custom hooks">{render(<Form />)}</Page>;
}
