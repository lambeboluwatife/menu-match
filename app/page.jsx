import puppeteer from "puppeteer";

const scrapFromCR = async () => {
  try {
    const browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto("https://www.chicken-republic.com/menu/", {
      waitUntil: "domcontentloaded",
      // timeout: 60000,
    });

    const chickenRepublicRefuel = await page.$$eval(
      "#sp-wp-carousel-pro-id-1648 .slick-list .slick-slide",
      (elements) =>
        elements.map((e) => ({
          title: e.querySelector(".wpcp-image-caption a").innerText,
          // price: e.querySelector(".card-body span").innerText,
          description: e.querySelector(
            ".wpcp-single-item .wpcp-image-description"
          ).innerText,
          image: e.querySelector(".wpcp-slide-image img").src,
        }))
    );

    console.log(chickenRepublicRefuel);

    await browser.close();
  } catch (error) {
    console.error("Error Occurred:", error);
  }
};

scrapFromCR();

const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;
