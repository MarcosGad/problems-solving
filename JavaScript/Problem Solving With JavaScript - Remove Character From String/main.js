function removeCharFrom(word, c) {
    return word
      .split("") // Convert To Array
      .filter(function (char) { // Filter Small And Capital Character From Array Elements
        return char !== c.toLowerCase() && char !== c.toUpperCase();
      }).join(""); // Join Array Elements Again in One String
  }
  
  // Arrow Function Version
  function removeCharFromArrow(word, c) {
    return word.split("").filter((x) => x !== c.toLowerCase() && x !== c.toUpperCase()).join("");
  }
  
  console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
  console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
  console.log(removeCharFromArrow("Elzero@ Web@@ @@School", "@"));

  /*
    "ddDDElzeroddDD".replace(/d/,"");
    "dDDElzeroddDD"
    "ddDDElzeroddDD".replace(/d/g,"");
    "DDElzeroDD"
    "ddDDElzeroddDD".replace(/d/gi,"");
    "Elzero"
  */