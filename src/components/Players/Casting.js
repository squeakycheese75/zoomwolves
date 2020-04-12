import React from "react";
// import ReactDOM from "react-dom";

class Casting extends React.Component {
  constructor() {
    super();
    this.state = { data: { role: "waiting", desc: "......" } };
  }

  async componentDidMount() {
    const baseurl = process.env.REACT_APP_API_URL + "/api/characters/abcd";
    const response = await fetch(baseurl);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div>
        <ul>
          <h3>
            You've been cast as a <b>{this.state.data.role}</b>!
          </h3>
          <p>{this.state.data.desc}</p>
        </ul>
      </div>
    );
  }
}

export default Casting;
