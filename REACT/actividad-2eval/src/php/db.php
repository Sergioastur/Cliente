<?php
$host = 'localhost'; // Cambia esto si tu base de datos está en otro servidor
$db = 'nombre_base_datos'; // Nombre de tu base de datos
$user = 'usuario'; // Tu usuario de base de datos
$pass = 'contraseña'; // Tu contraseña de base de datos

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
    exit();
}
?>
