<?php

// PHP Version 7.4.22
function convertOne($n) {
  // Convert To Array
  $arrayOfStrings = str_split($n);

  // Convert Array Elements
  $array = array_map('intval', $arrayOfStrings);

  // Reverse Array
  $array = array_reverse($array);
  return $array;
}

echo '<pre>';
var_dump(convertOne(529132));
echo '</pre>';





// PHP Version 7.4.22
function convertTwo($n) {
  // Convert To Array
  $arrayOfStrings = str_split($n);

  // Create Empty Array
  $empty = [];

  // Loop on Array Of Strings
  foreach ($arrayOfStrings as $str) :
    array_push($empty, intval($str));
  endforeach;

  // Reverse Array
  $array = array_reverse($empty);
  return $array;
}

echo '<pre>';
var_dump(convertTwo(529132));
echo '</pre>';







// PHP Version 7.4.22
function convertThree($n) {
  // Convert To Array
  $arrayOfStrings = str_split($n);

  // Create Empty Array
  $empty = [];

  // Loop on Array Of Strings
  foreach ($arrayOfStrings as $str) :
    array_unshift($empty, intval($str));
  endforeach;

  return $empty;
}

echo '<pre>';
var_dump(convertThree(529132));
echo '</pre>';