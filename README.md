# Projeto Alicerce

### Idéia Inicial
###### Criar a estrutura/base para que possamos criar aplicações web sem perder tempo com algumas configurações iniciais que tendem a ser repetidas e dificilmente são modam com o tempo

### Bibliotecas Utilizadas
* Codeigniter
* jQuery
* jQueryMask
* VueJS 
* Bootstrap
* RequireJS
* Ícones FontAwesome

### Configurações
* O projeto carrega as bibliotecas citadas acima sem nenhuma configuração adicional
* Retira, via .htaccess, o "index.php" da url que é um configuração defaul do CI
* Possui na pasta "arquivos" o script que cria uma base de dados para utilizar o sistema de login, cria o schema e uma tabela de usuários
* Alguns padrões de estutura e nomenclatura devem ser seguidos. Estes estão exemplificados e explicados nos comentários dos arquivos:
  principalmente em: sistemas\assets\js\libs\require-main.js 
  
### Resumo
###### Para criarmos uma nova aplicação web basta clonar esse projeto e estruturar seu código para atender suas regras de negócio, respeitando alguns poucos padrões de nomenclatura, bem como os padrões de desenvolvimento do CodeIgniter  