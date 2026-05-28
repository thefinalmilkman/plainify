// Tool registry — add new tools here, they auto-appear on the grid
const TOOLS = [
  {
    id:     "error-decoder",
    icon:   "🔴",
    name:   "Error Decoder",
    desc:   "Paste any Windows error or crash message. Get back what it means and exactly what to do.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "quote-builder",
    icon:   "📄",
    name:   "Quote Builder",
    desc:   "Describe a job in plain English. Get a professional quote ready to send to a client.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "bill-decoder",
    icon:   "🧾",
    name:   "Bill Decoder",
    desc:   "Paste your phone, internet, or cable bill. Find out what you're paying for and what to cut.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "lease-reader",
    icon:   "📋",
    name:   "Lease Reader",
    desc:   "Paste any lease or contract. Get the 5 things you need to know before signing.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "medical-bill",
    icon:   "🏥",
    name:   "Medical Bill Decoder",
    desc:   "Paste your hospital bill or insurance statement. Find out what each charge means and what to dispute.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "error-decoder-es",
    icon:   "🔴🇲🇽",
    name:   "Decodificador de Errores",
    desc:   "Pega tu mensaje de error de Windows. Te explicamos qué significa y qué hacer — en español.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "eob-decoder",
    icon:   "📋",
    name:   "Insurance EOB Decoder",
    desc:   "Paste your Explanation of Benefits. Find out what you actually owe — and what to dispute.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "notice-decoder",
    icon:   "📬",
    name:   "Notice & Warning Decoder",
    desc:   "Paste any IRS letter, utility shutoff, or government notice. Get what it means and what to do by when.",
    badge:  "free",
    status: "live",
  },
  {
    id:     "demand-letter",
    icon:   "✉️",
    name:   "Demand Letter Writer",
    desc:   "Describe your dispute in plain English. Get a professional demand letter ready to send — no lawyer needed.",
    badge:  "free",
    status: "live",
  },
];

function renderGrid() {
  const grid = document.getElementById("tool-grid");
  if (!grid) return;

  grid.innerHTML = TOOLS.map(t => {
    const href = t.status === "coming" ? "#" : `tools/${t.id}.html`;
    const onclick = t.status === "coming" ? `onclick="return false"` : "";
    return `
      <a class="tool-card" href="${href}" ${onclick} title="${t.status === "coming" ? "Coming soon" : ""}">
        <span class="icon">${t.icon}</span>
        <span class="name">${t.name}</span>
        <span class="desc">${t.desc}</span>
        <span class="badge ${t.badge}">${t.badge === "coming" ? "coming soon" : t.badge}</span>
      </a>`;
  }).join("");
}

renderGrid();
