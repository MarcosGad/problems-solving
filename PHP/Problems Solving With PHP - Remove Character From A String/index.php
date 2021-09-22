<?php
// PHP Version 7.4.22

// Simple Solution
// function remove_char_from($word, $c) {
//   return str_replace(array(strtolower($c), strtoupper($c)), "", $word) . "<br />";
// }

// Fundamental Solution
function remove_char_from($word, $c) {

  $charsList = str_split($word);

  // echo '<pre>';
  // print_r($charsList);
  // echo '</pre>';

  $newWord = "";
  foreach ($charsList as $char) :
    if ($char !== strtolower($c) && $char !== strtoupper($c)) {
      $newWord .= $char;
    }
  endforeach;
  return $newWord . "<br />";
}

echo remove_char_from("ElddzeroD WebDD ddSchool", "d"); // Elzero Web School
echo remove_char_from("ElxzeroX Web Sxchool", "x"); // Elzero Web School
echo remove_char_from("Elzero@ Web@@ @@School", "@"); // Elzero Web School