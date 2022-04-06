// console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';

// let a = document.querySelector('a');
// a.href = 'https://google.com';

console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

// insert a html element
let anchorElement = document.createElement('a');
anchorElement.href = 'https://google.com';
anchorElement.textContent = ' to access gogle.';

let firstParagraph = document.querySelector('.first-paragraph');
firstParagraph.append(anchorElement);
