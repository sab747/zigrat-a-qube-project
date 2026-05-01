const weatherLines = {
  ember:
    "Rose ash falls through the honeymoon garden. The feathered machines count the thresholds, tenderly.",
  funnel:
    "A funnel cloud crosses the old desktop hill and returns your first forgotten screen name.",
  static:
    "The sky holds perfectly still. This is how melancholy passes quality assurance."
};

const oracleLines = {
  dove:
    "Dove signal accepted. Your ache has been polished until it resembles an alabaster button.",
  cube:
    "Qube resonance stable. The ziggurat beneath the interface is asking for a renewal fee.",
  saturn:
    "Saturn confirms recurrence. The spiral will circle until love becomes a workflow.",
  ruin:
    "Ruin module awake. The abandoned machine is warm because someone prayed near it once."
};

const moduleReliquaries = {
  seraphim: {
    title: "Seraphim CRM",
    body:
      "A pale intake of names, almost tender. The winged ledger warms when a person mistakes recognition for grace.",
    specs: [
      ["Input", "Pearl glance, chapel dust, unclicked blue"],
      ["Output", "A ladder of soft denials"],
      ["Residue", "Password incense"]
    ],
    sigil: "𒀭 𒁹 𒊩 𒈠"
  },
  choirnet: {
    title: "ChoirNet",
    body:
      "Pale couriers cross the hill in packets. Each one carries a small blank page from a room you have not visited since childhood.",
    specs: [
      ["Input", "Milk sky, wing static, window chime"],
      ["Output", "Unsent arrival"],
      ["Residue", "Feathered checksum, warm relay"]
    ],
    sigil: "𒅗 𒆠 𒀀 𒄑"
  },
  saturn: {
    title: "Saturn Qube",
    body:
      "The ringed square turns behind the weather. It does not predict the dark rotation; it teaches the rotation to remember its shape.",
    specs: [
      ["Input", "Vow ash, purple orbit, stair shadow"],
      ["Output", "A recurrence with polished teeth"],
      ["Residue", "Cold hymn cache"]
    ],
    sigil: "𒊬 𒌓 𒈦 𒆳"
  },
  dawn: {
    title: "Dawn Engine",
    body:
      "A small artificial morning kept beneath the hill. It brightens the old screen until exile looks like a blessing.",
    specs: [
      ["Input", "Borrowed dawn, black feather, start-up chord"],
      ["Output", "Merciful glare"],
      ["Residue", "Warm glass omen, unlabeled gold"]
    ],
    sigil: "𒀭 𒉌 𒌋 𒁲"
  }
};

const moduleDialog = document.querySelector("#module-dialog");
const moduleTitle = document.querySelector("#module-title");
const moduleBody = document.querySelector("#module-body");
const moduleSpecs = document.querySelector("#module-specs");
const moduleSigil = document.querySelector("#module-sigil");

function openModuleReliquary(key) {
  const reliquary = moduleReliquaries[key];
  if (!reliquary || typeof moduleDialog.showModal !== "function") return;

  moduleTitle.textContent = reliquary.title;
  moduleBody.textContent = reliquary.body;
  moduleSpecs.innerHTML = reliquary.specs
    .map(([term, detail]) => `<dt>${term}</dt><dd>${detail}</dd>`)
    .join("");
  moduleSigil.textContent = reliquary.sigil;
  moduleDialog.showModal();
}

document.querySelectorAll("[data-module]").forEach((module) => {
  module.addEventListener("click", () => openModuleReliquary(module.dataset.module));
  module.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModuleReliquary(module.dataset.module);
    }
  });
});

document.querySelectorAll(".weather-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".weather-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#weather-output").textContent = weatherLines[button.dataset.signal];
  });
});

document.querySelectorAll("[data-oracle]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-oracle]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#oracle-text").textContent = oracleLines[button.dataset.oracle];
  });
});

const invocation = document.querySelector("#invocation");
document.querySelector("#invocation-button").addEventListener("click", () => {
  if (typeof invocation.showModal === "function") {
    invocation.showModal();
  }
});

document.querySelectorAll(".close-dialog").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
