export const aboutObj = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topSpace: "-40px",
  topLine: 'ABOUT',
  img: require('../../../images/lifeinau.jpg'),
  alt: 'svg3',
  headline: 'Ready to study in Victoria?',
  description: <p style={{fontWeight: "520", fontSize: "19px"}}>This website is here to help young international students who are just landing in this foreign  country. <br/><br/>
  Curious to learn more? Get an understanding of “<span style={{color: "orange"}}>Life in Australia</span>”, 
  “<span style={{color: "orange"}}>Learning English</span>”, and “<span style={{color: "orange"}}>Explore Local Culture</span>”.</p>,
  showCard: false,
  dark: false,
  imgStart: false,
  primary: false,
  darkText: true
};

export const lifeObj = {
    id: 'life',
    lightBg: false,
    lightText: true,
    topSpace: "20px",
    lightTextDesc: true,
    topLine: 'LIFE IN AUSTRALIA',
    description: <p style={{fontWeight: "520", fontSize: "19px"}}>Too young to drive? Wondering how the public transportation system works in Victoria? Check out the comprehensive and detailed information all you need to know about public transportation.
      <br/><br/>
    Looking for the easiest ways on how to set-up your bank account in Australia? Check out the complete guide from understanding different account settings in Australia, to required documents checklist. Don’t miss out anything necessary!</p>,
    img: require('../../../images/life.jpg'),
  alt: 'svg3',
    dark: true,
    showCard: true,
    cards: [{
      title: "Transport",
      info: "empty",
      nav: 'ptv',
      col: "#d5dfed"
    },{
      title: <p style={{color:"white"}}>Bank Account Set Up</p>,
      info: "empty",
      nav: 'bank',
      col: "#7b9fd1"
    }],
    imgStart: true,
    primary: true,
    darkText: false,
  };
  
  export const learnObj = {
    id: 'learn',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topSpace: "30px",
    topLine: 'LEARNING ENGLISH',
    showCard: true,
    cards: [{
      title: "Grammar Ability Test",
      info: "empty",
      nav: 'english-quiz',
      col: "#4c5c73"
    }, {
      title: "Slang Game",
      info: "empty",
      nav: 'slang',
      col: "#7b9fd1"
    }, {
      title: <p style={{color:"black"}}>Catch Keyword</p>,
      info: "empty",
      nav: 'catch-keyword',
      col: "#bfe8f5"
    }, {
      title: "Grammar Checker",
      info: "empty",
      nav: 'writing',
      col: "#7eafbf"
    }],
    description: <p style={{fontWeight: "520", fontSize: "19px"}}>Speaking English in an Australian way is not that difficult. The features are here for you to learn and practice your English skill, both grammar in general and Australian slang.
<br/><br/>
    Having difficulty capturing keywords while reading articles? Try clicking the Catch Keyword tab to visualise keywords in an article, it helps you easily catch the high-frequency words.
    <br/><br/>
    Wanna know where to improve the quality of your written paragraphs? Launching the Grammar Checker to see where the mistakes are.
    </p>,
    img: require('../../../images/learneng.jpg'),
  alt: 'svg3',
  imgStart: false,
    dark: false,
    primary: false,
    darkText: true
  };
  
  export const socialObj = {
    id: 'social',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    showCard: true,
    topSpace: "-120px",
    topLine: 'EXPLORE LOCAL CULTURE',
    description: <p style={{fontWeight: "520", fontSize: "19px"}}>Looking for famous landmarks in Melbourne and experience local scenery by using the interactive feature to find your way around.</p>,
    cards: [{
      title: "Melbourne Landmark",
      info: "empty",
      nav: 'landmark',
      col: "#9cc8d6"
    }],
    img: require('../../../images/entertain.jpg'),
  alt: 'svg3',
  imgStart: true,
    dark: true,
    primary: true,
    darkText: false
  };
  