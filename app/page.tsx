export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            Hi! Nothing special here. Just your Avg. Web Developer portfolio.
          </h1>
          <p className="flex-1">
            I care a lot about using design for positive impact and enjoy
            creating user—centric, delightful, and human experiences.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              Contact Me
            </button>
            <div className="flex items-center gap-4">add socials</div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/portfolio-headshot.png')] bg-cover bg-center"></div>
      </section>
    </>
  );
}
