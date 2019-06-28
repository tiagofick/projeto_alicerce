/**
 * @author Tiago Fick <contato@tiagofick.com.br>
 * @version 1.0
 * Data: 19/06/2019
 * Descrição: JS Global do sistema
 */

var sistema = {

    string_to_br_money: function(stringMoney) {
        var numberMoney = parseFloat(stringMoney).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return numberMoney;
    }

}
