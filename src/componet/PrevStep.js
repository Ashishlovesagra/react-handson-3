import React from "react";
import { Component } from "react";
import './style.css';

export class View extends Component {
  render() {
    return (
      <>
        <div className="viewdata">
          <h1 id="header">EMPLOYEE FEEDBACK DATA</h1>
          <br />
          <div id="datas">
            {this.props.viewdata.map((value, index) => {
              return (
                <p id="detail">
                 <span className="text">Name : {value.Name} | department : {value.Department} | rate : {value.Rate}</span>
                </p>
              );
            })}
          </div>
          <div className="backbtn">
            <button id="back" onClick={() => this.props.backbtn()}>Go Back</button>
          </div>
        </div>
      </>
    );
  }
}

export default View;
