<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<base href="" />
	<title>Nordanner Tools</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="Description" content="Nordanner Tools" />
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐎</text></svg>">
</head>

<?php
	// echo '<script>console.log('. json_encode($_SESSION["loggedIn"], JSON_HEX_TAG) .')</script>';
	if (isset($_SESSION["loggedIn"])) {
		include_once "app.php";
	} else {
		include_once "login.php";
	}
?>

</html>
