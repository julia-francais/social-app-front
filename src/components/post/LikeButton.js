import React, { Component } from "react";
import MyButton from "../../util/MyButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//Redux
import { connect } from "react-redux";
import { likePost, unlikePost } from "../../redux/actions/dataActions";

export class LikeButton extends Component {
  likedPost = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(like => like.postId === this.props.postId)
    )
      return true;
    else return false;
  };

  likePost = () => {
    this.props.likePost(this.props.postId);
  };

  unlikePost = () => {
    console.log("unlikePost");

    this.props.unlikePost(this.props.postId);
  };
  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder />
        </MyButton>
      </Link>
    ) : this.likedPost() ? (
      <MyButton tip="Undo Like" onClick={this.unlikePost}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likePost}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likePost,
  unlikePost
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
