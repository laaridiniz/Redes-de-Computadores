<h1 align="center"> Docker </h1>

## Conceito

<p align="justify">O Docker é um software de código aberto usado para implantar aplicativos dentro de contêineres virtuais. Esse procedimento é denominado conteinerização e ganhou bastante espaço no mundo da tecnologia ao permitir que vários aplicativos funcionem em diferentes ambientes complexos, sem que seja necessário utilizar mais de uma máquina para tanto.
  <br><br>
Em termos gerais, é possível dizer que em contêiner é um pacote de software com todas as dependências necessárias para executar um aplicativo específico. Todas as configurações e instruções para iniciar ou parar contêineres são ditadas pela imagem do Docker. Sempre que um usuário executa uma imagem, um novo container é criado.
  <br><br>
O uso de contêineres do Docker poupa aos usuários o incômodo de solucionar possíveis problemas de compatibilidade entre sistemas. Isso porque, com o Docker, um software é executado da mesma forma em todos os ambientes.</p>

## Entrega

<p align="justify">Para trabalhar com o docker-compose e o orquestramento de serviços, foi utilizado um sistema de CRUD responsável pelo cadastro de alunos de uma instituição de ensino. O docker-compose foi configurado para executar um serviço de front-end (client), que faz a renderização de elementos visuais a partir dos componentes React JS, e um serviço de back-end (server), que trata os dados inseridos na aplicação por meio do TypeORM.</p>

Para chegar ao resultado esperado, foram executadas as seguintes instruções:

- Clonar projeto do github
- Criar um dockerfile para a pasta client e outro para a pasta server
- Criar um arquivo docker-compose na pasta raiz do projeto
- Gerar build (docker build -t <nome da imagem> <local>)
- Executar o docker-compose (docker-compose up).

Obs.: É possível executar o docker-compose e fazer o build da aplicação simultaneamente utilizando o comando ```docker-compose up --build``` na raiz do projeto.

## Resultado

![tela-cadastro](https://github.com/laaridiniz/Redes-de-Computadores/assets/86115352/d321a677-5fc7-4a46-aa7e-2e0db53c2b6d)

![tela-listagem](https://github.com/laaridiniz/Redes-de-Computadores/assets/86115352/d72ad92b-5d09-45de-b1bb-5c43418e1279)

## Referências

[Documentação Docker](https://www.docker.com/)

[O Que é Docker e Como Ele Funciona?](https://www.hostinger.com.br/tutoriais/o-que-e-docker#O_que_e_Docker)

[O que é o Docker?](https://www.ibm.com/br-pt/topics/docker)

[Repositório do Professor](https://github.com/jeancosta4/Docker/tree/main)
