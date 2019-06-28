<?php
/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 27/04/2019
 * Descrição: View principal onde carrego os cabeçalhos, JSs, CSSs e HTML
 *            Em $view eu carrego o conteúdo a ser exibido
 */
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>TF Sistemas</title>

    <?php // Bibliotecas de Terceiros ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/libs/bootstrap.min.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/libs/allicons.css')?>">

    <?php // CSS da página ?>
    <link id="css_global" rel="stylesheet" type="text/css" v-bind:href="css_global">
    <link id="css_sistema" rel="stylesheet" type="text/css" v-bind:href="css_sistema">
    <link id="css_page" rel="stylesheet" type="text/css" v-bind:href="css_page">
</head>
<body>

    <div class="container-fluid">
        <?php echo $view; ?>
    </div>

    <?php // Configuração - RequireJS ?>
	<script data-main="<?php echo base_url('assets/js/libs/require-main')?>" src="<?php echo base_url('assets/js/libs/require.js')?>"></script>
</body>
</html>
