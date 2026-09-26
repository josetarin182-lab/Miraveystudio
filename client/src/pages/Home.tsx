import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Instagram,
  Menu,
  MoveRight,
  RefreshCw,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "View Pricing", href: "#prices" },
];

const work = [
  {
    title: "Statement sleeve",
    category: "Custom / illustrative realism",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/opSXsBWsFDUmVbnF.jpg",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    title: "Story in ink",
    category: "Custom / black & grey",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/voyVFqhtKVTuTqcW.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Realism studies",
    category: "Realism / portrait work",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/LLFenXkfGKAPixZB.jpg",
    className: "md:col-span-3",
  },
  {
    title: "Blackwork archive",
    category: "Blackwork / sleeve studies",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/UyadkqpIBTBgtCbI.jpg",
    className: "md:col-span-3",
  },
  {
    title: "Quiet Thorn",
    category: "Fine line / botanical",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/dqpdnYvwGMHvlQyz.jpg",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    title: "Vesper",
    category: "Ornamental / blackwork",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/WDHSUGBgBbQbTuiN.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Nocturne",
    category: "Abstract / placement study",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/GOobitJPOBLzizkx.webp",
    className: "md:col-span-3",
  },
  {
    title: "Palma",
    category: "Fine line / custom script",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=85",
    className: "md:col-span-3",
  },
  {
    title: "Serein",
    category: "Blackwork / abstraction",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/ppntFNbpBeQvQcxJ.jpg",
    className: "md:col-span-4",
  },
];

const values = [
  "Custom drawings, never repeated",
  "A calm, considered experience",
  "Made to live with you beautifully",
];

const socialPosts = [
  {
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/dqpdnYvwGMHvlQyz.jpg",
    alt: "Botanical blackwork tattoo detail",
    caption: "Quiet thorn, finished in the studio.",
    type: "Latest work",
  },
  {
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/WDHSUGBgBbQbTuiN.jpg",
    alt: "Ornamental blackwork tattoo detail",
    caption: "A study in symmetry and soft shadow.",
    type: "Studio note",
  },
  {
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/euEQQgRzbaEyiplj.jpg",
    alt: "Miravey tattoo studio interior",
    caption: "The room before the first appointment.",
    type: "From the studio",
  },
  {
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/ppntFNbpBeQvQcxJ.jpg",
    alt: "Blackwork tattoo editorial image",
    caption: "Black ink, lived in beautifully.",
    type: "Latest work",
  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All work");
  const [socialOffset, setSocialOffset] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSocialOffset((current) => (current + 1) % socialPosts.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjykorpe", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Form submission failed");

      toast.success("Inquiry received", {
        description: "Thanks — we’ll be in touch within 2–3 studio days.",
      });
      form.reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email support@miraveystudio.com directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f0e8] text-[#151515] selection:bg-[#a72727] selection:text-[#fffaf2]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-black/10 bg-[#f3f0e8]/90 text-[#151515] backdrop-blur-xl" : "bg-transparent text-[#fffaf2]"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={() => scrollTo("#top")} className="group flex items-center gap-2 text-left" aria-label="Go to top">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-current text-[11px] font-bold transition-transform duration-300 group-hover:rotate-45">
              M
            </span>
            <span className="font-display text-xl tracking-[-0.08em]">miraveystudio</span>
          </button>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] md:flex">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollTo(item.href)} className={item.label === "View Pricing" ? "rounded-full border border-[#b2403c]/70 bg-[#b2403c]/15 px-3 py-2 text-[#e06a61] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b2403c] hover:text-[#fffaf2]" : `link-underline transition-colors ${scrolled ? "text-black/70 hover:text-black" : "text-[#fffaf2]/75 hover:text-[#fffaf2]"}`}>
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("#booking")}
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex ${scrolled ? "bg-[#151515] text-[#fffaf2]" : "bg-[#fffaf2] text-[#151515]"}`}
          >
            Book a session <ArrowUpRight size={14} />
          </button>
          <button className="grid h-10 w-10 place-items-center md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f3f0e8] px-5 py-7 md:hidden">
            <div className="flex flex-col gap-5 text-lg font-medium">
              {navItems.map((item) => (
                <button key={item.label} onClick={() => { scrollTo(item.href); setMenuOpen(false); }} className={`text-left ${item.label === "View Pricing" ? "w-fit rounded-full border border-[#b2403c]/60 bg-[#b2403c]/10 px-4 py-2 text-[#a72727] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b2403c] hover:text-[#fffaf2]" : ""}`}>
                  {item.label}
                </button>
              ))}
              <button onClick={() => { scrollTo("#booking"); setMenuOpen(false); }} className="mt-2 flex items-center justify-between border-t border-black/10 pt-5 text-left font-display text-2xl italic">
                Book a session <ArrowUpRight size={22} />
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate min-h-[800px] overflow-hidden bg-[#181818] text-[#fffaf2] sm:min-h-[870px]">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/ZqzTTksVgNfkEPUc.jpg"
          alt="Tattoo artist working in the miravey studio"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.92)_0%,rgba(10,10,10,.76)_34%,rgba(10,10,10,.18)_72%,rgba(10,10,10,.34)_100%)]" />
        <div className="absolute inset-0 opacity-[0.13] mix-blend-screen noise" />
        <div className="absolute left-[6%] top-[19%] h-36 w-36 rounded-full border border-[#e2e0d7]/25 sm:h-48 sm:w-48" />
        <div className="relative mx-auto flex min-h-[800px] max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 sm:min-h-[870px] sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="max-w-[780px]">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e2e0d7]/70 sm:text-[11px]">
              <span className="h-px w-9 bg-[#e2e0d7]/70" /> Independent tattoo studio · Est. 2018
            </div>
            <h1 className="max-w-[800px] font-display text-[clamp(4.4rem,11vw,10.5rem)] leading-[0.78] tracking-[-0.085em]">
              Mark the
              <br />
              <em className="ml-[0.23em] font-normal">moment.</em>
            </h1>
            <div className="mt-10 flex flex-col justify-between gap-8 border-t border-[#e2e0d7]/35 pt-5 sm:mt-12 sm:flex-row sm:items-end">
              <p className="max-w-[330px] text-sm leading-6 text-[#e2e0d7]/78 sm:text-[15px]">
                Your vision. My ink. Custom tattoos made with passion and precision, designed to stand out.
              </p>
              <button onClick={() => scrollTo("#booking")} className="group inline-flex w-fit items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                Start your idea
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e0d7]/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowDownRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-black/10 bg-[#d8d1c3] py-3.5">
        <div className="marquee flex w-max items-center gap-9 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em]">
          {["Custom tattooing", "Fine line", "Blackwork", "Sacred geometry", "Ornamental", "Custom tattooing", "Fine line", "Blackwork", "Sacred geometry", "Ornamental"].map((item, index) => (
            <span className="flex items-center gap-9" key={`${item}-${index}`}>
              {item} <span className="text-[#a72727]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 border-b border-black/15 pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.9] tracking-[-0.065em] sm:text-7xl">Every piece begins with a feeling.</h2>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em]">
              {["All work", "Fine line", "Blackwork", "Ornamental"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border-b pb-1 transition-colors ${activeFilter === filter ? "border-black text-black" : "border-transparent text-black/45 hover:text-black"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[260px] gap-3 md:grid-cols-12 md:auto-rows-[255px]">
            {work.map((piece, index) => (
              <article key={piece.title} className={`group relative overflow-hidden bg-[#272624] ${piece.className} ${index > 2 ? "hidden md:block" : ""}`}>
                <img src={piece.image} alt={`${piece.title} tattoo work`} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-[#fffaf2]">
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.04em]">{piece.title}</h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">{piece.category}</p>
                    <button onClick={() => scrollTo("#booking")} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/55 bg-black/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fffaf2] hover:text-[#151515]">
                      Book this style <ArrowUpRight size={13} />
                    </button>
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"><ArrowUpRight size={14} /></span>
                </div>
              </article>
            ))}
          </div>
          <button className="group mt-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]" onClick={() => toast.message("More work is coming", { description: "Follow the studio on Instagram for fresh pieces." })}>
            See more on Instagram <span className="grid h-8 w-8 place-items-center rounded-full border border-black/25 transition-transform group-hover:translate-x-1"><Instagram size={14} /></span>
          </button>
        </div>
      </section>

      <section id="studio" className="bg-[#1d1c1a] px-5 py-20 text-[#f3f0e8] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="relative min-h-[400px] overflow-hidden bg-[#4b433b]">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663981744549/euEQQgRzbaEyiplj.jpg" alt="Tattoo studio atmosphere" className="absolute inset-0 h-full w-full object-cover grayscale contrast-125" />
            <div className="absolute inset-0 bg-[#1d1c1a]/25" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/35 pt-4 text-[10px] font-semibold uppercase tracking-[0.15em]">
              <span>Miravey Studio</span><span>01 / 01</span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow text-[#d9d3c8]/60">The studio</p>
              <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.06em] sm:text-7xl">A room for people who make their own meaning.</h2>
              <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#d9d3c8]/75 sm:text-base">
                Miravey is a private tattoo practice built around dialogue, detail and the simple power of a considered mark. We work slowly, collaborate closely, and keep the energy of the room calm.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {values.map((value, index) => (
                <div key={value} className="border-t border-white/25 pt-4">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#b2403c]">0{index + 1}</span>
                  <p className="mt-4 text-sm leading-5 text-[#f3f0e8]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-4 font-display text-5xl leading-[0.9] tracking-[-0.065em] sm:text-7xl">From spark to skin.</h2>
              <button onClick={() => scrollTo("#booking")} className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.15em]">
                Make an inquiry <MoveRight size={16} />
              </button>
            </div>
            <div className="divide-y divide-black/15 border-t border-black/15">
              {[
                ["01", "Tell us your idea", "Share a few words, references and the body placement you’re considering. No perfect brief required."],
                ["02", "We shape the concept", "We’ll come back with direction, a proposed session length and a date that fits the work."],
                ["03", "A design with your name on it", "Your piece is drawn from scratch, refined with you, and tattooed in a focused, unhurried session."],
              ].map(([number, title, body]) => (
                <div key={number} className="grid gap-4 py-7 sm:grid-cols-[70px_1fr_1.25fr] sm:gap-8 sm:py-9">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#a72727]">{number}</span>
                  <h3 className="font-display text-3xl tracking-[-0.04em]">{title}</h3>
                  <p className="max-w-sm text-sm leading-6 text-black/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="social" className="border-t border-black/10 bg-[#d8d1c3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col justify-between gap-7 border-b border-black/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">From the feed</p>
              <h2 className="mt-4 font-display text-5xl leading-[0.9] tracking-[-0.065em] sm:text-7xl">Fresh from the studio.</h2>
            </div>
            <a href="https://www.instagram.com/miraveystudio/" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.15em]">
              <Instagram size={16} /> @miraveystudio <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end">
            <div className="relative aspect-square max-w-[480px] overflow-hidden bg-[#272624]">
              {socialPosts.map((post, index) => (
                <img key={post.image} src={post.image} alt={post.alt} className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ${index === socialOffset ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
              ))}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 to-transparent p-5 pt-24 text-[#fffaf2]">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65">{socialPosts[socialOffset].type}</p>
                  <p className="mt-2 font-display text-2xl tracking-[-0.04em]">{socialPosts[socialOffset].caption}</p>
                </div>
                <a href="https://www.instagram.com/miraveystudio/" target="_blank" rel="noreferrer" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/50 transition-transform hover:-translate-y-1" aria-label="Open post on Instagram"><ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {socialPosts.map((post, index) => (
                  <button key={post.image} onClick={() => setSocialOffset(index)} className={`group relative aspect-square overflow-hidden bg-[#272624] ${index === 3 ? "hidden sm:block" : ""}`} aria-label={`Show ${post.caption}`}>
                    <img src={post.image} alt="" className={`h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 ${index === socialOffset ? "opacity-100" : "opacity-65"}`} />
                    {index === socialOffset && <span className="absolute inset-2 border border-white/80" />}
                  </button>
                ))}
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-black/15 pt-5">
                <p className="max-w-sm text-sm leading-6 text-black/60">Studio updates, finished pieces and the occasional glimpse behind the needle.</p>
                <button onClick={() => setSocialOffset((socialOffset + 1) % socialPosts.length)} className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]" aria-label="Show next Instagram post"><RefreshCw size={14} className="transition-transform duration-500 group-hover:rotate-180" /> Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="bg-[#151515] px-5 py-20 text-[#f3f0e8] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow text-[#d8d1c3]/60">Tattoo price list</p>
            <h2 className="mt-4 max-w-lg font-display text-5xl leading-[0.9] tracking-[-0.065em] sm:text-7xl">Good work takes the right amount of time.</h2>
            <p className="mt-8 max-w-md text-[15px] leading-7 text-[#d8d1c3]/75">Custom designs are always welcome. Send your idea, size and placement for a considered quote.</p>
            <div className="mt-10 inline-flex items-center gap-3 border border-[#d8d1c3]/25 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#d8d1c3]/75"><Check size={14} className="text-[#b2403c]" /> 50% deposit required to book</div>
          </div>
          <div>
            <div className="divide-y divide-white/15 border-t border-white/15">
              {[
                ["Small tattoos", "From $250"],
                ["Medium tattoos", "From $450"],
                ["Large tattoos", "From $700"],
                ["Full-day sessions", "From $1,000"],
              ].map(([size, price], index) => (
                <div key={size} className="flex items-end justify-between gap-5 py-6 sm:py-8">
                  <div className="flex items-start gap-5 sm:gap-8"><span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-[#b2403c]">0{index + 1}</span><h3 className="font-display text-3xl tracking-[-0.04em] sm:text-4xl">{size}</h3></div>
                  <span className="whitespace-nowrap text-sm text-[#d8d1c3]/75 sm:text-base">{price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm leading-6 text-[#d8d1c3]/65">Final price depends on size, detail, placement &amp; design.</p>
              <button onClick={() => scrollTo("#booking")} className="group mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f3f0e8]">DM your idea for a quote <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></button>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-[#a72727] px-5 py-20 text-[#fffaf2] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          <div>
            <p className="eyebrow text-[#fffaf2]/60">Appointments</p>
            <h2 className="mt-4 max-w-lg font-display text-5xl leading-[0.88] tracking-[-0.065em] sm:text-7xl">Turn your idea into ink.</h2>
            <p className="mt-8 max-w-md text-[15px] leading-7 text-[#fffaf2]/78">Custom tattoos made to stand out. Send a DM or email to start your appointment and tell us about the idea you’re carrying.</p>
            <div className="mt-8 border-l border-[#fffaf2]/45 pl-4 text-sm leading-6 text-[#fffaf2]/78">
              <p className="font-semibold text-[#fffaf2]">Los Angeles, California</p>
              <p>Mobile studio — once your appointment is booked, we can travel anywhere.</p>
              <div className="mt-2 flex flex-col gap-1">
                <a href="mailto:support@miraveystudio.com" className="inline-block underline decoration-[#fffaf2]/40 underline-offset-4 transition-colors hover:text-[#fffaf2]">support@miraveystudio.com</a>
                <a href="tel:+12133340333" className="inline-block underline decoration-[#fffaf2]/40 underline-offset-4 transition-colors hover:text-[#fffaf2]">+1 (213) 334-0333</a>
              </div>
            </div>
            <div className="mt-12 space-y-3 text-sm text-[#fffaf2]/78">
              <p className="flex items-center gap-3"><Check size={15} /> Tattoos from $200</p>
              <p className="flex items-center gap-3"><Check size={15} /> 50% deposit required to secure booking</p>
              <p className="flex items-center gap-3"><Check size={15} /> DM or email to book your session</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid content-start gap-7">
            <label className="block border-b border-[#fffaf2]/40 pb-3">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fffaf2]/65">Your name</span>
              <input required name="name" placeholder="What should we call you?" className="w-full bg-transparent text-lg outline-none placeholder:text-[#fffaf2]/45" />
            </label>
            <div className="grid gap-7 sm:grid-cols-3">
              <label className="block border-b border-[#fffaf2]/40 pb-3">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fffaf2]/65">Email</span>
                <input required type="email" name="email" placeholder="hello@example.com" className="w-full bg-transparent text-lg outline-none placeholder:text-[#fffaf2]/45" />
              </label>
              <label className="block border-b border-[#fffaf2]/40 pb-3">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fffaf2]/65">Phone</span>
                <input type="tel" name="phone" placeholder="(213) 555-0123" className="w-full bg-transparent text-lg outline-none placeholder:text-[#fffaf2]/45" />
              </label>
              <label className="block border-b border-[#fffaf2]/40 pb-3">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fffaf2]/65">Placement</span>
                <input name="placement" placeholder="e.g. inner forearm" className="w-full bg-transparent text-lg outline-none placeholder:text-[#fffaf2]/45" />
              </label>
            </div>
            <label className="block border-b border-[#fffaf2]/40 pb-3">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fffaf2]/65">Tell us about the piece</span>
              <textarea required name="idea" rows={3} placeholder="The feeling, references, scale..." className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-[#fffaf2]/45" />
            </label>
            <button type="submit" disabled={submitting} className="group mt-2 flex w-fit items-center gap-4 rounded-full bg-[#fffaf2] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#151515] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60">
              {submitting ? "Sending…" : "Send inquiry"} <span className="grid h-7 w-7 place-items-center rounded-full bg-[#151515] text-[#fffaf2] transition-transform group-hover:translate-x-1"><ChevronRight size={15} /></span>
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#151515] px-5 pb-7 pt-14 text-[#f3f0e8] sm:px-8 sm:pt-20 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-12 sm:flex-row sm:items-end">
            <div>
              <span className="font-display text-5xl tracking-[-0.1em] sm:text-6xl">miraveystudio</span>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">Private mobile tattoo practice based in Los Angeles, California. Travel available anywhere after booking.</p>
            </div>
            <div className="flex flex-col items-start gap-3 text-lg sm:items-end">
              <a href="mailto:support@miraveystudio.com" className="group inline-flex items-center gap-4 transition-colors hover:text-[#d8d1c3]">
                support@miraveystudio.com <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} />
              </a>
              <a href="tel:+12133340333" className="inline-flex items-center gap-3 text-base transition-colors hover:text-[#d8d1c3]">
                +1 (213) 334-0333 <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 miraveystudio</span>
            <div className="flex gap-5"><a href="https://www.instagram.com/miraveystudio/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a><a href="https://www.tiktok.com/@miraveystudio" target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a><a href="#booking" className="hover:text-white">Appointments</a><a href="#top" className="hover:text-white">Back to top</a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
