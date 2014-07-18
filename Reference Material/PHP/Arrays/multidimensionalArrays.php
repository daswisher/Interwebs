<!DOCTYPE html>
<html>
	<head><title></title></head>
	<body>
		<p>
			<?php
				//Arrays can have arrays inside of them in order to create multidimensional arrays
				$deck = array(array('2 of diamonds', 2),array('5 of diamonds',5),array('Ace of Spades',11));
				echo 'You have the '.$deck[2][0].'!';
			?>
		</p>
	</body>
</html>
