module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'selected-color': '#bff18b',
        'white_new': '#ffffff',
        header_1: '#445760',
        'gray-light': 'rgba(243, 244, 246,0.9)',
        'hover-color': '#05c2c9',
        border_color: 'rgba(5,194,201,1)',
        'about-bg': '#1fcced',
        'what_i_do-bg': '#6fdcbf',
        'skills-bg': 'rgba(230,240,255,.70)',
        'portfolio-bg': '#ae8fdb',
        text_head: '#E31B6D',
        text_head_dark: '#CA2066',
        text_para: '#616161',
        what_i_do: '#F1FEFF',
        skill: 'rgba(230,240,255,0.38)',
        project: '#D1E0E8',
        contact: '#252934',
        contact_box: '#1E2423',
        footer: '#1B242F',
        footer_icon: '#262f38',
      },
      width: {
        90: '22.5rem',
        108: '27rem',
        144: '36rem',
        179: '44.75rem',
        192: '48rem',
        240: '60rem',
        308: '77rem',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
      },
      height: {
        74: '18.5rem',
        86: '21.5rem',
        88: '22rem',
      },
      margin: {
        '11.5': '2.75rem',
        '20px': '20px',
        '16px': '16px',
       },
      fontFamily: {
        'raleway-new': ['Raleway', 'sans-serif'],
      },
      
      inset: {
        '2%': '2%',
        '3%': '3%',
        '5%': '5%',
        '6%': '6%',
        '7%': '7%',
        '8%': '8%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '40%': '40%',
        '55%': '55%',
      },
      screens: {
        'xs': '400px'
        // => @media (min-width: 400px) { ... }
      },
      backgroundImage: (theme) => ({
        profile: "url('/src/images/profile.JPG')",
      }),
      boxShadow: {
        nav: '0 10px 8px -8px rgba(26, 115, 232, 1)',
      },
      transitionProperty: {
        'max-height': 'max-height',
        'inset': 'inset',
      },
      border: ['hover'],

      animation: {
        jiggle: 'jiggle 1s ease-in-out infinite alternate',
        back: 'back 1.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 5s linear infinite',
        'bounce-bigBlue': 'bigBlue 2s  infinite',
        'bounce-smallBlue': 'smallBlue 2s .25s infinite',
        'bounce-bigWhite': 'bigWhite 2s .5s  infinite',
        'bounce-smallWhite': 'smallWhite 2s .75s infinite',
      },
      keyframes: {
        jiggle: {
          '0%': { left: '55%' },
          '100%': { left: '45%' },
        },
        back: {
          '0%': {
            background: '#db97db',
          },
        
          '25%': {
            background:' #1fcced',
          },
          '50%': {
            background: '#6fdcbf',
          },
          '75%': {
              background: '#ae8fdb',
            },
          '100%': {
            background:' #2d434f',
          }
        },
        
        bigBlue: {
          '0%, 100%': {
            transform: 'translateY(-700%) rotate(360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '7%',
          },
          '50%': {
            transform: 'translateY(-700%) rotate(-360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '75%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '3%',
          },
        },
        smallBlue: {
          '0%, 100%': {
            transform: 'translateY(-700%) rotate(360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '8%',
          },
          '50%': {
            transform: 'translateY(-700%) rotate(-360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '75%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '12%',
          },
        },
        bigWhite: {
          '0%, 100%': {
            transform: 'translateY(-700%) rotate(360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '5%',
          },
          '50%': {
            transform: 'translateY(-700%) rotate(-360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '75%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '9%',
          },
        },
        smallWhite: {
          '0%, 100%': {
            transform: 'translateY(-700%) rotate(360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '5%',
          },
          '50%': {
            transform: 'translateY(-700%) rotate(-360deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '75%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            left: '1%',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['selection'],
      backgroundColor: ['selection'],
      inset: ['group-hover'],
      letterSpacing: ['hover', 'focus'],
      animation: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-selection-variant'),
    require('tailwind-scrollbar'),
  ],
};
