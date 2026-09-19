import teaching1 from "../assets/teaching1.jpeg";
import teaching2 from "../assets/teaching2.jpeg";
import teaching3 from "../assets/teaching3.jpeg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-32 mb-16 max-w-4xl rounded-card border border-line bg-white px-6 py-16 text-center sm:px-10"
    >
      <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
      Volunteering
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted">
      Volunteered to teach English to school-age children, helping them develop foundational reading, writing, vocabulary, and communication skills in Mount Carmel School Informal Learning Center. It was a honor to serve the community 
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      <img src={teaching1}/>
      <img src={teaching2}/>
      <img src={teaching3}/>
      </div>
    </section>
  )
}
