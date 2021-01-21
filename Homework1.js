// Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

// Solution 1

function getFrequnecy(arr){
  let obj = {};
  arr.forEach(item => {
    if(!obj.hasOwnProperty(item)){
      obj[item] = 0;
    }
    obj[item] += 1;
  })
  for(let value in obj){
    obj[value] /= arr.length
  }
  return obj;
}
console.log(getFrequnecy([1, 1, 2, 2, 3]))
console.log(getFrequnecy([4,4]))
console.log(getFrequnecy([1, 2, 3]))

// Solution 2

function freq(arr){
  let count = 0;
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(obj.hasOwnProperty(arr[i])){
      continue;
    }
    for(let j = 0; j < arr.length; j++){
      if(arr[i] === arr[j]){
        count++
      }
    }
    obj[arr[i]] = count / arr.length;
    count = 0;
  }
  return obj;
}
console.log(freq([1, 1, 2, 2, 3]))


/*Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

Solution 1*/

function strOrNum(arr){
  let obj = {
    Numbers: 0,
    Strings: 0
  };
  arr.filter(item => {
    if(typeof item === 'number'){
      obj['Numbers'] = obj['Numbers'] + 1
    }
    if(typeof item === 'string'){
      obj['Strings'] += 1;
    }
  });
  return obj;
}
console.log(strOrNum([1, '10', 'hi', 2, 3]))

/*Solution 2*/

function strOrNum(arr){
  let countForNumbers = 0;
  let countForStrings = 0;
  for(let key of arr){
    if(typeof key === 'number') countForNumbers++;
    if(typeof key === 'string') countForStrings++;
  }
  return 'Numbers: ' + countForNumbers + ', ' + 'Strings: ' + countForStrings;
}
console.log(strOrNum([1, '10', 'hi', 2, 3]))


/*Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string.
If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).

Solution 1*/

function getLonger(str){
  let result = '';
  let reg = /[,-. ]/g;
  let arr = str.replace(reg, '*').split('*')
  arr.filter(item => {
    if(item.length >= result.length){
      result = item;
    }
  });
  return result;
}
console.log(getLonger('A revolution without revolution dancing, is a revolution not worth having'))
console.log(getLonger('Which would be worse - to live as a monster, or to die as a good man?'))

// Solution 2

const sentence = str => {
  let longestStr = '';
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === '-' || str[i] === '.' || str[i] === ',' || str[i] === ' ' || str[i] === '.'){
      if(newStr.length >= longestStr.length){
        longestStr = newStr;
      }
      newStr = '';
    }
    else{
      newStr += str[i];
    }
  }
  return longestStr;
}
console.log(sentence('Which would be worse - to live as a monster , or to die as a goooooo-ood man?'))


// Write a function to find longest substring in a given a string without repeating characters except space character.
// If there are several, return the last one. Consider that all letters are lowercase.

// Solution

function longestSubstring(str) {
  let result = '';
  for(let i = 0; i < str.length; i++){
    let matchString = '';
    for(let j = i; j < str.length; j++){
      if(!matchString.includes(str[j]) || str[j] === ' '){
        matchString += str[j];
      }
      else{
        if(matchString.length >= result.length){
          result = matchString;
        }
        break;
      }
    }
  }
  return result;
}
console.log(longestSubstring(`parting your soup is not a miracle, bruce.`));
console.log(longestSubstring(`there are no two words in the english language more harmful than 'good job'.`));

/*Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "bca".
Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

Solution*/

function movingFirstToThird(str){
  let newArr = [];
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    let part = arr.splice(0, 3);
    if(part.length === 3){
      let fromStart = part.shift();
      part.push(fromStart);
      newArr.push(part)
      i--;
    }
    else{
      newArr.push(part)
    }
  }
  return newArr.flat().join('');
}
console.log(movingFirstToThird('dfgjkloyp'))
console.log(movingFirstToThird('aweyoolp'))

// Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array.
// Return product of that numbers.If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.

// Solution

function negativesProducts(arr) {
  if(!Array.isArray(arr) || !arr.length || !arr.every(item => Array.isArray(item))){
    return 'Invalid Argument'
  }
  if(!arr.flat().find(item => item < 0)){
    return 'No Negatives';
  }
  else{
    return arr.reduce((prev, item) => {
      let negatives = item.filter(digit => digit < 0);
      if(!negatives.length){
        return prev;
      }
      return prev * Math.max(...negatives);
    }, 1)
  }
}
console.log(negativesProducts([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]))
console.log(negativesProducts([[3, 4], [11, 0], [5, 6, 7, 8]]))
console.log(negativesProducts([1, 2, 3]))

// Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.

// Solution

const subsets = (arr, length) => {
    let result = [];
    for(let u = 0; u < arr.length; u++) {
        for(let j = u + 1; j < arr.length; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                result.push([arr[u], arr[j], arr[k]]);    
            }
        }
    }
    return result;
}

console.log(subsets([5, 9, 23, 0, -2, -1], 3));


/*NOTE HOMEWORK !!!*/ 


// Solution 1 (Using replaceAll)

const remove = (str1, str2) => str1.replaceAll(str2, '');

console.log(remove('qasd#fhugaasdfasasdfghsdrr', 'asd'))
console.log(remove('112312312', '123'))



// Solution 2 (Using Array.prototype.filter())

function remove(str1, str2){
  let x = str1.split(' ').filter((item) => {
    if(item !== str2){
      return str1
    }
  })
  return x.toString();
}
console.log(remove('asd asd Hamlet asd barev asd', 'asd'))



// Solution 3 (Using loop)

function remove(str1, str2){
  let str1ToArray = str1.split('');
  for(let i = 0; i < str1ToArray.length; i++){
    let third = str1ToArray[i] + str1ToArray[i + 1] + str1ToArray[i + 2];
    if(third === str2){
      str1ToArray.splice(i, 3);
      i = i - 3;
    }
  }
  return str1ToArray.join('')
}
console.log(remove('qasd#fhugaasdfasasdfghsdrr', 'asd'))
console.log(remove('112312312', '123'))



// Solution 4 (Using recursion)

function remove(str1, str2){
  if(str1.includes(str2)){
    let eachLopp = str1.replace(str2, '');
    return remove(eachLopp, str2)
  }
  else{
    return str1;
  }
}
console.log(remove('qasd#fhugaasdfasasdfghsdrr', 'asd'))
console.log(remove('112312312', '123'))

// Solution 5 (Using while)

function remove(str1, str2){
  while(str1.includes(str2)){
    str1 = str1.replace(str2, '')
  }
  return str1;
}
console.log(remove('qasd#fhugaasdfasasdfghsdrr', 'asd'))
console.log(remove('112312312', '123'))
