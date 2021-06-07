<?php 
 require 'functions.php';
 $output ='';
$conn = conexion('prestamos','root','');

if(!$conn){
    echo 'No hay Conexion';
}

if(isset($_POST['user']) && isset($_POST['pass'])){   
    $usuario = $_POST['user'];
    $pass = $_POST['pass'];

    $stmt = $conn->prepare('SELECT nombre, privilegio FROM usuarios WHERE nombre = "'.$usuario.'" AND 
                           password = "'.$pass.'"');
    $stmt->execute();
    $datos = $stmt->fetchAll();

   
    if(!empty($datos)){
      session_start();
      $_SESSION['nombre'] = $datos[0][0];
      $_SESSION['priv'] = $datos[0][1];
      header('Location: http://localhost/loan_system/menu.php');

    }else{
      $output.="Usuario o password incorrectos, intente de nuevo...";
      echo $output;
    }                   
    
}

require 'views/login.view.php';

?>