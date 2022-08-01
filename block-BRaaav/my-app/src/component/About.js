function About() {
  return (
    <>
      <section class="about padding">
        <div class="container flex align-start">
          <div class="flex-40">
            <header class="sec-header">
              <h2 class="heading">Let us introduce</h2>
              <div class="dot-wrapper flex justify-start">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </header>

            <p class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique ut sequi voluptatibus beatae corporis repellat
              asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
              illum, recusandae nisi neque iusto culpa!
            </p>
            <p class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="flex-30 progress">
            <div class="progress-item">
              <div class="flex">
                <h3>Web Design</h3>
                <p>85%</p>
              </div>
              <progress value="85" max="100"></progress>
            </div>
            <div class="progress-item">
              <div class="flex">
                <h3>Photography</h3>
                <p>90%</p>
              </div>
              <progress value="90" max="100"></progress>
            </div>
            <div class="progress-item">
              <div class="flex">
                <h3>Content Marketing</h3>
                <p>75%</p>
              </div>
              <progress value="75" max="100"></progress>
            </div>
            <div class="progress-item">
              <div class="flex">
                <h3>CMS Admin</h3>
                <p>70%</p>
              </div>
              <progress value="70" max="100"></progress>
            </div>
          </div>
          <div class="flex-30">
            <img
              class="flexible-img about-img"
              src="./images/about-image.jpg"
              alt="About"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
