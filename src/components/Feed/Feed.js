import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import getFeed from "../../graphql/query/getFeed";

class Feed extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      feed: [],
    };
  }

  componentDidMount = async () => {
    const feed = await getFeed();
    console.log("feed", feed);

    this.setState(feed);
  };

  render() {
    const { feed } = this.state;
    return feed && <div>bababa</div>;
  }
}

Feed.propTypes = {};

export default Feed;
