import React, { Component } from "react";


export class AddReview extends Component {
  state = {
    text: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const now = new Date();
    // this.props.submitReviewRequested(
    //   this.props.movieId,
    //   this.state.text,
    //   this.props.username,
    //   now.toISOString(),
    // );
    this.setState({
      text: ""
    });
  };

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div className="reviews__add">
        <form onSubmit={this.onSubmit} noValidate>
          <label>
            Write a review
            <textarea onChange={this.onChange} value={this.state.text} />
          </label>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
