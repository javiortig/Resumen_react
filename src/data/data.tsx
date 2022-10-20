import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  //OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/facherito.jpeg';
//import testimonial1 from '../images/cubertin.jpeg';
// import testimonial2 from '../images/willyHulk.jpg';
// import testimonial3 from '../images/biggieSmalls.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Javier Orti Garcia Resumen',
  description: "Pagina resumen.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'sobre mi',
  Contact: 'contacto',
  Portfolio: 'portafolio',
  Resume: 'resumen',
  Habilidades: 'habilidades',
  Stats: 'stats',
  Testimonials: 'testimonios',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Me llamo Javi...`,
  description: (
    /*
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
    */
    <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Soy un malagueño ansioso de crear proyectos y resolver problemas. Resumir en un cuadrito mi vida parece absurdo,
      ya que soy de esas personas que está cambiando constantemente, y cacharreando con todo lo que se 
      le viene a la cabeza. Es por ello que te recomiendo, si quieres conocerme en mayor profundidad, que te pases
      por mi sección de <strong className="text-stone-100">Proyectos</strong>.
    </p>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Respecto a algunas de mis aficiones, me gusta en especial la vida en el campo, el deporte y por supuesto
       quedar con los chavales para hacer en imbécil con ellos.
    </p>
  </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resumen',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contacto',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
    description: `Estoy bastante loco la verdad. Conozco a poca gente que sea como yo, para bien o para mal...`,
  aboutItems: [
    {label: 'Ubicación', text: 'Málaga', Icon: MapIcon},
    {label: 'Edad', text: '22', Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Español', Icon: FlagIcon},
    {label: 'Intereses', text: 'Ciencia, Tecnología, Deporte, Música...', Icon: SparklesIcon},
    {label: 'Estudios', text: 'U-tad', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const habilidades: SkillGroup[] = [
  {
    name: 'Idiomas',
    skills: [
      {
        name: 'Inglés',
        level: 10,
      },
      {
        name: 'Francés',
        level: 2,
      },
      {
        name: 'Español',
        level: 10,
      },
    ],
  },
  {
    name: 'Game-Development',
    skills: [
      {
        name: 'Unity',
        level: 6,
      },
      {
        name: 'Unreal Engine',
        level: 3,
      },
      {
        name: 'juegos IRL :)',
        level: 10,
      },
    ],
  },
  {
    name: 'Sistemas Embebidos',
    skills: [
      {
        name: 'Arduino',
        level: 8,
      },
      {
        name: 'Raspberry-Pi',
        level: 7,
      },
      {
        name: 'LoRa',
        level: 5,
      }
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      {
        name: 'Python/PySpark/TensorFlow',
        level: 8,
      },
      {
        name: 'R',
        level: 5,
      },
      {
        name: 'Web-Scrapping(Selenium)',
        level: 4,
      },
    ],
  },
  {
    name: 'Otras Aficiones',
    skills: [
      {
        name: 'Finanzas',
        level: 5,
      },
      {
        name: 'Jardinería',
        level: 4,
      },
      {
        name: 'Videojuegos',
        level: 7,
      },
    ],
  },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 4,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Octubre 2018',
    location: 'U-TAD',
    title: 'Doble grado en ingeniería del software y Matemáticas computacionales',
    content: <p>Actualmente en curso.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'Abril del 2000 - Presente',
    location: 'El limonar',
    title: 'Senior Dev de mi puta casa',
    content: (
      <p>
        Desde que comía croquetas y estafaba a gente en el habbo, pasando por arreglar la pantalla del pc
        jugando al lol a 12 FPS, hasta el día de hoy como un guerrero.
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Punset',
      text: 'Soy el master',
      image: '/images/biggieSmalls.jpeg',
    },
    {
      name: 'Cuberta',
      text: 'te robo con la mirada',
      image: '/images/cubertin.jpeg',
    },
    {
      name: 'Willy',
      text: 'Illo de willy a willy los fasos a tope',
      image: '/images/willyHulk.jpeg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contacto:',
  description: 'Aquí puedes encontrar mis redes sociales para contactarme:',
  items: [
    {
      type: ContactType.Email,
      text: 'dev.javiog@gmail.com',
      href: 'mailto:dev.javiog@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Málaga, Andalucía',
      href: 'https://www.google.es/maps/place/M%C3%A1laga/@36.7182857,-4.4842863,13z/data=!3m1!4b1!4m5!3m4!1s0xd7259c44fdb212d:0x6025dc92c9ca32cf!8m2!3d36.721261!4d-4.4212655',
    },
    {
      type: ContactType.Instagram,
      text: '@javiortig',
      href: 'https://www.instagram.com/javiortig',
    },
    {
      type: ContactType.Github,
      text: 'javiortig',
      href: 'https://github.com/javiortig/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/javiortig/'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jortig/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/javiortig'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
