function ChildComponent(Props) {
  return (
    <div>
      <h2 className="parent">Name :{Props.Name}</h2>
      <h2 className="parent">Age :{Props.Age}</h2>
      <h2 className="parent">Email : {Props.Email}</h2>
    </div>
  );
}

export default ChildComponent;
