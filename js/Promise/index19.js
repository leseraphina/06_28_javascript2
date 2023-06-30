async function main(){
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const reult = await response.text();
const data = await JSON.parse(reult);
// console.log(data[1].address.geo.lat)
document.write(`<p>${data[1].address.geo.lat}</p>`)
}

main();

//  28 - 38