import React, { useState, useEffect } from "react";
import Page from "../common/Page";
import { subscribeStatus } from "../common/util";
import useToggle from "../hooks/useToggle";

class SubscribeStatusUsingClass extends React.Component {
  state = {
    isOnline: false
  };
  subscription = null;

  componentDidMount() {
    this.subscription = subscribeStatus(this.props.user, isOnline =>
      this.setState({
        isOnline
      })
    );
  }

  componentWillUnmount() {
    this.subscription && this.subscription.cancel();
  }

  render() {
    return (
      <p>
        {this.props.user}'s status{" "}
        {this.state.isOnline ? <Online /> : <Offline />}
      </p>
    );
  }
}

/*

useEffect

*/

function SubscribeStatus(props) {
  const isOnline = true;
  return (
    <p>
      {props.user}'s status {isOnline ? <Online /> : <Offline />}
    </p>
  );
}

export default function() {
  const renderSolution = useToggle(false);
  const renderChangingUser = useToggle(false);
  return (
    <Page title="Component mount/unmount">
      <SubscribeStatusUsingClass user="Hary" />
      <hr />
      <SubscribeStatus user="Tom" />
      <hr />
      <h6>Solution</h6>
      {renderSolution(<SubscribeStatusSolution user="John" />)}
      <hr />
      <h6>Changing user</h6>
      {renderChangingUser(<SubscribeChangingUser />)}
    </Page>
  );
}

function Online() {
  return <span className="badge badge-success">Online</span>;
}

function Offline() {
  return <span className="badge badge-danger">Offline</span>;
}

function SubscribeChangingUser() {
  const [name, setName] = useState("Victor");
  return (
    <>
      <div style={{ paddingBottom: "20px" }}>
        <input
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <SubscribeStatusSolution user={name} />
    </>
  );
}

function SubscribeStatusSolution(props) {
  const [isOnline, setOnline] = useState(false);
  useEffect(() => {
    const subscription = subscribeStatus(props.user, isOnline =>
      setOnline(isOnline)
    );
    return () => subscription.cancel();
  }, [props.user]);
  return (
    <p>
      {props.user}'s status {isOnline ? <Online /> : <Offline />}
    </p>
  );
}
