<?php
// users.php - Gestión de usuarios (CRUD)
require '../db/config.php';
header('Content-Type: application/json');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $stmt = $pdo->query("SELECT id, nombreUsuario, nombre, apellidos, fechaNacimiento FROM usuarios");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;
    
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO usuarios (nombreUsuario, contraseña, nombre, apellidos, fechaNacimiento) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$data['nombreUsuario'], password_hash($data['contraseña'], PASSWORD_DEFAULT), $data['nombre'], $data['apellidos'], $data['fechaNacimiento']]);
        echo json_encode(["message" => "Usuario creado"]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE usuarios SET nombre=?, apellidos=?, fechaNacimiento=? WHERE nombreUsuario=?");
        $stmt->execute([$data['nombre'], $data['apellidos'], $data['fechaNacimiento'], $data['nombreUsuario']]);
        echo json_encode(["message" => "Usuario actualizado"]);
        break;

    case 'DELETE':
        parse_str(file_get_contents("php://input"), $data);
        $stmt = $pdo->prepare("DELETE FROM usuarios WHERE nombreUsuario=?");
        $stmt->execute([$data['nombreUsuario']]);
        echo json_encode(["message" => "Usuario eliminado"]);
        break;
}
?>