// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Oleksandr',
    lastname: 'Oliinyk',
  },

  position: 'Junior Fullstack JS Developer',

  salary: '600$ per month', 

  address: 'Chornykh Zaporozhtsiv St, 68b, Brovary, Kyivska oblast, 07400',
}

var footer = {
  social: {
    email: {
      text: 'kalessin.s@gmail.com',
      href: 'mailto:kalessin.s@gmail.com',
    },
    phone: {
      text: '+380975275585',
      href: 'tel:+380975275585',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/oleksander-oliinyk-3170a33/',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
          work on a new project I learn the domain and try to understand the idea of the project. Good team player, 
          every colleague is a friend to me.`,
      },
  
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: false,
        },
        {
          name: 'Git',
          point: 10,
        },
        {
          name: 'Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 10,
        },
        {
          name: 'React JS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },

      ],

      hobbies: [
        {
          name: 'Voleyball',
          isMain: true,
        },
        {
          name: 'Tourism',
          isMain: true,
        },
        {
          name: 'Photography',
          isMain: false,
        },
        {
          name: 'Lego',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    
    header,

    main: {
      education: [
        {
          name: 'School',
          isEnd: true,
        },
        {
          name: 'Institute 1',
          isEnd: true,
        },
        {
          name: 'Institute 2',
          isEnd: true,
        },
        {
          name: 'Course',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'cer1',
          id: 111,
        },
        {
          name: 'cer2',
          id: 222,
        },
        {
          name: 'cer3',
          id: 333,
        },
      ],
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    
    header,

    main: {
      works: [
        {
          position: 'Junior Developer',

          company: {
            name: 'IT Brains',
            url: 'http://it-brains.com.ua',
          },

          duration: {
            from: '01.03.2023',
            to: null,
          },

          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua',
              about: 'about me',

              stackAmoGnt: 3,
              stacks: [
                {
                  name: 'HTML | CSS',
                },
                {
                  name: 'Nodejs',
                },
                {
                  name: 'React.js',
                },
              ],

              awardAmoGnt: 2,
              awards: [
                {
                  name: 'plushki',
                },
                {
                  name: 'coffe',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
