function canProjectsBeCompleted(projectsToComplete, listOfDependencies) {
  
  var graphOfProjects = buildTheGraph(projectsToComplete, listOfDependencies);
  return makeBuildOrder(graphOfProjects);
}

function buildTheGraph(projectsToComplete, listOfDependencies) {
  
  var graphOfProjects = {};

  projectsToComplete.forEach(function(project) {
    
    graphOfProjects[project] = [];
  });
  
  listOfDependencies.forEach(function(dependency) {
    
    graphOfProjects[dependency[0]].push(dependency[1]);
  });
  return graphOfProjects;
}

function makeBuildOrder(graphOfProjects) {
  
  var projectList = [];
  
  for (var project in graphOfProjects) {
    
    if (!graphOfProjects[project].length) {
      projectList.push(project);
      delete graphOfProjects[project];
    }
  }
  
  while (projectList.length) {
    
    var builtProject = projectList.pop();
    
    for (var project in graphOfProjects) {
      
      var findDependency = graphOfProjects[project].indexOf(builtProject);
      
      if (findDependency > -1) {
        graphOfProjects[project].splice(findDependency, 1);
        
        if (!graphOfProjects[project].length) {
          projectList.push(project);
          delete graphOfProjects[project];
        }
      }
    }
  }
  return getSizeOf(graphOfProjects) === 0;
}

function getSizeOf(object) {
  
  var size = 0;

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
}

var projects = ["a", "b", "c", "d", "e", "f"];
var dependencies = [["d", "a"], ["b", "f"], ["d", "b"], ["a", "f"], ["c", "d"]];

console.log(canProjectsBeCompleted(projects, dependencies));