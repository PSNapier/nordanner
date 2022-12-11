<body style="background: black; color: white; font-family: 'Roboto Mono', monospace; text-align: center;">
	<form action="login.inc.php" method="POST">
		<span style="font-size: 64px">🐴</span>
		<br><b>Nordanner Roller Login</b>
		<br><br>
		<input type="password" name="password" placeholder="Password"></input>
		<input type="submit" value="Login"></input>
		<?php
			if (isset($_GET["err"]) == "pwd") {
				echo '<br>Incorrect password...';
			}
		?>
	</form>
</body>

