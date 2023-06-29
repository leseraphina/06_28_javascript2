const todo = {
  userId:1,
  title:'title',
  body:'text 내용1'
}
fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',
  body:JSON.stringify(todo)
})
.then(response => response.text())
.then(result => console.log(result))