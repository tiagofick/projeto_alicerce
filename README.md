# Projeto Alicerce

### Idéia Inicial
###### Criar a estrutura/base para que possamos criar aplicações web sem perder tempo com algumas configurações iniciais que tendem a ser repetidas e dificilmente mudam com o passar tempo

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
* Retira, via .htaccess, o "index.php" da url que é uma configuração default do CI
* Possui na pasta "arquivos" o script que cria uma base de dados para utilizar o sistema de login, cria o schema e uma tabela de usuários
* Alguns padrões de estutura e nomenclatura devem ser seguidos. Estes estão exemplificados e explicados nos comentários dos arquivos.
  Principalmente em: sistemas\assets\js\libs\require-main.js 
  
### Resumo
###### Para criarmos uma nova aplicação WEB, basta clonar esse projeto e iniciar a codificação atendendo a estrutura MVC do Codeigniter e alguns padrões de nomeclatura de arquivos.  