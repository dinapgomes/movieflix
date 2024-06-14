#  1. Camada de Apresentação (Presentation Layer)
### Pacotes e Arquivos:

* **components**
  *  /Card/
     * Classes/Componentes: Arquivos JSX ou JS que definem componentes de cartão.
  * CardRecommendation/
     * Classes/Componentes: Arquivos JSX ou JS que definem componentes de recomendação de cartões.
  * ListMovie/
     * Classes/Componentes: Arquivos JSX ou JS que definem componentes de lista de filmes.
  * NavBar/
     * Classes/Componentes: Arquivos JSX ou JS que definem componentes de navegação.
* **pages/**
  * Details.jsx
    * Classes/Componentes: Componente de página de detalhes.
  * Home.jsx
     * Classes/Componentes: Componente de página inicial.

### Responsabilidade:

Renderizar a interface do usuário.
Exibir dados e capturar entradas do usuário.
Coordenar a navegação entre diferentes páginas da aplicação.



# 2. Camada de Aplicação (Application Layer)
### Pacotes e Arquivos:

App.jsx
Classes/Componentes: Componente raiz da aplicação que orquestra outros componentes.
main.jsx
Classes/Componentes: Ponto de entrada da aplicação que inicializa e renderiza o componente raiz (App.jsx).

### Responsabilidade:

Orquestrar a lógica de negócios da aplicação.
Implementar casos de uso e regras de negócios específicas.
Servir como intermediário entre a Camada de Apresentação e a Camada de Domínio.



# 3. Camada de Infraestrutura (Infrastructure Layer)
### Pacotes e Arquivos:

vite.config.js
Classes/Componentes: Arquivo de configuração para o Vite, que lida com a construção e desenvolvimento da aplicação.

### Responsabilidade:

Fornecer serviços técnicos, como persistência de dados, comunicação com outros sistemas e configuração do ambiente.
Implementar repositórios, gateways e serviços de infraestrutura.

