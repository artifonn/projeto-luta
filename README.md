# Projeto Arena de Luta

O **Projeto Arena de Luta** é uma simples aplicação web desenvolvida em HTML, CSS e JavaScript que simula uma batalha entre personagens. Este projeto oferece uma oportunidade de explorar conceitos essenciais de desenvolvimento web, incluindo OOP (Programação Orientada a Objetos), manipulação do DOM, estilização com CSS e interatividade com JavaScript.

## Estrutura do Projeto

O código-fonte consiste em três principais componentes: classes JavaScript, estilos CSS e o arquivo HTML que integra e utiliza essas classes.

### Classes JavaScript

#### `Character`

A classe `Character` é a classe base para todos os personagens no jogo. Ela define propriedades comuns como vida, ataque e defesa, bem como métodos para obter e definir a vida.

#### `Knight` e `Sorcerer`

As classes `Knight` e `Sorcerer` herdam da classe `Character` e representam os personagens jogáveis do jogo. Cada uma possui atributos específicos, como vida inicial, ataque e defesa.

#### `LittleMonster` e `BigMonster`

Assim como os personagens jogáveis, os monstros, representados pelas classes `LittleMonster` e `BigMonster`, herdam da classe `Character`.

#### `Stage`

A classe `Stage` é responsável pela lógica do jogo. Ela gerencia a interação entre os personagens, atualiza a interface do usuário e registra as ações em um log.

#### `Log`

A classe `Log` é responsável por gerenciar e renderizar mensagens em um log na interface do usuário.

### Estilos CSS

O arquivo `styles.css` define a estilização visual da aplicação. Ele utiliza uma paleta de cores atraente, estabelece um layout flexível e incorpora transições suaves para melhorar a experiência do usuário.

### HTML

O arquivo HTML (`index.html`) cria a estrutura da página web, importa os estilos e scripts necessários e integra os elementos da interface do usuário.

## Como Jogar

Ao abrir a página, os jogadores são apresentados a dois personagens: um cavaleiro e um monstro. Cada personagem tem sua própria barra de vida e botão de ataque. O jogador pode clicar nos botões de ataque para simular uma rodada de combate. As ações e resultados são registrados em um log na parte inferior da página.

Divirta-se com o **Projeto Arena de Luta**!
