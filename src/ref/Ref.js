import React, { useState } from "react";
import Page from "../common/Page";
import { fakeSave } from "../common/util";
import useToggle from "../hooks/useToggle";

class FormUsingClass extends React.Component {
  state = { firstName: "John", lastName: "Doe", isSaving: false };
  saveDisposable = null;

  _save = () => {
    const { firstName, lastName } = this.state;
    this.saveDisposable && this.saveDisposable.dispose();
    this.setState({ isSaving: true });
    this.saveDisposable = fakeSave({ firstName, lastName }, response => {
      console.log(response);
      this.setState({ isSaving: false });
    });
  };

  render() {
    return (
      <>
        <p>
          Hi {this.state.firstName}, {this.state.lastName}
        </p>
        <div className="row">
          <div className="col-sm">
            <input
              className="form-control"
              value={this.state.firstName}
              placeholder="First name"
              onChange={e => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className="col-sm">
            <input
              className="form-control"
              value={this.state.lastName}
              placeholder="Last name"
              onChange={e => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="col-sm">
            <button
              disabled={this.state.isSaving}
              type="submit"
              className="btn btn-primary"
              onClick={this._save}
            >
              {this.state.isSaving ? (
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
}

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [isSaving, setIsSaving] = useState(false);

  const save = () => {
    setIsSaving(true);
    fakeSave({ firstName, lastName }, response => {
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

export default function() {
  const render = useToggle();
  const renderFunctional = useToggle();
  return (
    <Page title="Use Ref">
      {render(<FormUsingClass />)}
      <hr />
      {renderFunctional(<Form />)}
    </Page>
  );
}
