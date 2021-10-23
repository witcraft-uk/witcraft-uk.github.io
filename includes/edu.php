<?php
$numbers = range(0 , 25);
$alphabets = array(
     0=> "Aa",
	 1=> "Bb",
	 2=> "Cc",
	 3=> "Dd",
	 4=> "Ee",
	 5=> "Ff",
	 6=> "Gg",
	7=> "Hh",  
	8=> "Ii",  
	9=> "Jj",  
	10=> "Kk", 
	11=> "Ll", 
	12=> "Mm", 
	13=> "Nn",
	14=> "Oo",
	15=> "Pp",
	16=> "Qq",
	17=> "Rr",
	18=> "Ss",
	19=> "Tt",
	20=> "Uu",
	21=> "Vv",
	22=> "Ww",
	23=> "Xx",
	24=> "Yy",
	25=> "Zz",
);
	
$names = array(
	0=>array("astronaut","alligator","arrow","apple"),
	1=>array("bridge","banana","ball","butterfly"),
	2=>array("camel","cat","cake","clock"),
	3=>array("dragon","doll","dolphin", "drum"),
	4=>array("elephant","egg","eagle","eyes"),
	5=>array("frog","flag","fingers","feather"),
	6=>array("guitar","goal","goat","girl"),
	7=>array("helicopter","hat","hamster","hammer"),
	8=>array("insect","ink","ice","igloo"),
	9=>array("joker","jug","jam","jellyfish"),
	10=>array("kangaroo","king","kite","key"),
	11=>array("lion","lamp","lips","lemon"),
	12=>array("monkey","maze","mushroom","moustache"),
	13=>array("nest","needle","nose","noodles"),
	14=>array("octopus","orange","owl","ostrich"),
	15=>array("penguin","pencil","pen","peacock"),
	16=>array("queen","quilt","quail","quiet"),
	17=>array("rocket","rainbow","rug","rooster"),
	18=>array("starfish","sun","star","snake"),
	19=>array("toothbrush","tiger","tree","turtle"),
	20=>array("unicorn","umbrella","urchin","uniform"),
	21=>array("vulture","violin","volcano","vase"),
	22=>array("windmill","whale","wig","window"),
	23=>array("xylophone","x-ray","x-ray fish","x-mas tree"),
	24=>array("yogurt","yo-yo","yak","yacht"),
	25=>array("zebra","zip","zigzag","zoo"),
);
	 
 
$rand_keys = array_rand($numbers, 8);

//for ($i=0; $i<=7; $i++){
//	$main_values[$i] = $numbers[$rand_keys[$i]];
//}
//No need to get the values array as the values and keys are same.

for ($i=0; $i<=7; $i++){
	$photono[$i] = rand(0,3);
}

for ($i=0; $i<=7; $i++)
{
	printf("<div>
    <img class=\"%s\" src='http://witcraft.co.uk/images/education/%s/%s.jpg'/><p class=\"_%s\">%s<span>%s</span></p>
    </div>",$rand_keys[$i],$rand_keys[$i],$photono[$i],$rand_keys[$i],$alphabets[$rand_keys[$i]],$names[$rand_keys[$i]][$photono[$i]]);
}

?>

