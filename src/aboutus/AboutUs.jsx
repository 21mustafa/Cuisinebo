import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <section class="about-us">
      <div class="about-us-img-container">
        <img class="about-us-img" src="./assets/about-us-img.png" />
      </div>

      <div class="about-us-text">
        <div class="title">
          <h2 class="title-text">About Us</h2>
          <div class="title-subtitle">Introduce To Cuisinebo Dishes</div>
        </div>

        <div class="star">
          <i class="star-item fa-solid fa-star-of-life"></i>
          <i class="star-item fa-solid fa-star-of-life"></i>
          <i class="star-item fa-solid fa-star-of-life"></i>
        </div>

        <div class="about-us-description">
          &emsp;&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Molestiae commodi placeat nihil animi, id dicta, rem recusandae
          ex earum cupiditate unde eius aliquid dolore voluptatibus delectus hic
          inventore similique dolores. Veritatis sit dicta et impedit
          repellendus quo aspernatur, eum vitae quia quos vero natus totam, sint
          nisi doloribus, quibusdam reiciendis?
        </div>

        <div class="star">
          <i class="star-item fa-solid fa-star-of-life"></i>
          <i class="star-item fa-solid fa-star-of-life"></i>
          <i class="star-item fa-solid fa-star-of-life"></i>
        </div>
        <button class="transparet-button">Read more</button>
      </div>
    </section>
  );
};
