
import { services } from "../data";

export default function Service() {

  return (
    <section id="service" className="mx-auto mt-32 max-w-5xl px-4">
      <p
        aria-hidden
        className="pointer-events-none select-none font-display text-[4rem] font-semibold text-ink/5 sm:text-[6rem]"
      >
        TECHSTACK
      </p>
      <h2 className="font-display text-2xl font-semibold">/SKILLS</h2>

      <div className="lg:m-4 lg:flex lg:flex-row lg:gap-10 grid grid-cols-3 gap-8 mt-9">
        {services.map((service) => {
          return (
            <div key={service.title}>
            
                <img
                  src={service.source}
                  className="h-21 w-21 mx-1 my-1 rounded-full"
                  alt="..."
                />
                
            </div>
          );
        })}
      </div>
    </section>
  );
}
