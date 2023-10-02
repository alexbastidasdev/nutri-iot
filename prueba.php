<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nutri | IOT</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="views/plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="views/dist/css/adminlte.min.css">
</head>
<body class="hold-transition sidebar-mini">
  <div class="wrapper">
    <!-- Navbar -->
    <?php include 'includes/navbar.php'; ?>
    <!-- /.navbar -->

    <!-- Main Sidebar Container "Menu"-->
    <?php include 'includes/menu.php'; ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <!-- Contenedor donde se cargará el contenido dinámico -->
          <div id="contenido">
            <?php
            if (isset($_GET['ruta'])){
                $ruta = $_GET['ruta'];
                //echo "$ruta";
                if($ruta == 'usuarios' ||
                   $ruta == 'productos' ||
                   $ruta == 'categorias'
                   ){
                  include "modulos/{$ruta}.php";
                }else{
                  include "modulos/404.php";
                }
            } else {
                // Si no se proporciona ninguna ruta, cargar inicio.php por defecto
                include "modulos/inicio.php";
            }
            ?>
          </div>
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">
        <b>Version</b> SD 0.1
      </div>
      <!-- Default to the left -->
      <strong>made with passion by IOT Solution &copy; 2022-<?= date('Y') ?> for
      <a href="https://www.alimentosnutripharma.com/">Nutripharma</a>.
      </strong>Todos los derechos reservados.
    </footer>
  </div>
  <!-- ./wrapper -->

  <!-- REQUIRED SCRIPTS -->

  <!-- jQuery -->
  <script src="views/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="views/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="views/dist/js/adminlte.min.js"></script>
</body>
</html>
