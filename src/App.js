import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    data: "",
    dataArr: [],
    editBtn: true
  };

  //get info from input and set it into list
  sendCode = arg => {
    console.log(`this from passed func ${arg}`);
    let tempArr = [...this.state.dataArr];
    tempArr.push(arg);
    this.setState({
      data: "",
      dataArr: tempArr,
      editBtn: true
    });
  };

  handleChange = event => {
    let tempInf = event.target.value;
    this.setState({
      data: tempInf
    });
  };

  //delete item from a list
  deleteItemApp = arg => {
    console.log("hi fromdeleteItemApp<<<<--->>>", arg);
    let tempArr = [...this.state.dataArr];
    let filteredArr = tempArr.filter((tempArrItem, index) => {
      return index !== arg;
    });
    this.setState({
      dataArr: filteredArr
    });
  };

  //change item in the list
  changeItem = arg => {
    // console.log("hi from change>>>,", arg);
    let tempArr = [...this.state.dataArr];
    let singIt = tempArr[arg];
    console.log("!!!!!!!!!!singIt>>> from fnc", singIt);
    let filteredArr = tempArr.filter((tempArrItem, index) => {
      return index !== arg;
    });
    this.setState({
      data: singIt,
      dataArr: filteredArr,
      editBtn: false
    });
    // this.editItem(arg);
  };

  //edit item and pass filltered item into input field
  //using setState - when data updates then React renders it
  // with dataFromValue={this.state.data} in render() method
  // editItem = arg => {
  //   console.log("edited", this.state.dataArr);
  //   let tempArr = [...this.state.dataArr];
  //   let singleStr = tempArr.filter((item, index) => index === arg);
  //   console.log("singleStr from edited FNC", singleStr);
  //   this.setState({
  //     data: singleStr
  //   });
  // };

  //delete all items
  clearListFnc = () => {
    this.setState({
      data: "",
      dataArr: [],
      editBtn: true
    });
  };

  render() {
    console.log(`this from state ${this.state.data}`);
    console.log(`from state Arr--->>>>>>>>>>>>>>>>>>>> ${this.state.dataArr}`);
    const infoForList = this.state.dataArr;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center"> create task</h3>
            <TodoInput
              passeFunc={this.sendCode}
              passEditFnc={this.editItem}
              // passedSingleStr={this.state.data}
              handleChangeFnc={this.handleChange}
              passedEditBtn={this.state.editBtn}
              dataFromValue={this.state.data}
            />
            <TodoList
              passedInfo={infoForList}
              passDelFunc={this.deleteItemApp}
              passChangeItemFnc={this.changeItem}
              clearList={this.clearListFnc}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
