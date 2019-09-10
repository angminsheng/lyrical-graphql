import React, { Component } from "react";

export default class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h5>Create a new song</h5>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Song title:</label>
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
