/******************
 * YOUR CODE HERE *
 ******************/
const indexedChars = function(str){
  let result = ''

for (let i = 0; i < str.length; i++){
result = result + i + str[i]  
}

return result;
}

console.log(indexedChars('ay'))


const exclaim = function(str){
let structure = ''
for(let i = 0; i < str.length; i++){
  if(str[i] === '?'){
  structure += '!'
  }else if (str[i] === '.'){
    structure += '!'
  }
  else structure += str[i]
  }
  return structure
}

  const repeatIt = function(str1,str2){
   // str1.repeat('str2')
let repeating = ''
for(let i = 0; i <str1.length; i++){
  if(str1[i] === str2[i]){
    repeating += str2
  

  }
  return repeating
}
  }


function truncate(str){
if(str.length < 18){
  return str;
}

let result = '';
for (let i = 0; i < 15; i++){
  result = result + str[i];
}

return result + '...';
}

function ciEmailify(name){
  let email = '';
  for (let i = 0; i < name.length; i++){
    if (name[i] === ''){
      email = email + '.';
    }
  }


  
}



  





 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
