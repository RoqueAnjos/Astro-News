<?php
	//Sample Database Connection Syntax for PHP and MySQL.
	
	//Connect To Database

    session_start();

	$hostname="localhost:8080";
	$username="root";
	$password="MilaPreta123!";
	$dbname="users_astronews";
	$usertable="users";

    $conexao = mysqli_connect($hostname, $username, $password, $dbname);
	/*
    mysqli_select_db($dbname);
	
	# Check If Record Exists
	
	$query = "SELECT * FROM $usertable";
	
	$result = mysqli_query($query);
	
	if($result){
		while($row = mysqli_fetch_array($result)){
			$name = $row["$yourfield"];
			echo "Name: ".$name."br/>";
		}
	}
    */
    if(!$conexao){
        echo "Problemas ao conectar no banco. Verifique.";
    }else{
        echo "Conexão realizada com sucesso";
    }
?>