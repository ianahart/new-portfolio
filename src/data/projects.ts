import iantheloopImg from '../assets/projects/iantheloop.png';
import redal from '../assets/projects/redal.png';
import notitumImg from '../assets/projects/notitum.png';
import cosettleImg from '../assets/projects/cosettle.png';
import paranaImg from '../assets/projects/parana.png';
import melioremImg from '../assets/projects/meliorem.png';

export const projects = [
  {
    id: 1,
    slug: 'meliorem',
    name: 'Meliorem',
    image: melioremImg,
    alt: 'meliorem',
    website_url: 'https://meliorem.netlify.app/',
    github_url: 'https://github.com/ianahart/meliorem',
    desc: 'Meliorem is a study application built with React and Spring Boot. You can find test credentials in the Github README.md.',
    type: 'Web Development',
    demo: 'https://drive.google.com/file/d/1t514WCPX5IIyt5xwq7k65hnHkVBkT9rq/view',
    misc: [],
  },
  {
    id: 2,
    slug: 'parana',
    name: 'Parana',
    image: paranaImg,
    alt: 'parana',
    website_url: 'https://parana.netlify.app/',
    github_url: 'https://github.com/ianahart/parana',
    desc: 'Parana is an online marketplace for users to get connected with snowboard teachers to learn to snowboard. You can find test credentials in the Github README.md.',
    type: 'Web Development',
    demo: '',
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
    demo: '',
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
    demo: '',
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
    demo: '',
    misc: [],
  },
];
