import cosettleImg from '../assets/projects/cosettle.png';
import paranaImg from '../assets/projects/parana.png';
import melioremImg from '../assets/projects/meliorem.png';
import codeoverwatchImg from '../assets/projects/overwatch.png';

export const projects = [
  {
    id: 1,
    slug: 'codeoverwatch',
    name: 'codeoverwatch',
    image: codeoverwatchImg,
    alt: 'codeoverwatch',
    website_url: 'https://codeoverwatch.com',
    github_url: 'https://github.com/ianahart/overwatch',
    desc: 'Codeoverwatch is a market place for developers where you can get your code reviewed by professionals. For technology it includes postgresSQL,Spring Boot,React, Tailwind CSS, Redux, Redis, and more.',
    type: 'Web Development',
    tools: 'React // Spring Boot',
    demo: 'https://drive.google.com/file/d/1Ob4DqeQqYGlvmffQcijJm1IAyjIX-Wmh/view',
    misc: [],
  },
  {
    id: 2,
    slug: 'meliorem',
    name: 'Meliorem',
    image: melioremImg,
    alt: 'meliorem',
    website_url: 'https://meliorem.netlify.app/',
    github_url: 'https://github.com/ianahart/meliorem',
    desc: 'Meliorem is a study application built with React and Spring Boot. You can find test credentials in the Github README.md.',
    type: 'Web Development',
    tools: 'React // Spring Boot',
    demo: 'https://drive.google.com/file/d/1t514WCPX5IIyt5xwq7k65hnHkVBkT9rq/view',
    misc: [],
  },
  {
    id: 3,
    slug: 'parana',
    name: 'Parana',
    image: paranaImg,
    alt: 'parana',
    website_url: 'https://parana.netlify.app/',
    github_url: 'https://github.com/ianahart/parana',
    desc: 'Built with Spring Boot and React. Parana is an online marketplace for users to get connected with snowboard teachers to learn to snowboard. You can find test credentials in the Github README.md.',
    type: 'Web Development',
    tools: 'React // Spring Boot',
    demo: 'https://drive.google.com/file/d/1-qNTPgToaw6JbOKekDROUoRLRfkTLMsQ/view',
    misc: [],
  },
  {
    id: 4,
    slug: 'cosettle',
    name: 'Cosettle',
    image: cosettleImg,
    alt: 'cosettle',
    website_url: 'https://cosettle.netlify.app/',
    github_url: 'https://github.com/ianahart/cosettle',
    desc: 'Built with Spring Boot and React. This is a platform where you can discover coworking spaces to rent and find other people to work with. More description inside the github README along with login credentials.',
    tools: 'React // Spring Boot',
    type: 'Web Development',
    demo: '',
    misc: [],
  },
];
