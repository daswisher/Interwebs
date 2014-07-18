<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
	<p>
		<?php
			$array = array("Hello", "this", "is", "an","array",3);//It's possible to mix data types in an array
			echo $array[2];
			echo $array{2}; //This line is equivalent to the line above
			$array[4]="Spaghetti"; //This is how you do reassignment to an element
			unset $array[0]; //Unset deletes. This line deletes the first child
			foreach($array as $arr){
				print "<p>$arr</p>"; //This iterates through the array and prints its children
			}
			unset $array; //This deletes the entire array
		?>
	</p>	
	</body>
</html>
