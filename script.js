const games = [{
      nome: "Minecraft",
      imagem: "https://m.media-amazon.com/images/I/81gsSy5r13L.png",
      genero: "Sandbox | Aventura | RPG | Criativo",
      sinopse: "Minecraft é um jogo eletrônico sandbox de sobrevivência de 2011 desenvolvido e publicado pela desenvolvedora sueca Mojang Studios!",
      avaliacao1: "10",
      avaliacao2: "5",
      site: "https://www.minecraft.net",
      cor: "green"
   },
   {
      nome: "Super Bear Adventure",
      imagem: "https://m.media-amazon.com/images/I/71TWApDZTQL.png",
      genero: "Sandbox | Aventura | Ação | Exploração",
      sinopse: "Super Bear Adventure é um jogo de plataforma 3D inspirado em clássicos dos anos 90, onde você controla o urso Baaren para salvar um reino mágico de uma ameaça desconhecida.",
      avaliacao1: "8.5",
      avaliacao2: "4.6",
      site: "https://www.nintendo.com/pt-br/store/products/super-bear-adventure-switch/?srsltid=AfmBOoqCBMY7gM82VDzhHKXxKt1CsIVPs-5LYzpMKGJpLE0QMIHL_JAM",
      cor: "#964B00"
  },
  {
      nome: "Pokémon TCG Pocket",
      imagem: "https://dxkck1miuebqc.cloudfront.net/books/373915/preview/cover_front_big.jpg",
      genero: "Competitivo | Criativo | Card game | Social",
      sinopse: "Pokémon TCG Pocket é um jogo mobile focado na coleta simplificada e batalhas rápidas de cartas Pokémon.",
      avaliacao1: "8",
      avaliacao2: "4",
      site: "https://tcgpocket.pokemon.com/en-us/",
      cor: "yellow"
  },
  {
      nome: "Brawl Stars",
      imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Brawl_Stars_logo_2025.svg/500px-Brawl_Stars_logo_2025.svg.png",
      genero: "Competitivo | MOBA | Multiplayer | Casual",
      sinopse: "Brawl Stars é um jogo de tiro multiplayer rápido (3x3 e Battle Royale) desenvolvido pela Supercell, lançado globalmente em 2018 para iOS e Android. Com estilo cartoon e visão superior, os jogadores escolhem Brawlers com habilidades únicas para disputar modos competitivos, focado em trabalho de equipe, estratégia e reflexos rápidos.",
      avaliacao1: "8",
      avaliacao2: "4.8",
      site: "https://store.supercell.com/pt/brawlstars",
      cor: "#FF0000"
  },
  {
     nome: "Pokémon UNITE",
     imagem: "https://sm.ign.com/t/ign_ap/cover/p/pokemon-un/pokemon-unite_g4zw.1200.jpg",
     genero: "Ação | MOBA | Casual | Competitivo",
     sinopse: "Pokémon UNITE é um jogo gratuito de arena de batalha multijogador online (MOBA) estilo 5v5, desenvolvido pela TiMi Studios e The Pokémon Company.",
     avaliacao1: "7.5",
     avaliacao2: "3.2",
     site: "https://unite.pokemon.com/en-us/",
     cor: "#A020F0"
  },
  {
     nome: "PEAK",
     imagem: "https://cdn.gameboost.com/igdb/covers/349524/coat49.jpg",
     genero: "Sandbox | Ação | Aventura | Simulador",
     sinopse: "PEAK é um jogo cooperativo de escalada e sobrevivência que se tornou um sucesso viral no PC (Steam) em 2025, conhecido por testar a amizade e exigir coordenação precisa entre os jogadores.",
     avaliacao1: "8.6",
     avaliacao2: "4.2",
     site: "https://store.steampowered.com/app/3527290/PEAK/",
     cor: "#fff"
  },
  {
     nome: "A webbing journey",
     imagem: "https://cdn2.steamgriddb.com/logo_thumb/a00f813395b2a9678a4c9ee177ab95ae.png",
     genero: "Aventura | Sandbox | Puzzle | Casual",
     sinopse: "A Webbing Journey é um charmoso jogo de aventura e sandbox 3D desenvolvido pela Fire Totem Games, onde você controla uma aranha fofa com a missão de ajudar seus humanos favoritos com tarefas domésticas.",
     avaliacao1: "9.5",
     avaliacao2: "4.5",
     site: "https://store.steampowered.com/app/2073910/A_Webbing_Journey/",
     cor: "#FFA500"
  },
  {
     nome: "Human: Fall flat",
     imagem: "https://sttc.gamersgate.com/images/product/human-fall-flat/cover-616-85cdba.jpg",
     genero: "Puzzle | Coperativo | Plataforma | Indie",
     sinopse: "Human: Fall Flat é um hilariante jogo de plataformas com física num mundo de paisagens de sonho flutuantes. Cada nível de sonho fornece um novo ambiente para navegar, desde mansões, castelos e aventuras astecas até montanhas cobertas de neve, paisagens noturnas sinistras e instalações industriais.",
     avaliacao1: "8.5",
     avaliacao2: "4",
     site: "https://store.steampowered.com/app/477160/Human_Fall_Flat/",
     cor: "green"
  },
  {
     nome: "Pac-Man",
     imagem: "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/www.fizzcreations.com/wp-content/uploads/2020/01/PAC-MAN-Banner-768x385.jpg",
     genero: "Ação | Arcade | Retrô | Casual",
     sinopse: "Pac-Man é um clássico jogo de labirinto de 1980 onde o jogador controla uma criatura amarela circular que deve comer todos os pontos (Pac-Dots) em um labirinto.",
     avaliacao1: "8.5",
     avaliacao2: "4.5",
     site: "https://www.pacman.com/en/",
     cor: "#ffff00"
  },
  {
     nome: "Astro Bot",
     imagem: "https://www.hoerzu.de/_default_upload_bucket/10251/image-thumb__10251__stage-content/AstroBot%202.bda1b6b0.webp",
     genero: "Plataforma 3D | Aventura | Ação | Casual",
     sinopse: "Astro Bot é um jogo eletrônico de plataforma de 2024 desenvolvido pela Team Asobi e publicado pela Sony Entertainment para o PlayStation 5.",
     avaliacao1: "9.5",
     avaliacao2: "5",
     site: "https://www.playstation.com/pt-br/games/astro-bot/",
     cor: "#0000FF"
  },
  {
     nome: "Pokémon GO",
     imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Pokemon_Go.svg/500px-Pokemon_Go.svg.png",
     genero: "Free to Play | Competitivo | Casual",
     sinopse: "Pokémon GO é um jogo de realidade aumentada (RA) para dispositivos móveis (iOS e Android), lançado em 2016 pela Niantic, Nintendo e The Pokémon Company.",
     avaliacao1: "7.8",
     avaliacao2: "3",
     site: "https://pokemongo.com/pt_br",
     cor: "#FFA500"
  },
  {
     nome: "Nyan Cat: Lost In Space",
     imagem: "https://cdn.soft112.com/nyan-cat-lost-in-space/00/00/0F/PJ/00000FPJ38/Nyan-Cat---1.png",
     genero: "Pixel Art | Plataforma 2D | Casual",
     sinopse: "Nyan Cat: Lost In Space é um jogo de plataforma arcade e corredor infindável (endless runner) onde você guia o famoso gato com corpo de Pop-Tart, deixando um rastro de arco-íris, pelo espaço sideral.",
     avaliacao1: "8.5",
     avaliacao2: "3.8",
     site: "https://store.steampowered.com/app/415420/Nyan_Cat_Lost_In_Space/",
     cor: "magenta"
  },
  {
     nome: "Plants vs. Zombies",
     imagem: "https://static.wikia.nocookie.net/plants-vs-zombies/images/0/01/Pvz_logo_stacked_rgb.png/revision/latest?cb=20250317165444&path-prefix=pt-br",
     genero: "Estratégico | Casual | Shooter",
     sinopse: "Plants vs. Zombies (PvZ) é uma franquia de jogos de estratégia criada por George Fan, onde plantas geneticamente modificadas defendem um quintal contra zumbis liderados pelo Dr. Edgar Zumbão (Zomboss).",
     avaliacao1: "8.5",
     avaliacao2: "4",
     site: "https://www.ea.com/pt-br/games/plants-vs-zombies",
     cor: "green"
  },
  {
     nome: "Hello Neighbor",
     imagem: "https://m.media-amazon.com/images/I/71eMlFEtxiL._AC_UF1000,1000_QL80_FMwebp_DpWeblab_.jpg",
     genero: "Sandbox | Puzzle | Aventura",
     sinopse: "Hello Neighbor é um jogo de stealth horror (terror furtivo) e quebra-cabeça, onde o objetivo é invadir a casa do vizinho para descobrir segredos sombrios escondidos no porão.",
     avaliacao1: "9",
     avaliacao2: "3.5",
     site: "https://www.helloneighborgame.com/",
     cor: "brown"
  },
  {
     nome: "Hello Neighbor 2",
     imagem: "https://m.media-amazon.com/images/I/81sLBtfELML._AC_UF1000,1000_QL80_FMwebp_.jpg",
     genero: "Terror furtivo | Aventura | Estratégico",
     sinopse: "Hello Neighbor 2 é um jogo de terror furtivo onde você controla Quentin, um jornalista investigativo na cidade de Raven Brooks.",
     avaliacao1: "7.2",
     avaliacao2: "3",
     site: "https://www.helloneighbor2.com/",
     cor: "#ff0000"
  },
  {
     nome: "Zenless Zone Zero",
     imagem: "https://upload-os-bbs.hoyolab.com/upload/2024/12/03/430244924/681cd2991a995d9ea2461413dd9cb6d9_5732060706216801261.png?x-oss-process=image%2Fresize%2Cs_1000%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp",
     genero: "RPG | Simulador | Ação | Gacha",
     sinopse: "Zenless Zone Zero (ZZZ) é um RPG de ação e fantasia urbana da HoYoverse, ambientado em um mundo pós-apocalíptico destruído por desastres sobrenaturais chamados Esferas Negras (Hollows)",
     avaliacao1: "8.5",
     avaliacao2: "4",
     site: "https://zenless.hoyoverse.com/m/en-us/main",
     cor: "#FFA500"
  },
  {
     nome: "Fall Guys",
     imagem: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/en_US/articles/2022/fall-guys-is-available-now-and-free-to-play/1920x1980_Switch_News_FallGuys",
     genero: "Ação | Plataforma | Party Royale | Causal",
     sinopse: "Fall Guys é um jogo party royale gratuito, multiplataforma e multijogador, onde até 60 competidores enfrentam pistas de obstáculos caóticas inspiradas em gincanas.",
     avaliacao1: "8",
     avaliacao2: "4.5",
     site: "https://www.fallguys.com/?lang=pt-BR",
     cor: "#1F51FF"
  },
  {
     nome: "Overcooked! 2",
     imagem: "https://image.api.playstation.com/cdn/EP4064/CUSA10870_00/xWWemobK1Xc5DLDDWaeHgQPX4qUlNjYKEBVfjXfEwb3sIvR5aMNaFfJo9tfvhVDY.png?w=780&thumb=false",
     genero: "Simulação | Coperativo | Ação | Puzzle",
     sinopse: "Em Overcooked! 2, os jogadores retornam ao Reino da Cebola para salvar o mundo mais uma vez, agora enfrentando a ameaça dos Pães Zumbis (The Unbread).",
     avaliacao1: "9",
     avaliacao2: "4.6",
     site: "https://store.steampowered.com/app/728880/Overcooked_2/",
     cor: "#CCFF00"
  },
  {
     nome: "Overcooked",
     imagem: "https://www.wog.ch/nas/cover_large/pcd/pcd_overcooked.jpg",
     genero: "Ação | Simulação | Indie | Coperativo",
     sinopse: "Overcooked é um jogo caótico de simulação de culinária cooperativa, onde o objetivo principal é preparar, cozinhar e servir pratos específicos antes que os clientes fiquem impacientes.",
     avaliacao1: "9",
     avaliacao2: "4",
     site: "https://www.nintendo.com/pt-br/store/products/overcooked-special-edition-switch/?srsltid=AfmBOopMX2L7hFhiio0nOKbn0kLkoRE1ReFeXYW04o-WkkYt7PdfJDuY",
     cor: "#7FFF00"
  },
  {
     nome: "Stardew Valley",
     imagem: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
     genero: "Simulador | Sandbox | RPG | Exploração",
     sinopse: "Stardew Valley é um RPG de simulação de vida no campo onde você herda a fazenda decadente do seu avô. Armado com ferramentas velhas e poucas moedas, seu objetivo é transformar o terreno abandonado em um lar próspero, cultivando, criando animais, pescando e interagindo com os moradores da Vila Pelicanos.",
     avaliacao1: "10",
     avaliacao2: "4.8",
     site: "https://www.stardewvalley.net/",
     cor: "#0000ff"
  },
  {
     nome: "Tomb of the Mask: Old Maze",
     imagem: "https://static.wikia.nocookie.net/tomb-of-the-mask/images/1/1a/TotM_Icon_%28Version_1.7.13%29.png/revision/latest?cb=20220730030729",
     genero: "Arcade | Puzzle | Casual | Estratégico",
     sinopse: "Tomb of the Mask é um jogo de arcade com labirintos verticais e uma variedade de inimigos e power-ups. No início do jogo, encontre uma máscara estranha que permitirá que você escale as paredes de forma fácil e rápida e embarque em uma aventura dinâmica de pixel!",
     avaliacao1: "8",
     avaliacao2: "3.5",
     site: "https://tombofthemask.org/",
     cor: "#9d00ff"
  },
  {
     nome: "PAC-MAN 256 Endless Maze",
     imagem: "https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/Vy7gnwAPRXylN0fyNsxI",
     genero: "Arcade | Ação | Endless Runner | Casual",
     sinopse: "PAC-MAN 256 é um jogo de labirinto infinito onde você deve fugir da Falha (um enorme erro de código pixelado que consome a tela) enquanto come pastilhas e desvia de fantasmas.",
     avaliacao1: "8.5",
     avaliacao2: "4.2",
     site: "https://www.bandainamcoent.com/games/pacman-256",
     cor: "#FFFF00"
  },
  {
     nome: "Plants vs Zombies 2",
     imagem: "https://macmagazine.com.br/wp-content/uploads/2013/07/12-PvZ2-logo.png",
     genero: "Casual | MOBA | Puzzle | Sandbox",
     sinopse: "Plants vs. Zombies 2 é um jogo de estratégia em que você utiliza um exército de plantas com habilidades únicas para defender o seu cérebro de hordas de zumbis.",
     avaliacao1: "8",
     avaliacao2: "4.5",
     site: "https://pvzge.com/en/",
     cor: "green"
  },
  {
     nome: "Fluffy Fall",
     imagem: "https://fluffyfall.com/img/logo.png",
     genero: "Casual | Arcade | Endless Runner 3D",
     sinopse: "Fluffy Fall é um jogo de corrida e desvio (runner infinito) onde você guia uma criatura adorável, macia e colorida por túneis e labirintos tridimensionais cheios de armadilhas mortais.",
     avaliacao1: "9.4",
     avaliacao2: "4.5",
     site: "https://fluffyfall.com/",
     cor: "#FF033E"
  },
  {
     nome: "Animal Crossing",
     imagem: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000027620/1.1_2000x2000_ProductTile_Switch_AnimalCrossingNewHorizons_KeyVisual_enGB_v1_100q",
     genero: "Simulador de vida | Casual | Sandbox",
     sinopse: "Animal Crossing é uma famosa franquia de jogos de simulação de vida da Nintendo. Você assume o papel de um humano que se muda para uma comunidade habitada por animais antropomórficos.",
     avaliacao1: "9",
     avaliacao2: "3.8",
     site: "https://animalcrossing.nintendo.com/",
     cor: "#FFD700"
  },
  {
     nome: "Super Mário Odyssey",
     imagem: "https://m.media-amazon.com/images/I/81nHzMe0lrL._AC_UF1000,1000_QL80_FMwebp_.jpg",
     genero: "Plataforma 3D | Aventura | Mundo aberto",
     sinopse: "Super Mario Odyssey é um jogo de plataforma 3D para Nintendo Switch onde Mario e seu novo aliado, Cappy, viajam pelo mundo a bordo da nave Odyssey. A missão da dupla é resgatar a Princesa Peach e Tiara, que foram sequestradas pelo vilão Bowser para realizar um casamento à força.",
     avaliacao1: "10",
     avaliacao2: "5",
     site: "https://supermario.nintendo.com/",
     cor: "#ff0000"
  },
  {
     nome: "Super Mário Kart 8 Deluxe",
     imagem: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/store/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453",
     genero: "Arcade | Competitivo | Casual | Sandbox",
     sinopse: "Mario Kart 8 Deluxe é a edição definitiva do clássico jogo de corrida da Nintendo, lançada para o Nintendo Switch. O título reúne o jogo base do Wii U, todos os conteúdos adicionais (DLCs) originais e novidades exclusivas, oferecendo mais de 96 pistas e dezenas de personagens jogáveis.",
     avaliacao1: "9",
     avaliacao2: "4",
     site: "https://mariokart8.nintendo.com/",
     cor: "#FF2C2C"
  },
  {
     nome: "Horizon Zero Dawn",
     imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2716/b23608e3b46e3b1f6aebb78a4aa9b1bf4f72a1d99f42ed01.jpg?w=780&thumb=false",
     genero: "Exploração | Mundo aberto | Aventura",
     sinopse: "Horizon Zero Dawn é um jogo de ação e RPG em mundo aberto ambientado num futuro pós-apocalíptico onde a Terra é dominada por criaturas robóticas gigantes. A história segue Aloy, uma caçadora exilada que busca descobrir a verdade sobre seu passado, suas origens e o mistério que causou a destruição da antiga civilização humana.",
     avaliacao1: "9.5",
     avaliacao2: "4.5",
     site: "https://www.playstation.com/pt-br/horizon/",
     cor: "#a9a9a9"
  },
  {nome: "MouseBot: Escape from CatLab",
     imagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1652710/header.jpg?t=1738820942",
     genero: "Ação | Plataforma 3D | Arcade | Casual",
     sinopse: "MouseBot: Escape from CatLab é um jogo de plataforma e corrida estilo arcade desenvolvido pela Vector Unit. Você controla um simpático ratinho robótico que tenta escapar de um laboratório cheio de armadilhas criadas por gatos cientistas, testando seus reflexos enquanto coleta queijos.humana.",
     avaliacao1: "7.5",
     avaliacao2: "3.6",
     site: "https://store.steampowered.com/app/1652710/MouseBot_Escape_from_CatLab/",
     cor: "#FC4C02"
  },
  {
     nome: "Minecraft: Story Mode",
     imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30eebb1c-8221-4efc-a8af-c4f81488a14d/di919fz-1c71d971-bb7c-4998-be02-026d022c90dd.png/v1/fill/w_730,h_1095,q_70,strp/minecraft_story_mode_poster_accuracy_complete_by_itrashman115_di919fz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiIvZi8zMGVlYmIxYy04MjIxLTRlZmMtYThhZi1jNGY4MTQ4OGExNGQvZGk5MTlmei0xYzcxZDk3MS1iYjdjLTQ5OTgtYmUwMi0wMjZkMDIyYzkwZGQucG5nIiwid2lkdGgiOiI8PTE0MzkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nXGMvoWVo1rPCV06cjSp3hlw4oJRPN2rQem45PzmjHg",
     genero: "Aventura | Point-and-click | Interativo",
     sinopse: "Minecraft: Story Mode é um jogo de aventura interativa onde você controla Jesse, um personagem personalizável. Junto com seus amigos, Jesse embarca em uma jornada épica para encontrar a lendária Ordem da Pedra e impedir que uma monstruosidade conhecida como Witherstorm destrua o mundo.",
     avaliacao1: "7.5",
     avaliacao2: "4.5",
     site: "https://store.steampowered.com/dlc/376870/Minecraft_Story_Mode__A_Telltale_Games_Series/?l=portuguese",
     cor: "green"
  },
  {
     nome: "Aventura no Hotel Transilvânia",
     imagem: "https://cdnb.artstation.com/p/assets/images/images/013/121/161/medium/lara-bendoris-tagweb-panel1600.jpg?1538144868",
     genero: "Comédia | Aventura | Fantasia | Sandbox",
     sinopse: "Hotel Transylvania Adventures é um jogo de plataformas que te transforma em Mavis, a protagonista do filme Hotel Transilvânia. Você poderá interagir com os personagens desta maravilhosa franquia de desenho animado. Assim como em qualquer jogo de plataformas que se preze, Hotel Transylvania Adventures permite que você se movimente horizontalmente pela tela, saltando por diversos tipos de obstáculos. Avance o mais rápido que puder e no menor tempo possível para coletar o máximo de recompensas.",
     avaliacao1: "6",
     avaliacao2: "2.5",
     site: "https://hotel-transylvania-adventures.br.uptodown.com/android",
     cor: "#0033FF"
  },
  {
     nome: "Super Mário Maker",
     imagem: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/store/software/switch/70010000018694/aac100206f1c50349fd2c48595e55603259ae60a4ab4eefc28e71f41efb78b97",
     genero: "Puzzle-Solving | Speedrun | Sandbox",
     sinopse: "Lançado originalmente para Wii U e com versão para Nintendo 3DS, Super Mario Maker não possui uma história tradicional de resgate, mas sim um formato criativo sandbox. O jogo é uma ferramenta de criação e plataforma que permite aos jogadores desenharem, editarem e compartilharem suas próprias fases.",
     avaliacao1: "9",
     avaliacao2: "4.5",
     site: "https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Wii-U/Super-Mario-Maker-892704.html?srsltid=AfmBOoo4RLV7PU-4VTBzlV7Mb-POma2a9kvwEPIdbRbu8sRnsJ_FqL1U",
     cor: "#FFD700"
  },
  {
     nome: "Super Mário Maker 2",
     imagem: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_SuperMarioMaker_v01_image1600w.jpg",
     genero: "Sandbox | Exploração | Puzzle | Speedrun",
     sinopse: "Lançado originalmente para Wii U e com versão para Nintendo 3DS, Super Mario Maker não possui uma história tradicional de resgate, mas sim um formato criativo sandbox. O jogo é uma ferramenta de criação e plataforma que permite aos jogadores desenharem, editarem e compartilharem suas próprias fases.",
     avaliacao1: "8.5",
     avaliacao2: "4.5",
     site: "https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Wii-U/Super-Mario-Maker-892704.html?srsltid=AfmBOoo4RLV7PU-4VTBzlV7Mb-POma2a9kvwEPIdbRbu8sRnsJ_FqL1U",
     cor: "#FFAA1D"
  },
  {
     nome: "Super Mário Maker",
     imagem: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_SuperMarioMaker_v01_image1600w.jpg",
     genero: "Sandbox | Exploração | Puzzle | Speedrun",
     sinopse: "Lançado originalmente para Wii U e com versão para Nintendo 3DS, Super Mario Maker não possui uma história tradicional de resgate, mas sim um formato criativo sandbox. O jogo é uma ferramenta de criação e plataforma que permite aos jogadores desenharem, editarem e compartilharem suas próprias fases.",
     avaliacao1: "8.5",
     avaliacao2: "4.5",
     site: "https://www.nintendo.com/pt-pt/Jogos/Jogos-para-a-Wii-U/Super-Mario-Maker-892704.html?srsltid=AfmBOoo4RLV7PU-4VTBzlV7Mb-POma2a9kvwEPIdbRbu8sRnsJ_FqL1U",
     cor: "#FFD700"
  },
  {
     nome: "Pokémon FireRed Version",
     imagem: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/pokemonfireredleafgreen/16x9_NSwitch_PokemonFireRed_UK_image1600w.jpg",
     genero: "Competitivo | Sandbox | Casual | Hardcore",
     sinopse: "Em Pokémon FireRed, você assume o papel de um jovem aspirante a treinador na pacata Cidade de Pallet. Munido de um monstro de bolso inicial entregue pelo Professor Oak (Bulbasaur, Charmander ou Squirtle), sua missão é preencher a Pokédex, derrotar os 8 líderes de ginásio de Kanto e impedir os planos da malévola Equipe Rocket.",
     avaliacao1: "9",
     avaliacao2: "3.6",
     site: "https://www.nintendo.com/pt-pt/Jogos/Aplicacoes-de-download-da-Nintendo-Switch/Pokemon-FireRed-Version-3031207.html?srsltid=AfmBOopC07jgRItfG9xrNvS0Od9w2A4ngNMAJPXT0zrZnRwCDZ1BSz4u",
     cor: "#FFA500"
  },
  {
     nome: "Dragon Ball advanced adventure",
     imagem: "https://static.wikia.nocookie.net/dragonball/images/5/5f/Advanced_Adventure_Cover.jpg/revision/latest/thumbnail/width/360/height/360?cb=20260121133724",
     genero: "Plataforma 2D | Battle mode | Aventura",
     sinopse: "A trama adapta fielmente o início da jornada do jovem Goku, desde quando ele conhece a Bulma até a sua épica batalha contra o Rei Piccolo, englobando toda a busca pelas Esferas do Dragão e os torneios de artes marciais.",
     avaliacao1: "9",
     avaliacao2: "4.2",
     site: "https://www.romsgames.net/gameboy-advance-rom-dragon-ball-advanced-adventure/",
     cor: "#FF0000"
  },
  {
     nome: "Spider-Man 2",
     imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/e66c4ae18c5d8e3986a24599b293162a6f5c9eba22968d2c.jpg?w=780&thumb=false",
     genero: "Aventura | Ação | Sandbox | Mundo aberto",
     sinopse: "Marvel's Spider-Man 2 acompanha Peter Parker e Miles Morales enquanto tentam conciliar suas vidas pessoais com o dever de proteger Nova York. A situação foge do controle com a chegada de Kraven, o Caçador, e do monstruoso simbionte Venom, forçando os heróis a enfrentarem o teste definitivo de força.",
     avaliacao1: "9",
     avaliacao2: "4.8",
     site: "https://www.playstation.com/pt-br/games/marvels-spider-man-2/",
     cor: "#950606"
  },
  {
     nome: "Astro's Playroom",
     imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co9hb4.jpg",
     genero: "Plataforma 3D | Sandbox | Exploração",
     sinopse: "Astro's Playroom é um jogo de plataforma 3D que já vem pré-instalado no PlayStation 5. A história leva o jogador a uma jornada mágica pelo interior do console, onde o simpático robô Astro explora os componentes do sistema, descobre relíquias icônicas de gerações passadas e experimenta os recursos inovadores do controle DualSense.",
     avaliacao1: "8.3",
     avaliacao2: "5",
     site: "https://www.playstation.com/pt-br/games/astros-playroom/",
     cor: "#0511c2"
  },
  {
     nome: "Pokémon Emerald version",
     imagem: "https://upload.wikimedia.org/wikipedia/pt/7/72/Pok%C3%A9mon_Emerald_cover.png",
     genero: "Sandbox | RPG | Estratégico | Competitivo",
     sinopse: "Em Pokémon Emerald Version (GBA), você controla um jovem treinador que viaja pela região de Hoenn. O objetivo principal é completar sua Pokédex, conquistar 8 Insígnias de Ginásio e derrotar a Elite Quatro para se tornar o Campeão da Liga Pokémon.",
     avaliacao1: "9",
     avaliacao2: "4",
     site: "https://www.nintendo.com/pt-pt/Jogos/Game-Boy-Advance/Pokemon-Emerald-Version-267112.html?srsltid=AfmBOoo3DQIdBMg7GTEpbKUp4vz7wOYlkbL1W-EN1aX_m55-unbBR3fz",
     cor: "#008000"
  },
  {
     nome: "Pou",
     imagem: "https://upload.wikimedia.org/wikipedia/pt/5/55/Pou_Android_%C3%ADcone.png",
     genero: "Simulação | Sandbox | Minigames",
     sinopse: "Uma simulação em que o jogador deve cuidar de um animal de estimação alienígena. A jogabilidade inclui alimentar, curar, limpar, jogar e cuidar de seu Pou para fazê-lo subir de nível. Você pode personalizar seu Pou comprando objetos como comida, remédios e roupas.",
     avaliacao1: "5.2",
     avaliacao2: "2.8",
     site: "https://www.pou.me/",
     cor: "#964B00"
  },
  {
     nome: "Minions Rush: Jogo de corrida",
     imagem: "https://mr.assets.gameloft.com/assets/logo_header_v1_db7abb53be.png",
     genero: "Endless runner | Aventura | Plataforma 3D",
     sinopse: "Minion Rush é um jogo de corrida sem fim em que você corre por locais interessantes, desvia de armadilhas, luta contra vilões e coleta muitas bananas.",
     avaliacao1: "6.4",
     avaliacao2: "3.6",
     site: "https://minionrush.com/",
     cor: "#0000ff"
  },
  {
     nome: "Temple Run",
     imagem: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/49cd11d149a763c01cc6cc117fe57a00/temple-run-logo.png",
     genero: "Endless runner | Arcade | Aventura",
     sinopse: "Em Temple Run, você assume o papel de um explorador que rouba um ídolo amaldiçoado de um templo antigo. O objetivo é correr infinitamente por caminhos perigosos, desviando de precipícios e obstáculos, enquanto foge desesperadamente de macacos demoníacos (ou criaturas monstruosas) que estão em seu encalço.",
     avaliacao1: "8",
     avaliacao2: "3.5",
     site: "https://temple-run.com/",
     cor: "#ffff00"
  },
  {
     nome: "Mário Kart 64",
     imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a9/Mario_Kart_64_front.jpg",
     genero: "Corrida arcade | Sandbox | Party",
     sinopse: "Mario Kart 64 é um jogo de corrida lançado em 1996 para o Nintendo 64. Oito personagens clássicos do universo Mario competem em 16 pistas tridimensionais, utilizando habilidades de direção e caixas de itens com armas e vantagens para vencer os torneios.",
     avaliacao1: "8.6",
     avaliacao2: "4.2",
     site: "https://www.nintendo.com/pt-pt/Jogos/Nintendo-64/Super-Mario-64-269745.html?srsltid=AfmBOor5TORQ8vtBLwvG7q8WFWABi8MLvMUVvKOR8aTcTX6RfcdHdtEz",
     cor: "#ff0000"
  },
  {
     nome: "Super Mário 64",
     imagem: "https://upload.wikimedia.org/wikipedia/pt/7/7b/Super_Mario_64_front.jpg",
     genero: "Plataforma 3D | Sandbox | Exploração",
     sinopse: "Em Super Mario 64, o encanador vai ao castelo após receber um convite da Princesa Peach. Ao chegar, ele descobre que Bowser invadiu o local, a sequestrou e roubou as Estrelas de Poder. Mario deve explorar mundos através de quadros mágicos para recuperar as estrelas.",
     avaliacao1: "9.5",
     avaliacao2: "4.5",
     site: "https://www.nintendo.com/pt-pt/Jogos/Nintendo-64/Super-Mario-64-269745.html?srsltid=AfmBOor5TORQ8vtBLwvG7q8WFWABi8MLvMUVvKOR8aTcTX6RfcdHdtEz",
     cor: "#cc0000"
},
{
     nome: "Pou 3D",
     imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pou_3D_icon.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled",
     genero: "Arcade | Plataforma 3D | Simulação",
     sinopse: "Pou 3D consiste em cuidar de um bichinho virtual em formato tridimensional, alimentando, limpando e garantindo o bem-estar do alienígena para fazê-lhe crescer e subir de nível, sendo uma nova versão do primeiro jogo.",
     avaliacao1: "7.5",
     avaliacao2: "2.5",
     site: "https://poupedia.com/Pou_3D",
     cor: "#dfb370"
  }];

  
      const jogos = document.getElementById("cardGames");

          games.forEach((game) => {
    jogos.innerHTML += `
        <div class="block">
            <h2 style="color:${game.cor}">${game.nome}</h2>
            <hr>
            <img src="${game.imagem}" alt="imagem">
            <h3>${game.genero}</h3>
            <p>${game.sinopse}</p>
            <h4>🏆Avaliações gerais: ${game.avaliacao1}/10🏆</h4>
            <h4>Avaliações de jogadores: ${game.avaliacao2}/5⭐</h4>

            <a href="${game.site}" target="_blank">
                <button style="background-color:${game.cor}">
                    Ver site oficial
                </button>
            </a>
        </div>`;
    });

    function procurarJogo() {
    let busca = document.getElementById("pesquisa").value.toLowerCase(); //toLowerCase = converte as letras no nome do jogo em letra minúscula.E serve pra diferenciar melhor os nomes (Super Mario Kart => super mario kart).
    let jogos = document.querySelectorAll(".block"); //Serve pra selecionas os cards onde tá cada jogo.

    jogos.forEach(jogo => { //Pega o parâmetro "jogo".
        let tituloElemento = jogo.querySelector("h2"); //Pega o título do jogo (nesse caso é onde tá hospedado na tag <h2>
        if (!tituloElemento) return; //Vê se existe o card com o jogo pesquisado (se sim, o javascript retorna).

        let titulo = tituloElemento.innerText.toLowerCase(); //se o jogo passou o javascript converte as letras pra minúscula
        if (titulo.includes(busca)) { //.includes filtra a "busca" pra ver se tem o jogo mesmo
            jogo.style.display = ""; //se tiver, pesquisa o jogo.
        } else {
            jogo.style.display = "none"; //se não tiver, não mostra nada.
        }
    });
}
