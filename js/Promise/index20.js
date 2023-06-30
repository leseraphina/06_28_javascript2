async function main(){
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.text();
  const commet = await JSON.parse(data);
  // console.log(commet)
  const myComment = commet.filter(item => item.postId === 2);
  // console.log(myComment)
  for(let i in myComment){
    document.write(
      `
      <dl>
      <dt>${myComment[i].name}</dt>
      <dd>${myComment[i].email}</dd>
      <dd>${myComment[i].body}</dd>
      </dl>
      `
    )
  }
}




main();