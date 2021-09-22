<?php

// PHP Version 7.4.22

// Long Version
function remove_duplicate_words_from($sentence) {

  // Convert To Array
  $wordsList = explode(" ", $sentence);

  // Return Unique Only
  $uniqueOnly = array_unique($wordsList);

  // Join Array Elements
  $finalString = implode(" ", $uniqueOnly);

  return $finalString;
}

// Short Version
// function remove_duplicate_words_from($sentence) {
//   return implode(" ", array_unique(explode(" ", $sentence)));
// }

echo remove_duplicate_words_from("Hello Elzero Web Web Hello School");