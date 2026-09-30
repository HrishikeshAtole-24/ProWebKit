import type { NavLink } from "@/types/template";

/** All copy for the Fashion Model template. */
export const model = {
  name: "Noor Contractor",
  discipline: "Model",
  based: "Mumbai",
  travels: "Paris · Milan · New York, with valid visas",
  email: "noor@noorcontractor.com",
};

export const agencies = [
  { market: "India — mother agency", agency: "Anima Creatives", contact: "Divya Menon", email: "divya@animacreatives.com", phone: "+91 22 6721 9040" },
  { market: "Paris", agency: "Viva Model Management", contact: "Élodie Rousseau", email: "elodie@vivaparis.com", phone: "+33 1 44 55 12 90" },
  { market: "Milan", agency: "Elite Milano", contact: "Marco Bellini", email: "marco@elitemilano.it", phone: "+39 02 6707 8800" },
  { market: "New York", agency: "The Society", contact: "Jenna Alvarez", email: "jenna@thesocietymgmt.com", phone: "+1 212 359 8730" },
];

export const navLinks: NavLink[] = [
  { label: "Book", href: "#book" },
  { label: "Digitals", href: "#digitals" },
  { label: "Stats", href: "#stats" },
  { label: "Work", href: "#work" },
  { label: "Agencies", href: "#agencies" },
  { label: "Booking", href: "#booking" },
];

export const hero = {
  season: "Autumn / Winter 2026",
  nameLines: ["Noor", "Contractor"],
  strapline: "Editorial · runway · campaign",
  note: "Currently Paris · available from 12 November",
};

/* ── The book ──────────────────────────────────────────────────────── */
export const book = [
  { title: "Vogue India", detail: "September issue, 12 pages", credit: "Ph. Ashish Shah", ratio: "aspect-[3/4]", span: "sm:col-span-2 sm:row-span-2" },
  { title: "Sabyasachi", detail: "Bridal 2026 campaign", credit: "Ph. Tarun Vishwa", ratio: "aspect-[3/4]", span: "" },
  { title: "Harper's Bazaar", detail: "Cover, March", credit: "Ph. Bikramjit Bose", ratio: "aspect-[3/4]", span: "" },
  { title: "Raw Mango", detail: "Lookbook", credit: "Ph. Ronny Sen", ratio: "aspect-[3/4]", span: "" },
  { title: "Elle India", detail: "Editorial, 8 pages", credit: "Ph. Keegan Crasto", ratio: "aspect-[3/4]", span: "" },
  { title: "Bodice", detail: "Spring campaign", credit: "Ph. Anushka Menon", ratio: "aspect-[3/4]", span: "sm:col-span-2" },
];

/* ── Digitals ──────────────────────────────────────────────────────── */
export const digitals = {
  updated: "Updated 04 September 2026",
  note: "Unretouched, natural light, no make-up. Shot the same week they are dated — anything older gets retaken rather than reused.",
  frames: ["Front", "Profile", "Back", "Three-quarter", "Close — smile", "Close — neutral", "Full length", "Hands"],
};

/* ── Measurements ──────────────────────────────────────────────────── */
export const stats = [
  { label: "Height", value: "5 ft 10 in", metric: "178 cm" },
  { label: "Bust", value: "32 in", metric: "81 cm" },
  { label: "Waist", value: "24 in", metric: "61 cm" },
  { label: "Hips", value: "35 in", metric: "89 cm" },
  { label: "Shoe", value: "UK 6", metric: "EU 39" },
  { label: "Dress", value: "UK 8", metric: "EU 36" },
  { label: "Hair", value: "Black", metric: "Long" },
  { label: "Eyes", value: "Dark brown", metric: "—" },
];

export const skills = [
  "Runway — 4 seasons, Lakmé and Paris",
  "Movement and dance direction",
  "Hindi, English and Gujarati on camera",
  "Comfortable with swim and lingerie, with a closed set",
  "No fur, and no skin-lightening advertising",
];

/* ── Campaigns & runway ────────────────────────────────────────────── */
export const campaigns = [
  { year: "2026", client: "Sabyasachi", type: "Bridal campaign", detail: "Global, print and digital" },
  { year: "2026", client: "Bulgari India", type: "Campaign", detail: "Jewellery, print" },
  { year: "2025", client: "Raw Mango", type: "Lookbook & campaign", detail: "Two seasons" },
  { year: "2025", client: "Nykaa Fashion", type: "Campaign", detail: "Digital and OOH" },
  { year: "2024", client: "Bodice", type: "Campaign", detail: "Spring / Summer" },
  { year: "2024", client: "Titan Raga", type: "Film & print", detail: "National" },
];

export const runway = [
  { season: "AW26", shows: "Rahul Mishra (Paris), Anamika Khanna, Bodice, Lovebirds" },
  { season: "SS26", shows: "Gaurav Gupta (Paris), Raw Mango, Péro, 11.11" },
  { season: "AW25", shows: "Sabyasachi, Amit Aggarwal, Rajesh Pratap Singh" },
  { season: "SS25", shows: "Lakmé Fashion Week — 9 shows" },
];

/* ── Editorial & press ─────────────────────────────────────────────── */
export const editorial = [
  { publication: "Vogue India", detail: "Cover, February 2026 · Editorial, September 2026", year: "2026" },
  { publication: "Harper's Bazaar India", detail: "Cover, March 2026", year: "2026" },
  { publication: "Elle India", detail: "Editorial, 8 pages, July 2025", year: "2025" },
  { publication: "Grazia India", detail: "Editorial, November 2025", year: "2025" },
  { publication: "The Voice of Fashion", detail: "Interview and portfolio", year: "2024" },
];

export const press = [
  { source: "Vogue India", line: "Contractor has the rarest thing on a runway — she is still legible from the back row.", year: "2026" },
  { source: "The Voice of Fashion", line: "A model who reads couture and street with the same unfussed conviction.", year: "2024" },
];

/* ── Availability ──────────────────────────────────────────────────── */
export const availability = [
  { window: "Now — 11 Nov", place: "Paris", status: "On option" },
  { window: "12 Nov — 20 Dec", place: "Mumbai", status: "Available" },
  { window: "Jan 2027", place: "Mumbai & Delhi", status: "Available" },
  { window: "Feb — Mar 2027", place: "Milan & Paris", status: "Held for season" },
];

export const bookingTypes = [
  "Campaign",
  "Editorial",
  "Runway",
  "Lookbook / e-commerce",
  "Brand film",
  "Fitting or casting",
  "Press or interview",
];
