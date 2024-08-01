// In a functional component, you can break down the table into smaller components,
//  such as TableHeader and TableBody, to keep the code modular and reusable. Example Below
const TableHeader = () => {
  //Function Component
  return (
    <thead>
      <tr>
        <th>Company</th>
        <th>Role</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  //Function Component
  return (
    <tbody>
      <tr>
        <td>Congizant</td>
        <td>Fullstack Developer</td>
      </tr>
      <tr>
        <td>Infosys</td>
        <td>Data Analytics</td>
      </tr>
      <tr>
        <td>Wipro</td>
        <td>Web Developer</td>
      </tr>
    </tbody>
  );
};
function FunctionComponent() {
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
export default FunctionComponent;
