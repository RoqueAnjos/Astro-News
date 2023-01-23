<?php

include_once("conexao.php");

$email = $_POST['email'];
$password = $_POST['password'];

$coded_password = md5($password);

$verifica = mysqli_query($conexao, "SELECT * FROM users WHERE email =
    '$email' AND password = '$coded_password'") or die("erro ao selecionar");
      if (mysqli_num_rows($verifica)<=0){
        echo"<script language='javascript' type='text/javascript'>
        alert('email e/ou senha incorretos');window.location
        .href='../entrar.html';</script>";
        die();
      }else{
        setcookie("login",$email);
        echo"<script language='javascript' type='text/javascript'>
        alert('Login realizado');window.location
        .href='../index.html';</script>";
      }

?>