import React, { Component } from "react";

export default class TodoInput extends Component {
  // get info from input and submit it
  getInfoForm = event => {
    event.preventDefault();
    const { _inpInfo } = this.refs;

    _inpInfo.value !== ""
      ? this.props.passeFunc(_inpInfo.value)
      : alert("need some text");

    // this.props.passeFunc(_inpInfo.value);
    // console.log(_inpInfo.value);
  };

  //change input
  changeInnerText = event => {
    event.preventDefault();
    // this.props.passEditFnc("asd");
  };

  render() {
    // const { passedSingleStr } = this.props;
    const { handleChangeFnc } = this.props;
    const { dataFromValue } = this.props;
    const { passedEditBtn } = this.props;
    // _inpInfo.value = passedSingleStr;
    // _inpInfo.value = passedSingleStr[0];
    // console.log("passedSingleStr", passedSingleStr);

    return (
      <div className="card card-body my-3">
        <form onSubmit={this.getInfoForm}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              value={dataFromValue}
              onChange={handleChangeFnc}
              ref="_inpInfo"
              type="text"
              className="form-control"
              placeholder="add to list"
            />
          </div>
          <button
            type="submit"
            className={
              passedEditBtn
                ? "btn btn-block btn-primary mt-3"
                : "btn btn-block btn-success mt-3"
            }
          >
            {passedEditBtn ? "add item" : "edit your task"}
          </button>
        </form>
      </div>
    );
  }
}
