import type { FaqItem, NavLink } from "@/types/template";

/** All copy for the Boutique Label template. */
export const label = {
  name: "Indigo Thread",
  founder: "Meghna Iyer",
  discipline: "Small-batch clothing, made in India",
  founded: 2019,
  phone: "+91 484 298 4400",
  whatsapp: "+91 90480 44001",
  email: "studio@indigothread.in",
  address: { line1: "Studio 6, Bazaar Road", line2: "Mattancherry", city: "Kochi 682002" },
  hours: "Studio open Thursday to Sunday, 11:00–18:00",
};

export const navLinks: NavLink[] = [
  { label: "The drop", href: "#drop" },
  { label: "Fabric", href: "#fabric" },
  { label: "Made to order", href: "#made-to-order" },
  { label: "Size & care", href: "#size" },
  { label: "Stockists", href: "#stockists" },
  { label: "Wholesale", href: "#wholesale" },
];

export const hero = {
  badge: "Drop 09 · Monsoon 2026 · 140 pieces",
  title: "Clothes made in batches of forty, by people we can name.",
  subtitle:
    "A small-batch label working with handloom cotton and natural indigo from Kerala and Tamil Nadu. Every garment carries the weaver, the dyer and the tailor who made it.",
  primaryCta: { label: "See the drop", href: "#drop" },
  secondaryCta: { label: "Visit the studio", href: "#stockists" },
};

export const drop = {
  name: "Drop 09 — Monsoon",
  note: "Released 12 August. Once a size sells out it is not restocked; a made-to-order slot opens instead.",
  pieces: [
    { name: "The Bazaar Shirt", price: "₹4,200", fabric: "Handloom cotton, natural indigo", sizes: "XS – 3XL", stock: "In stock" },
    { name: "Wide Trousers", price: "₹4,800", fabric: "Khadi cotton, undyed", sizes: "XS – 3XL", stock: "In stock" },
    { name: "The Long Dress", price: "₹6,400", fabric: "Mul cotton, block printed", sizes: "S – 2XL", stock: "Low stock" },
    { name: "Overshirt", price: "₹5,600", fabric: "Double-cloth handloom", sizes: "XS – 3XL", stock: "Sold out" },
    { name: "Everyday Kurta", price: "₹3,400", fabric: "Handloom cotton", sizes: "XS – 3XL", stock: "In stock" },
    { name: "Field Jacket", price: "₹7,900", fabric: "Canvas cotton, iron-dyed", sizes: "S – 2XL", stock: "Made to order" },
  ],
};

export const fabric = {
  title: "Where the cloth comes from, and who made it",
  body: "Fast fashion is cheap because somebody in the chain is not paid properly. We publish the chain so you can check ours.",
  sources: [
    { material: "Handloom cotton", cluster: "Chendamangalam, Kerala", detail: "Woven by a 40-member weavers cooperative; we pay 22% above the cluster rate." },
    { material: "Natural indigo", cluster: "Auroville, Tamil Nadu", detail: "Fermented indigo vats, no synthetic fixatives. Water from dyeing is filtered and reused." },
    { material: "Khadi cotton", cluster: "Ponduru, Andhra Pradesh", detail: "Hand-spun and hand-woven, purchased through the certified khadi board." },
    { material: "Block printing", cluster: "Bagru, Rajasthan", detail: "Hand block printed with natural dyes by a family workshop we have worked with since 2020." },
  ],
  commitments: [
    "Every garment label names the weaver cluster and the tailor",
    "Tailors are salaried, not paid per piece",
    "No synthetic fibre anywhere in the range, including thread and interlining",
    "Offcuts above 30cm become patch pockets and tote bags, not waste",
  ],
};

export const madeToOrder = {
  title: "Sold out is not the end of it",
  body: "When a size sells out we open made-to-order slots rather than manufacturing stock we hope to sell. It takes longer and it means nothing is discounted at the end of a season, because there is nothing left over.",
  points: [
    { title: "Three to four weeks", body: "From order to dispatch, because the garment is cut after you order it." },
    { title: "No extra charge", body: "Made-to-order pieces cost the same as in-stock pieces. Length adjustments are free." },
    { title: "Twelve slots a week", body: "The studio takes twelve made-to-order garments a week. When they are gone, they are gone." },
    { title: "Repairs, always", body: "Send any Indigo Thread garment back for repair at any age. We charge postage only." },
  ],
};

export const sizing = [
  { size: "XS", chest: "84 cm", waist: "66 cm", hip: "90 cm" },
  { size: "S", chest: "89 cm", waist: "71 cm", hip: "95 cm" },
  { size: "M", chest: "95 cm", waist: "77 cm", hip: "101 cm" },
  { size: "L", chest: "102 cm", waist: "84 cm", hip: "108 cm" },
  { size: "XL", chest: "110 cm", waist: "92 cm", hip: "116 cm" },
  { size: "2XL", chest: "119 cm", waist: "101 cm", hip: "125 cm" },
  { size: "3XL", chest: "128 cm", waist: "110 cm", hip: "134 cm" },
];

export const care = [
  "Cold hand wash for the first three washes, separately — natural indigo bleeds and that is not a defect",
  "Machine wash cold on a gentle cycle after that, inside out",
  "Line dry in shade; direct sun will fade indigo unevenly",
  "Iron on medium while slightly damp; handloom cotton creases and is meant to",
  "Expect the first wash to shrink by around 3% in length; patterns account for this",
];

export const stockists = [
  { name: "The Studio", city: "Kochi", note: "Bazaar Road, Mattancherry · Thu–Sun" },
  { name: "Paper Boat Collective", city: "Goa", note: "Sangolda" },
  { name: "Nicobar", city: "Bengaluru", note: "Selected pieces" },
  { name: "Baro Market", city: "Mumbai", note: "Seasonal pop-ups" },
  { name: "Kulture Shop", city: "New Delhi", note: "Trunk shows" },
  { name: "Online", city: "Ships worldwide", note: "Direct from the studio" },
];

export const faqs: FaqItem[] = [
  {
    question: "Why are there no sales or discounts?",
    answer:
      "Because we do not overproduce. Batches of forty sell through or move to made-to-order. Discounting would mean either paying the makers less or having guessed the demand badly, and we would rather do neither.",
  },
  {
    question: "The colour of my garment looks different from the photograph.",
    answer:
      "Natural indigo varies vat to vat, and handloom cotton takes dye unevenly by nature. Two garments cut from the same batch will differ slightly. If yours is dramatically off, write to us with a photograph.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, worldwide. Shipping is calculated at checkout and typically takes 7 to 14 days. Duties and import taxes are payable by the recipient and are not included.",
  },
  {
    question: "What is your returns policy?",
    answer:
      "Fourteen days for in-stock pieces, unworn with tags, and we pay return shipping within India. Made-to-order and length-altered garments cannot be returned unless there is a fault, which we will always fix or replace.",
  },
  {
    question: "Can I visit the studio?",
    answer:
      "Yes. The Mattancherry studio is open Thursday to Sunday, 11:00 to 18:00. You can try everything on, and you will usually meet whoever cut it.",
  },
];

export const wholesaleTypes = [
  "Multi-brand retail store",
  "Concept store",
  "Online marketplace",
  "Pop-up or trunk show",
  "Press or styling",
];
