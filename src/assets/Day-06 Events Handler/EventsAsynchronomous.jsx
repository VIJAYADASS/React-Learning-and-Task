function EventsAsync() {
  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("You clicked here ");
  };
  const handleClick1 = async (name) => {
    console.log(`${name} Once more you clicked here`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  const handleClick3 = async (e) => {
    console.log(e);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Button three was clicked, async operation complete");
  };

  return (
    <div className="btnContainer" onDoubleClick={handleClick}>
      <h3 className="name head">Hello EventsAsync</h3>

      {/* 1. handleClick: This function is now asynchronous (async).
        It includes a simulated asynchronous operation using await with setTimeout. The function waits for 2 seconds before logging the final message. */}
      <button className="events" onClick={handleClick}>
        EventsAsync one
      </button>

      {/* handleClick1: lso asynchronous, this function waits for 1 second before logging the message.
        It demonstrates passing a parameter and waiting before continuing. */}
      <button className="events" onClick={() => handleClick1("Hi,There")}>
        EventsAsync Two
      </button>

      {/* handleClick3: This captures the event object e and logs it immediately.
        Then it waits for 0.5 seconds (500 milliseconds) before completing the operation. */}
      <button className="events" onClick={(e) => handleClick3(e)}>
        EventsAsync Three
      </button>
    </div>
  );
}

export default EventsAsync;

//When to Use Async Functions in Event Handlers:
// Async functions are useful in event handlers when you need to:

// 1. Fetch data from an API.
// 2. Perform a time-consuming task (e.g., loading data).
// 3. Await the completion of a promise or any other asynchronous operation.
