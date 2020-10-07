fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoForUser = json.reduce((prev, cur) => {
      if (cur.completed) {
        if (! prev[cur.userId]) {
          prev[cur.userId] = 1
        } else { 
          prev[cur.userId] += 1  
        }
      }
      return prev
    }, {})
    console.log(todoForUser);
  })
  .catch(function (err) {
    console.log(err);
  });
