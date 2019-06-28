/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 04/05/2019
 * Descrição: Configurações do RequireJS
 */

// PATH raiz onde se encontram todos os JS
var path = '/projeto_alicerce/sistemas/assets/js';

// Separei os JS's em duas pastas: libs (bibliotecas de terceiros) e scripts (escritos por mim)
var libs = {
	jquery:     path+'/libs/jquery-3.3.1.min',
	vue:        path+'/libs/vue.min',
	bootstrap:  path+'/libs/bootstrap.bundle.min',
	jquerymask: path+'/libs/jquery.mask.min',
	sistema:    path+'/scripts/sistema'
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
		 * O mesmo é estipulado para o jquerymask
		 * */
		bootstrap: {
			deps: ['jquery']
		},
        jquerymask: {
		    deps: ['jquery']
        }
	}
};

// Com o RequireJS Carregado e as configurações definidas, aplicamos as mesmas através do método config que recebe o objeto com as configurações
requirejs.config(config);

// URL que está sendo carregada ela aplicação
var url = document.URL;

// Fragmentada a url em um array para ter acesso ao nome do controller e método carregado
var arquivo = url.split('/');

// Declaro um array vazio que, posteriormente, irá receber todos os JS's (libs e scripts) que pretendo carregar para a tela corrente
var loadjs = [];

/*
* A aplicação serve como uma espécie de plataforma para n aplicações e o array sistemas irá receber os nomes dos sistemas que meu projeto irá abranger
* para que o require busque quais arquivos devem ser carregados de acordo com a Tela/Sistema acessada(o).
*
* Arquivos JS específicos de um dos sistemas sempre devem ser salvos no caminho "path+/scripts/nome_do_sistema/nome_controller.js"
* Arquivos desenvolvidos para o projeto (tela de login, por exemplo), devem ser salvos dentro da pasta "path+/scripts/sistema".
* */
var sistemas = ['Sistema1', 'Sistema2'];

// Boolean que irá indicar ao loadjs se existem o nome do sistema na url e qual o js que irei carregar
var sistema_encontrado = false;

// Adiciona inicialmente ao array de arquivos as libs informadas na linha 12 deste arquivo
for(var lib in libs) {
	loadjs.push(lib);
}

/*
* Abra a ferramenta de desenvolvedor (Google Chrome), ou firebug, ou similar e confira na aba Network os exemplos a seguir:
*
* 	1. A tela de login: Carrega um arquivo "path+/scripts/sistema/login.js"
* 	2. Passando pelo login, temos carregado home.js, também na pasta "path+/scripts/sistema/"
*
* Tenho "Sistemas1", "Sistemas2", mas não tenho uma aplicação chamada "sistema". Sistema nada mais é o que, anteriormente, eu me referia como Projeto (linha 57, por exemplo).
* No laço a seguir, percorro meu array e comparo com a posição da url que deveria ter o nome de um dos sistemas, se coincidir:
* - atribui o valor true a variávvel sistema_encontrado
* - adicionado o nome do arquivo ao loadjs
* - Caso contrário, não faça nada e vá para a próxima iteração do for
* */
for(var i = 0; i < sistemas.length; i++) {
	// Se encontrar o nome do sistema na url, adicione o arquivo "path+/scripts/nome_sistema/nome_do_controller.js" ao loadjs
	if(url.indexOf(sistemas[i]) != -1) {
		loadjs.push(sistemas[i]+"/"+arquivo[arquivo.indexOf(sistemas[i])+1]);
		loadjs.push(sistemas[i]+"/"+arquivo[arquivo.indexOf(sistemas[i])]);
		var sistema_encontrado = true;
		break;
	}
}

/*
* Se acessarmos a tela do link "Sistema 1", que carrega a Home do Sistema 1, podemos notar que irá carregar um arquivo também chamado
* de home.js, porém, se observar o caminho desse arquivo verá que está apontando para "path+/scripts/Sistema1/home.js". Isso porque a aplicação
* encontrou um sistema chamado Sistema1 e um método home, logo, buscou na pasta Sistema1 o arquivo js referente a essa tela, nesse caso a home.
*
* Se o sistema não for encontrado, significa que não estamos acessando um de nossos Sistemas, ou nem ao menos passamos pelo login neste caso,
* setamos o caminho do js para a pasta "sistema", que é a pasta onde guardamos nossos scripts sem vínculo a nenhum sistema específico.
* Em resumo, não estou acessando nem Sistema1 e nem Sistema 2
* */
if(sistema_encontrado !== true) {
	loadjs.push('sistema/'+arquivo[arquivo.indexOf('sistemas')+1]);
}

/*
* Definidas as configurações e arquivos a serem carregados, vamos ao requirejs:
* Parâmtros:
* 	1. Array de arquivos a carregar
* 	2. Função que irá definir os módulos a serem carregados
* */
requirejs(loadjs, function($, Vue){
    console.log(loadjs);
	/*
	* loadjs possui: ["jquery", "vue", "bootstrap", "jquerymask", "sistema", "sistema/pagina_que_estou_carregando"]
	* Então a string do index = 5 eu "quebro" pela barra, removo o último, ítem e jogo o valor na variável modulo
	* porque...
	* */
	var nome_sistema = loadjs[5].split('/')[0];
	var modulo = loadjs[5].split('/').pop();

	// ...o objeto window do possui uma propriedade com o nome da nossa página...
	var objeto = window[modulo];

	// ...então eu crio uma nova instância a partir dele utilizando Object.create()
	var Instance = Object.create(objeto);

	/*
	 * Nessa nova instância eu acesso o método init, que todos os JSs que eu criar deverão ter, por se tratar de um método de entrada
	 * através dele irei passr por parâmetro o objeto jQuery com o conteúdo da página e um objeto chamado Vue com a instância do mesmo.
	 * A partir disso terei acesso ao dom podendo utilizar o jquery e o vue para manipulação dos objetos
 	 * */
	Instance.init($(document), Vue);

	/*
	* Para melhor entendimento, visualize os arquivos:
	*
	* assets\js\scripts\sistema\home.js
	* assets\js\scripts\Sistema1\home.js
	* assets\js\scripts\Sistema2\home.js
	* */

	// Em posse dos nomes de sistema e tela que irei acessar, posso carregar os CSSs dinamicamente através do vue utilizando sua reatividade
	var vueCss = new Vue({
		el: 'head',
		data: {
			css_global: this.path.replace('js', 'css/scripts/global.css'),
			css_sistema: this.path.replace('js', 'css/scripts/'+nome_sistema+'/'+nome_sistema+'.css'),
			css_page: this.path.replace('js', 'css/scripts/'+nome_sistema+'/'+modulo+'.css')
		}
	});

	/*
	 * E aproveito para definir em um só local que os campos de valores monetários (input's HTML) que possuirem a class mask-money
	 * deverão ter seu conteúdo formatado conforme eu estipular, pois o requireJS irá executar tudo que estiver aqui nessa função
	 * que é o segundo parâmetro do objeto "requirejs"
	 * */
	$('.mask-money').mask(
        '#.##0,00',
        {
            reverse: true,
            placeholder: '0,00'
        }
    );

});
