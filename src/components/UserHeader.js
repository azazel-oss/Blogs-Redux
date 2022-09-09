import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    if (!this.props.user) return null;
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find((ele) => ele.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
