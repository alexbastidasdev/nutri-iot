<?php
// Incluir el archivo de conexión a la base de datos
require_once 'conexion.php';

// Consultar la base de datos para obtener el valor más reciente de Temperatura
$query = "SELECT Temperatura, Humedad FROM sh01 ORDER BY id DESC LIMIT 1";
$result = $conexion->query($query);

// Obtener los datos del resultado de la consulta en un arreglo asociativo
$data = $result->fetch_assoc();

// Configurar el encabezado de la respuesta como JSON
header('Content-Type: application/json'); // Indicar que la respuesta es JSON

// Codificar los datos en formato JSON y enviarlos como respuesta
echo json_encode($data);
?>