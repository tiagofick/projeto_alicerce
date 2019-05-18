<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 08/03/2019
 * Descrição: Controller criado no core para controle de segurança e permissões
 */

class MY_Controller extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$logado = $this->session->userdata("br.com.sistemas");
		if ($logado != 'br.com.sistemas_logado')
		{
			redirect(base_url('login'));
		}
	}

}
