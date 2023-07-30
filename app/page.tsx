import { TfiGithub, TfiLinkedin } from 'react-icons/tfi';

import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
import ProjectPreview from './components/ProjectPreview';
import { RiTwitterFill } from 'react-icons/ri';
import SocialButton from './components/SocialButton';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 tablet:grid-cols-[8fr_4fr] gap-4 mb-4">
        <div className="tablet:h-[30rem] rounded-3xl p-10 flex flex-col gap-8 tablet:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            Hi! I&apos;m Souvik, a web developer and part-time designer.
          </h1>
          <p className="tablet:flex-1">
            I care a lot about using code+design to create a positive impact and
            enjoy creating user—centric, highly-efficient, and human
            experiences.
          </p>
          <div className="flex flex-col tablet:flex-row items-center gap-4 justify-self-end">
            <Link
              href={'mailto:mishra.souvik911@gmail.com'}
              className="bg-black text-center text-white whitespace-nowrap font-medium py-3 px-12 rounded-full w-full tablet:w-[175px] tablet:min-w-[175px]"
            >
              Contact Me
            </Link>
            <div className="flex justify-between items-between tablet:gap-4 w-full tablet:w-auto mt-2 tablet:mt-0">
              <SocialButton bgColor="instagram">
                <AiFillInstagram className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="github">
                <TfiGithub className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="linkedin">
                <TfiLinkedin className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="twitter">
                <RiTwitterFill className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/portfolio-headshot.png')] bg-cover bg-center"></div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Some fancy project"
          description="Project description"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Another fancy project"
          description="Project description too"
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="Maybe a responsive grid design"
          description="Project description too too"
        />
        <ProjectPreview
          name="And another useless project"
          description="Also a project description"
          bgColor="#4e4e56"
          dark
        />
      </section>
    </>
  );
}
