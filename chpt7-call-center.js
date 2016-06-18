/* A call center has 3 types of employees: respondent, manager, and director. An incoming call goes to the first available employee in this same order. Design the classes / data structures for the call center and include a dispatchCall method that assigns to first available employee. */

// Create a call structure that will take the customer name, the issue, and whether the issue is resolved on the call
function Call() {
  
  this.customer = null;
  this.issue = null;
  this.resolved = false;
}
// Parent class for all employees
function Employee(name, id) {

  this.name = name;
  this.id = id;
  this.available = true; 
}
// All employees can answer calls and take down information to populate the call properties
Employee.prototype.answerCall = function() {
    
  var newCall = new Call();

  console.log("Hello, my name is " + this.name + ".");

  newCall.customer = prompt("Who am I speaking with?");
  newCall.issue = prompt("What can I help you with?");
  
  // First step is to check the knowledge base for answers
  if (this.checkKnowledgeBase(newCall)) {
    console.log("Thanks for calling. Let us know if there is anything else to help with.");
  // If we can't answer right away, employee must investigate and is tied up
  } else {
    this.available = false;
    console.log("Based on the number of customers, I should be able to get back to you in " + this.queue.length * 5 + " minutes.");
    }
  // Return the call result
  return this.available;
};

Employee.prototype.checkKnowledgeBase = function(currCase) {
    
  switch(currCase.issue) {
    // Listing out some common issues 
    case currCase.issue.indexOf("login") : 

      console.log("Sure I can help you you login to your account.");
      currCase.resolved = true;
      break;

    case currCase.issue.indexOf("billing") :

      console.log("Yes, let me connect you with a billing representative.");
      currCase.resolved = true;
      break;

    case currCase.issue.indexOf("order") :

      console.log("Absolutely, I'll check on your order status right now.");
      currCase.resolved = true;
      break;

    case currCase.issue.indexOf("refund") :

      console.log("I'm sorry it's not working out. We'll issue a full refund.");
      currCase.resolved = true;
      break;

    default : 

      console.log("Thanks, it looks like I'll need to research your question further. Let me escalate to the right person and get back to you shortly.");
      break;
  }
  return currCase;
};

// Child objects inherit from the employee parent
function Respondent(name, id) {
  
  Employee.call(this, name, id);
  this.role = "Representative";
}

Respondent.prototype = Object.create(Employee.prototype);

function Manager(name, id) {
  
  Employee.call(this, name, id);
  this.role = "Team Lead"; 
}

Manager.prototype = Object.create(Employee.prototype);

function Director(name, id) {

  Employee.call(this, name, id);
  this.role = "Department Head"; 
}

Director.prototype = Object.create(Employee.prototype);

// Initialize a team with an employee list and call queue
function Team() {
  
  this.department = "Customer Service";
  this.employees = [];
  this.callQueue = [];
  // More flexible to have divisions for different employee types, but all pushed to single array for simplicity
  this.employees.push(new Respondent("Joe", "2345"), new Respondent("Jill", "4567"), new Respondent("Jack", "9876"), new Manager("Jason", "7654"), new Director("Julie", "1234"));
  // Track employees who are free
  this.employeesOccupied = 0;
  
}

Team.prototype.newCall = function() {
  // Everyone is tied up!
  if (this.employeesOccupied >= this.employees.length) {
    console.log("Please hold, an employee will be with you shortly.");
  }  
  
  var currCall = this.employees[this.employeesOccupied].answerCall();
  // If we can't resolve immediately, push to our queue
  if (!currCall.resolved) {
    this.employeesOccupied++;
    this.callQueue.push(currCall);
  }
};

// This is just a start! More could be added. For example, a timer function to free up employees and a function to pull active cases from the queue.