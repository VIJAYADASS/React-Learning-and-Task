//  In a class component, you use the render method to return JSX.
// You can directly include the JSX for the table structure (header, body, etc.) inside this method.Example Below
import { Component } from "react";
class ClassComp extends Component {
  //Class Component
  // The Table class is defined & It extends Component, making it a React component.
  render() {
    // The render method returns JSX that represents a table structure. <table>
    return (
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TCS</td>
            <td>Software Developer</td>
          </tr>
          <tr>
            <td>Accenture</td>
            <td>Testing</td>
          </tr>
          <tr>
            <td>IBM</td>
            <td>UI/UX </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ClassComp;
