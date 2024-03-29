import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// React test
// import Page from "./common/Page";

// function reconcile() {
//   ReactDOM.render(<TestHooks />, document.getElementById("react-example"));
// }

// function TestHooks() {
//   return (
//     <div style={{ paddingTop: "40px" }}>
//       <Page title="Test">
//         <Form />
//       </Page>
//     </div>
//   );
// }

// function useState(initialValue) {
//   return [initialValue, () => {}];
// }

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Doe");

//   return (
//     <>
//       <p>
//         Hi {firstName}, {lastName}
//       </p>
//       <div className="row">
//         <div className="col-sm">
//           <input
//             className="form-control"
//             value={firstName}
//             placeholder="First name"
//             onChange={e => setFirstName(e.target.value)}
//           />
//         </div>
//         <div className="col-sm">
//           <input
//             className="form-control"
//             value={lastName}
//             placeholder="Last name"
//             onChange={e => setLastName(e.target.value)}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
// reconcile();

// function useMaxString(initialValue, length) {
//   return [initialValue, () => {}];
// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
