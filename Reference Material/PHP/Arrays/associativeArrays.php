<!DOCTYPE html>
<html>
	<head><title></title></title>
	<body>
		<p>
			<?php
				//Associative arrays are arrays that function based on a key=>value pair (like python dictionaries)
				$myAssociativeArray= array('year' => 2012,
							'color' => 'blue',
							'doors' => 5);
				echo $myAssociativeArray['color'];

				foreach($myAssociativeArray as $features => $included){
					echo $features. ' '.$included.'<br />';//This is how to iterate over associative arrays
				}
			?>
		</p>
	</body>
</html>
