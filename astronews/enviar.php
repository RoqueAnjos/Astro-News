<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <script>
  
    /// redireciona para a página inicial
    function redireciona(){
        location.href="index.html";
    }

    window.onload = redireciona(); //chama a função quando a página estiver pronta
  </script>

  <?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;

  require('PHPMailerMaster/src/PHPMailer.php'); //chama a classe de onde você a colocou.
  require('PHPMailerMaster/src/Exception.php'); //chama a classe de onde você a colocou.
  require('PHPMailerMaster/src/SMTP.php'); //chama a classe de onde você a colocou.

  $mail = new PHPMailer(true); // instancia a classe PHPMailer
  
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;

  // Configura para envio de e-mails usando SMTP
  $mail->isSMTP();
  
  // Servidor SMTP
  $mail->Host = 'smtp.gmail.com';
  
  // Usar autenticação SMTP
  $mail->SMTPAuth = true;
  
  // Usuário da conta
  $mail->Username = 'roquejr.anjos15@gmail.com';
  
  // Senha da conta
  $mail->Password = 'sewwtqrfuxiketnl';
  
  // Tipo de encriptação que será usado na conexão SMTP
  $mail->SMTPSecure = 'ssl';
  
  // Porta do servidor SMTP
  $mail->Port = 465;
  
  // Informa se vamos enviar mensagens usando HTML
  $mail->IsHTML(true);
  
  // Email do Remetente
  $mail->From = 'roquejr.anjos15@gmail.com';
  
  // Nome do Remetente
  $mail->FromName = 'Roqueudison Sobrinho';
  
  // Endereço do e-mail do destinatário
  $mail->addAddress($_POST['email']);
  
  // Assunto do e-mail
  $mail->Subject = 'E-mail PHPMailer';

  $nome = $_POST['nome'];
  // Mensagem que vai no corpo do e-mail
  $mail->Body = '<h1>Olá '.$nome.'!</h1><h2>Mensagem enviada via PHPMailer</h2>';
    
  // Envia o e-mail e captura o sucesso ou erro
  if($mail->Send()):
    echo 'Enviado com sucesso !';
  else:
      echo 'Erro ao enviar Email:' . $mail->ErrorInfo;
  endif;
  
  ?>

</body>
</html>