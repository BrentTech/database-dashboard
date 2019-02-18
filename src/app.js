import React from "react";
import Q from "./lib/subscriber.js";
import "./design/reset.scss";
import "./design/styling.scss";

const database = new Q("database");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
    };

    database.subscribe("create", payload => {
      this.updateActions(payload);
    });
    database.subscribe("update", payload => {
      this.updateActions(payload);
    });
    database.subscribe("delete", payload => {
      this.updateActions(payload);
    });
    database.subscribe("read", payload => {
      this.updateActions(payload);
    });
  }

  updateActions = data => {
    this.setState({ actions: [...this.state.actions, data] });
  };

  render() {
    return (
      <>
        <h1>Database Actions</h1>
        <section>
          <ul>
            {this.state.actions.map((action, idx) => (
              <li key={idx}>
                {action.collection} : {action.name} :{" "}
                <span className={action.action}>{action.action}</span> :{" "}
                {action._id}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default App;
