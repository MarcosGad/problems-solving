<?php

// PHP Version 7.4.22

function add_commas_and_underscore($num) {
    $result = number_format($num);
    if (strlen($result) > 3) {
      $result[-4] = "_";
    }
    return $result . "<br />";
  }
  
  echo add_commas_and_underscore(120); // 120
  echo add_commas_and_underscore(1530); // 1_530
  echo add_commas_and_underscore(120510650); // 120,510_650
  echo add_commas_and_underscore(510650480910); // 510,650,480_910
  echo add_commas_and_underscore(12069057014032); // 12,069,057,014_032