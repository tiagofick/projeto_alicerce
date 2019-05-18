<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 27/04/2018
 * Descrição: Controller principal do projeto
 */

class Home extends MY_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->load_view('home');
    }

}
