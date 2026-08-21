const services = [
  {
    number: "01",
    title: "WordPress Development",
    description:
      "Custom WordPress websites, themes, plugins and content architectures built around your requirements.",
  },
  {
    number: "02",
    title: "Headless WordPress",
    description:
      "Modern WordPress backends connected to React and Next.js frontends through REST APIs.",
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "Responsive, accessible and performance-focused websites built from designs or ideas.",
  },
  {
    number: "04",
    title: "Custom Integrations",
    description:
      "Third-party APIs, forms, payments and custom functionality integrated into existing websites.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Heading */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Services
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              From idea
              <span className="block text-white/40">
                to execution.
              </span>
            </h2>
          </div>

          {/* Services */}
          <div className="border-t border-white/10">

            {services.map((service) => (
              <div
                key={service.number}
                className="
                  group
                  grid gap-5
                  border-b border-white/10
                  py-8
                  md:grid-cols-[70px_1fr]
                "
              >

                <span className="
                  text-sm
                  tracking-[0.2em]
                  text-purple-300/60
                  transition-colors
                  group-hover:text-purple-300
                ">
                  {service.number}
                </span>

                <div>
                  <h3 className="
                    text-xl
                    font-medium
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  ">
                    {service.title}
                  </h3>

                  <p className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/40
                  ">
                    {service.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}