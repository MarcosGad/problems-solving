// Loop Solution
function longestWordInOne(sentence) {
    let splArray = sentence.split(" ");
    let longestLen = 0;
    let longestWord;
  
    for (let i = 0; i < splArray.length; i++) {
      if (splArray[i].length > longestLen) {
        longestWord = splArray[i];
        longestLen = splArray[i].length;
      }
    }
  
    return longestWord;
  }
  console.log(longestWordInOne("In Programming We Love Elzero Academy Tooooooooooo Much"));



// Reduce Solution
function longestWordInTwo(sentence) {
    let longestWord = sentence.split(" ").reduce(function (longest, current) {
      console.log(longest);
      console.log(current);
      console.log("#".repeat(10));
      return current.length > longest.length ? current : longest;
    });
  
    return longestWord;
  }
  console.log(longestWordInTwo("In Programming We Love Elzero Academy Tooooooooooo Much"));



// Arrow Function Version
function longestWordInArrow(sentence) {
    let longestWord = sentence.split(" ").reduce((l, c) => (c.length > l.length ? c : l));
    return longestWord;
  }
  console.log(longestWordInArrow("In Programming We Love Elzero Academy Tooooooooooo Much"));