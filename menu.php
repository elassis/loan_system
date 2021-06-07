<?php
 session_start();
 require 'functions.php';
 if(!isset($_SESSION['nombre'])){
     header('Location: '.$urls[0].'');
 }
    

    include 'views/menu.view.php';
?>