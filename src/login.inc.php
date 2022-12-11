<?php
$password = "57wmS58q#6Hh";

if ($_POST["password"] == $password) {
	session_start();
	$_SESSION["loggedIn"] = true;
	header("location: /");
	exit();
} 
else {
	header("location: /?err=pwd");
	exit();
}