fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((prev, cur) => {
        cur.completed ? prev : prev.push({
          userId: cur.userId,
          title: cur.title
        })
        return prev
     }, [])
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });