fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter(item => {
       return item.completed == false
     }).map(item => {
       return {
         userId: item.userId,
         title: item.title
       }
     })
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });