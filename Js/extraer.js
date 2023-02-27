function createNode(element) {
  return document.createElement(element);}
function append(parent, el) {
return parent.appendChild(el);}
const ul = document.getElementById('authors');
ul.style.cssText = "color:withe;letter-spacing:2px;font-size:15PX";
const url = 'https://randomuser.me/api/?results=1';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let authors = data.results;
return authors.map(function(author) {
  let li = createNode('li');
  let img = createNode('img');
  img.style = "padding-top:3px; box-shadow: 8px 8px 8px rgba(20,20,20,0.5)";
  let span = createNode('span');
  let h1 = createNode('h1');
  let h4 = createNode('h4');
  h4.style.cssText = "font-size:24PX;color: silver;text-transform: uppercase; padding-top:8px;"
  let h3 = createNode(`h3`)
  img.src = author.picture.large ;
  h4.innerHTML = ` ${author.name.first}<br/> ${author.name.last}`;
  h3.innerHTML = `<br/>Dirección:<br/> ${author.location.street.name} ${author.location.street.number} 
  <br/> Ciudad:<br/> ${author.location.city} 
  <br/> Lugar de Ncimiento: <br/> ${author.location.country} 
  <br/>Sexo: ${author.gender} <br/> Edad: ${author.dob.age}<br/> E-mail:<br/> ${author.email}`;
  append(li, img);
  append(li, span);
  append(li, h1);
  append(li, h4);
  append(li, span);
  append(ul, li);
  append(li, h3)})})
.catch(function(error) {
console.log(error);});


