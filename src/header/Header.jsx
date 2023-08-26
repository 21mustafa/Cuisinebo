import "./Header.scss";

export const Header = () => {
  return (
    <section class="header">
      <header class="logo-title">
        <img class="logo-icon" src="./logo-white.png" />
        <div class="logo-text">
          <h1 class="logo-title-text">Cuisinebo</h1>
          <div class="logo-description">For the gluttons. Explorer of food</div>
        </div>
      </header>
      <div class="title">
        <h2 class="title-text">Welcome</h2>
        <div class="title-subtitle">Try Cuisinebo Dishes</div>
        <button class="transparet-button">Reservation</button>
      </div>
    </section>
  );
};
