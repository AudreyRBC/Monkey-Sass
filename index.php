<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Stylesheet | Hunger Race</title>
  <link rel="stylesheet" href="dist/css/main.css">
</head>
<body>
  <header class="flex-row">
    <div class="header__brand">
      <img src="" alt="">
    </div>
    <nav>
      <ul class="flex">
        <li><a href="#">Inscrire une équipe</a></li>
        <li><a href="#">Soutenir une équipe</a></li>
        <li><a href="#">Devenir bénévole</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <button id="test" class="burger" type="button" name="button">
      <span class="burger-line"></span>
    </button>
  </header>
  <main>
    <?php include 'colors.php' ?>
    <?php include 'fonts.php' ?>
    <?php include 'cta.php' ?>
    <?php include 'icons.php' ?>


    <?php include 'containers.php' ?>
    <?php include 'tables.php' ?>
    <?php include 'blocks.php' ?>






  </main>
  <footer>
    <section class="container__full flex-row">
      <section class="small-column-1-1 large-column-3-5 bg-darkgrey border-right__custom ptb80">
        <div>
          <h2 class="h4">Partenaires</h2>
          <ul class="container-columns__large-center flex-start">
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
            <li class="small-column-1-1 medium-column-1-2 large-column-1-4"><a class="p20" href="#">Item</a></li>
          </ul>
        </div>
        <div class="center mt40">
          <h2 class="h4">Une initiative de</h2>
          <div class="center">
            Sos-faim
          </div>
        </div>
      </section>
      <section class="small-column-1-1 large-column-2-5 bg-black flex-col vertical-center">
        <div class="container__medium-center center ptb150">
          <menu>
            <ul class="flex-col">
              <li class="mb10"><a href="#">Inscrire une équipe</a></li>
              <li class="mb10"><a href="#">Soutenir une équipe</a></li>
              <li class="mb10"><a href="#">Devenir bénévole</a></li>
              <li class="mb10"><a href="#">Contact</a></li>
            </ul>
          </menu>
          <a class="cta cta-primary" href="#">Participer</a>
        </div>
      </section>
    </section>
  </footer>
  <script src="dist/js/main.js"></script>
</body>
</html>
