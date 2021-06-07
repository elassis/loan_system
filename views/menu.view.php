<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Menu</title>
</head>
<body>
<nav class="navigation">
  <p>hola, <?php echo $_SESSION["nombre"]?></p>
  <a href="cerrar_sesion.php">cerrar sesion</a>
</nav>
<section>
  <h1>choose an option</h1>
  <a href="usuarios.php" class="options">usuarios</a>
  <a href="" class="options">prestamos</a>
  <a href="" class="options">pagos</a>
  <a href="" class="options">reportes</a>
</section>
    
</body>
</html>