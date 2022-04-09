import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: 0
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Calculator</h1>
        <h2 className="text-center">{this.state.answer}</h2>  
        <table>
          <tr>
            <td colSpan={3}><input type="button" className="btn btn-primary btn-lg" name="clear" value="Clear" /></td>
            <td><input type="button" className="btn btn-danger btn-lg" name="minus" value="/" /></td>
          </tr>
          <tr>
            <td><input type="button" className="btn btn-primary btn-lg" name="seven" value="7" /></td>
            <td><input type="button" className="btn btn-primary btn-lg" name="eight" value="8" /></td>
            <td><input type="button" className="btn btn-primary btn-lg" name="nine" value="9" /></td>
            <td><input type="button" className="btn btn-danger btn-lg" name="minus" value="-" /></td>
          </tr>
          <tr>
            <td><input type="button" className="btn btn-primary btn-lg" name="four" value="4" /></td>
            <td><input type="button" className="btn btn-primary btn-lg" name="five" value="5" /></td>
            <td><input type="button" className="btn btn-primary btn-lg" name="six" value="6" /></td>
            <td><input type="button" className="btn btn-danger btn-lg" name="plus" value="+" /></td>
          </tr>
          <tr>
            <td><input type="button" className="btn btn-primary btn-lg" name="one" value="1" /></td>
            <td><input type="button" className="btn btn-primary btn-lg" name="two" value="2" /></td>
            <td><input type="button" className="btn btn-primary btn-lg" name="three" value="3" /></td>
            <td><input type="button" className="btn btn-danger btn-lg" name="equals" value="=" /></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
