<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 27/04/2019
 * Descrição: Controller responsável pelo cadastro de usuário
 */

class Usuario extends MY_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function novo()
	{
		$this->load_view('usuario');
	}

	public function cadastrar()
	{
		$this->load->model('Usuario_Model');

		$post = $this->input->post(null, true);
		$return = $this->Usuario_Model->salvar($post);

		return $return;
	}

}
?>
