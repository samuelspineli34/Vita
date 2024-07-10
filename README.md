# Vita
 Simulador biológico, contando com diferentes espécies de animais, plantas e 4 tipos diferentes de biomas.
 
Autores:
Samuel Spineli
Walker Freitas

# Dependência e outras coisas pra rodar o programa 
npm install \
npm start

O programa roda localmente na porta 9000: http://localhost:9000/

# Distribuição dos arquivos

A pasta **dist** (abreviação de "distribution") é onde os arquivos de saída compilados são armazenados. Esta pasta é gerada pelo Webpack durante o processo de construção e contém os arquivos finais que serão servidos ao navegador.

A pasta **src** (abreviação de "source") contém os arquivos de código-fonte do seu projeto, ou seja, o backend e as funções que vão ser usadas posteriormente no frontent (dist).

A pasta **node_modules/** é gerada automaticamente pelo npm (Node Package Manager) onde é instaladas as dependências. 

O arquivo **package.json** é fundamental para o gerenciamento do projeto. Ele contém informações sobre o projeto, como nome, versão, scripts, dependências e desenvolvedores. Alguns pontos importantes:

    dependencies: Lista os pacotes necessários para o funcionamento do seu projeto em tempo de execução.
    devDependencies: Lista os pacotes necessários apenas durante o desenvolvimento, como ferramentas de compilação e servidores de desenvolvimento.
    scripts: Define comandos de atalho que você pode executar com **npm run <script>**,
    Por exemplo, npm start para iniciar o servidor de desenvolvimento e npm build para compilar o projeto.

O arquivo de configuração **tsconfig.json** é usado pelo TypeScript para determinar como o código TypeScript deve ser compilado para JavaScript. Ele inclui opções como o alvo de compilação (ES6), módulo (CommonJS) e diretório de saída.

    compilerOptions: Configurações que controlam a compilação do TypeScript, como a versão do ECMAScript alvo, o módulo, a geração de mapas de fonte, entre outros.
    include: Especifica quais arquivos e diretórios devem ser incluídos na compilação.

O arquivo de configuração **webpack.config.js** é usado pelo Webpack para definir como os arquivos do projeto devem ser processados e empacotados. Ele inclui definições de entrada, saída, regras de carregamento de módulos, servidor de desenvolvimento e plugins.

    entry: O ponto de entrada do seu aplicativo, onde o Webpack começa a construir a dependência.
    output: Define onde o arquivo de saída compilado será colocado.
    module.rules: Define os carregadores (loaders) que processam diferentes tipos de arquivos.
    devServer: Configura o servidor de desenvolvimento, que serve os arquivos compilados, recarrega a página automaticamente em mudanças de código, entre outras funcionalidades.

O arquivo **package-lock.json** garante que as dependências do seu projeto sejam instaladas de maneira consistente em todas as máquinas e ambientes. Ele bloqueia as versões exatas dos pacotes e suas dependências, garantindo que o ambiente de desenvolvimento, teste e produção utilizem exatamente os mesmos pacotes.
