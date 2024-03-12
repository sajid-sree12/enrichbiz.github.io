<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['username'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    //$subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "sajid942@gmail.com";

    $email_body = "Name: $name\nCompany:$company\nEmail: $email\nPhone: $phone\n\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "CC: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $headers .= "X-Priority: 1\r\n";

    mail($to, $subject, $email_body, $headers);

    header("Location: thank-you.html");
    exit;
}

?>