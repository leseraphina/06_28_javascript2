// fetch('https://jsonplaceholder.typicode.com/posts123/1')
// .then(response => response.text(),(error) => {console.log(error)})
// .then(result =>{
//   console.log('welcome');
//   console.log(result)
// })
// .then(() => console.log('작업이 끝났나요'))

fetch('https://jsonplacehoasdalder.typicode.com/posts/1')
.then(response => response.text())
.then(result => {
  console.log('welcome');
  console.log(result)
})
.catch(() => {console.log('error가 발생되었습니다.')})
.finally(() => {console.log('작업 마감되었습니다.')})