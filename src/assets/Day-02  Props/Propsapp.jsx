import User from "./Props";

function Propsapp() {
  const UserData = {
    Name: "Alice Johnson",
    Age: 25,
    PhoneNumber: "987-654-3210",
    Email: "alice.johnson@example.com",
  };
  return (
    <>
      {/* Noob */}
      <User
        Name={UserData.Name}
        Age={UserData.Age}
        PhoneNumber={UserData.PhoneNumber}
        Email={UserData.Email}
      />

      {/* Advance Level */}
      {/* <User {...UserData} /> */}
    </>
  );
}

export default Propsapp;
