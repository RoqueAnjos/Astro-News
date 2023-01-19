<?php

include_once("conexao.php");

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$password = $_POST['password'];

$coded_password = md5($password);

$sql = "insert into users (email, nome, sobrenome, password) values ('$email','$name','$lastname','$coded_password')";
$salvar = mysqli_query($conexao, $sql);

mysqli_close($conexao);

?>