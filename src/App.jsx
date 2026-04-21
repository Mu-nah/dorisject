import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";

<MdEmail />

// Using CDN URLs that don't 404 on dark colors.
// Format: https://cdn.simpleicons.org/{slug} (NO color suffix = uses brand's own color, always works)
const tools = {
  education: [
    { name: "Zoho CRM",      icon: "https://cdn.simpleicons.org/zoho" },
    { name: "Salesforce",    icon: "https://cdn.simpleicons.org/salesforce" },
    { name: "HubSpot",       icon: "https://cdn.simpleicons.org/hubspot" },
    { name: "Google Scholar",icon: "https://cdn.simpleicons.org/googlescholar" },
    { name: "Zoom",          icon: "https://cdn.simpleicons.org/zoom" },
    { name: "Booking.com",   icon: "https://cdn.simpleicons.org/bookingcom" },
    { name: "Airbnb",        icon: "https://cdn.simpleicons.org/airbnb" },
    { name: "Skyscanner",    icon: "https://cdn.simpleicons.org/skyscanner" },
  ],
  va: [
    { name: "Google Workspace", icon: "https://cdn.simpleicons.org/googleworkspace" },
    { name: "Microsoft 365",    icon: "https://cdn.simpleicons.org/microsoft" },
    { name: "Trello",           icon: "https://cdn.simpleicons.org/trello" },
    { name: "Asana",            icon: "https://cdn.simpleicons.org/asana" },
    { name: "ClickUp",          icon: "https://cdn.simpleicons.org/clickup" },
    { name: "Notion",           icon: "https://cdn.simpleicons.org/notion/ffffff" },
    { name: "Slack",            icon: "https://cdn.simpleicons.org/slack" },
    { name: "Dropbox",          icon: "https://cdn.simpleicons.org/dropbox" },
    { name: "Google Drive",     icon: "https://cdn.simpleicons.org/googledrive" },
    { name: "OneDrive",         icon: "https://cdn.simpleicons.org/microsoftonedrive" },
  ],
  social: [
    { name: "Hootsuite",        icon: "https://cdn.simpleicons.org/hootsuite" },
    { name: "Buffer",           icon: "https://cdn.simpleicons.org/buffer" },
    { name: "Later",            icon: "https://cdn.simpleicons.org/later" },
    { name: "Meta Business",    icon: "https://cdn.simpleicons.org/meta" },
    { name: "Canva",            icon: "https://cdn.simpleicons.org/canva" },
    { name: "CapCut",           icon: "https://cdn.simpleicons.org/capcut/ffffff" },
    { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics" },
    { name: "SEMrush",          icon: "https://cdn.simpleicons.org/semrush" },
    { name: "Ahrefs",           icon: "https://cdn.simpleicons.org/ahrefs" },
    { name: "Zapier",           icon: "https://cdn.simpleicons.org/zapier" },
    { name: "Mailchimp",        icon: "https://cdn.simpleicons.org/mailchimp" },
  ],
  customer: [
    { name: "Zendesk",          icon: "https://cdn.simpleicons.org/zendesk" },
    { name: "Freshdesk",        icon: "https://cdn.simpleicons.org/freshdesk" },
    { name: "Intercom",         icon: "https://cdn.simpleicons.org/intercom" },
    { name: "WhatsApp Business",icon: "https://cdn.simpleicons.org/whatsapp" },
    { name: "Typeform",         icon: "https://cdn.simpleicons.org/typeform/ffffff" },
    { name: "Google Forms",     icon: "https://cdn.simpleicons.org/googleforms" },
  ],
};

const services = [
  { id:"education", icon:"🎓", title:"Global Education Consulting", color:"#38bdf8",
    desc:"End-to-end admissions guidance, visa applications, and international student relocation helping learners unlock global opportunities with confidence." },
  { id:"va", icon:"🖥️", title:"Virtual Assistance", color:"#a78bfa",
    desc:"Seamless administrative support — scheduling, reports, invoicing, and coordination, so busy professionals can focus on what matters most." },
  { id:"social", icon:"📱", title:"Social Media & Automation", color:"#34d399",
    desc:"Strategy-driven content, community growth, and smart automation workflows that amplify your brand and save you hours every week." },
  { id:"customer", icon:"🎧", title:"Customer Service & Support", color:"#fb923c",
    desc:"Empathetic, solution-focused support across live chat, email, and helpdesks,  turning every touchpoint into a trust-building moment." },
];

const experience = [
  { period:"Apr 2026 – Present", role:"Social Media Manager",             company:"Switch Digital",                        location:"Abuja, Nigeria · Remote", tags:["Social Media","SEM","Content Strategy","Automation"] },
  { period:"Jan 2024 – Mar 2026",role:"International Education Consultant",company:"Yes You Can Education",                location:"", tags:["CRM","Admissions","Visa Applications","Travel Logistics"] },
  { period:"Aug 2022 – Dec 2023",role:"Customer Care Representative",     company:"One Nation Energy Platform",            location:"", tags:["Google Workspace","Customer Feedback","Live Chat"] },
  { period:"Jul 2021 – Jun 2022",role:"Virtual Assistant",                company:"DAC's Communication",                   location:"", tags:["Scheduling","Reports","Admin Support"] },
  { period:"Jul 2021 – Jul 2022",role:"Chemistry Teacher",                company:"Govt. Day Secondary School, Taraba State",location:"", tags:["Curriculum","Assessment","Student Engagement"] },
];

const WA = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LI = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function Chip({ name, icon }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:"flex", alignItems:"center", gap:8,
        background: hov ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.058)",
        border: `1px solid ${hov ? "rgba(255,255,255,0.24)" : "rgba(255,255,255,0.1)"}`,
        borderRadius:999, padding:"7px 15px",
        fontSize:13, color:"#d1d5db",
        transition:"all 0.2s", cursor:"default", whiteSpace:"nowrap",
      }}
    >
      <img
        src={icon} alt={name}
        width={15} height={15}
        style={{ objectFit:"contain", flexShrink:0, filter:"brightness(1.1)" }}
        onError={e => { e.target.style.display = "none"; }}
      />
      {name}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive]   = useState("education");
  const [menu,   setMenu]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const aS = services.find(s => s.id === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

        /* ── RESET & BASE ── */
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }

        /* These rules target the React root so the component fills the page */
        #root, [data-reactroot] { width:100% !important; max-width:none !important; }

        body {
          font-family:'Plus Jakarta Sans',sans-serif;
          background:#07090f;
          color:#e5e7eb;
          -webkit-font-smoothing:antialiased;
          overflow-x:hidden;
          width:100%;
          min-height:100vh;
        }
        a { text-decoration:none; color:inherit; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-thumb { background:#1e3a58; border-radius:4px; }

        /* ── LAYOUT ── */
        .pf-root {
          width:100%;
          min-height:100vh;
          background:#07090f;
        }
        .wrap { width:100%; max-width:1160px; margin:0 auto; padding:0 36px; }

        /* ── NAV ── */
        .nav {
          position:fixed; top:0; left:0; right:0; z-index:999;
          transition:background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
          width:100%;
        }
        .nav.on {
          background:rgba(7,9,15,0.9);
          backdrop-filter:blur(16px);
          border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .nav-row {
          display:flex; justify-content:space-between; align-items:center;
          padding:20px 36px; max-width:1160px; margin:0 auto;
        }
        .logo {
          font-family:'Syne',sans-serif; font-weight:800; font-size:19px;
          color:#f9fafb; display:flex; align-items:center; gap:10px;
        }
        .pill-ow {
          background:linear-gradient(135deg,#38bdf8,#818cf8);
          border-radius:999px; padding:3px 12px;
          font-size:10px; font-weight:700; color:#fff;
          letter-spacing:.06em; font-family:'Plus Jakarta Sans',sans-serif;
        }
        .nav-links { display:flex; align-items:center; gap:36px; }
        .nav-links a { font-size:14px; font-weight:500; color:#9ca3af; transition:color .2s; }
        .nav-links a:hover { color:#f3f4f6; }
        .btn-wa {
          display:inline-flex; align-items:center; gap:7px;
          background:linear-gradient(135deg,#25D366,#128C7E); color:#fff;
          border-radius:999px; padding:10px 22px; font-size:14px; font-weight:600;
          border:none; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif;
          box-shadow:0 3px 18px rgba(37,211,102,.28);
          transition:transform .2s, box-shadow .2s;
        }
        .btn-wa:hover { transform:translateY(-2px); box-shadow:0 6px 28px rgba(37,211,102,.45); }

        /* hamburger */
        .hbg {
          display:none; flex-direction:column; gap:5px;
          background:none; border:none; cursor:pointer; padding:4px;
        }
        .hbg span {
          display:block; width:24px; height:2px;
          background:#f3f4f6; border-radius:2px; transition:all .3s;
        }
        .mob-menu {
          display:none; flex-direction:column;
          background:rgba(7,9,15,.97);
          border-top:1px solid rgba(255,255,255,.07);
          padding:20px 36px 30px; gap:18px;
        }
        .mob-menu.open { display:flex; }
        .mob-menu a { font-size:17px; font-weight:500; color:#d1d5db; transition:color .2s; }
        .mob-menu a:hover { color:#fff; }

        /* ── HERO ── */
        .hero {
          min-height:100vh; width:100%;
          display:flex; align-items:center;
          padding:130px 36px 90px;
          position:relative; overflow:hidden;
        }
        .glow {
          position:absolute; border-radius:50%;
          filter:blur(100px); pointer-events:none;
        }
        .hero-grid {
          display:grid; grid-template-columns:1fr 400px;
          gap:80px; align-items:center;
          width:100%; max-width:1160px; margin:0 auto;
        }

        /* available pill */
        .av-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(37,211,102,.1); border:1px solid rgba(37,211,102,.28);
          border-radius:999px; padding:7px 18px; margin-bottom:30px;
        }
        .av-dot {
          width:8px; height:8px; border-radius:50%;
          background:#25D366; animation:pulse 2s infinite;
        }
        .av-pill span { font-size:13px; color:#25D366; font-weight:500; }

        .h1 {
          font-family:'Syne',sans-serif;
          font-size:clamp(58px,7.5vw,92px);
          font-weight:800; line-height:1.0; color:#f9fafb; margin-bottom:24px;
        }
        .grad {
          background:linear-gradient(135deg,#38bdf8 0%,#818cf8 45%,#34d399 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .hero-sub {
          font-size:clamp(15px,1.6vw,18px); color:#9ca3af;
          line-height:1.8; max-width:500px; margin-bottom:36px;
        }
        .hero-btns { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:58px; }

        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          padding:15px 32px; border-radius:999px; font-weight:600; font-size:16px;
          font-family:'Plus Jakarta Sans',sans-serif; cursor:pointer; border:none;
          background:linear-gradient(135deg,#25D366,#128C7E); color:#fff;
          box-shadow:0 4px 22px rgba(37,211,102,.32); transition:all .25s;
        }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(37,211,102,.48); }
        .btn-ghost {
          display:inline-flex; align-items:center; gap:8px;
          padding:15px 32px; border-radius:999px; font-weight:600; font-size:16px;
          font-family:'Plus Jakarta Sans',sans-serif; cursor:pointer;
          background:transparent; color:#f3f4f6; border:1px solid rgba(255,255,255,.22);
          transition:all .25s;
        }
        .btn-ghost:hover { background:rgba(255,255,255,.07); border-color:rgba(255,255,255,.4); }

        .stats { display:flex; gap:52px; }
        .stat-n {
          font-family:'Syne',sans-serif;
          font-size:clamp(38px,5vw,54px);
          font-weight:800; color:#f9fafb; line-height:1;
        }
        .stat-l {
          font-size:11px; color:#6b7280; margin-top:5px;
          font-weight:500; letter-spacing:.05em; text-transform:uppercase;
        }

        /* ── IMAGE ── */
        .img-wrap  { position:relative; border-radius:28px; }
        .img-ring  { position:absolute; inset:-2px; border-radius:30px; background:linear-gradient(135deg,#38bdf8,#818cf8,#34d399); z-index:0; }
        .img-box   { position:relative; border-radius:28px; overflow:hidden; background:#111827; z-index:1; }
        .img-box img { width:100%; display:block; aspect-ratio:4/5; object-fit:cover; object-position:center top; }
        .img-fb  {
          width:100%; aspect-ratio:4/5;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          background:linear-gradient(160deg,#1a2744,#0f1a2e);
          color:#9ca3af; gap:14px; font-size:14px; font-weight:500;
        }
        .img-card {
          position:absolute; bottom:14px; left:12px; right:12px;
          background:rgba(7,9,15,.85); backdrop-filter:blur(14px);
          border-radius:14px; padding:13px 16px;
          border:1px solid rgba(255,255,255,.09);
          display:flex; align-items:center; justify-content:space-between; gap:10px;
        }
        .img-name { font-family:'Syne',sans-serif; font-weight:700; font-size:14px; color:#f3f4f6; }
        .img-sub  { font-size:11px; color:#6b7280; margin-top:2px; }
        .li-badge {
          display:inline-flex; align-items:center; gap:5px;
          background:#0A66C2; border-radius:8px; padding:7px 12px;
          font-size:11px; font-weight:700; color:#fff;
          transition:background .2s; flex-shrink:0; white-space:nowrap;
        }
        .li-badge:hover { background:#0958a8; }

        /* ── SECTIONS ── */
        .sec     { padding:100px 0; }
        .sec-alt { padding:100px 0; background:rgba(255,255,255,.018); border-top:1px solid rgba(255,255,255,.05); border-bottom:1px solid rgba(255,255,255,.05); }
        .sec-lbl { font-size:12px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; margin-bottom:14px; }
        .sec-h   { font-family:'Syne',sans-serif; font-size:clamp(30px,4.5vw,50px); font-weight:800; color:#f9fafb; margin-bottom:14px; line-height:1.1; }
        .sec-p   { color:#9ca3af; font-size:16px; line-height:1.75; max-width:520px; margin-bottom:48px; }

        /* ── SERVICES ── */
        .svc-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-bottom:24px; }
        .svc-card { border-radius:18px; padding:28px; cursor:pointer; transition:all .3s; }
        .svc-card:hover { transform:translateY(-2px); }
        .svc-ic   { font-size:30px; margin-bottom:14px; }
        .svc-t    { font-family:'Syne',sans-serif; font-size:16px; font-weight:700; margin-bottom:8px; }
        .svc-d    { font-size:13px; color:#9ca3af; line-height:1.65; }
        .spotlight { border-radius:18px; padding:28px; }
        .sp-head  { display:flex; align-items:center; gap:10px; margin-bottom:6px; }
        .sp-hint  { font-size:12px; color:#6b7280; margin-bottom:14px; }
        .chips    { display:flex; flex-wrap:wrap; gap:8px; }

        /* ── EXPERIENCE ── */
        .exp-item {
          display:grid; grid-template-columns:170px 1fr;
          gap:24px; padding:28px 0;
          border-bottom:1px solid rgba(255,255,255,.055);
        }
        .exp-item:last-child { border-bottom:none; }
        .exp-period { font-size:12px; color:#6b7280; font-weight:500; padding-top:3px; }
        .exp-role   { font-family:'Syne',sans-serif; font-size:17px; font-weight:700; color:#f3f4f6; margin-bottom:4px; transition:color .2s; }
        .exp-item:hover .exp-role { color:#38bdf8; }
        .exp-co     { font-size:14px; color:#9ca3af; margin-bottom:12px; }
        .tags       { display:flex; flex-wrap:wrap; gap:7px; }
        .tag        { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.09); border-radius:6px; padding:4px 12px; font-size:12px; color:#d1d5db; }
        .edu-card   { margin-top:40px; background:rgba(56,189,248,.06); border:1px solid rgba(56,189,248,.16); border-radius:16px; padding:22px 26px; display:flex; align-items:center; gap:20px; flex-wrap:wrap; }

        /* ── FULL TOOLS ── */
        .tgrid { display:grid; grid-template-columns:repeat(2,1fr); gap:22px; }
        .tcard { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07); border-radius:18px; padding:26px; }
        .thd   { display:flex; align-items:center; gap:10px; margin-bottom:18px; }
        .thl   { font-family:'Syne',sans-serif; font-weight:700; font-size:14px; }

        /* ── ABOUT ── */
        .quote {
          font-size:clamp(17px,2.2vw,21px); font-style:italic; color:#d1d5db;
          line-height:1.8; border-left:3px solid #38bdf8; padding-left:26px; margin-bottom:28px;
        }

        /* ── CTA ── */
        .cta-sec { padding:100px 0; text-align:center; position:relative; overflow:hidden; }
        .cta-h   { font-family:'Syne',sans-serif; font-size:clamp(34px,5.5vw,62px); font-weight:800; color:#f9fafb; margin-bottom:18px; line-height:1.08; }
        .cta-p   { color:#9ca3af; font-size:17px; line-height:1.7; margin-bottom:38px; }
        .cta-row { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .btn-li  {
          display:inline-flex; align-items:center; gap:8px;
          padding:15px 32px; border-radius:999px; font-weight:600; font-size:16px;
          font-family:'Plus Jakarta Sans',sans-serif; cursor:pointer; border:none;
          background:#0A66C2; color:#fff;
          box-shadow:0 4px 20px rgba(10,102,194,.35); transition:all .25s;
        }
        .btn-li:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(10,102,194,.5); }

        /* ── FOOTER ── */
        .foot     { border-top:1px solid rgba(255,255,255,.06); padding:28px 0; }
        .foot-row { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; }
        .foot-logo{ font-family:'Syne',sans-serif; font-weight:800; font-size:17px; color:#f9fafb; }
        .foot-copy{ font-size:13px; color:#6b7280; }

        /* ── RESPONSIVE ── */
        @media (max-width:940px) {
          .hero-grid { grid-template-columns:1fr; gap:52px; }
          .img-col   { order:-1; max-width:340px; margin:0 auto; width:100%; }
          .stats     { gap:32px; }
          .svc-grid  { grid-template-columns:1fr; }
          .exp-item  { grid-template-columns:1fr; gap:6px; }
          .exp-period{ padding-top:0; }
          .tgrid     { grid-template-columns:1fr; }
          .nav-links { display:none; }
          .hbg       { display:flex; }
        }
        @media (max-width:540px) {
          .hero      { padding:108px 20px 60px; }
          .wrap      { padding:0 20px; }
          .nav-row   { padding:16px 20px; }
          .mob-menu  { padding:20px 20px 28px; }
          .stats     { gap:20px; }
          .stat-n    { font-size:32px; }
          .hero-btns { flex-direction:column; }
          .btn-primary, .btn-ghost { justify-content:center; }
          .foot-row  { flex-direction:column; align-items:center; text-align:center; }
          .cta-row   { flex-direction:column; align-items:center; }
          .cta-row .btn-primary, .cta-row .btn-li { width:100%; justify-content:center; }
        }

        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
      `}</style>

      <div className="pf-root">

        {/* ── NAV ── */}
        <nav className={`nav${scrolled ? " on" : ""}`}>
          <div className="nav-row">
            <div className="logo">
              Doris Ezeasogu
              <span className="pill-ow">Portfolio</span>
            </div>

            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#experience">Experience</a>
              <a href="#tools">Tools</a>
              <a href="#about">About</a>
              <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ezeasogudoris@gmail.com"
                    target="_blank"
                    className="btn-wa flex items-center gap-2"> <MdEmail /> Contact Me</a>
            </div>

            <button className="hbg" onClick={() => setMenu(o => !o)} aria-label="Menu">
              <span style={{ transform: menu ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ opacity: menu ? 0 : 1 }} />
              <span style={{ transform: menu ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>

          <div className={`mob-menu${menu ? " open" : ""}`}>
            {["services", "experience", "tools", "about"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMenu(false)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="glow" style={{ width:560, height:560, background:"rgba(56,189,248,.07)",  top:"5%",    right:"-8%"  }} />
          <div className="glow" style={{ width:440, height:440, background:"rgba(167,139,250,.06)", bottom:"5%", left:"-6%"  }} />

          <div className="hero-grid">

            {/* left text */}
            <div>
              <div className="av-pill">
                <span className="av-dot" />
                <span>Available for Work</span>
              </div>

              <h1 className="h1">
                Doris<br />
                <span className="grad">Ezeasogu</span>
              </h1>

              <p className="hero-sub">
                Global Education Consultant · Virtual Assistant · Social Media &amp; Automation Specialist
                bridging education, technology, and service excellence across borders.
              </p>

              <div className="hero-btns">
                <a href="#experience" className="btn-ghost">View Experience ↓</a>
              </div>

              <div className="stats">
                {[["5+","Years Experience"],["4","Core Specialties"],["100%","Remote Ready"]].map(([n,l]) => (
                  <div key={l}>
                    <div className="stat-n">{n}</div>
                    <div className="stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right image */}
            <div className="img-col">
              <div className="img-wrap">
                <div className="img-ring" />
                <div className="img-box">
                  <img
                    src="/doris.jpeg"
                    alt="Doris Ezeasogu"
                    onError={e => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* fallback shown only if image 404s */}
                  <div className="img-fb" style={{ display:"none" }}>
                    <span style={{ fontSize:72 }}>👩‍💼</span>
                    Doris Ezeasogu
                  </div>
                  <div className="img-card">
                    <div>
                      <div className="img-name">Doris Ezeasogu</div>
                    </div>
                    <a href="https://www.linkedin.com/in/dorischidinma" target="_blank" rel="noreferrer" className="li-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="sec">
          <div className="wrap">
            <p className="sec-lbl" style={{ color:"#38bdf8" }}>What I Offer</p>
            <h2 className="sec-h">Four Pillars of Excellence</h2>
            <p className="sec-p">A versatile professional bringing clarity, strategy, and execution to every engagement.</p>

            <div className="svc-grid">
              {services.map(s => {
                const on = active === s.id;
                return (
                  <div key={s.id} className="svc-card" onClick={() => setActive(s.id)}
                    style={{
                      background: on ? `linear-gradient(135deg,${s.color}18,${s.color}06)` : "rgba(255,255,255,.03)",
                      border: `1px solid ${on ? s.color + "50" : "rgba(255,255,255,.08)"}`,
                      boxShadow: on ? `0 8px 36px ${s.color}1a` : "none",
                      transform: on ? "translateY(-3px)" : "none",
                    }}>
                    <div className="svc-ic">{s.icon}</div>
                    <div className="svc-t" style={{ color: on ? s.color : "#f3f4f6" }}>{s.title}</div>
                    <div className="svc-d">{s.desc}</div>
                  </div>
                );
              })}
            </div>

            <div className="spotlight"
              style={{ background:`linear-gradient(135deg,${aS.color}0e,rgba(255,255,255,.02))`, border:`1px solid ${aS.color}30` }}>
              <div className="sp-head">
                <span style={{ fontSize:20 }}>{aS.icon}</span>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:15, color:aS.color }}>
                  {aS.title} — Toolkit
                </span>
              </div>
              <div className="chips">
                {tools[active].map(t => <Chip key={t.name} name={t.name} icon={t.icon} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="sec-alt">
          <div className="wrap">
            <p className="sec-lbl" style={{ color:"#a78bfa" }}>Career Journey</p>
            <h2 className="sec-h">My Experience</h2>

            <div>
              {experience.map((e, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-period">{e.period}</div>
                  <div>
                    <div className="exp-role">{e.role}</div>
                    <div className="exp-co">{e.company}{e.location ? ` · ${e.location}` : ""}</div>
                    <div className="tags">{e.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="edu-card">
              <span style={{ fontSize:36 }}>🎓</span>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:"#f3f4f6" }}>
                  B.Sc. Chemistry 
                </div>
                <div style={{ fontSize:14, color:"#9ca3af", marginTop:3 }}>University of Jos</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FULL TOOLS ── */}
        <section id="tools" className="sec">
          <div className="wrap">
            <p className="sec-lbl" style={{ color:"#34d399" }}>Tech Stack</p>
            <h2 className="sec-h">Full Toolkit</h2>
            <p className="sec-p">Every tool and platform across all four disciplines.</p>
            <div className="tgrid">
              {services.map(s => (
                <div key={s.id} className="tcard">
                  <div className="thd">
                    <span style={{ fontSize:20 }}>{s.icon}</span>
                    <span className="thl" style={{ color:s.color }}>{s.title}</span>
                  </div>
                  <div className="chips">
                    {tools[s.id].map(t => <Chip key={t.name} name={t.name} icon={t.icon} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="sec-alt">
          <div className="wrap">
            <div style={{ maxWidth:680, margin:"0 auto" }}>
              <p className="sec-lbl" style={{ color:"#fb923c", textAlign:"center" }}>About Me</p>
              <h2 className="sec-h" style={{ textAlign:"center" }}>Mission &amp; Vision</h2>
              <blockquote className="quote">
                "My mission is to bridge education, technology, and service excellence helping individuals and organizations thrive in today's interconnected world."
              </blockquote>
              <p style={{ color:"#9ca3af", lineHeight:1.85, fontSize:15 }}>
                Based in Nigeria, I am an adaptable professional with a global perspective, combining expertise in education, administration, and digital communication.
                I help institutions and learners navigate opportunities across borders while also building digital presence and streamlining operations for the businesses that serve them.
                With a background spanning chemistry education, international consultancy, customer success, and digital marketing, I bring both depth and breadth to every role.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-sec">
          <div className="glow" style={{ width:700, height:500, background:"rgba(37,211,102,.05)", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }} />
          <div className="wrap" style={{ position:"relative" }}>
            <h2 className="cta-h">Let's Work Together</h2>
            <p className="cta-p">Available for remote, hybrid, or on-site roles. Ready to collaborate globally.</p>
            <div className="cta-row">
              <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ezeasogudoris@gmail.com"
                    target="_blank"
                    className="btn-wa flex items-center gap-2"> <MdEmail /> Contact Me</a>
              <a href="https://www.linkedin.com/in/dorischidinma" target="_blank" rel="noreferrer" className="btn-li">
                <LI /> View LinkedIn Profile
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="foot">
          <div className="wrap">
            <div className="foot-row">
              <span className="foot-logo">D.Ezeasogu</span>
              <span className="foot-copy">© 2026 Doris Ezeasogu · All rights reserved</span>
              <span className="foot-copy">Nigeria</span>
            </div>
          </div>
        </footer>

      </div>{/* /pf-root */}
    </>
  );
}
