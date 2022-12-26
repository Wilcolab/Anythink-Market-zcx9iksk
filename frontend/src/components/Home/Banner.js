import React from "react";
import { GET_CLICK, GET_UNCLICK } from "../../constants/actionTypes";
import logo from "../../imgs/logo.png";
import TitleSearch from "./TitleSearch";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  onClick: () =>
    dispatch({ type: GET_CLICK }),
  onUnclick: () =>
    dispatch({ type: GET_UNCLICK }),
});

const mapStateToProps = (state) => {
  return {
    clicked: state.getClick.clicked,
  };
};

const Banner = (props) => {

  const clickHandler = (event) => {
    event.preventDefault();
    if (props.clicked) props.onUnclick();
    else props.onClick();
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part" onClick={clickHandler}>get</span>
          <TitleSearch clicked={props.clicked} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
