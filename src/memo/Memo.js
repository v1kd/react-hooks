import React, { useState, useMemo, useCallback } from "react";
import Page from "../common/Page";

// array of values and onClick
class ExpensiveComponent extends React.PureComponent {
  render() {
    console.log("rendering expensive component");
    // expensive computation
    return (
      <div className="list-group">
        {this.props.values.map((value, i) => (
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.props.onClick(value);
            }}
            target="_blank"
            key={i}
            className="list-group-item list-group-item-action"
          >
            {value}
          </a>
        ))}
      </div>
    );
  }
}

class MemoUsingClass extends React.Component {
  state = { selected: 1 };
  values = [1, 2, 3, 4];

  onClick = value => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <>
        <h5>Selected: {this.state.selected}</h5>
        <ExpensiveComponent values={this.values} onClick={this.onClick} />
      </>
    );
  }
}

/*

1. useCallback
2. useMemo

*/

function Memo() {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <h5>Selected: {selected}</h5>
      <ExpensiveComponent
        values={[1, 2, 3, 4]}
        onClick={value => setSelected(value)}
      />
    </>
  );
}

export default function() {
  return (
    <Page title="Memoizing">
      <MemoUsingClass />
      <hr />
      <Memo />
    </Page>
  );
}
