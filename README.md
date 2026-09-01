# PixelHub 🎮👾

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Uma central web interativa para catalogação, busca e exibição dinâmicas de jogos digitais.

---

## 💻 Sobre o Projeto

O **PixelHub** é uma plataforma web criada com o objetivo de centralizar informações sobre diversos jogos de videogames, pc e mobile em um só lugar. Através de um layout intuitivo e responsivo, os usuários podem explorar uma biblioteca variada de títulos, visualizar avaliações (gerais e da comunidade) e acessar diretamente os sites oficiais dos jogos.

Este projeto foi desenvolvido aplicando os conceitos da metodologia **S.T.E.A.M.** (*Science, Technology, Engineering, Arts, and Mathematics*), unindo a lógica da programação de computadores com o design e a experiência do usuário (UX/UI).

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

## 📁 Estrutura do Arquivo

```text
├── index.html     # Estrutura principal da página web
├── style.css      # Estilização visual e responsividade
└── script.js      # Banco de dados de jogos e lógica de interação/busca
