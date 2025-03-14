<?php
// stats.php - Obtención de estadísticas de insulina
require '../db/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['mes'])) {
    $mes = $_GET['mes'];
    $stmt = $pdo->prepare("SELECT AVG(valorLENTA) as media, MIN(valorLENTA) as minimo, MAX(valorLENTA) as maximo FROM insulina WHERE DATE_FORMAT(fecha, '%Y-%m') = ?");
    $stmt->execute([$mes]);
    echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
}
?>