// images of restaurant
import restaurantThumbnail from '../../images/projects/restaurant/restaurant-thumbnail.png';
import restaurantOne from '../../images/projects/restaurant/restaurant-1.png';
import restaurantTwo from '../../images/projects/restaurant/restaurant-2.png';
import restaurantThree from '../../images/projects/restaurant/restaurant-3.png';
import restaurantFour from '../../images/projects/restaurant/restaurant-4.png';
import restaurantFive from '../../images/projects/restaurant/restaurant-5.png';
import restaurantSix from '../../images/projects/restaurant/restaurant-6.png';
import restaurantSeven from '../../images/projects/restaurant/restaurant-7.png';
import restaurantEight from '../../images/projects/restaurant/restaurant-8.png';
// images of weather
import weatherThumbnail from '../../images/projects/weather/weather-thumbnail.png';
import weatherOne from '../../images/projects/weather/weather-1.png';
import weatherTwo from '../../images/projects/weather/weather-2.png';
import weatherThree from '../../images/projects/weather/weather-3.png';
import weatherFour from '../../images/projects/weather/weather-4.png';
import weatherFive from '../../images/projects/weather/weather-5.png';
import weatherSix from '../../images/projects/weather/weather-6.png';
// images of furniture
import furnitureThumbnail from '../../images/projects/furniture/furniture-thumbnail.png';
import furnitureOne from '../../images/projects/furniture/furniture-1.png';
import furnitureTwo from '../../images/projects/furniture/furniture-2.png';
import furnitureThree from '../../images/projects/furniture/furniture-3.png';
import furnitureFour from '../../images/projects/furniture/furniture-4.png';
import furnitureFive from '../../images/projects/furniture/furniture-5.png';
// images of portfolio
import portfolioThumbnail from '../../images/projects/portfolio/portfolio-thumbnail.png';
import portfolioOne from '../../images/projects/portfolio/portfolio-1.png';
import portfolioTwo from '../../images/projects/portfolio/portfolio-2.png';
import portfolioThree from '../../images/projects/portfolio/portfolio-3.png';
import portfolioFour from '../../images/projects/portfolio/portfolio-4.png';
import portfolioFive from '../../images/projects/portfolio/portfolio-5.png';
import portfolioSix from '../../images/projects/portfolio/portfolio-6.png';
import portfolioSeven from '../../images/projects/portfolio/portfolio-7.png';
import portfolioEight from '../../images/projects/portfolio/portfolio-8.png';
// images of signInUp
import signInUpThumbnail from '../../images/projects/signInUp/signInUp-thumbnail.png';
import signInUpOne from '../../images/projects/signInUp/signInUp-1.png';
import signInUpTwo from '../../images/projects/signInUp/signInUp-2.png';
import signInUpThree from '../../images/projects/signInUp/signInUp-3.png';


const PortfolioArray = [
  {
    type: 'js',
    header: 'Restaurant',
    code: 'HTML, CSS, JavaScript',
    para: 'This is a website of a restaurant and full responsive. It is based on HTML,CSS, JavaScript and overlook any kind of frameworks. In the header section of the webpage describe the basic things about this landing page. In the body section it describe which kinds of food and services they provide.You can book a table for family gathering, special events and social events.In the footer section, way of contact and open times are describe.',
    thumbnail: restaurantThumbnail,
    images: [
      restaurantOne,
      restaurantTwo,
      restaurantThree,
      restaurantFour,
      restaurantFive,
      restaurantSix,
      restaurantSeven,
      restaurantEight,
    ],
    link: 'https://loving-snyder-d344b8.netlify.app/',
  },
  {
    type: 'js',
    header: 'Weather',
    code: 'HTML, CSS, JavaScript',
    para: "This is a website of a weather information and work on any device small or big. It is full based on HTML,CSS ans JavaScript. In this website, i use Chart.js, ApexCharts.js, SVG images and weather API. You can search for weather information about your city (there is no autocomplete for searching city because i need to pay google for it). You can get information about sun-set, sun-rise, humidity, wind-speed and lots of information although it's a free weather api.",
    thumbnail: weatherThumbnail,
    images: [
      weatherOne,
      weatherTwo,
      weatherThree,
      weatherFour,
      weatherFive,
      weatherSix,
    ],
    link: 'https://youthful-jepsen-e7800f.netlify.app/',
  },
  {
    type: 'js',
    header: 'Furniture',
    code: 'HTML, CSS, JavaScript',
    para: 'This is a website of a show-room of a furniture and full responsive. It is a basic website of HTML, CSS, JavaScript. This website describe and show their product and way to buy. In the top, there is a two button with left and right array for changing images.',
    thumbnail: furnitureThumbnail,
    images: [
      furnitureOne,
      furnitureTwo,
      furnitureThree,
      furnitureFour,
      furnitureFive,
    ],
    link: 'https://goofy-feynman-f8776e.netlify.app/',
  },
  {
    type: 'react',
    header: 'Portfolio',
    code: 'React',
    para: 'This is a React based website of portfolio and full responsive. I used TailwindCss(a css framework) to style the page, Bootstraps and Material-ui to design images slider and tab in project section. And also use many react packages such as react-scroll, aos , typed.js etc. In the header section of page use png and svg to animate things. And interesting thing, if someone scroll then he/she can see the animation of objects. In the footer section have some of my social site links and a button leading you to the top of the page.',
    thumbnail: portfolioThumbnail,
    images: [
      portfolioOne,
      portfolioTwo,
      portfolioThree,
      portfolioFour,
      portfolioFive,
      portfolioSix,
      portfolioSeven,
      portfolioEight,
    ],
    link: 'https://rakibul1896.github.io/portfolio/',
  },


  {
    type: 'react',
    header: 'Sign in/ Sign up',
    code: 'React',
    para: 'This is a React based website and full responsive. I used TailwindCss(a css framework) to style the page.',
    thumbnail: signInUpThumbnail,
    images: [
      signInUpOne,
      signInUpTwo,
      signInUpThree
    ],
    link: 'https://sign-in-up-000.netlify.app/',
  },
];

export default PortfolioArray;
