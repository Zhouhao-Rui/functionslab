fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const totalCompleted = json.reduce((prev, cur) =>
      cur.completed ? prev + 1 : prev, 0
    )
    console.log(totalCompleted)
  })
  .catch(function (err) {
    console.log(err);
  });