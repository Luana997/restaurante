Criamos um site para nossa prova de Linguagem da Programação na Fatec de Jaú. É um site para restaurante, onde você pode usar o fale conosco para nos mandar sugestoes ou pedidos usando email, telefone e nome. E também conta o cárdapio e o horário de funcionamento.


1. O sistema de grid do Bootstrap é baseado em linhas (.row) e colunas (.col). Aqui está um exemplo simples de como organizar um layout com três seções:
"<div class="container">
  <div class="row">
    <div class="col-md-4">Logo</div>
    <div class="col-md-4">Menu</div>
    <div class="col-md-4">Contato</div>
  </div>
</div>"
container: centraliza e limita a largura do conteúdo.
row: cria uma linha horizontal para as colunas.
col-md-4: divide o espaço da linha em 3 partes iguais (4 + 4 + 4 = 12 colunas do grid).

2. Layout responsivo para diferentes dispositivos
Bootstrap 4 tem classes responsivas que adaptam o layout conforme o tamanho da tela. Por exemplo:
"<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-lg-4">Seção 1</div>
    <div class="col-12 col-sm-6 col-lg-4">Seção 2</div>
    <div class="col-12 col-sm-12 col-lg-4">Seção 3</div>
  </div>
</div>"
col-12: ocupa 100% da largura em celulares.
col-sm-6: ocupa metade da linha em tablets.
col-lg-4: ocupa 1/3 da linha em desktops grandes.

Com isso, o layout se adapta automaticamente ao tamanho da tela, garantindo uma boa experiência em qualquer dispositivo
