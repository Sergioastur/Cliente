<?php
// config.php - Configuración de la base de datos
$host = 'localhost';
$dbname = 'insulina_control';
$user = 'root';
$password = '';
$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
