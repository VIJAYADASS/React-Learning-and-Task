// Noob

function User(Props) {
  return (
    <div>
      <h2 className="props">Name :{Props.Name}</h2>
      <h2 className="props">Age :{Props.Age}</h2>
      <h2 className="props">Phone Number: {Props.PhoneNumber}</h2>
      <h2 className="props">Email : {Props.Email}</h2>
    </div>
  );
}

export default User;

// Advance Level

// function UserId({ name, age, phno, email }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{age}</h2>
//       <h2>{phno}</h2>
//       <h2>{email}</h2>
//     </div>
//   );
// }

// export default UserId;

// props in React can be thought of as similar to JavaScript function methods, as both are used to pass information and functions.

// When using props, you transfer data to components, and this data is sent as a JavaScript object.
// You can use props in three ways: with regular props (`props.name`), using destructuring, and using the spread operator."
