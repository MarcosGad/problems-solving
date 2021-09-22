function removeDuplicateWordsFrom(sentence) {
    let wordsList = sentence.split(" ");
    let result = [];
    for (let i = 0; i < wordsList.length; i++) {
      if (result.indexOf(wordsList[i]) === -1) {
        result.push(wordsList[i]);
      }
    }
    return result.join(" ");
  }
  console.log(removeDuplicateWordsFrom("1 - Hello Elzero Web Web Hello School"));
  // Hello Elzero Web School


/*************************************************************************************************************/


  function removeDuplicateWordsFromTwo(sentence) {
    let wordsList = sentence.split(" ");
    console.log(wordsList);
    let newSet = new Set(wordsList); // Set return unique only
    console.log(newSet);
    // let arrayFromSet = [...newSet];
    let arrayFromSet = Array.from(newSet);
    console.log(arrayFromSet);
    let joinWords = arrayFromSet.join(" ");
    console.log(joinWords);
    return joinWords;
  }
  console.log(removeDuplicateWordsFromTwo("2 - Hello Elzero Web Web Hello School"));
  // Hello Elzero Web School


/*************************************************************************************************************/

   function removeDuplicateWordsFromTT(sentence) {
    return [...new Set(sentence.split(" "))].join(" ");
  }
  console.log(removeDuplicateWordsFromTT("3 - Hello Elzero Web Web Hello School"));
  // Hello Elzero Web School