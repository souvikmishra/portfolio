import ProjectPreview from './components/ProjectPreview';
import Socials from './components/Socials';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 tablet:grid-cols-[8fr_4fr] gap-4 mb-4">
        <div className="tablet:h-[30rem] rounded-3xl p-10 flex flex-col gap-8 tablet:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            👋 Hi! I&apos;m Souvik, a web developer and part-time designer.
          </h1>
          <p className="tablet:flex-1">
            I care a lot about using code+design to create a positive impact and
            enjoy creating user—centric, highly-efficient, and human
            experiences.
          </p>
          <Socials />
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
          description="Project description"
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="Responsive grid design"
          description="Project description"
        />
        <ProjectPreview
          name="Another useless project"
          description="Project description"
          bgColor="#4e4e56"
          dark
        />
      </section>

      <section>
        <div className="rounded-3xl p-10 mb-6 flex flex-col gap-8 tablet:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            Want to work together? Let&apos;s talk!
          </h1>
          <p className="tablet:flex-1">
            Feel free to reach out if you have any questions. I&apos;m always
            available for a quick chat.
            <br /> Unless its 3am. Then I&apos;m probably working 👨‍💻.
          </p>
          <Socials />
        </div>
      </section>
    </>
  );
}
