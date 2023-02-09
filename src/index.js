module.exports = function check(str, bracketsConfig) {
 

  let openBrackets = [];
  let bracketPairs = {};
  for (let i = 0; i < bracketsConfig.length; i++){
  openBrackets.push(bracketsConfig[i][0]);
  bracketPairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
  };
  
  console.log(openBrackets);
  console.log(bracketPairs);
  
let stack = [];

for (let i = 0; i < str.length; i++){
let currentBracket = str[i];
let lastBracket = stack[stack.length - 1];
if (openBrackets.includes(currentBracket) && currentBracket !== '|' && currentBracket !== '7' && currentBracket !== '8'){
  stack.push(currentBracket);
} else if (openBrackets.includes(currentBracket) && currentBracket === '|' || currentBracket !== '7' || currentBracket !== '8'){
  if (stack.length === 0){
      stack.push(currentBracket);
  } else  if (bracketPairs[currentBracket] === lastBracket){
      stack.pop();
    } else if (stack.length !== 0 && bracketPairs[currentBracket] !== lastBracket){
      stack.push(currentBracket);
    }
} 

else if (stack.length === 0){
  return false;
} else {
      if (bracketPairs[currentBracket] === lastBracket){
    stack.pop();
  } else {return false;}

}


}
return stack.length === 0 ? true : false;
}
