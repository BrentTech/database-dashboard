import React from "react";
import io from "socket.io-client";

const SERVER = process.env.REACT_APP_Q_SERVER;

/** Class representing a subscriber instance to the Queue. */
class Q {
  constructor(q) {
    this.q = q;
    this.sockets = [];
  }

  subscribe(event, callback) {
    this.sockets[event] = io.connect(`${SERVER}/${this.q}`);
    this.sockets[event].emit("subscribe", event, (err, status) => {
      if (err) {
        console.error(err);
      } else {
        console.log(status);
      }
    });
    this.sockets[event].on("trigger", callback);
  }
}

export default Q;
