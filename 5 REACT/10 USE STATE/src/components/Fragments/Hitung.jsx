import React from "react";

class Hitung extends React.Component {
  constructor(P) {
    super(P);
    this.state = {
      hitung: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.hitung}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ hitung: this.state.hitung + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default Hitung;
