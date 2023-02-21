import React, { Component } from "react";
import { View } from "./PrevStep";
import "./style.css";

class Form extends Component {
  state = { Name: "", Department: "", Rate: "", user: [], viewform: true };
  handleOnSubmit(event) {
    event.preventDefault();
    const obj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rate: this.state.Rate,
      Viewform: this.state.viewform,
    };

    const tArr = this.state.user;
    tArr.push(obj);
    this.setState({ user: tArr, viewform: !this.state.viewform });
  }
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  goback = () => {
    this.setState({
      viewform: !this.state.viewform,
    });
  };
  render() {
    return (
      <>
        {this.state.viewform ? (
        <div className="main-container">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div className="container">
          <form>
            <div>
             <label htmlFor="Name">Name : </label>
             <input className="input" name="Name" value={this.state.Name} onChange={this.handleOnChange} required/>
            </div>
            <div>
             <label htmlFor="Department">Department : </label>
             <input className="input" name="Department" value={this.state.Department} onChange={this.handleOnChange} required />
            </div>
            <div>
             <label htmlFor="Rate">Rating : </label>
             <input className="input" name="Rate" value={this.state.Rate} onChange={this.handleOnChange} required/>
            </div>
            <div>
             <button className="btn" onClick={this.handleOnSubmit.bind(this)}>Submit</button>
            </div>
          </form>
          </div>
          </div>) : 
          (<View viewdata={this.state.user} backbtn={this.goback} />)}
      </>
    );
  }
}

export default Form;
