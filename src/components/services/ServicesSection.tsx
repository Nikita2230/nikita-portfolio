const services = [
  {
    number: "01",
    title: "Custom WordPress",
    description:
      "Custom themes, plugins, content structures and functionality built around your requirements.",
  },
  {
    number: "02",
    title: "WooCommerce",
    description:
      "Custom stores, checkout flows, payment integrations and WooCommerce functionality.",
  },
  {
    number: "03",
    title: "Design to WordPress",
    description:
      "Responsive WordPress builds from Figma or existing designs using custom code or page builders.",
  },
  {
    number: "04",
    title: "Headless & APIs",
    description:
      "WordPress backends connected to React and Next.js frontends through REST APIs.",
  },
  {
    number: "05",
    title: "Custom Integrations",
    description:
      "Third-party APIs, forms, payments and custom features integrated into existing websites.",
  },
  {
    number: "06",
    title: "Performance & Care",
    description:
      "Speed optimization, troubleshooting, updates and ongoing WordPress maintenance.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-600/[0.045]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-fuchsia-500/[0.025]
            blur-[120px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-300
            "
          >
            Services
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Built for

            <span
              className="
                block
                bg-gradient-to-r
                from-purple-300
                via-purple-400
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              every chapter.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-7
              text-white/55
            "
          >
            From the first idea to what comes next — thoughtful
            development for every stage of your website.
          </p>
        </div>

        {/* Compact service grid */}
        <div
          className="
            grid
            gap-px
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/10
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                relative
                min-h-[190px]
                overflow-hidden
                bg-[#0b0812]
                p-7
                transition-all
                duration-500
                hover:bg-purple-500/[0.045]
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    tracking-[0.3em]
                    text-purple-300/70
                    transition-colors
                    duration-300
                    group-hover:text-purple-300
                  "
                >
                  {service.number}
                </span>

                {/* Chapter marker */}
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-purple-400/40
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:bg-purple-300
                    group-hover:shadow-[0_0_12px_rgba(192,132,252,0.8)]
                  "
                />
              </div>

              {/* Content */}
              <h3
                className="
                  mt-8
                  text-lg
                  font-medium
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-purple-200
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-sm
                  leading-6
                  text-white/55
                  transition-colors
                  duration-300
                  group-hover:text-white/70
                "
              >
                {service.description}
              </p>

              {/* Hover line */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-gradient-to-r
                  from-purple-500
                  to-fuchsia-400
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-purple-500/[0.08]
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </article>
          ))}
        </div>

        {/* Closing detail */}
        <p
          className="
            mt-8
            text-right
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-purple-300/30
          "
        >
          built to evolve · made to last
        </p>
      </div>
    </section>
  );
}