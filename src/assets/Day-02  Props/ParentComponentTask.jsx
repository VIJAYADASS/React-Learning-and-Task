import ChildComponent from "./ChildComponentTask";

function ParentComponent() {
  const UserData = {
    Name: "Alice Johnson",
    Age: 25,
    Email: "alice.johnson@example.com",
  };
  return (
    <>
      <ChildComponent {...UserData} />
    </>
  );
}

export default ParentComponent;
