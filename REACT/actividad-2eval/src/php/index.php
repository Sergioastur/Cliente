<?php
header('Content-Type: application/json');
require 'db.php';

$requestMethod = $_SERVER['REQUEST_METHOD'];

switch ($requestMethod) {
    case 'GET':
        if (isset($_GET['username'])) {
            // Obtener un usuario específico
            $username = $_GET['username'];
            $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->execute([$username]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($user ? $user : ['error' => 'Usuario no encontrado']);
        } else {
            // Obtener todos los usuarios
            $stmt = $pdo->query("SELECT username, name, surname, birthdate FROM users");
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        break;

    case 'POST':
        // Crear un nuevo usuario
        $data = json_decode(file_get_contents('php://input'), true);
        if (!isset($data['username'], $data['password'], $data['name'], $data['surname'], $data['birthdate'])) {
            echo json_encode(['error' => 'Faltan datos necesarios']);
            exit();
        }
        $stmt = $pdo->prepare("INSERT INTO users (username, password, name, surname, birthdate) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$data['username'], password_hash($data['password'], PASSWORD_DEFAULT), $data['name'], $data['surname'], $data['birthdate']]);
        echo json_encode(['message' => 'Usuario creado']);
        break;

    case 'PUT':
        // Actualizar un usuario existente
        $data = json_decode(file_get_contents('php://input'), true);
        if (!isset($data['username'], $data['name'], $data['surname'], $data['birthdate'])) {
            echo json_encode(['error' => 'Faltan datos necesarios']);
            exit();
        }
        $stmt = $pdo->prepare("UPDATE users SET name = ?, surname = ?, birthdate = ? WHERE username = ?");
        $stmt->execute([$data['name'], $data['surname'], $data['birthdate'], $data['username']]);
        echo json_encode(['message' => 'Usuario actualizado']);
        break;

    case 'DELETE':
        // Eliminar un usuario
        if (!isset($_GET['username'])) {
            echo json_encode(['error' => 'Falta el nombre de usuario']);
            exit();
        }
        $username = $_GET['username'];
        $stmt = $pdo->prepare("DELETE FROM users WHERE username = ?");
        $stmt->execute([$username]);
        echo json_encode(['message' => 'Usuario eliminado']);
        break;

    default:
        echo json_encode(['error' => 'Método no permitido']);
        break;
}
?>
