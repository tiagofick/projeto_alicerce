/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 04/05/2019
 * Descrição: Configurações do RequireJS
 */

// PATH raiz onde se encontram todos os JS
var path = '/tiagofick/sistemas/assets/js';

// Separei os JS's em duas pastas: libs (bibliotecas de terceiros) e scripts (escritos por mim)
var libs = {
	jquery:    path+'/libs/jquery-3.3.1.min',
	vue:       path+'/libs/vue.min',
	bootstrap: path+'/libs/bootstrap.bundle.min'
};

// Objeto com as configurações do RequireJS
var config = {
	catchError: true,
	baseUrl: path+'/scripts/',
	urlArgs: "nocache=" + (new Date()).getTime(),
	paths: libs,
	shim: {
		/*  Aqui eu digo que o Bootstrap é dependente do jQuery, ou seja,
		 * apenas irá carregar após o carregameto do Jquery ser concluído
		 * */
		bootstrap: {
			deps: ['jquery']
		}
	}
};

// Com o RequireJS Carregado e as configurações definidas, aplicamos as mesmas através do método config
requirejs.config(config);

// AQUI COMEÇA A CUSTIMIZAÇÃO DO PROJETO

// URL que está sendo carregada
var url = document.URL;

// Fragmento a url em um array para ter acesso ao nome do controller e método carregado
var arquivo = url.split('/');

// Declaro um array vazio que, posteriormente, irá receber todos os JS's (libs e scripts) que pretendo carregar para a tela corrente
var loadjs = [];

/*
* Array que irá receber os nomes dos sistemas que meu projeto irá abranger (var sistemas)
* para que o require busque quais arquivos devem ser carregados de acordo com a Tela/Sistema acessada(o).
*
* Arquivos JS específicos de um dos sistema serão sempre salvos no caminho "path+/scripts/nome_do_sistema/nome_controller"
* Arquivos desenvolvidos para o projeto (tela de login, por exemplo, ou a home do projeto que possui os links para os diversos sistemas),
* devem ser salvos dentro da pasta "path+/scripts/sistema".
* */

// Nome dos Sistemas, terão o mesmo nome das pastas
var sistemas = ['Sistema1', 'Sistema2'];

// Váriável que usarei como uma "flag" para identificar qual a pasta que devo buscar o script
var sistema_encontrado = false;

// Adiciono ao array as minhas libs definidas no topo do código (no meu caso, jquery, vue, bootstrap)
for(var lib in libs) {
	loadjs.push(lib);
}

/*
* Abra a ferramenta do desenvolvedor (Google Chrome), ou firebug, ou similar e confira na aba Network os exemplos a seguir:
*
* 	1. A tela de login: Carrega um arquivo "path+/scripts/sistema/login.js"
* 	2. Passando pelo login, temos carregado home.js, também na pasta "path+/scripts/sistema/"
*
* Tenho "Sistemas1", "Sistemas2", mas não tenho uma aplicação chamada "sistema". Sistema nada mais é o que, anteriormente, eu me referia como Projeto.
* Então no for varro meu array e comparo com a posição da url que deveria ter o nome de um dos sistemas
* */
for(var i = 0; i < sistemas.length; i++) {
	// Se encontrar o nome do sistema na url, adicione o arquivo "path+/scripts/nome_sistema/nome_do_controller.js" ao loadjs
	if(url.indexOf(sistemas[i]) != -1) {
		loadjs.push(sistemas[i]+"/"+arquivo[arquivo.indexOf(sistemas[i])+1]);
		var sistema_encontrado = true;
		break;
	}
	// Caso contrário, não faça nada e vá para a próxima interação do for
}

/*
* Se acessarmos a tela do link "Sistema 1", que carrega a Home do Sistema 1, podemos notar que irá carregar um arquivo também chamado
* de home.js, porém, se observar o caminho desse arquivo verá que está apontando para "path+/scripts/Sistema1/home.js"
* Nesse momento buscamos um JS dentro da pasta "Sistema1".
*
* Com o for acima eu percorri meu array (linha 58) e encontrei em minha URL (linha 46) um Sistema chamado de "Sistema1".
* Se encontrar o Sistema1, busque na pasta dele o JS a carregar e atribua true a variável sistema_encontrado, caso contrario,
* a variável "sistema_encontrado" permanece = false e vamos para o if abaixo
*
* que em caso afirmativo seta o caminho do js para a pasta "sistema" que é a pasta onde guardamos nossos scripts sem vínculo a nenhum
* sistema específico
* */
if(sistema_encontrado !== true) {
	loadjs.push('sistema/'+arquivo[arquivo.indexOf('sistemas')+1]);
}

/*
* Definidas as configurações e arquivos a serem carregados, vamos ao requirejs:
* Parâmtros:
* 	1. Array de arquivos a carregar
* 	2. Função que define cria uma instância e define os módulos
* */
requirejs(loadjs, function($, Vue){
	/*
	* loadjs possui: ["jquery", "vue", "bootstrap", "sistema/pagina_que_estou_carregando"]
	* Então a string do index = 3 eu "quebro" pela barra, removo o último, ítem e jogo o valor na variável modulo
	* */
	var nome_sistema = loadjs[3].split('/')[0];
	var modulo = loadjs[3].split('/').pop();

	// O objeto window do possui uma propriedade com o nome da nossa página
	var objeto = window[modulo];

	// Então eu crio um novo objeto apartir disso utilizando Object.create()
	var Instance = Object.create(objeto);

	// Nessa nova instância eu chamo o método init passando como parâmetro um objeto jquery e o objeto Vue ambos carregados nas libs
	Instance.init($(document), Vue);

	/*
	* Deixo um método chamado init como ponto de partida para o conteudo carregado, então todos meus arquivos JS deverão possuir um método init
	*
	* Para melhor entendimento, visualize os arquivos:
	*
	* assets\js\scripts\sistema\home.js
	* assets\js\scripts\Sistema1\home.js
	* assets\js\scripts\Sistema2\home.js
	* */

	// Aqui, indico via VueJS qual o css que devo carregar
	new Vue({
		el: '#css_page',
		data: {
			css_page: this.path.replace('js', 'css/scripts/'+nome_sistema+'/'+modulo+'.css')
		}
	});

	// var css = this.path.replace('js', 'css/scripts/'+nome_sistema+'/'+modulo+'.css');
	// $('#css_page').attr('href', css)
});