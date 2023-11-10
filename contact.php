<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set up the recipient email address
    $to = "khondoker.aminuzzaman@gmail.com";

    // Set up the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Compose the email message
    $emailMessage = "Name: $name<br>";
    $emailMessage .= "Email: $email<br>";
    $emailMessage .= "Subject: $subject<br>";
    $emailMessage .= "Message: $message<br>";

    // Send the email
    mail($to, $subject, $emailMessage, $headers);

    // You can add additional logic here, like redirecting the user to a thank you page
    echo "Email sent successfully!";
} else {
    // Handle the case when the form is not submitted
    echo "Form not submitted!";
}
?>