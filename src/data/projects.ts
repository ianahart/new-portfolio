import iantheloopImg from '../assets/projects/iantheloop.png';
import devtroveImg from '../assets/projects/devtrove.png';
import redal from '../assets/projects/redal.png';
import notitumImg from '../assets/projects/notitum.png';
import cosettleImg from '../assets/projects/cosettle.png';
import paranaImg from '../assets/projects/parana.png';

export const projects = [
  {
    id: 1,
    slug: 'parana',
    name: 'Parana',
    image: paranaImg,
    alt: 'parana',
    website_url: 'https://parana.netlify.app/',
    github_url: 'https://github.com/ianahart/parana',
    desc: 'Parana is an online marketplace for users to get connected with snowboard teachers to learn to snowboard. You can find test credentials in the Github README.md.',
    type: 'Web Development',
    misc: [],
  },

  {
    id: 2,
    slug: 'iantheloop',
    name: 'iaNtheLoop',
    image: iantheloopImg,
    alt: 'iantheloop',
    website_url: 'https://iantheloop.com',
    github_url: 'https://github.com/ianahart/iantheloop',
    desc: 'iaNtheLoop is a social media platform built with Laravel, Vue, Sass, and mySQL. files are stored on AWS S3 and the application is being served on a Digital Ocean Droplet. You can find test credentials in the Github README.md.',
    type: 'Web Development',
    misc: [],
  },

  {
    id: 3,
    slug: 'cosettle',
    name: 'Cosettle',
    image: cosettleImg,
    alt: 'cosettle',
    website_url: 'https://cosettle.netlify.app/',
    github_url: 'https://github.com/ianahart/cosettle',
    desc: 'A platform where you can discover coworking spaces to rent and find other people to work with. More description inside the github README along with login credentials.',
    type: 'Web Development',
    misc: [],
  },

  {
    id: 4,
    name: 'Notitum',
    slug: 'notitum',
    image: notitumImg,
    alt: 'notitum',
    website_url: 'https://notitum.netlify.app/',
    github_url: 'https://github.com/ianahart/notitum',
    desc: 'Built with Spring Boot and React. This is a note organizer application.  You can find test credentials in the bottom of the Github README.md.',
    type: 'Web Development',
    misc: [],
  },

  {
    id: 5,
    slug: 'redal',
    name: 'Redal',
    image: redal,
    alt: 'Redal',
    website_url: 'https://chic-empanada-6c3274.netlify.app/login',
    github_url: 'https://github.com/ianahart/redal',
    type: 'Web Development',
    desc: 'This is a reddit clone. More description inside the github README along with login credentials.',
    misc: [],
  },

  {
    id: 6,
    slug: 'devtrove',
    name: 'Devtrove',
    image: devtroveImg,
    alt: 'Devtrove',
    website_url: 'https://courageous-pastelito-c380bc.netlify.app/',
    github_url: 'https://github.com/ianahart/devtrove',
    desc: 'This is a news aggregator that includes users, profile, posts, likes, upvotes, groups, invitations, websockets, and messages. Made with TypeScript/React, Python/Django.  You can find test credentials in the Github README.md',
    type: 'Web Development',
    misc: [
      {
        id: 1,
        name: 'Account',
        link: 'https://devtrove.s3.amazonaws.com/portfolio/account.png',
      },
      {
        id: 2,
        name: 'Chat',
        link: 'https://devtrove.s3.amazonaws.com/portfolio/chat.png',
      },
      {
        id: 3,
        name: 'Home',
        link: 'https://devtrove.s3.amazonaws.com/portfolio/home.png',
      },
      {
        id: 4,
        name: 'Profile',
        link: 'https://devtrove.s3.amazonaws.com/portfolio/profile.png',
      },
    ],
  },
];
