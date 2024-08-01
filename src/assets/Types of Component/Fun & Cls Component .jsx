import { Component } from "react";
// In a functional component, you can break down the table into smaller components,
//  such as TableHeader and TableBody, to keep the code modular and reusable. Example Below

// const TableHeader = () => {
//   //Function Component
//   return (
//     <thead>
//       <tr>
//         <th>Company</th>
//         <th>Role</th>
//       </tr>
//     </thead>
//   );
// };

// const TableBody = () => {
//   //Function Component
//   return (
//     <tbody>
//       <tr>
//         <td>TCS</td>
//         <td>Software Developer</td>
//       </tr>
//       <tr>
//         <td>Accenture</td>
//         <td>Web Developer</td>
//       </tr>
//       <tr>
//         <td>IBM</td>
//         <td>UI/UX </td>
//       </tr>
//     </tbody>
//   );
// };

//  In a class component, you use the render method to return JSX.
// You can directly include the JSX for the table structure (header, body, etc.) inside this method.Example Below
class Table extends Component {
  //Class Component
  // The Table class is defined & It extends Component, making it a React component.

  render() {
    // The render method returns JSX that represents a table structure. <table>
    return (
      <table>
        {/* <TableHeader />
        <TableBody /> */}
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
            <td>Web Developer</td>
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

export default Table;
