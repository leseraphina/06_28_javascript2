fetch('https://jsonplaceholder.typicode.com/photos/4')
.then(respose => respose.text())
.then(result =>{
  const str = JSON.parse(result);
  // console.log(str.thumbnailUrl)
  document.write(
    `<img src="${str.thumbnailUrl}" alt="샘플">`
  )
})