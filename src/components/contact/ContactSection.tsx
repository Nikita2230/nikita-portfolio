import Reveal from "@/components/ui/Reveal";
const socials = [
  {
    name: "LinkedIn",
    href: "#",
  },
  {
    name: "GitHub",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <Reveal>
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-40"
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[500px] w-[700px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-5xl text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
          Let's work together
        </p>

        <h2 className="
          mt-8
          text-5xl
          font-semibold
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-7xl
        ">
          Have a project
          <span className="block text-white/35">
            in mind?
          </span>
        </h2>

        <p className="
          mx-auto
          mt-8
          max-w-xl
          text-base
          leading-8
          text-white/45
        ">
          I'm always open to discussing interesting projects,
          collaborations and opportunities to build something
          meaningful.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:your-email@example.com"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-purple-200
            "
          >
            Get in touch
            <span>↗</span>
          </a>
        </div>

        

      </div>
    </section>
    </Reveal>
  );
}