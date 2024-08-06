function TaskList() {
  const tasks = [
    { id: "A", title: "Do the laundry" },
    { id: "B", title: "Clean the house" },
    { id: "C", title: "Buy groceries" },
  ];

  return (
    <div>
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <h2>No tasks available</h2>
      ) : (
        <h2> Display the list of tasks</h2>
      )}
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.id}: {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
