// import founderImage from "../assets/team/amit-sawai-founder.png";
import founderImage from "../assets/team/amit-sawai-founder.jpeg"
import aishwaryaImage from "../assets/team/Aishwarya.png";
import rushikeshImage from "../assets/team/Rushikesh.jpeg";
import tejasImage from "../assets/team/Tejas.jpeg";
import SupriyaImage from "../assets/team/SupriyaChaudhari.png"
import MonikaImage from "../assets/team/MonikaGaudse.png"
import AshishImage from "../assets/team/AshishSable.png"

export default function About() {
  const team = [
    // { name: "Amit Sawai", role: "Founder", responsibilities: "With a vision to build a trusted and diversified professional services company, Amit Sawai founded Sawai Associates with a commitment to delivering meaningful solutions across Real Estate, Insurance, and IT Services. His leadership is driven by innovation, integrity, customer trust, and long-term relationships.", image: founderImage },
    { name: "Monika Gaudse", role: "Operations Head", responsibilities: "A highly organized and dependable professional who ensures smooth day-to-day operations. She focuses on process efficiency, coordination, documentation, and delivering a seamless client experience." , image:MonikaImage}, 
    { name: "Aishwarya Morajkar", role: "Human Resources", responsibilities: "A people-oriented professional dedicated to building a positive and productive workplace. She manages talent acquisition, employee coordination, HR processes, and team engagement.", image: aishwaryaImage },
    { name: "Supriya Chaudhari", role: "IT & Technology Head", responsibilities: "A technology-focused professional responsible for transforming business requirements into effective digital solutions. She leads technology planning, website development, technical coordination, and development initiatives.",image: SupriyaImage},
    { name: "Rushikesh Kendre", role: "Business Consultant", responsibilities: "Provides strategic business guidance, client consultation, market insights, and tailored solutions while supporting business planning, partnerships, and long-term growth opportunities.", image: rushikeshImage },
    { name: "Tejas Kaple", role: "Business Development Associate", responsibilities: "Builds strong client relationships, manages business opportunities, supports sales activities, coordinates with clients, and contributes to expanding the company's market presence and overall business growth.", image: tejasImage },
    { name: "Ashish Sable", role: "Marketing & Sales", responsibilities: "Handles marketing campaigns, promotional activities, and brand visibility across digital and offline channels. Develops marketing strategies and supports the company’s positioning, outreach, and revenue growth.", image: AshishImage },
  ];

  return (
    <div>
      <PageHero title="About Sawai Associates" text="Property. Protection. Technology. One Trusted Partner." />

      <section className="section">
        <div className="container split founder">
          <div className="founder-photo"><img src={founderImage} alt="Amit Sawai, Founder of Sawai Associates" /></div>
          <div>
            <span className="eyebrow">Founder</span>
            <h2>Amit Sawai</h2>
            <h4>Founder & Director, Sawai Associates</h4>
            <p>With a vision to build a trusted and diversified professional services company, Amit Sawai founded Sawai Associates with a commitment to delivering meaningful solutions across Real Estate, Insurance, and IT Services. His leadership is driven by innovation, integrity, customer trust, and long-term relationships.</p>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container vision-grid">
          <div><span className="eyebrow">Our Vision</span><h2>Building Trust for the Future</h2><p>To build a trusted organization that creates opportunities, delivers value, and grows together with its clients and partners.</p></div>
          <div><span className="eyebrow">Our Mission</span><h2>Delivering Complete Solutions</h2><p>Driven by trust, transparency, expertise, and innovation, we aim to simplify decisions, protect what matters, and enable sustainable growth.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><span className="eyebrow">Why Choose Us</span><h2>What Makes Us Different</h2></div>
          <div className="why-grid">
            <div className="why-card"><h3>Trusted Expertise</h3><p>Experienced professionals providing reliable advice and practical solutions.</p></div>
            <div className="why-card"><h3>Customer First</h3><p>Every service is designed around your requirements and goals.</p></div>
            <div className="why-card"><h3>Transparent Process</h3><p>Clear communication and honest guidance throughout every step.</p></div>
            <div className="why-card"><h3>Complete Support</h3><p>End-to-end assistance across property, insurance and technology.</p></div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-head"><span className="eyebrow">Our Team</span><h2>Team Structure & Key Responsibilities</h2><p>Meet the professionals and learn about the responsibilities that support Sawai Associates.</p></div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card team-info-card" key={member.name}>
                {member.image ? <img className="team-member-image" src={member.image} alt={member.name} /> : <div className="team-initials" aria-hidden="true">{member.name.split(" ").map((part) => part[0]).join("")}</div>}
                <div className="team-info"><span className="team-role">{member.role}</span><h3>{member.name}</h3><p>{member.responsibilities}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PageHero({ title, text }) {
  return <section className="page-hero about-hero"><div className="container"><span className="eyebrow">Sawai Associates</span><h1>{title}</h1><p>{text}</p></div></section>;
}
