<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 20/03/2019
 * Descrição: Controller personalizado do CI para o Sistema 1
 */

class S1_Controller extends MY_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function load_custom_sis_1() {
        return "<br /><br />Utilizando a classe S1_Controller com suas respectivas customizações";
    }

}
