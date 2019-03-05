import React, { Component } from "react";
import Item from "./Item";

export default class TodoList extends Component {
  deleteItem = arg => {
    console.log("hi from trash --->>>", arg);
    this.props.passDelFunc(arg);
  };

  changeItem = arg => {
    this.props.passChangeItemFnc(arg);
  };

  render() {
    const { passedInfo, clearList } = this.props;

    console.log("from todolist arr!!!!!!!", passedInfo);

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {passedInfo.map((nestedItem, indArr) => {
          return (
            <Item
              key={indArr}
              id={indArr}
              passedItem={nestedItem}
              sechandFunc={this.deleteItem}
              secFncChangItem={this.changeItem}
            />
          );
        })}
        <button
          onClick={clearList}
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
        >
          clear
        </button>
      </ul>
    );
  }
}
