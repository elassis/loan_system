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

  if(isset($_POST['idSector'])){
    try{
    $stmt = $con->prepare('SELECT id_calle, nombre_calle FROM calles WHERE id_sector LIKE '.$_POST['idSector'].'');
    $stmt->execute();
    $calles = $stmt->fetchAll();

    if(!empty($calles)){
      echo json_encode($calles);
      exit;
    }
  }catch(Exception $e){
    echo 'No hay calles con ese sector';
    exit;
  }
  }
  include 'views/usuarios.view.php';

?>