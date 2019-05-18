<?php
/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 11/03/2019
 * Descrição: View Tela de Login
 */

$action = base_url("login/entrar");
$attrForm = ['id' => 'form_login', 'name' => 'form_login', 'method' => 'post'];
$attrUser = ['id' => 'user', 'name' => 'user', 'placeholder' => 'Usuário'];
$attrPass = ['id' => 'pass', 'name' => 'pass', 'placeholder' => 'Senha'];
$attrBtnSubmit = ['id' => 'btnSubmit', 'name' => 'btnSubmit', 'value' => 'Entrar'];

echo form_open($action, $attrForm);
    echo form_input($attrUser);
    echo form_password($attrPass);
    echo form_submit($attrBtnSubmit);
echo form_close();