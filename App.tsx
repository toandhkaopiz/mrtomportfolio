import React from 'react';
import { Experience, Project, SkillCategory, Language } from './types';
import { CONTACT, ABOUT, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, LANGUAGES_DATA } from './constants';
import StarTrail from './StarTrail';
import CursorSpotlight from './CursorSpotlight';
import FloatingShapes from './FloatingShapes';
import { generateProfessionalCV } from './pdfGenerator';

// Reverted from function declaration to an arrow function expression for consistency and to avoid potential TypeScript inference issues.
const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{CONTACT.name}</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{CONTACT.title}</h2>
        <p className="mt-4 max-w-xs leading-normal">{CONTACT.bio}</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li><a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a></li>
            <li><a className="group flex items-center py-3" href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a></li>
            <li><a className="group flex items-center py-3" href="#projects"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Selected Projects</span></a></li>
            <li><a className="group flex items-center py-3" href="#skills"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Skills</span></a></li>
            <li><a className="group flex items-center py-3" href="#languages"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Languages</span></a></li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0">
          <a className="block hover:text-slate-200" href={CONTACT.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a className="block hover:text-slate-200" href={CONTACT.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c2.5 0 4.4 2.1 4.4 5.1V19z"></path>
            </svg>
          </a>
        </li>
         <li className="mr-5 shrink-0">
          <a className="block hover:text-slate-200" href={`mailto:${CONTACT.email}`} aria-label="Email">
            <span className="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M1.5 4.5h21V6h-21v12h21v1.5h-21a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm21 .75-10.5 6-10.5-6Z"/>
            </svg>
          </a>
        </li>
      </ul>

      {/* Download CV Button - Dynamically generates professional PDF from portfolio data */}
      <button
        onClick={generateProfessionalCV}
        className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-teal-500/40 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95"
        aria-label="Download CV as PDF"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
        <span className="relative">
          Download CV
          <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </button>
    </header>
  );
};

// Reverted from function declaration to an arrow function expression. This helps TypeScript correctly infer the component's type, resolving issues with the 'children' prop.
// FIX: Explicitly typed the component with React.FC to resolve issues with TypeScript's type inference for the 'children' prop.
const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => {
  return (
      <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label={title}>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{title}</h2>
          </div>
          <div>{children}</div>
      </section>
  );
};

// Reverted from function declaration to an arrow function expression. This ensures TypeScript recognizes it as a React component and handles the 'key' prop correctly.
// FIX: Explicitly typed the component with React.FC to ensure TypeScript recognizes it as a React component and correctly handles the 'key' prop.
const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
      <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={experience.period}>
                  {experience.period}
              </header>
              <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                       <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{experience.role} · <span className="inline-block">{experience.company}</span></span>
                      </span>
                  </h3>
                   <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-normal">
                      {experience.description.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {experience.skills.map(skill => (
                          <li key={skill} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{skill}</div>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </li>
  );
};

// Reverted from function declaration to an arrow function expression. This ensures TypeScript recognizes it as a React component and handles the 'key' prop correctly.
// FIX: Explicitly typed the component with React.FC to ensure TypeScript recognizes it as a React component and correctly handles the 'key' prop.
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
      <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-2.5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-6">
                   <h3 className="font-medium leading-snug text-slate-200">
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                          {project.title}
                      </span>
                  </h3>
                  {project.teamSize && (
                      <p className="mt-1 text-xs text-slate-400">Team Size: {project.teamSize} members</p>
                  )}
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.tags.map(tag => (
                          <li key={tag} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tag}</div>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </li>
  );
};

// Reverted from function declaration to an arrow function expression for consistency.
const SkillsList = ({ categories }: { categories: SkillCategory[] }) => {
  return (
    <>
      {categories.map(category => (
        <div key={category.title} className="mb-8">
          <h3 className="font-bold text-slate-200">{category.title}</h3>
          <ul className="mt-2 flex flex-wrap">
            {category.skills.map(skill => (
              <li key={skill} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{skill}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const LanguageItem: React.FC<{ language: Language }> = ({ language }) => {
  return (
      <li className="mb-4">
          <div className="flex items-center justify-between">
              <span className="font-medium text-slate-200">{language.name}</span>
              <span className="text-sm text-slate-400">{language.proficiency}</span>
          </div>
      </li>
  );
};

// Reverted from function declaration to an arrow function expression for consistency and to resolve component type inference issues.
const App = () => {
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = document.querySelectorAll('nav a');
    const visibleSections = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleSections.add(entry.target.id);
            } else {
                visibleSections.delete(entry.target.id);
            }
        });

        let activeId = '';
        // Find the first section in DOM order that is currently visible in the viewport.
        // This provides a more intuitive highlighting behavior than finding the last one,
        // especially for the 'About' section at the top of the page.
        for (const section of sections) {
            if (visibleSections.has(section.id)) {
                activeId = section.id;
                break;
            }
        }

        navLinks.forEach(link => {
            const linkId = link.getAttribute('href')?.substring(1);
            const indicator = link.querySelector('.nav-indicator');
            const text = link.querySelector('.nav-text');
            const isActive = linkId === activeId;

            link.classList.toggle('active', isActive);

            if (indicator && text) {
              if (isActive) {
                indicator.classList.add('w-16', 'bg-slate-200');
                indicator.classList.remove('w-8', 'bg-slate-600');
                text.classList.add('text-slate-200');
                text.classList.remove('text-slate-500');
              } else {
                indicator.classList.add('w-8', 'bg-slate-600');
                indicator.classList.remove('w-16', 'bg-slate-200');
                text.classList.add('text-slate-500');
                text.classList.remove('text-slate-200');
              }
            }
        });
    }, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <FloatingShapes />
      <CursorSpotlight />
      <StarTrail />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Section id="about" title="About">
              <p className="text-sm leading-7">{ABOUT}</p>
            </Section>
            <Section id="experience" title="Experience">
               <ol className="group/list">
                  {EXPERIENCE_DATA.map((exp, index) => <ExperienceCard key={index} experience={exp} />)}
              </ol>
            </Section>
            <Section id="projects" title="Selected Projects">
              <ol className="group/list">
                  {PROJECTS_DATA.map((proj, index) => <ProjectCard key={index} project={proj} />)}
              </ol>
            </Section>
             <Section id="skills" title="Skills">
              <SkillsList categories={SKILLS_DATA} />
            </Section>
            <Section id="languages" title="Languages">
              <ul>
                  {LANGUAGES_DATA.map((lang, index) => <LanguageItem key={index} language={lang} />)}
              </ul>
            </Section>
          </main>
        </div>
      </div>
    </>
  );
};


export default App;
