<?php
  require 'functions.php';
  
  session_start();

  $con = conexion('prestamos','root','');
  $output ='';
  if(!isset($_SESSION['nombre'])){
    header('Location: '.$urls[0].'');
  }

  if(isset($_POST['dameSectores'])){
    $stmt = $con->prepare('SELECT id_sector,nombre_sector FROM sectores');
    $stmt->execute();
    $sectores = $stmt->fetchAll();

    if(!empty($sectores)){
      echo json_encode($sectores);
      exit;
    }
    
   
  }
  include 'views/usuarios.view.php';

?>