<?php
/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 20/03/2019
 * Descrição: Model responsável pelas operações de login/validação e cadastro de usuarios
 */

class Usuario_Model extends CI_Model {

    private $nome;
    private $email;
    private $nome_usuario;
    private $senha;
    private $salt = ' "!@#$%&*()_+=/;:?|/<>][{}_-´`abcdefghijklmnopqrstuwxz1234567890áâàäéêèëíìïóôòöúûùüÁÂÀÉÊÈÍÎÌÏÓÔÒÚÛÙÜ';

    public function salvar($post)
    {

        $this->nome    = $post['nome'];
        $this->email   = $post['email'];
        $this->nome_usuario = $post['usuario'];
        $this->senha   = $post['senha'];

        $formValidationRules = [
            ['field' => 'nome',     'label' => 'Nome do Usuário', 'rules' => 'trim|required'],
            ['field' => 'email',    'label' => 'Email'          , 'rules' => 'trim|required|valid_email'],
            ['field' => 'usuario',  'label' => 'usuario'        , 'rules' => 'trim|required'],
            ['field' => 'senha',    'label' => 'Senha'          , 'rules' => 'trim|required'],
            ['field' => 'repsenha', 'label' => 'Repetir a Senha', 'rules' => 'trim|required|matches[senha]', ['matches' => 'As senhas devem ser iguais']]
        ];
        $this->form_validation->set_rules($formValidationRules);

        if($this->form_validation->run() === TRUE) {
            $arrayUsuario = [
                'nome' => $this->nome,
                'email' => $this->email,
                'usuario' => $this->nome_usuario,
                'senha' => hash('sha512', $this->senha.$this->salt)
            ];

            $this->db->trans_start();
            $this->db->insert('sis_usuario', $arrayUsuario);
            $this->db->trans_complete();

            if ($this->db->trans_status() === FALSE) {
                $this->db->trans_rollback();
                return false;
            } else {
                $this->db->trans_commit();
                return true;
            }

        } else {

            return false;

        }

    }

    public function login($post)
    {
        $senha = hash('sha512', $post['pass'].$this->salt);
        $this->db->where(['usuario' => $post['user']]);
        $this->db->where(['senha' => $senha]);
        $query = $this->db->get('sis_usuario')->result();

        if(is_array($query) && !empty($query) && count($query) === 1) {
            $this->session->set_userdata('br.com.tiagofick_sistemas', 'br.com.tiagofick_sistemas_logado');
            $this->session->set_userdata('br.com.tiagofick_sistemas_usuario', $query[0]->id_usuario);
            return true;
        } else {
            return false;
        }

    }

	public function sair() {
		$this->session->unset_userdata('br.com.tiagofick_sistemas');
		$this->session->unset_userdata('br.com.tiagofick_sistemas_usuario');
		unset($this->usuario);
	}

}
