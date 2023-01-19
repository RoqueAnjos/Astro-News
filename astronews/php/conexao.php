<?php	
	//Connect To Database

    session_start();

	$hostname="localhost";
	$username="root";
	$password="MilaPreta123!";
	$dbname="users_astronews";

    $conexao = mysqli_connect($hostname, $username, $password, $dbname);

    if(!$conexao){
        echo "Connection Failure";
    }else{
        echo "Successfull";
    }
?>