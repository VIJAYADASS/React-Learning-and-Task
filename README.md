# React-Learning-and-Task
# Day 1

Create Two Components one is a Function Component and the other is a Class Component.
# Task: Creating Class and Functional Counter in React.
Objective: Create two React components: one using a class-based approach and the other using a functional approach. Both components should display a counter that can be incremented by clicking a button.
# Requirements:
1. Create a class component called ClassCounter.
2. Create a functional component called FunctionCounter.
3. Both components should display a counter and a button to increment the counter.
4. Use state management to handle the counter value.
5. Ensure the components are reusable and can be imported into another Component.

# Day 2

Passing and Displaying Props in React.
#Task: Create props using Parent and Child components in React.
Objective: Create a parent component that passes data as props to a child component. The child component should display the received props in a structured format.
# Requirements:
1. Create a parent component called ParentComponent.
2. Create a child component called ChildComponent.
3. The ParentComponent should pass the following data as props to the ChildComponent.
   1. Name,
   2. Age,
   3. Email
5. The ChildComponent should display the received data in a readable format.

# Day-03

Create the use state hook
# Task:
Create a simple counter application using React's useState hook. The application should display the current count and have three buttons: one to increment the count, one to decrease the count, and one to reset the count to zero. Implement the functionality so that clicking each button updates the displayed count appropriately.

Requirements:
1. Display the current count.
2. Provide three buttons:
   1. Increment,
   2. Decrement,
   3. Reset.
4. Clicking the Increment button should increase the count by 1.
5. Clicking the Decrement button should decrease the count by 1.
6. Clicking the Reset button should set the count back to 0.

# Day-04
Learned the use of effects hook in React.
# Task one:
Create a simple React component that fetches data from an API when the component mounts. Display the fetched data in a list.

# Requirements:
1. Use the use effect hook to perform the data fetching when the component mounts.
2. Use the use state hook to store the fetched data.
3. Display the data in a list format.
4. Ensure proper error handling if the fetch request fails.
API Endpoint: You can use a public API endpoint like https://jsonplaceholder.typicode.com/posts to fetch data.

# Task Two:
Countdown Timer using use effect
Create a simple countdown timer component in React. The timer should start from a given number of seconds and count down to zero. When the timer reaches zero, display a message "Time's up!.

# Requirements:
1. Use the use state hook to manage the timer state.
2. Use the use effect hook to handle the countdown logic.
3. The countdown should decrease by 1 every second.
4. Display the remaining time.
5. When the timer reaches zero, display "Time's up!".
# Bonus:
Add a start and reset button to control the timer.

# Day-05 
Conditional Statement 
Conditional rendering and ternary operator usage

# Task for Conditional Statement
Add conditional statements and ternary operators using props in Parent and Child components. 

List and Key Components.
Create a dummy product list with an array and use keys for list items.

# Task 1 for List and Key.
Create a React component named TaskList that displays a list of tasks. Use the following array of tasks: 
Your component should display each task in an unordered list (ul), 
and each task should be wrapped in a list item (li). 
Use the id of each task as the key prop for each li element.

# Task 2 for List and Key.
Update the TaskList component to conditionally display a message when there are no tasks. 
If the tasks array is empty, display the message "No tasks available". Otherwise, display the list of tasks.

# Day-06 
Events Handles
Using a combination of asynchronous and synchronous functions as event handlers for the `onClick` events of three different buttons. 

Asynchronous Operations: 
All three functions (handleClick, handleClick1, handleClick3) include asynchronous operations due to the async keyword and the await usage.

Synchronous Operations: 
The initial logs and operations that occur before waiting in each function are synchronous.
 
 
