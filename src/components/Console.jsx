control console and display console is used in the console 
console will have the state -> initialized to []


cobtrol console contains the control buttons and the console defines the event handlers and pass it dow n to control console as part of props
you are passing the state to display console so if the state changes, then it will trigger a rerender


create Console component 
initialize state using useState hook
define event handlers for both capsule and the other button 
pass the event handlers as props to ControlConsole 
pass state as props to DisplayConsole
const console 