import EcommerceImg from '../assets/ecommerce.png';
import TrueFocusPhImg from '../assets/truefocusph.png';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      img: EcommerceImg,
      title: 'RGS ECOMMERCE 🛒',
      desc: 'An E-commerce website built with React.js and Tailwind CSS. The website is integrated with FakeStore API to dynamically populate product listings.',
      tags: ['FakeStore API', 'Tailwind CSS'],
      links: [
        'https://github.com/sellgabe/rgs-shopping',
        'https://sellgabe.github.io/rgs-shopping/',
      ],
    },
    {
      img: TrueFocusPhImg,
      title: 'TRUEFOCUS BASKETBALL 🏀',
      desc: "A landing page for TrueFocus Basketball Skills Development Philippines featuring the company's services and its  fundamental mission and values.",
      tags: ['React', 'Tailwind CSS'],
      links: [
        'https://github.com/sellgabe/truefocusph',
        'https://sellgabe.github.io/truefocusph/',
      ],
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="container">
        <div className="">
          <h4 className="font-bold text-blue-500 mb-4">PROJECTS</h4>
          <p className="font-bold text-2xl">
            Every website is a unique piece of development
          </p>
        </div>

        <div className="project-content">
          <ul className="mt-16 flex flex-col gap-24 ">
            {projects.map((project, index) => (
              <Project key={index} {...project} isOdd={index % 2 !== 0} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
