<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <?php
    // PHP Version 7.4.22

        function longest_word_in($sentence) {
            // Convert To Array
            $wordsList = explode(" ", $sentence);
            echo '<pre>';
            print_r($wordsList);
            echo '</pre>';
        
            // Set Longest Word Variable
            $longestWord = '';
            foreach($wordsList as $word) :
            // Check If Current Word in Loop > The Main Longest Word
            if (strlen($word) > strlen($longestWord)) {
                // Set The Longest Word === Current Word
                $longestWord = $word;
            }
            endforeach;
            return $longestWord;
        }
        
        echo longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much");
    ?>
</body>
</html>