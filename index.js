const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


console.log(tutorials[1].split(' '))

/*
Pseodocode.
1. Declare a variable and assign it the fisrt operation of mapping each string item into 
  an array of strings.
2. Map each element in the new array into a string of charAt(0) to upperCase().
3. Join the new stirng to restore the original sentences.
*/
const titleCased = (tutorialDocuments)=>{
  //let joined;
  const splitted=tutorialDocuments.map(item => item.split(' '));
  const firstLetterCased=splitted.map(ele => ele.map(ele=>ele.charAt(0).toUpperCase() + ele.slice(1)
    ))
   return firstLetterCased

  };
  
  //return element



console.log(titleCased(tutorials))
