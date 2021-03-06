document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <title>Todo List</title>
</head>
<body>
  <nav class="bg-primary">
      <h1 class="p-2">Todo List App</h1>
  </nav>
  
  <main>
    <div class="container grid-container">
      <div class="projects-container">
        <h1>PROJECTS</h1>

        <form autocomplete="off" class="m-2" id="createProjectForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="project name" placeholder="Enter project name" required>
          </div>
          <button class="btn btn-success" type="submit" id="createProjectBtn">CREATE PROJECT</button>
        </form>

        <div id="all-projects">

        </div>
      </div>
      <div class="todos-container">
        <h1>TODOS</h1>
        <div id="todo-form"></div>

        <div class="todos" id="projectTodos"></div>

      </div>
      <div class="todo-details">
        <h1>TODO DETAILS</h1>
        <div id="todo-detail"></div>
      </div>
    </div>
  </main>

  <script src="main.js"></script>

</body>
</html>
`;
export default document;