# React Hooks.

## Homework 1: React Hooks Task - To-Do List with CRUD Operations

### Objective:

##### Build a to-do list application using various React hooks to practice their usage and implement CRUD operations.

### Requirements:

- Create Layout from Figma:
  Create the layout for the to-do list application using the provided Figma file: [Figma To-Do App Layout](<https://www.figma.com/file/EcjPvAFY1mlpxE3szzjUbS/todo-app-(Community)?type=design&node-id=0-1&mode=design>).
- **useState**:
  Implement a state to manage the list of to-do items.
  Provide an input field for adding new to-dos.
- **useEffect**:
  Use useEffect to save the to-do list in localStorage whenever it changes.
  When the component mounts, retrieve the list from localStorage (if available).
- **CRUD Operations**:
  Implement Create, Read, Update, and Delete operations for the to-do items.
  - Create: - Allow users to add new to-dos.
    - Handle cases where adding a to-do fails, such as:
      - Duplicate To-Do Item 
      - Invalid Characters in To-Do Name
      - Exceeding Maximum To-Do Length
      - You can add any extra validation (optional)
  - Read: Display the list of to-dos with options to mark them as completed.
  - Update: - Provide an option to edit existing to-dos.
    - Handle cases where updating a to-do fails, such as:
      - The same as when you create to-dos.
  - Delete: Allow users to remove to-dos.
