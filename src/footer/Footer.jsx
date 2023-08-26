import "./Footer.scss";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="logo-title">
        <img class="logo-icon" src="./logo-white.png" />
        <div class="logo-text">
          <h1 class="logo-title-text">Cuisinebo</h1>
          <div class="logo-description">For the gluttons. Explorer of food</div>
        </div>
      </div>
      <div class="contact">
        <a class="contact-item" href="#">
          <i class="fa-brands fa-square-facebook"></i>
        </a>

        <a class="contact-item" href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a class="contact-item" href="#">
          <i class="fa-brands fa-square-google-plus"></i>
        </a>

        <a class="contact-item" href="#">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div class="copyright">© Copyright. Cuisinebo. All Rights Reserved</div>
    </footer>
  );
};
