export const aboutObj = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'ABOUT',
  img: require('../../../images/lifeinau.jpg'),
  alt: 'svg3',
  headline: 'Ready to study in Victoria?',
  description: `Our goal is to help new young international students who are adjusting to the country. 
  There are three sections on our website, “life in AU”, “learning English”, and “social entertainment”. 
  In the section “life in AU”, we provide the timetable, start and final points of public transport, in order to 
  help the students to travel in Melbourne, another part is a daily diet, we provide various recipes and meal plans 
  according to different standards, such as the name or type of meals, or the requirements of keeping fit and 
  vegetarian. In the section “learning English”, users can learn Australian slang and grammar, and also can use a word 
  cloud to check the key visualisation. In the section “social entertainment”, users can find landmarks of Melbourne 
  in an interactive map.`,
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
    lightTextDesc: true,
    topLine: 'LIFE IN AUSTRALIA',
    description: `Check out our public transportation schedule, we have comprehensive and detailed information about public transportation.
    If you are looking for what to eat today, we have that too, we have recipes and plans for one day or week, whether you are a vegetarian or gym keeper.
    `,
    img: require('../../../images/life.jpg'),
  alt: 'svg3',
    dark: true,
    showCard: true,
    cards: [{
      title: "Daily Diet",
      info: "empty",
      nav: 'diet'
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
    topLine: 'LEARNING ENGLISH',
    showCard: true,
    cards: [{
      title: "English Quizzes",
      info: "empty",
      nav: 'quizzes'
    }, {
      title: "WordCloud",
      info: "empty",
      nav: 'vocabularyAndWriting'
    }, {
      title: "Grammar Check",
      info: "empty",
      nav: 'writing'
    }],
    description: `We are all about fun learning English, and we offer quizzes and WordCloud so that you can 
    check your grammar and knowledge regarding Australian slang.`,
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
    topLine: 'SOCIAL ENTERTAINMENTS',
    description: `Look for some recreational activities in Melbourne if you want to expand your social life. 
    Using our interactive life, you can find your way around.`,
    cards: [{
      title: "Melbourne Landmarks",
      info: "empty",
      nav: 'landmark'
    }],
    img: require('../../../images/entertain.jpg'),
  alt: 'svg3',
  imgStart: true,
    dark: true,
    primary: true,
    darkText: false
  };
  