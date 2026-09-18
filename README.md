# PixelHub 🎮👾

![Interface do PixelHub](https://hubportifolio.netlify.app/img/projeto1.png)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Uma central web interativa para catalogação, busca e exibição dinâmicas de jogos digitais.

---

## 💻 Sobre o Projeto

O **PixelHub** é uma plataforma web criada com o objetivo de centralizar informações sobre diversos jogos de diferentes plataformas (PlayStation, XBOX, Nintendo, Steam, Epic Games etc.) em um só lugar. Através de um layout intuitivo e responsivo, os usuários podem explorar uma biblioteca variada de títulos, visualizar avaliações (gerais e da comunidade) e acessar diretamente os sites oficiais dos jogos.

Esse projeto destaca conceitos de manipulação do DOM, organização de dados em objetos, layout responsivo e estilização com uma interface inspirada na identidade visual de cada jogo.

---

## ⚙️ Funcionalidades

- **Catálogo Dinâmico:** Carregamento dinâmico de cards de jogos a partir de uma estrutura de dados em JavaScript (`Array` de objetos).
- **Busca em Tempo Real:** Filtro de pesquisa instantâneo por nome que atualiza a tela à medida que o usuário digita.
- **Personalização Visual:** Cada card e botão de direcionamento possui a cor temática referente ao jogo exibido.
- **Navegação Prática:** Botão flutuante "Voltar ao topo!" para facilitar a rolagem em telas longas ou em dispositivos móveis.
- **Links Externos:** Acesso rápido à página ou loja oficial de cada título.

---

## 📊 Estrutura de Exibição do Catálogo

Abaixo está uma amostra do formato como os dados dos jogos são organizados na plataforma:

| Jogo | Gênero | Avaliação Geral | Avaliação Jogadores |
| :--- | :--- | :---: | :---: |
| **Minecraft** | Sandbox \| Aventura \| RPG | 10 / 10 🏆 | 5 / 5 ⭐ |
| **Stardew Valley** | Simulador \| Sandbox \| RPG | 10 / 10 🏆 | 4.8 / 5 ⭐ |
| **Astro Bot** | Plataforma 3D \| Aventura | 9.5 / 10 🏆 | 5 / 5 ⭐ |
| **Super Mario Odyssey** | Plataforma 3D \| Mundo Aberto | 10 / 10 🏆 | 5 / 5 ⭐ |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página, incluindo cabeçalhos, barra de busca, contêineres e estrutura de navegação.
- **CSS3:** Estilização visual, layout responsivo (Grid / Flexbox), estilização dos cards, botões interativos e efeitos visuais.
- **JavaScript (Vanilla):**
  - Manipulação dinâmica do DOM para injeção de HTML via *Template Literals*.
  - Lógica do mecanismo de busca (*case-insensitive*) utilizando manipuladores de eventos (`input` / `onkeyup`).
  - Iteração e manipulação de arrays de dados (`forEach`, `includes`).

---

## 🌎 Teste meu projeto no seu navegador! 

- **Pixelhub:** [VEJA ESTE PROJETO NO SEU NAVEGADOR!](https://pixelhhub.netlify.app/)

---

## 📁 Estrutura do Arquivo

```text
├── index.html     # Estrutura principal da página web
├── style.css      # Estilização visual e responsividade
└── script.js      # Dados dos jogos e lógica de interação/busca
```

---

*O PixelHub inicialmente não foi uma aplicação pensada para outros usuários, apenas para mim, mas que ganhou uma nova versão totalmente atualizada, responsiva e com muita lógica Javascript. Aproveite o código!*

