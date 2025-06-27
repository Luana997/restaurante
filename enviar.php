<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    // Simulando envio (poderia ser email, BD, etc.)
    if ($nome && $email && $mensagem) {
        echo "OK";
    } else {
        echo "ERRO";
    }
}
?>
