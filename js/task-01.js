//Numarare categorii
const categories = document.querySelector('#categories');
console.log(`Number of categories:`, categories.children.length); //pt cerinta

//Elemente per categorie
//Elemente categorie 1
const elementFirstCategory = categories.firstElementChild; 
console.log(`Category:`,elementFirstCategory.firstElementChild.textContent);//pt cerinta
const numberOfFirst = elementFirstCategory.querySelector("ul");
console.log(`Elements:`, numberOfFirst.children.length);//pt cerinta

//Elemente categorie 2
const elementMidCategory = elementFirstCategory.nextElementSibling; 
console.log(`Category:`,elementMidCategory.firstElementChild.textContent);//pt cerinta
const numberOfMid = elementMidCategory.querySelector("ul");
console.log(`Elements:`, numberOfMid.children.length);  //pt cerinta

//Elemente categorie 3
const elementLastCategory = categories.lastElementChild; 
console.log(`Category:`,elementLastCategory.firstElementChild.textContent);//pt cerinta
const numberOfLast = elementLastCategory.querySelector("ul");
console.log(`Elements:`, numberOfLast.children.length);//pt cerinta