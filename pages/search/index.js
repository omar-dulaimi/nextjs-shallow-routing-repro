import React from 'react';
import Router, { withRouter } from 'next/router';

class SearchPage extends React.Component {
  constructor(props) {
    try {
      super(props);
    } catch (e) {
      console.log(
        "pages => search => index.js => SearchPage -> constructor -> e",
        e
      );
    }
  }

  componentDidMount() {}

  render() {
    return (
      <button
        type="button"
        onClick={() => {
          Router.push(
            "/search/[type]/[cat]/[area]?counter=10",
            "/search/foo/bar/baz?counter=10",
            { shallow: true }
          );
        }}
      >
        go
      </button>
    );
  }
}

export default withRouter(SearchPage);
