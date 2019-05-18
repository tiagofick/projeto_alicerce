<?php
/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 27/04/2018
 * Descrição: View Principal que exibe os links para os  */

echo "Link para a lib fontawesome. Ícones utilizados no projeto: ";
?>
<a href="https://fontawesome.com/" target="_blank">https://fontawesome.com/</a>
<br /> <br />

Exemplo de Botão
<button class="btn btn-success">
    <i class="fas fa-truck-monster"></i>
    <span>Botão com Bootstrap Bundle</span>
</button>
<br /> <br />

<div id="teste">{{mensagem}}</div>
<br /> <br />

<a href="<?php echo base_url('Sistema1/home')?>">Sistema 1</a>
<br /> <br />

<a href="<?php echo base_url('Sistema2/home')?>">Sistema 2</a>
<br /> <br />

<?php
$attrForm = ['id' => 'form_login', 'name' => 'form_login', 'method' => 'post'];
$attrSubm = ['id' => 'btnSubmit', 'name' => 'btnSubmit', 'value' => 'Logout'];
$action = base_url("login/sair");

echo form_open($action, $attrForm);
    echo form_submit($attrSubm);
echo form_close();
?>