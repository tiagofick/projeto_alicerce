<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 27/04/2019
 * Descrição: Controller responsavel pelas rotinas de login do usuário
 */

class Login extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Usuario_Model');
	}

	public function index()
	{
		$this->load_view('login');
	}

	public function entrar()
	{
		$post = $this->input->post(null, true);
        $return = $this->Usuario_Model->login($post);

        if($return === true) {
            redirect(base_url('home'));
        } else {
            redirect(base_url('login'));
        }
	}

	public function sair() {
		$this->Usuario_Model->sair();
		redirect(base_url('login'));
	}

}
