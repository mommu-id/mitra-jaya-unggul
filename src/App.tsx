import { useState, useRef, useEffect, useCallback } from "react";

// ─── BILINGUAL CONTENT (EN & ID) ─────────────────────────────────────────────

const COPY = {
  en: {
    herobadge: "Batam & Tangerang Industrial Partner",
    h1a: "INDUSTRIAL SUBCONTRACTING",
    h1b: "& SUPPLY PARTNER",
    heroSub: "Supporting manufacturers with subcontracting, assembly, manual processing, packing and industrial supply.",
    cta1: "Discuss Your Requirement",
    cta2: "Explore Capabilities",

    aboutBadge: "ABOUT US",
    aboutH2: "BUILT ON EXPERIENCE. FOCUSED ON MANUFACTURING.",
    aboutBody: "We are an industrial subcontracting and supply partner based in Batam and Tangerang, supporting manufacturers with practical solutions for their operational needs since 2020.",
    teamBadge: "Dedicated Operational Team • Since 2020 • Batam & Tangerang",
    visionLabel: "OUR VISION",
    visionText: "To become a trusted industrial support partner for manufacturers.",
    missionLabel: "OUR MISSION",
    missions: ["Support Manufacturing", "Improve Productivity", "Simplify Industrial Supply", "Build Long-Term Partnerships"],

    pillarsTitle: "Core Business Pillars",
    subTitle: "SUBCONTRACTING",
    subItems: ["Assembly", "Manual Glueing", "Pick & Pack", "Sorting", "Rework", "And other customised processes"],
    supplyTitle: "INDUSTRIAL SUPPLY",
    supplyItems: ["Industrial Tape", "Stretch Film", "Glue Stick", "Offset Printing Blanket", "Machine Spare Parts (Bearings, etc.)", "And more"],

    f1Overline: "MANUFACTURING SUPPORT",
    f1H2: "FLEXIBLE SUPPORT FOR MANUFACTURING INDUSTRY",
    f1Tags: ["Assembly", "Manual Glueing", "Pick & Pack", "Sorting", "Rework"],
    f1Desc: "Dedicated manual processing and labor support tailored to your production schedule, reducing your operational bottlenecks.",
    f1Btn: "DISCUSS YOUR REQUIREMENT",

    f2Overline: "SOURCING & TRADING",
    f2H2: "INDUSTRIAL MATERIALS & MACHINERY PARTS",
    f2Cats: ["Consumables", "Printing Materials", "Machinery Parts"],
    f2Desc: "Streamline your factory supply chain with consistent, certified indirect materials and machinery spare parts from a single reliable vendor.",
    f2Btn: "REQUEST A QUOTE",
    f2Products: [
      { name: "Bosch Hot Glue Gun", tag: "Tools", img: "./images/alat-lem-tembak-bosch.jpeg" },
      { name: "Large Hot Melt Glue Stick", tag: "Consumable", img: "./images/glue-stick-uk-besar.jpeg" },
      { name: "White Packaging Tape", tag: "Packaging", img: "./images/lakban-putih.jpeg" },
      { name: "Masking Tape", tag: "Consumable", img: "./images/masking-tape.jpeg" },
      { name: "White Plastic Strapping Band", tag: "Packaging", img: "./images/pita-tali-plastik-putih.jpeg" },
      { name: "Stretch Film Roll", tag: "Packaging", img: "./images/strecth-film.jpeg" },
      { name: "Industrial Tape & Scotch", tag: "Consumable", img: "./images/scotch_tape.jpeg" },
      { name: "Offset Printing Blanket", tag: "Printing", img: "./images/meiji_blanket.jpg" },
    ],

    whyTitle: "Why Work With Us?",
    whyCards: [
      { title: "Higher Productivity", desc: "Less hassle with manual processes that often become high-cost and low-output. We deliver high productivity for you." },
      { title: "Flexible Support", desc: "Scale support according to your production and operational requirements." },
      { title: "Responsive Local Partner", desc: "Based in Batam and Tangerang, we can respond quickly to local manufacturing requirements." },
      { title: "One Point of Contact", desc: "From subcontracting processes to industrial materials, simplify your sourcing through one local partner." },
      { title: "Manufacturing-Oriented", desc: "We understand that quality, consistency and delivery are critical to manufacturing operations." },
      { title: "Customized Solutions", desc: "We work according to customer specifications, process requirements and operational needs." },
    ],

    howTitle: "How We Work",
    steps: [
      { num: "01", label: "Understand", desc: "We listen to your operational requirements and process needs." },
      { num: "02", label: "Assess", desc: "We evaluate feasibility, capacity, and the best approach for your case." },
      { num: "03", label: "Propose", desc: "We present a clear proposal with timelines, pricing, and scope." },
      { num: "04", label: "Deliver", desc: "We execute and deliver with quality, consistency and on-time." },
    ],

    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What subcontracting services do you provide in Batam and Tangerang?", a: "We provide manufacturing support including assembly, peeling, glueing and manual processing, pick & pack, sorting, rework and other customized manual processes based on customer requirements." },
      { q: "Can you support recurring manufacturing processes?", a: "Yes. We can discuss recurring or ongoing subcontracting requirements based on process specifications, volume and operational requirements." },
      { q: "Do you supply industrial materials?", a: "Yes. We supply industrial consumables, indirect materials and machinery parts, including tapes, stretch film, glue sticks, offset printing blankets and bearings." },
      { q: "Can you source products that are not listed on your website?", a: "Yes. Contact us with your product specification and requirements, and our team will evaluate the sourcing opportunity." },
    ],

    ctaH2: "HAVE A MANUFACTURING REQUIREMENT?",
    ctaSub: "Tell us what you need.",
    ctaBtn: "CONTACT US ON WHATSAPP (0856-9117-2756)",

    services: "SERVICES",
    contact: "CONTACT",
    chatWA: "Chat WhatsApp: 0856-9117-2756",
    tagline: "Your Excellent Partner",
    footerInquiries: "Direct Inquiries",
    footerLocation: "Serving Manufacturers in Batam & Tangerang",
    copyright: "© 2026 CV. Mitra Jaya Unggul. All Rights Reserved.",
    langLabel: "English",
    langAlt: "Indonesia",
  },
  id: {
    herobadge: "Mitra Industri Batam & Tangerang",
    h1a: "MITRA SUBKONTRAK INDUSTRI",
    h1b: "& PENGADAAN",
    heroSub: "Mendukung manufaktur dengan subkontrak, perakitan, proses manual, packing, dan suplai industri.",
    cta1: "Diskusikan Kebutuhan Anda",
    cta2: "Jelajahi Layanan Kami",

    aboutBadge: "TENTANG KAMI",
    aboutH2: "DIBANGUN DARI PENGALAMAN. FOKUS PADA MANUFAKTUR.",
    aboutBody: "Kami adalah mitra subkontrak industri dan pengadaan yang berbasis di Batam dan Tangerang, mendukung manufaktur dengan solusi praktis sejak 2020.",
    teamBadge: "Tim Operasional Berdedikasi • Sejak 2020 • Batam & Tangerang",
    visionLabel: "VISI KAMI",
    visionText: "Menjadi mitra pendukung industri yang terpercaya bagi pelaku manufaktur.",
    missionLabel: "MISI KAMI",
    missions: ["Dukung Manufaktur", "Tingkatkan Produktivitas", "Sederhanakan Suplai Industri", "Bangun Kemitraan Jangka Panjang"],

    pillarsTitle: "Pilar Bisnis Utama",
    subTitle: "SUBCONTRACTING",
    subItems: ["Perakitan (Assembly)", "Pengeleman Manual", "Pick & Pack", "Sortir", "Rework", "Dan proses custom lainnya"],
    supplyTitle: "SUPLAI INDUSTRI",
    supplyItems: ["Lakban Industri", "Stretch Film", "Glue Stick", "Karet Blanket Cetak Offset", "Suku Cadang Mesin (Bearing, dll.)", "Dan lainnya"],

    f1Overline: "DUKUNGAN MANUFAKTUR",
    f1H2: "DUKUNGAN FLEKSIBEL UNTUK INDUSTRI MANUFAKTUR",
    f1Tags: ["Perakitan", "Pengeleman Manual", "Pick & Pack", "Sortir", "Rework"],
    f1Desc: "Dukungan tenaga kerja dan proses manual yang disesuaikan dengan jadwal produksi Anda, mengurangi hambatan operasional.",
    f1Btn: "DISKUSIKAN KEBUTUHAN ANDA",

    f2Overline: "PENGADAAN & TRADING",
    f2H2: "MATERIAL INDUSTRI & SUKU CADANG MESIN",
    f2Cats: ["Consumables", "Material Cetak", "Suku Cadang Mesin"],
    f2Desc: "Sederhanakan rantai pasokan pabrik Anda dengan material tidak langsung bersertifikat dan suku cadang mesin dari satu vendor terpercaya.",
    f2Btn: "MINTA PENAWARAN",
    f2Products: [
      { name: "Alat Lem Tembak Bosch", tag: "Peralatan", img: "./images/alat-lem-tembak-bosch.jpeg" },
      { name: "Glue Stick Ukuran Besar", tag: "Consumable", img: "./images/glue-stick-uk-besar.jpeg" },
      { name: "Lakban Putih", tag: "Packaging", img: "./images/lakban-putih.jpeg" },
      { name: "Lakban Kertas (Masking Tape)", tag: "Consumable", img: "./images/masking-tape.jpeg" },
      { name: "Pita Tali Plastik Putih (Strapping)", tag: "Packaging", img: "./images/pita-tali-plastik-putih.jpeg" },
      { name: "Plastik Stretch Film", tag: "Packaging", img: "./images/strecth-film.jpeg" },
      { name: "Lakban Industri & Scotch Tape", tag: "Consumable", img: "./images/scotch_tape.jpeg" },
      { name: "Karet Blanket Cetak Offset", tag: "Percetakan", img: "./images/meiji_blanket.jpg" },
    ],

    whyTitle: "Mengapa Bekerja Sama dengan Kami?",
    whyCards: [
      { title: "Produktivitas Lebih Tinggi", desc: "Kurangi kerumitan proses manual berbiaya tinggi namun output rendah. Kami menghadirkan produktivitas tinggi." },
      { title: "Dukungan Fleksibel", desc: "Sesuaikan dukungan sesuai kebutuhan produksi dan operasional Anda." },
      { title: "Mitra Lokal Responsif", desc: "Berbasis di Batam dan Tangerang, kami merespons cepat kebutuhan manufaktur lokal." },
      { title: "Satu Titik Kontak", desc: "Dari subkontrak hingga material industri, sederhanakan pengadaan melalui satu mitra lokal." },
      { title: "Berorientasi Manufaktur", desc: "Kami memahami bahwa kualitas, konsistensi, dan pengiriman sangat krusial dalam operasional manufaktur." },
      { title: "Solusi yang Disesuaikan", desc: "Kami bekerja sesuai spesifikasi, kebutuhan proses, dan kebutuhan operasional pelanggan." },
    ],

    howTitle: "Cara Kami Bekerja",
    steps: [
      { num: "01", label: "Pahami", desc: "Kami mendengarkan kebutuhan operasional dan proses Anda." },
      { num: "02", label: "Evaluasi", desc: "Kami menilai kelayakan, kapasitas, dan pendekatan terbaik." },
      { num: "03", label: "Ajukan", desc: "Kami menyampaikan proposal jelas dengan timeline, harga, dan ruang lingkup." },
      { num: "04", label: "Eksekusi", desc: "Kami mengerjakan dan mengirim dengan kualitas, konsistensi, dan tepat waktu." },
    ],

    faqTitle: "Pertanyaan yang Sering Diajukan",
    faqs: [
      { q: "Layanan subkontrak apa yang tersedia di Batam dan Tangerang?", a: "Kami menyediakan dukungan manufaktur seperti perakitan, pengupasan, pengeleman manual, pick & pack, sortir, rework, dan proses manual lain sesuai kebutuhan." },
      { q: "Apakah bisa mendukung proses manufaktur secara berulang?", a: "Ya. Kami dapat mendiskusikan kebutuhan subkontrak berulang berdasarkan spesifikasi proses, volume, dan kebutuhan operasional." },
      { q: "Apakah Anda menyuplai material industri?", a: "Ya. Kami menyuplai consumables industri, material tidak langsung, dan suku cadang mesin termasuk tape, stretch film, glue stick, karet blanket cetak offset, dan bearing." },
      { q: "Bisakah Anda mencari produk yang tidak ada di website?", a: "Ya. Hubungi kami dengan spesifikasi produk Anda, dan tim kami akan mengevaluasi peluang pengadaannya." },
    ],

    ctaH2: "PUNYA KEBUTUHAN MANUFAKTUR?",
    ctaSub: "Ceritakan apa yang Anda butuhkan.",
    ctaBtn: "HUBUNGI KAMI VIA WHATSAPP (0856-9117-2756)",

    services: "LAYANAN",
    contact: "KONTAK",
    chatWA: "Chat WhatsApp: 0856-9117-2756",
    tagline: "Your Excellent Partner",
    footerInquiries: "Hubungi Langsung",
    footerLocation: "Melayani Manufaktur di Batam & Tangerang",
    copyright: "© 2026 CV. Mitra Jaya Unggul. Hak Cipta Dilindungi.",
    langLabel: "Indonesia",
    langAlt: "English",
  },
};

// ─── FIXED SIZE ICONS ────────────────────────────────────────────────────────

const WaIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      minWidth: `${size}px`,
      minHeight: `${size}px`,
      maxWidth: `${size}px`,
      maxHeight: `${size}px`,
    }}
    className="flex-shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "16px", height: "16px", minWidth: "16px", minHeight: "16px" }}
    className="flex-shrink-0"
  >
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-2.197-8.763.01.01c.329.5.523.99.58 1.47.08.713-.023 1.358-.288 1.938C7.96 12.925 7.71 13.18 7.5 13.26V14h1v1h-1v1H6v-1H5v-1h1v-.5c0-.14.055-.26.15-.353.12-.12.283-.19.463-.182.21.013.39-.1.475-.285.12-.27.168-.582.112-.943a2.12 2.12 0 0 0-.404-.993L6.7 11.6l-.003-.003-.001-.001-.247-.218a.75.75 0 0 1 .985-1.133l.247.218ZM10 2a.75.75 0 0 1 .75.75V4h1.75a.75.75 0 0 1 0 1.5h-1a4.5 4.5 0 0 1 4.5 4.5.75.75 0 0 1-1.5 0 3 3 0 0 0-3-3h-.75v1.25a.75.75 0 0 1-1.5 0V7h-.75a3 3 0 0 0-3 3 .75.75 0 0 1-1.5 0A4.5 4.5 0 0 1 8.5 5.5h-.75V4.75A.75.75 0 0 1 8.5 4H10V2.75A.75.75 0 0 1 10 2Z" clipRule="evenodd" />
  </svg>
);

// ─── LANGUAGE TOGGLE ─────────────────────────────────────────────────────────

function LangToggle({ lang, setLang, dark = false }: { lang: "en" | "id"; setLang: (l: "en" | "id") => void; dark?: boolean }) {
  const pill = dark ? "rgba(255,255,255,0.07)" : "#EAEFF5";
  const pillBorder = dark ? "rgba(255,255,255,0.12)" : "#D8E0EC";
  const activeCol = dark ? "#FFFFFF" : "#001C44";
  const inactiveCol = dark ? "#64748B" : "#94A3B8";
  const dividerCol = dark ? "#1E293B" : "#D8E0EC";

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[12px] font-semibold" style={{ backgroundColor: pill, border: `1px solid ${pillBorder}` }}>
      <GlobeIcon />
      <button onClick={() => setLang("en")} className="px-1.5 py-0.5 rounded cursor-pointer transition-colors" style={{ color: lang === "en" ? activeCol : inactiveCol, fontWeight: lang === "en" ? 700 : 500 }}>
        EN
      </button>
      <span style={{ color: dividerCol }}>|</span>
      <button onClick={() => setLang("id")} className="px-1.5 py-0.5 rounded cursor-pointer transition-colors" style={{ color: lang === "id" ? activeCol : inactiveCol, fontWeight: lang === "id" ? 700 : 500 }}>
        ID
      </button>
    </div>
  );
}

// ─── PRODUCT SLIDER COMPONENT (DRAG & SWIPE CAPABLE) ─────────────────────────

interface ProductItem {
  name: string;
  tag: string;
  img: string;
}

function ProductSlider({
  products,
  waUrl,
  lang,
}: {
  products: ProductItem[];
  waUrl: string;
  lang: "en" | "id";
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkScroll, products]);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const offset = 310;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftPos(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 4) {
      setIsDragging(true);
    }
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Slider Controls / Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2 text-[13px] text-slate-600 font-medium">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#03A2E8]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>{lang === "id" ? "Geser ke samping untuk melihat produk lainnya" : "Slide horizontally to explore all products"}</span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-300/70 text-slate-800">
            {products.length} {lang === "id" ? "Produk" : "Products"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Previous product"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-[#001C44] border border-slate-300 hover:bg-[#001C44] hover:text-white hover:border-[#001C44] transition-all shadow-xs cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Next product"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-[#001C44] border border-slate-300 hover:bg-[#001C44] hover:text-white hover:border-[#001C44] transition-all shadow-xs cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Tracks */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto pb-5 pt-1 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#94A3B8 rgba(0,0,0,0.06)",
          touchAction: "pan-y",
        }}
      >
        {products.map((p) => {
          const waMessage = encodeURIComponent(
            lang === "id"
              ? `Halo CV Mitra Jaya Unggul, saya tertarik dengan produk ${p.name}. Mohon informasi spesifikasi & penawaran harga.`
              : `Hello CV Mitra Jaya Unggul, I am interested in ${p.name}. Please share details and pricing.`
          );

          return (
            <div
              key={p.img}
              className="w-[260px] sm:w-[290px] shrink-0 snap-start bg-white rounded-xl overflow-hidden border shadow-sm flex flex-col hover:-translate-y-1 transition-all duration-200 group"
              style={{ borderColor: "#CBD5E1" }}
            >
              <div className="h-48 bg-slate-100 flex items-center justify-center p-4 overflow-hidden relative border-b border-slate-100">
                <img
                  src={p.img}
                  alt={p.name}
                  draggable={false}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                />
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <div className="mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#03A2E8]">{p.tag}</span>
                  </div>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-snug line-clamp-2">{p.name}</h4>
                </div>
                <a
                  href={`${waUrl}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (isDragging) e.preventDefault();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 text-[12px] font-bold py-2 px-3 rounded-lg text-[#001C44] bg-slate-100 hover:bg-[#03A2E8] hover:text-[#001C44] transition-colors mt-auto"
                >
                  <WaIcon size={14} />
                  <span>{lang === "id" ? "Tanya Stok / Harga" : "Inquire via WhatsApp"}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── MAIN APP COMPONENT ──────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const c = COPY[lang];
  const WA = "https://wa.me/6285691172756";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4F6F8" }}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-xs" style={{ borderColor: "#E2E8F0" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <img
              src="./images/logo.png"
              alt="CV. Mitra Jaya Unggul"
              className="h-16 sm:h-22 w-auto object-contain flex-shrink-0"
            />
            <span className="hidden md:block text-[12px] font-semibold tracking-wide border-l pl-4" style={{ borderColor: "#E2E8F0", color: "#64748B" }}>
              {c.tagline}
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4">
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="#services"
              className="hidden sm:block text-[12px] font-bold tracking-widest uppercase hover:text-[#03A2E8] transition-colors"
              style={{ color: "#001C44" }}
            >
              {c.services}
            </a>
            <a
              href="#contact"
              className="hidden sm:block text-[12px] font-bold tracking-widest uppercase hover:text-[#03A2E8] transition-colors"
              style={{ color: "#001C44" }}
            >
              {c.contact}
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-bold px-3.5 sm:px-4 py-2.5 rounded-lg hover:brightness-110 transition-all whitespace-nowrap shadow-sm"
              style={{ backgroundColor: "#03A2E8", color: "#001C44" }}
            >
              <WaIcon size={18} />
              <span className="hidden lg:inline">{c.chatWA}</span>
              <span className="lg:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#001C44" }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#03A2E8 1px, transparent 1px), linear-gradient(90deg, #03A2E8 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            {/* Pure white text guaranteed via inline style */}
            <h1 style={{ color: "#FFFFFF" }} className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight">
              {c.h1a}<br />
              <span style={{ color: "#F5A623" }}>{c.h1b.split("&")[0]}&</span>{c.h1b.split("&")[1]}
            </h1>
            <p style={{ color: "#E2E8F0" }} className="text-[16px] leading-relaxed max-w-[520px]">
              {c.heroSub}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[14px] font-bold px-6 py-3.5 rounded-lg hover:brightness-110 transition-all shadow-md"
                style={{ backgroundColor: "#03A2E8", color: "#001C44" }}
              >
                <WaIcon size={20} />
                <span>{c.cta1}</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center text-[14px] font-semibold px-6 py-3.5 rounded-lg hover:bg-white/10 transition-all"
                style={{ border: "1.5px solid rgba(226,232,240,0.3)", color: "#E2E8F0" }}
              >
                {c.cta2}
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[24px] opacity-20" style={{ background: "linear-gradient(135deg, #F5A623 0%, transparent 60%)" }} />
              <img
                src="https://images.unsplash.com/photo-1589793463357-5fb813435467?w=1080&h=720&fit=crop&auto=format"
                alt="Factory assembly and manufacturing packaging operations"
                className="w-full h-[400px] object-cover rounded-2xl relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US WITH REAL TEAM PHOTO ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: REAL TEAM PHOTO (Wider 60% column, 16:9 aspect ratio to show everyone) */}
          <div className="lg:col-span-7 relative">
            <div className="overflow-hidden rounded-2xl shadow-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
              <img
                src="./images/team.jpeg"
                alt="CV. Mitra Jaya Unggul Dedicated Operational Team in Batam and Tangerang"
                className="w-full h-auto aspect-[16/9] object-cover object-center"
              />
            </div>
            {/* Floating Badge */}
            <div
              className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg"
              style={{ backgroundColor: "rgba(0, 28, 68, 0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(245,166,35,0.4)" }}
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F5A623" }} />
              <span className="text-[11px] sm:text-[12px] font-semibold text-white tracking-wide truncate">
                {c.teamBadge}
              </span>
            </div>
          </div>

          {/* Right: Copy + Vision + Explicit Mission (Narrower 40% column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex w-fit px-3 py-1.5 rounded-full text-[11px] font-extrabold tracking-[0.2em]" style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "#F5A623", border: "1px solid rgba(245,166,35,0.3)" }}>
              {c.aboutBadge}
            </div>
            <h2 style={{ color: "#0F172A" }} className="text-2xl sm:text-3xl xl:text-4xl font-extrabold leading-tight">
              {c.aboutH2}
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
              {c.aboutBody}
            </p>

            {/* Vision card */}
            <div className="p-6 rounded-xl shadow-sm" style={{ backgroundColor: "#001C44" }}>
              <div style={{ color: "#F5A623" }} className="text-[11px] font-extrabold tracking-[0.22em] mb-2">{c.visionLabel}</div>
              <p style={{ color: "#FFFFFF" }} className="text-[15px] sm:text-[16px] font-semibold leading-snug">{c.visionText}</p>
            </div>

            {/* Mission block with EXPLICIT HEADING */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-extrabold tracking-[0.18em] uppercase" style={{ color: "#001C44" }}>
                  {c.missionLabel}
                </span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.missions.map((m) => (
                  <div key={m} className="flex items-center gap-3 p-3.5 rounded-xl text-[13px] font-semibold bg-white shadow-sm border" style={{ borderColor: "#D8E0EC", color: "#001C44" }}>
                    <svg viewBox="0 0 20 20" fill="none" style={{ width: "20px", height: "20px", minWidth: "20px" }} className="flex-shrink-0">
                      <circle cx="10" cy="10" r="9" stroke="#03A2E8" strokeWidth="1.5" />
                      <path d="M6.5 10l2.5 2.5L13.5 7.5" stroke="#03A2E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE BUSINESS PILLARS ── */}
      <section id="services" style={{ backgroundColor: "#EAEFF5" }} className="py-20 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-extrabold" style={{ color: "#001C44" }}>{c.pillarsTitle}</h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: "#F5A623" }} />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Subcontracting */}
            <div className="bg-white p-8 rounded-2xl flex flex-col gap-5 border shadow-sm" style={{ borderColor: "#D8E0EC" }}>
              <div className="flex items-center gap-3 pb-2 border-b" style={{ borderColor: "#F1F5F9" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(3,162,232,0.1)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#03A2E8" strokeWidth={2} style={{ width: "20px", height: "20px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.653-4.655m5.833-4.329a5.24 5.24 0 0 0-1.196-5.332 5.24 5.24 0 0 0-5.332-1.196" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold" style={{ color: "#001C44" }}>{c.subTitle}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {c.subItems.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-[14px]" style={{ color: i === c.subItems.length - 1 ? "#94A3B8" : "#334155" }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,166,35,0.15)" }}>
                      <svg viewBox="0 0 10 10" fill="none" style={{ width: "10px", height: "10px" }}>
                        <path d="M2 5l2 2L8 3" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Industrial Supply */}
            <div className="bg-white p-8 rounded-2xl flex flex-col gap-5 border shadow-sm" style={{ borderColor: "#D8E0EC" }}>
              <div className="flex items-center gap-3 pb-2 border-b" style={{ borderColor: "#F1F5F9" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(3,162,232,0.1)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#03A2E8" strokeWidth={2} style={{ width: "20px", height: "20px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold" style={{ color: "#001C44" }}>{c.supplyTitle}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {c.supplyItems.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-[14px]" style={{ color: i === c.supplyItems.length - 1 ? "#94A3B8" : "#334155" }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(3,162,232,0.15)" }}>
                      <svg viewBox="0 0 10 10" fill="none" style={{ width: "10px", height: "10px" }}>
                        <path d="M2 5l2 2L8 3" stroke="#03A2E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SHOWCASE 1 — SUBCONTRACTING (2-Column with Photo) ── */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20">
          <div className="rounded-[20px] overflow-hidden grid lg:grid-cols-2 shadow-xl" style={{ backgroundColor: "#001E4F" }}>
            {/* Copy */}
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col gap-6 justify-center">
              <div style={{ color: "#F5A623" }} className="text-[11px] font-extrabold tracking-[0.22em] uppercase">
                {c.f1Overline}
              </div>
              <h2 style={{ color: "#FFFFFF" }} className="text-2xl sm:text-3xl xl:text-4xl font-extrabold leading-tight">
                {c.f1H2}
              </h2>
              <div className="flex flex-wrap gap-2">
                {c.f1Tags.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-[12px] font-bold" style={{ backgroundColor: "rgba(3,162,232,0.15)", color: "#03A2E8", border: "1px solid rgba(3,162,232,0.3)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <p style={{ color: "#E2E8F0" }} className="text-[15px] leading-relaxed">
                {c.f1Desc}
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 text-[13px] font-extrabold px-6 py-3.5 rounded-lg hover:brightness-110 transition-all shadow-md"
                style={{ backgroundColor: "#F5A623", color: "#001C44" }}
              >
                <WaIcon size={18} />
                <span>{c.f1Btn}</span>
              </a>
            </div>
            {/* Photo */}
            <div className="h-[320px] lg:h-auto min-h-[360px] bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1700727448686-b314cb5f9948?w=900&h=700&fit=crop&auto=format"
                alt="Factory manual packaging and subcontracting operations"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SHOWCASE 2 — INDUSTRIAL MATERIALS (WITH REAL PRODUCTS) ── */}
      <section className="pb-16 sm:pb-20" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20">
          <div className="rounded-[20px] p-8 sm:p-12 lg:p-14 border shadow-md flex flex-col gap-10" style={{ backgroundColor: "#E2E8F0", borderColor: "#CBD5E1" }}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div style={{ color: "#03A2E8" }} className="text-[11px] font-extrabold tracking-[0.22em] uppercase mb-2">
                  {c.f2Overline}
                </div>
                <h2 style={{ color: "#0F172A" }} className="text-2xl sm:text-3xl xl:text-4xl font-extrabold leading-tight">
                  {c.f2H2}
                </h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {c.f2Cats.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-[12px] font-bold" style={{ backgroundColor: "rgba(0,28,68,0.08)", color: "#001C44", border: "1px solid rgba(0,28,68,0.15)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-slate-600 max-w-[700px] mt-3">
                  {c.f2Desc}
                </p>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start lg:self-auto inline-flex items-center gap-2 text-[13px] font-extrabold px-6 py-3.5 rounded-lg hover:opacity-90 transition-all text-white shadow-md whitespace-nowrap"
                style={{ backgroundColor: "#001C44" }}
              >
                <WaIcon size={18} />
                <span>{c.f2Btn}</span>
              </a>
            </div>

            {/* REAL PRODUCTS SLIDER / CAROUSEL (DRAGGABLE & SWIPEABLE) */}
            <ProductSlider products={c.f2Products} waUrl={WA} lang={lang} />
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl xl:text-4xl font-extrabold" style={{ color: "#001C44" }}>{c.whyTitle}</h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: "#F5A623" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.whyCards.map((card, i) => (
              <div key={card.title} className="p-7 rounded-2xl flex flex-col gap-4 bg-white border shadow-sm hover:-translate-y-1 transition-transform duration-200" style={{ borderColor: "#D8E0EC" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[13px] font-extrabold flex-shrink-0" style={{ backgroundColor: "rgba(245,166,35,0.12)", color: "#F5A623" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[16px] font-bold" style={{ color: "#001C44" }}>{card.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ backgroundColor: "#001C44" }} className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #F5A623 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20">
          <div className="text-center mb-16">
            <h2 style={{ color: "#FFFFFF" }} className="text-3xl xl:text-4xl font-extrabold">{c.howTitle}</h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: "#F5A623" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col">
                {i < c.steps.length - 1 && <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] right-0 h-px opacity-20" style={{ backgroundColor: "#F5A623" }} />}
                <div className="p-7 rounded-2xl flex flex-col gap-4 h-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(245,166,35,0.15)", border: "1.5px solid rgba(245,166,35,0.5)" }}>
                    <span className="text-[14px] font-extrabold" style={{ color: "#F5A623" }}>{step.num}</span>
                  </div>
                  <div>
                    <div style={{ color: "#F5A623" }} className="text-[12px] font-extrabold tracking-wider uppercase mb-1">{step.label}</div>
                    <p style={{ color: "#94A3B8" }} className="text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-[860px] mx-auto px-5 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-extrabold" style={{ color: "#001C44" }}>{c.faqTitle}</h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: "#F5A623" }} />
          </div>
          <div className="flex flex-col gap-3">
            {c.faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-white border shadow-sm" style={{ borderColor: "#D8E0EC" }}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[15px] font-bold leading-snug" style={{ color: "#001C44" }}>{faq.q}</span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: openFaq === i ? "#001C44" : "#EAEFF5", color: openFaq === i ? "#F5A623" : "#001C44" }}
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: "14px", height: "14px" }} className={`transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: "#F1F5F9" }}>
                    <p className="text-[14px] leading-relaxed pt-4 text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="contact" style={{ backgroundColor: "#001C44" }} className="py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ borderTop: "2px solid rgba(3,162,232,0.4)", borderBottom: "2px solid rgba(3,162,232,0.4)" }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#03A2E8 1px, transparent 1px), linear-gradient(90deg, #03A2E8 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[720px] mx-auto px-5 sm:px-10 text-center flex flex-col items-center gap-6">
          <h2 style={{ color: "#F5A623" }} className="text-3xl xl:text-4xl font-extrabold leading-tight">{c.ctaH2}</h2>
          <p style={{ color: "#FFFFFF" }} className="text-[18px] font-medium">{c.ctaSub}</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[14px]" style={{ color: "#94A3B8" }}>
            <span>WhatsApp: 0856-9117-2756</span>
            <span className="hidden sm:inline">·</span>
            <span>marketing@mitrajayaunggul.com</span>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#03A2E8", color: "#001C44" }}
            className="inline-flex items-center gap-2.5 text-[14px] font-extrabold px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-lg"
          >
            <WaIcon size={22} />
            <span>{c.ctaBtn}</span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0B132B" }} className="pt-16 pb-10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-16 lg:px-20">
          <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>

            {/* Col 1 — Logo + Tagline */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit p-2.5 rounded-lg bg-white shadow-sm">
                <img src="./images/logo.png" alt="CV. Mitra Jaya Unggul" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <p style={{ color: "#FFFFFF" }} className="text-[14px] font-bold">{c.tagline}</p>
                <p style={{ color: "#CBD5E1" }} className="text-[12px] mt-1">{c.footerLocation}</p>
              </div>
            </div>

            {/* Col 2 — Direct Inquiries */}
            <div className="flex flex-col gap-3.5">
              <div style={{ color: "#F5A623" }} className="text-[11px] font-extrabold tracking-[0.2em] uppercase">{c.footerInquiries}</div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#38BDF8" }}
                className="inline-flex items-center gap-2 text-[15px] font-bold hover:opacity-80 transition-opacity"
              >
                <WaIcon size={18} />
                <span>0856-9117-2756</span>
              </a>
              <a
                href="mailto:marketing@mitrajayaunggul.com"
                style={{ color: "#FFFFFF" }}
                className="text-[13px] hover:text-[#38BDF8] transition-colors break-all"
              >
                marketing@mitrajayaunggul.com
              </a>
            </div>

            {/* Col 3 — Language Switcher + Copyright */}
            <div className="flex flex-col gap-4 sm:items-end">
              <LangToggle lang={lang} setLang={setLang} dark />
              <p style={{ color: "#94A3B8" }} className="text-[12px] leading-relaxed sm:text-right">
                {c.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
