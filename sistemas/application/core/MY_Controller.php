<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 20/03/2019
 * Descrição: Controller presonalizado principal o mesmo extende o core para centralizar rotinas comuns ao "ecosistema" da aplicação.
 *			  Para criar novos controllers e aplicar a rotina de verificação de usuario logado, ao invés de extender CI_Controller, basta
 *			  extender a classe MY_Controller
 */

class MY_Controller extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$logado = $this->session->userdata("br.com.tiagofick_sistemas");
		if ($logado != 'br.com.tiagofick_sistemas_logado')
		{
			redirect(base_url('login'));
		}
	}

}
