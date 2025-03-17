<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('HTTP/1.1 204 No Content');
    exit;
}

// Conexión a la base de datos
$dsn = 'mysql:host=127.0.0.1;dbname=diabetes_bd;charset=utf8mb4';
$username = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Conexión fallida: ' . $e->getMessage()]);
    exit;
}

// Validar entrada
if (!isset($_GET['mes'], $_GET['anio'], $_GET['id_usu'])) {
    echo json_encode(['error' => 'Faltan parámetros (mes, anio, id_usu).']);
    exit;
}

$mes = intval($_GET['mes']);
$anio = intval($_GET['anio']);
$id_usu = intval($_GET['id_usu']);

// Obtener estadísticas generales
$stmt = $pdo->prepare("SELECT AVG(lenta) AS media_lenta, MIN(lenta) AS min_lenta, MAX(lenta) AS max_lenta 
                        FROM control_glucosa 
                        WHERE MONTH(fecha) = :mes AND YEAR(fecha) = :anio AND id_usu = :id_usu");
$stmt->execute(['mes' => $mes, 'anio' => $anio, 'id_usu' => $id_usu]);
$estadisticas = $stmt->fetch(PDO::FETCH_ASSOC);

// Obtener evolución diaria de 'lenta'
$stmt = $pdo->prepare("SELECT fecha, lenta FROM control_glucosa 
                        WHERE MONTH(fecha) = :mes AND YEAR(fecha) = :anio AND id_usu = :id_usu 
                        ORDER BY fecha ASC");
$stmt->execute(['mes' => $mes, 'anio' => $anio, 'id_usu' => $id_usu]);
$evolucion = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Respuesta en JSON
echo json_encode(['estadisticas' => $estadisticas, 'evolucion' => $evolucion]);
exit;
