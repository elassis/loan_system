<?php
 
 function conexion($bd,$user,$pass){
    $conexion = new PDO("mysql:host=localhost;dbname={$bd}","{$user}","{$pass}");
    return $conexion;
 }

 $urls = array('login.php');
?>