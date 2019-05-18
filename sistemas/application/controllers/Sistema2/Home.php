<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 27/04/2019
 * Descrição: Controller principal do sistema "Sistema 2"
 */

class Home extends S2_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data['msg'] = $this->load_custom_sis_2();
        $this->load_view('home', $data);
    }

}
