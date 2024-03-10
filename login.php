<?php
$dsn = 'mysql:host=localhost;dbname=garage_parrot';
$username = 'user_php';
$password = '3f7zhhRn4NH69R';
try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Récupérer les données du formulaire de connexion
    $emailForm = $_POST['email'];
    $passwordForm = $_POST['password'];

    //Récupérer les utilisateurs 
    $query = "SELECT * FROM users WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':email', $emailForm);
    $stmt->execute();

    //SEst-ce que l’utilisateur (mail) existe ?
    if ($stmt->rowCount() == 1) {
        $monUser = $stmt->fetch(PDO::FETCH_ASSOC);


        if (password_verify($passwordForm, $monUser['password'])) {
            echo "Connexion réussie ! Bienvenue " . $monUser['name'] . ' ' . $monUser['surname'];
            echo "<br>";
            echo "Allez dans votre Dashboard ";
            session_start();
            $_SESSION["password"] = true;
            $_SESSION["id"] = $monUser["id"];
            header("location: dashboard.html");
            exit;
        } else {
            echo "Mot de passe incorrect";
        }
    } else {
        echo "Utilisateur introuvable, êtes-vous sûr de votre mail ?";
    }
} catch (PDOException $e) {
    echo "Erreur de connexion à la base de données : " . $e->getMessage();
}
