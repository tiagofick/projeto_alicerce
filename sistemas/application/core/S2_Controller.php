<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 20/03/2019
 * Descrição: Controller personalizado do CI para o Sistema 2
 */

class S2_Controller extends MY_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function load_custom_sis_2() {
        return "<br /><br />Utilizando a classe S2_Controller com suas respectivas customizações";
    }

}
