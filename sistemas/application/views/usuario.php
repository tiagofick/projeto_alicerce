<?php
/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 20/03/2019
 * Descrição: View de cadastro de novo usuario
 */

$action = base_url("usuario/cadastrar");
$attrForm        = ['id' => 'form_cadastro_usuario', 'name' => 'form_cadastro_usuario', 'method' => 'post'];
$attrNome        = ['id' => 'nome', 'name' => 'nome', 'type' => 'text', 'placeholder' => 'Nome Completo'];
$attrEmail       = ['id' => 'email', 'name' => 'email', 'type' => 'email', 'placeholder' => 'Email'];
$attrUsuario     = ['id' => 'usuario', 'name' => 'usuario', 'type' => 'text', 'placeholder' => 'Usuário'];
$attrSenha       = ['id' => 'senha', 'name' => 'senha', 'type' => 'password', 'placeholder' => 'Senha'];
$attrRepeteSenha = ['id' => 'repsenha', 'name' => 'repsenha', 'type' => 'password', 'placeholder' => 'Repita a senha'];
$attrBtnSubmit   = ['id' => 'btnCadastrar', 'name' => 'btnCadastrar', 'value' => 'Cadastrar'];

?>
<div id="app">{{ mensagem }}</div>
<?php

echo form_open($action, $attrForm);
echo     form_input($attrNome);
echo     form_input($attrEmail);
echo     form_input($attrUsuario);
echo     form_password($attrSenha);
echo     form_password($attrRepeteSenha);
echo     form_submit($attrBtnSubmit);
echo form_close();
