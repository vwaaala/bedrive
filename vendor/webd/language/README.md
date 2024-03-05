#php-language-processing
[![Latest Stable Version](https://img.shields.io/packagist/v/webd/language.svg)](https://packagist.org/packages/webd/language)

A PHP library for language processing. Includes string distance function 
(Levenshtein, Jaro-Winkler, LCS-distance...), stemming, hashing etc.

Installation using Composer
---------------------------

in composer.json :
```
"require": {
    "webd/language": "dev-master"
}
```

Then
```
composer install
```

Usage
-----

```php
use webd\language\StringDistance;

$string1 = "You won 10000$";
$string2 = "You won 15500$";

echo "Edit distance : " . StringDistance::EditDistance($string1, $string2);
echo "Levenshtein : " . StringDistance::Levenshtein($string1, $string2);
echo "Jaro-Winkler : " . StringDistance::JaroWinkler($string1, $string2);
echo "Jaro-Winkler (prefix scale = 0.2) : " . StringDistance::JaroWinkler($string1, $string2, 0.2);

use webd\language\PorterStemmer;
echo "analyzing => " . PorterStemmer::Stem("analyzing");
echo "abandoned => " . PorterStemmer::Stem("abandoned");
echo "inclination => " . PorterStemmer::Stem("inclination");

$lcs = new \webd\language\LCS($str1, $str2);
echo $lcs->value();
echo $lcs->length();
echo $lcs->distance();

// SpamSum, aka ssdeep, aka Context-Triggered Piecewize Hashing (CTPH):
$s = new \webd\language\SpamSum;
echo $s->HashString(file_get_contents($f));
```