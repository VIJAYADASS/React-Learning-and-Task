function EventsSync() {
  const handleClick = () => {
    console.log("You clicked here ");
  };
  const handleClick1 = (name) => {
    console.log(`${name} Once more you clicked here`);
  };
  const handleClick3 = (e) => {
    console.log(e);
  };

  return (
    <div className="btnContainer" onDoubleClick={handleClick}>
      <h3 className="name head">Hello EventsSync</h3>

      {/* First Button (handleClick): 
      This is a synchronous function that logs a message to the console when the button is clicked. */}
      <button className="events" onClick={handleClick}>
        EventsSync one
      </button>

      {/* Second Button (handleClick1): 
      This is a synchronous function that takes a parameter (name) and logs a message to the console including that parameter when the button is clicked. */}
      <button className="events" onClick={() => handleClick1("Hi,There")}>
        EventsSync Two
      </button>

      {/* Third Button (handleClick3): 
      This is a synchronous function that logs the event object to the console when the button is clicked. */}
      <button className="events" onClick={(e) => handleClick3(e)}>
        EventsSync Three
      </button>
    </div>
  );
}

export default EventsSync;
