<?php
// PHP Version 7.4.22

/*
  Logic
  Alpha         => abcdefghijklmnopqrstuvwxyz
  Given Letters =>    defgi
*/

function find_missing_letter_in($givenLetters) {
  $alpha = '';
  foreach (range("a", "z") as $letter) {
    $alpha .= $letter;
  }
  // Get Starting Position
  $start = strpos($alpha, $givenLetters[0]);
  for ($i = 0; $i < strlen($givenLetters); $i++) {
    // echo $alpha[$start + $i] . "<br>"; // Loop On Alpha
    // echo $givenLetters[$i] . "<br>"; // Loop On Given Letters
    // echo "--------<br>";
    if ($givenLetters[$i] !== $alpha[$start + $i]) {
      return $alpha[$start + $i];
    }
  }
  return "No Missing Letter In Sequence";
}

// Testing Ouput
echo find_missing_letter_in("abcdeghi") . "<br>"; // f
echo find_missing_letter_in("defgi") . "<br>"; // h
echo find_missing_letter_in("xyz") . "<br>"; // No Missing Letter In Sequence