<?php

    // Подключение
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/Exception.php';
    require 'phpmailer/SMTP.php';

    //Переменные
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $form = $_POST['form'];

    //Ининциализация
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/');

    try {

        // Настройки сервера
        require_once('setting.php');

        // Письмо
        $mail->isHTML(true); 
        $mail->Subject = 'Заявка';
        $mail->Body =  "<b>Имя:</b><br>".$name."<br><br>
                        <b>Телефон:</b><br>".$phone."<br><br>
                        <b>Форма:</b><br>".$form;

        $mail->send();

        header("Location: ../thanks.html");

    } catch (Exception $e) {
        echo "Сообщение не может быть отправлено. Ошибка отправки: {$mail->ErrorInfo}";
    }

?>