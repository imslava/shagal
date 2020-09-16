<?php

        // Настройки сервера
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = ''; // логин
        $mail->Password = ''; // пароль
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port = 465;

        // Адреса
        $mail->setFrom('info@noreply.ru', 'Название'); // От кого
        $mail->addAddress(''); // Кому