import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  render() {
    const { passedItem, id } = this.props;
    const deleteItem = this.props.sechandFunc;
    const changeValueItem = this.props.secFncChangItem;
    console.log("->>", typeof passedItem);
    console.log("->>>", passedItem);

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>
          {passedItem === "" ? "its created, but stll is empty" : passedItem}
        </h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i onClick={() => changeValueItem(id)} className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger">
            <i onClick={() => deleteItem(id)} className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  passedItem: PropTypes.string.isRequired
  // passedItem: (props, propName) =>
  //   typeof props[propName] !== "number"
  //     ? new Error("A AAAAAA passedItem must be a number")
  //     : console.log("wtd", "propName--<<", propName)
};

Item.defaultProps = {
  passedItem: "test str"
};
