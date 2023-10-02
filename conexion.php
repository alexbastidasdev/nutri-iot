<?php
$server = "localhost:3308";
$user = "root";
$pass = "";
$db = "nutri";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_errno) {
    die("Conexion Falida" . $conexion->connect_errno);
}
?>