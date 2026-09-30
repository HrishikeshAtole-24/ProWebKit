import type { NavLink } from "@/types/template";

/** All copy for the Fine Art & Documentary photography template. */
export const artist = {
  name: "Kabir Sen",
  discipline: "Photographer",
  born: "b. 1981, Kolkata",
  based: "Lives and works in Kolkata",
  represented: "Represented by Vadehra Art Gallery, New Delhi",
  studioEmail: "studio@kabirsen.com",
  galleryEmail: "sales@vadehraart.com",
  phone: "+91 33 4008 2210",
};

export const navLinks: NavLink[] = [
  { label: "Series", href: "#series" },
  { label: "Statement", href: "#statement" },
  { label: "Exhibitions", href: "#exhibitions" },
  { label: "Prints", href: "#prints" },
  { label: "Publications", href: "#publications" },
  { label: "Enquiries", href: "#enquire" },
];

export const hero = {
  currentSeries: "Silt",
  years: "2021 — 2026",
  line: "Photographs made along the Hooghly, where the river is rebuilt every monsoon and nobody agrees where the bank is.",
  note: "Currently on view · Experimenter, Kolkata · until 14 December",
};

/* ── Series ────────────────────────────────────────────────────────── */
export const series = [
  {
    index: "I",
    title: "Silt",
    years: "2021 — 2026",
    plates: 42,
    medium: "Silver gelatin, selenium toned",
    note: "Six years along the Hooghly, photographing a bank that moves. The series is organised by monsoon, not by year.",
    status: "Ongoing",
  },
  {
    index: "II",
    title: "The Quiet Rooms",
    years: "2018 — 2021",
    plates: 31,
    medium: "Archival pigment on cotton rag",
    note: "Interiors of North Kolkata houses in the year before they were sold. Every room in the series has since been demolished.",
    status: "Complete",
  },
  {
    index: "III",
    title: "Coal Line",
    years: "2015 — 2018",
    plates: 28,
    medium: "Silver gelatin",
    note: "The Dhanbad freight corridor, photographed from the same eleven positions across four years.",
    status: "Complete",
  },
  {
    index: "IV",
    title: "Nocturne",
    years: "2012 — 2015",
    plates: 19,
    medium: "Platinum palladium",
    note: "Long exposures made between midnight and four, when the city is lit but not occupied.",
    status: "Complete · edition closed",
  },
];

/* ── Statement ─────────────────────────────────────────────────────── */
export const statement = {
  title: "Statement",
  paragraphs: [
    "I photograph places that are in the process of becoming something else, and I photograph them slowly enough that the change is visible inside a single body of work rather than between two.",
    "The method has not altered since 2012. A large-format camera, a fixed set of positions returned to over years, and negatives printed by hand in an edition small enough that I can remember every print I have made.",
    "I do not photograph people directly. Their absence in the frame is not a formal preference — it is that these places are photographed most honestly in the hours when the people who use them are not there.",
  ],
  quote:
    "A river bank is not a line. It is an argument that the water and the land have been having for a very long time, and the photograph is a transcript of one afternoon of it.",
};

/* ── Exhibitions ───────────────────────────────────────────────────── */
export const exhibitions = [
  { year: "2026", title: "Silt", venue: "Experimenter", city: "Kolkata", type: "Solo" },
  { year: "2025", title: "The Ground Beneath", venue: "Serendipity Arts Festival", city: "Goa", type: "Group" },
  { year: "2024", title: "The Quiet Rooms", venue: "Vadehra Art Gallery", city: "New Delhi", type: "Solo" },
  { year: "2023", title: "Reading the River", venue: "Photo Kathmandu", city: "Kathmandu", type: "Group" },
  { year: "2022", title: "After Industry", venue: "Fotografiska", city: "Stockholm", type: "Group" },
  { year: "2020", title: "Coal Line", venue: "Chemould Prescott Road", city: "Mumbai", type: "Solo" },
  { year: "2018", title: "Coal Line", venue: "Jehangir Art Gallery", city: "Mumbai", type: "Solo" },
];

/* ── Prints & editions ─────────────────────────────────────────────── */
export const prints = [
  { size: "Small", dimensions: "12 × 15 in", edition: "Edition of 15 + 2 AP", price: "₹85,000", process: "Archival pigment on cotton rag" },
  { size: "Medium", dimensions: "20 × 25 in", edition: "Edition of 10 + 2 AP", price: "₹1,60,000", process: "Archival pigment on cotton rag" },
  { size: "Large", dimensions: "30 × 38 in", edition: "Edition of 7 + 1 AP", price: "₹2,90,000", process: "Silver gelatin, hand printed" },
  { size: "Exhibition", dimensions: "44 × 55 in", edition: "Edition of 3", price: "On request", process: "Silver gelatin, hand printed, mounted" },
];

export const printNotes = [
  "Every print is made by the artist and is signed, numbered and dated on the verso.",
  "Prints are supplied unframed unless specified. Framing is arranged through the gallery at cost.",
  "Editions are never reopened, extended or reprinted at another size once closed.",
  "A certificate of authenticity accompanies each print and records the negative and the printing date.",
];

/* ── Publications ──────────────────────────────────────────────────── */
export const publications = [
  { year: "2025", title: "Silt", detail: "Monograph, 128 pages, Nazar Foundation. Edition of 1,000." },
  { year: "2024", title: "The Quiet Rooms", detail: "Monograph, 96 pages, Tara Books. Second printing." },
  { year: "2023", title: "Aperture, no. 251", detail: "Portfolio and interview, 14 pages." },
  { year: "2021", title: "The Caravan", detail: "Photo essay, 'What the river takes back'." },
  { year: "2019", title: "Coal Line", detail: "Monograph, 72 pages, self-published. Out of print." },
];

/* ── Collections & press ───────────────────────────────────────────── */
export const collections = [
  "Kiran Nadar Museum of Art, New Delhi",
  "Devi Art Foundation, Gurugram",
  "Fotografiska, Stockholm",
  "Museum of Art & Photography, Bengaluru",
  "Private collections in India, the UK and Singapore",
];

export const press = [
  { source: "Aperture", line: "A photographer who has made patience into a method rather than a virtue.", year: "2025" },
  { source: "The Caravan", line: "Sen photographs erosion the way other people photograph a portrait sitting.", year: "2024" },
  { source: "Frieze", line: "The rare documentary practice that trusts the viewer to stay with an image.", year: "2024" },
];

/* ── Biography ─────────────────────────────────────────────────────── */
export const biography = [
  { year: "2026", detail: "Solo exhibition, Experimenter, Kolkata" },
  { year: "2023", detail: "Sanskriti Award for Photography" },
  { year: "2021", detail: "Artist residency, Rijksakademie, Amsterdam" },
  { year: "2016", detail: "Magnum Foundation grant, documentary practice" },
  { year: "2009", detail: "MFA Photography, Royal College of Art, London" },
  { year: "2003", detail: "BA History, Presidency College, Kolkata" },
];

export const enquiryTypes = [
  "Print purchase",
  "Gallery or institutional acquisition",
  "Exhibition proposal",
  "Publication or licensing",
  "Press or interview",
  "Studio visit",
];
