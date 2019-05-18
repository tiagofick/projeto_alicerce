/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 05/05/2019
 * Descrição: Home do projeto
 *
 * @param content traz o conteudo da página
 * podemos manipular determinado componente do DOM utilizando
 * content.find('div.container-fluid') por exemplo
 *
 * @param Vue é a instância do Vue para que possamos utilizar a biblioteca
 * @method init todos os JS devem ter esse método, pois é o ponto de partida para termos acesso ao conteúdo
 */

var home = {
    init: function(content, Vue) {
        new Vue({
            el: '#teste',
            data: {
                mensagem: 'Esta mensagem foi impressa utilizando VueJS'
            }
        });
        content.find('#teste').append('<br />E aqui concatenamos uma string usando JQuery.append ');
    }
}