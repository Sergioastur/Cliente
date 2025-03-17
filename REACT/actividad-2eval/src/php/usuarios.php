<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
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

// Funciones CRUD para la tabla usuario
function getAllUsuarios($pdo)
{
    $stmt = $pdo->query("SELECT * FROM usuario");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getUsuarioById($id, $pdo)
{
    $stmt = $pdo->prepare("SELECT * FROM usuario WHERE id_usu = :id");
    $stmt->execute(['id' => $id]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function createUsuario($data, $pdo)
{
    $stmt = $pdo->prepare("INSERT INTO usuario (fecha_nacimiento, nombre, apellidos, usuario, contra) VALUES (:fecha_nacimiento, :nombre, :apellidos, :usuario, :contra)");
    $stmt->execute($data);
    return $pdo->lastInsertId();
}

function updateUsuarioById($id, $data, $pdo)
{
    $data['id_usu'] = $id; 
    $stmt = $pdo->prepare("UPDATE usuario SET fecha_nacimiento = :fecha_nacimiento, nombre = :nombre, apellidos = :apellidos, usuario = :usuario, contra = :contra WHERE id_usu = :id_usu");
    $stmt->execute($data);
    return $stmt->rowCount();
}

function deleteUsuarioById($id, $pdo)
{
    $stmt = $pdo->prepare("DELETE FROM usuario WHERE id_usu = :id");
    $stmt->execute(['id' => $id]);
    return $stmt->rowCount();
}

// Procesa las solicitudes según el método HTTP
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $usuario = getUsuarioById($id, $pdo);
            echo json_encode($usuario ?: ['error' => "No se encontró ningún usuario con ID $id."]);
        } else {
            $usuarios = getAllUsuarios($pdo);
            echo json_encode($usuarios);
        }
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['fecha_nacimiento'], $input['nombre'], $input['apellidos'], $input['usuario'], $input['contra'])) {
            $nuevaUsuarioId = createUsuario($input, $pdo);
            http_response_code(201); // Código de creación exitosa
            echo json_encode(['id_usu' => $nuevaUsuarioId]);
        } else {
            http_response_code(400); // Código de error: solicitud incorrecta
            echo json_encode(['error' => 'Datos incompletos para crear el usuario.']);
        }
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id_usu'], $input['fecha_nacimiento'], $input['nombre'], $input['apellidos'], $input['usuario'], $input['contra'])) {
            $actualizada = updateUsuarioById($input['id_usu'], $input, $pdo);
            echo json_encode(['updated_rows' => $actualizada]);
        } else {
            http_response_code(400); // Código de error: solicitud incorrecta
            echo json_encode(['error' => 'Datos incompletos para actualizar el usuario.']);
        }
        break;
    case 'DELETE':
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id'])) {
            $resultado = deleteUsuarioById($input['id'], $pdo);
            echo json_encode(['message' => "Usuario con ID {$input['id']} eliminado correctamente.", 'deleted_rows' => $resultado]);
        } else {
            http_response_code(400); // Código de error: solicitud incorrecta
            echo json_encode(['error' => 'ID de usuario no proporcionado para eliminar.']);
        }
        break;
    default:
        http_response_code(405); // Método no permitido
        echo json_encode(['error' => 'Método no permitido.']);
}
