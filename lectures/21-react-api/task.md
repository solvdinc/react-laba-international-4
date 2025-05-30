# React API.

#### Improve your application using the design and code from the previous [homework](../20-react-hooks/task.md)

## Objective:

### Build a to-do list application using custom hooks for specific functionality, implement context for state management with useContext, utilize useRef for DOM manipulation, apply useReducer for managing complex state, implement basic error handling, and utilize useMemo and useCallback hooks for optimization.

### Requirements:

Add a button to clear all completed to-dos. This button should remove any to-dos that have been marked as completed.

- **useRef**:
  Use useRef to focus the input field after adding a new to-do.
- **useReducer with useContext**:
  Implement a useReducer to manage the to-do list state. This can be an alternative to useState.
  Create a context for the to-do list and use it to manage the state across components.
- **Simple Error Handling**:
  Notify users if there’s a problem adding, updating, or deleting a to-do item.
- **Custom Hooks**:
  Create at least three custom hooks with specific functionality. For example, you can create the following:useValidation hook to validate input fields.
  Any other hooks that you think would add to the application.
- **Memoization and Optimization**:
  Implement useMemo and useCallback hooks to optimize performance where applicable. For instance, consider memoizing computed values or preventing unnecessary re-rendering of components.
