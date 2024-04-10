<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $company = $_POST['company'];
    $name = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "info@enrichbiz.ai";

    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\n\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "CC: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $headers .= "X-Priority: 1\r\n";

    mail($to, $company, $email_body, $headers);

    header("Location: thankyou.html");
    exit;
}

?>