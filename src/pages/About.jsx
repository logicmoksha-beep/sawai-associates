export default function About(){
 const team=[
  {name:"Amit Sawai",role:"Founder & Director"},
  {name:"Team Member",role:"Real Estate"},
  {name:"Team Member",role:"Insurance"},
  {name:"Team Member",role:"IT Services"}
 ];
 return <div>
  <PageHero title="About Sawai Associates" text="A trusted approach to Real Estate, Insurance and IT Services."/>
  <section className="section"><div className="container split founder">
   <div className="founder-photo"><div className="photo-placeholder">Founder Photo</div></div>
   <div><span className="eyebrow">Our Founder</span><h2>Amit Sawai</h2><h4>Founder & Director</h4><p>Sawai Associates is built with a vision to bring dependable service, professional guidance and practical solutions to clients across Real Estate, Insurance and IT Services.</p><p>Founder message can be updated here later without changing the page design.</p></div>
  </div></section>
  <section className="section light-section"><div className="container vision-grid"><div><span className="eyebrow">Vision</span><h2>Grow with trust and purpose.</h2><p>Build a reliable brand that creates long-term value for clients through quality service and meaningful relationships.</p></div><div><span className="eyebrow">Mission</span><h2>Make solutions simple.</h2><p>Deliver professional, transparent and client-focused services across our business verticals.</p></div></div></section>
  <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">Our Team</span><h2>People behind the service</h2></div><div className="team-grid">{team.map((m,i)=><div className="team-card" key={i}><div className="team-photo">Photo</div><div className="team-overlay"><b>{m.name}</b><span>{m.role}</span></div></div>)}</div></div></section>
 </div>
}
function PageHero({title,text}){return <section className="page-hero"><div className="container"><span className="eyebrow">Sawai Associates</span><h1>{title}</h1><p>{text}</p></div></section>}