<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['username'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'info@enrichbiz.ai';
    $subject = 'Customer Inquiry';
    $headers = 'From: info@enrichbiz.ai';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thankyou.html");
        exit();
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}
?>
