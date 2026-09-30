import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Wedding & Editorial photography template. */
export const studio = {
  name: "Saanjh Studio",
  photographer: "Ira Sathe",
  discipline: "Wedding & editorial photography",
  since: 2013,
  phone: "+91 20 4120 7733",
  email: "hello@saanjh.studio",
  base: "Based in Pune · photographing across India and abroad",
  booking: "We take twenty-two weddings a year and no more",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Collections", href: "#collections" },
  { label: "The day", href: "#day" },
  { label: "Albums", href: "#albums" },
  { label: "Enquire", href: "#enquire" },
];

export const hero = {
  eyebrow: `Weddings since ${studio.since}`,
  titleLines: ["We photograph", "what actually", "happened."],
  subtitle:
    "No posing you into a magazine. We follow the day as it unfolds — the grandmother crying during the pheras, your brother ruining the toast, the ten minutes you two got alone — and we hand you the record of it.",
  scrollHint: "Recent weddings",
};

export const stats: StatItem[] = [
  { value: "240+", label: "Weddings" },
  { value: "13 yrs", label: "Photographing" },
  { value: "22", label: "Weddings a year, capped" },
  { value: "6 wks", label: "Gallery delivery" },
];

/* ── Recent weddings ───────────────────────────────────────────────── */
export const work = [
  { couple: "Aditi & Rohan", place: "Alibaug", detail: "Three days, sea-facing, 180 guests", ratio: "aspect-[4/5]" },
  { couple: "Meher & Zain", place: "Old Delhi", detail: "A nikah in the family haveli", ratio: "aspect-[4/3]" },
  { couple: "Ananya & Kartik", place: "Coorg", detail: "Coffee estate, forty people, rain throughout", ratio: "aspect-[4/3]" },
  { couple: "Simi & Dev", place: "Udaipur", detail: "Four functions across two palaces", ratio: "aspect-[4/5]" },
  { couple: "Riya & Arjun", place: "Fort Kochi", detail: "A church wedding and a Kerala sadhya", ratio: "aspect-[4/5]" },
  { couple: "Tara & Nikhil", place: "Pune", detail: "A registry signing and a house party", ratio: "aspect-[4/3]" },
];

/* ── Approach ──────────────────────────────────────────────────────── */
export const approach = {
  title: "The photographs you will still want in twenty years are not the styled ones",
  paragraphs: [
    "Every couple we meet has seen the same portfolio somewhere: golden-hour silhouettes, a dupatta caught mid-air, a drone shot of the mandap. Those are fine. They are also interchangeable, and nobody prints them.",
    "What gets framed, eventually, is your father's face when he sees you dressed. Your friends collapsing at 2am. The aunt who does not smile for photographs, smiling. So that is what we shoot for, and the pretty frames happen along the way.",
    "We work as a pair, quietly, in clothes that let us disappear. If you notice us more than twice in a day, we have done it wrong.",
  ],
  principles: [
    { title: "Documentary first", body: "We direct almost nothing. Family portraits and a short couple session are the exceptions, and we keep both brief." },
    { title: "Two photographers, always", body: "One on you, one on the room. A single photographer on a 400-guest wedding is a compromise nobody tells you about." },
    { title: "Colour that ages well", body: "We grade to film references, not to whatever preset is circulating this season. It should look like 2026 in 2046, not like a trend." },
    { title: "Everything delivered", body: "Every usable frame, culled for duplicates and misfires only. You are not shown 60 and charged for the rest." },
  ],
};

/* ── Collections ───────────────────────────────────────────────────── */
export const collections = [
  {
    name: "Single Day",
    scope: "One function",
    price: "₹1,40,000",
    detail: "A registry signing, a nikah, an intimate ceremony, or one event of a larger wedding.",
    includes: ["Two photographers", "Up to 10 hours", "All edited images", "Online gallery for 3 years", "Delivery in 4 weeks"],
    featured: false,
  },
  {
    name: "The Wedding",
    scope: "Two to three days",
    price: "₹3,20,000",
    detail: "The complete Indian wedding — mehendi, haldi, the ceremony and the reception.",
    includes: [
      "Two photographers throughout",
      "All functions across up to 3 days",
      "All edited images, typically 2,000+",
      "A 40-page fine-art album",
      "Online gallery for 5 years",
      "Delivery in 6 weeks",
    ],
    featured: true,
  },
  {
    name: "Destination",
    scope: "Three days or more",
    price: "From ₹4,80,000",
    detail: "Outside Pune and Mumbai, or abroad. Travel and stay quoted separately and at cost.",
    includes: [
      "Everything in The Wedding",
      "Third photographer on request",
      "Pre-wedding location recce",
      "Travel and stay at cost, never marked up",
      "Two 40-page albums",
    ],
    featured: false,
  },
];

export const collectionNotes = [
  "Prices exclude GST. A 30% retainer holds the date; the balance is due the week before.",
  "We do not sell an unedited-RAW package. The edit is the work, and handing over RAWs undoes it.",
  "Travel and accommodation are billed at cost with receipts attached. There is no markup on either.",
  "If we have to cancel for any reason within our control, you receive the retainer back in full plus a photographer we trust.",
];

/* ── The day ───────────────────────────────────────────────────────── */
export const day = [
  { time: "Getting ready", body: "We arrive separately, two hours before you are dressed. This is where most of the photographs you will keep are made." },
  { time: "The ceremony", body: "We move quietly and we never step into the ritual space. Priests and grandmothers both tend to notice us favourably for this." },
  { time: "Family portraits", body: "Twenty minutes, a list agreed in advance, one of us calling names so nobody wanders off. It is the least fun part and we make it fast." },
  { time: "The couple", body: "Fifteen to twenty minutes, away from everyone. Not a photoshoot — mostly the two of you being left alone, which photographs well." },
  { time: "The reception", body: "Speeches, the dancing, the people who only come alive after midnight. We stay until the floor empties." },
];

/* ── Albums & prints ───────────────────────────────────────────────── */
export const albums = [
  { name: "Fine-art album", spec: "40 pages · 12×12 inch · lay-flat", detail: "Hand-bound in Italy, printed on cotton rag. Included with The Wedding and Destination." },
  { name: "Parent copies", spec: "Duplicate albums, reduced size", detail: "₹18,000 each. Most couples order two, and it is the order nobody regrets." },
  { name: "Framed prints", spec: "Archival pigment, museum glass", detail: "From ₹9,000. Sized and framed with you, not sold as a bundle." },
  { name: "The full archive", spec: "Two drives, one posted separately", detail: "Included. Keep one, give one to a parent, because drives fail and clouds expire." },
];

/* ── Testimonials ──────────────────────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "My mother does not like being photographed and has never liked a photograph of herself. She has three of Ira's framed in her house. That is the entire review.",
    author: "Aditi & Rohan",
    role: "Alibaug, 2025",
  },
  {
    quote:
      "We barely saw them all day and then got two thousand photographs, half of which we had no idea were being taken. Exactly what we asked for.",
    author: "Meher & Zain",
    role: "Old Delhi, 2025",
  },
  {
    quote:
      "It rained for three days straight in Coorg and they never once looked stressed about it. The rain is in every photograph and it is the best thing about them.",
    author: "Ananya & Kartik",
    role: "Coorg, 2024",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How many photographs do we get?",
    answer:
      "For a full wedding, usually between 1,800 and 2,800 edited images. We cull duplicates, blinks and technical misfires and deliver everything else. There is no second tier of photographs held back for an upsell.",
  },
  {
    question: "How long until we see them?",
    answer:
      "A preview of around forty images within a week, the full gallery in six weeks, and the album within twelve once you have chosen the selects. If we are running late you will hear it from us before you have to ask.",
  },
  {
    question: "Do you shoot video as well?",
    answer:
      "No, and we would rather tell you that plainly than sell you a team we do not manage. We work alongside three film-makers regularly and will introduce you without taking a referral fee.",
  },
  {
    question: "What if it rains, or the venue is dark?",
    answer:
      "We carry lighting for both and we have shot through a Coorg monsoon and a 7pm power cut in the same year. Weather changes the photographs; it does not damage them.",
  },
  {
    question: "Can we give you a shot list?",
    answer:
      "For family portraits, please do — that list makes the twenty minutes work. For everything else we would rather you did not. A shot list turns a documentary photographer into a checklist operator and the results are visibly worse.",
  },
];

export const enquiryFunctions = [
  "Full wedding (2–3 days)",
  "Single function",
  "Destination wedding",
  "Engagement or roka",
  "Pre-wedding session",
  "Something else",
];
