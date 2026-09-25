// Portfolio-only interactions. No requests, analytics, uploads or persistent storage.
(() => {
  const form = document.querySelector("#consult-form");
  if (form) {
    const first = form.querySelector("#smp-step-one");
    const second = form.querySelector("#smp-step-two");
    const status = form.querySelector("#smp-status");
    const toggleStep = (next) => {
      first.hidden = next;
      second.hidden = !next;
      second
        .querySelectorAll("input, textarea")
        .forEach((field) => (field.disabled = !next));
      (next
        ? document.querySelector("#step-two-title")
        : document.querySelector("#concern")
      ).focus();
    };
    document.querySelector("#smp-next").addEventListener("click", () => {
      if (
        [...first.querySelectorAll("select")].every((field) =>
          field.reportValidity(),
        )
      )
        toggleStep(true);
    });
    document
      .querySelector("#smp-back")
      .addEventListener("click", () => toggleStep(false));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const photo = document.querySelector("#smp-photo");
      if (
        photo.files[0] &&
        (!["image/jpeg", "image/png", "image/webp"].includes(
          photo.files[0].type,
        ) ||
          photo.files[0].size > 5 * 1024 * 1024)
      ) {
        status.textContent =
          "Please choose a JPEG, PNG or WebP image under 5 MB, or continue without a photo.";
        photo.focus();
        return;
      }
      form.reset();
      location.href = "smp-consultation-demo-complete.html";
    });
  }
  const dialog = document.querySelector("#deal-dialog");
  if (!dialog) return;
  const deals = {
    cedar: {
      name: "Cedar House",
      context: "Morgan · New lead · Fictional example",
      activity:
        "Seller replied and asked to discuss timing. No next action has been assigned.",
      suggestion: "Clarify the seller’s timeline before moving to an offer.",
      action: "Call seller",
    },
    juniper: {
      name: "Juniper House",
      context: "Jamie · Evaluating · Fictional example",
      activity:
        "Initial figures are ready for review. Comparable sales and repair assumptions still need checking.",
      suggestion: "Review comparable sales and confirm the repair allowance.",
      action: "Review comparable sales",
    },
    palm: {
      name: "Palm House",
      context: "Alex · Under contract · Fictional example",
      activity:
        "Buyer interest has been recorded. The next step is to confirm fit and availability.",
      suggestion: "Follow up with the interested buyer and record the outcome.",
      action: "Follow up with buyer",
    },
  };
  let activeCard;
  document.querySelectorAll("[data-deal]").forEach((card) =>
    card.addEventListener("click", () => {
      activeCard = card;
      const deal = deals[card.dataset.deal];
      document.querySelector("#deal-title").textContent = deal.name;
      document.querySelector("#deal-context").textContent = deal.context;
      document.querySelector("#deal-activity").textContent = deal.activity;
      document.querySelector("#deal-suggestion").textContent = deal.suggestion;
      document.querySelector("#next-action").value = deal.action;
      dialog.showModal();
    }),
  );
  document
    .querySelector("#close-deal")
    .addEventListener("click", () => dialog.close());
  document.querySelector("#action-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const action = document.querySelector("#next-action").value;
    const deal = deals[activeCard.dataset.deal];
    deal.action = action;
    deal.activity =
      "Next action set: " +
      action +
      ". This change exists only in this demo session.";
    activeCard.querySelector(".deal-stage").textContent = action;
    document.querySelector("#workflow-status").textContent =
      deal.name + ": " + action + " added to next actions.";
    dialog.close();
  });
  dialog.addEventListener("close", () => activeCard?.focus());
  document.querySelector("#deal-search").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();
    let count = 0;
    document.querySelectorAll("[data-deal]").forEach((card) => {
      const match = card.textContent.toLowerCase().includes(query);
      card.closest(".lane").hidden = !match;
      if (match) count++;
    });
    document.querySelector("#pipeline-count").textContent =
      count + " matching deal" + (count === 1 ? "" : "s");
    document.querySelector("#no-deals").hidden = count !== 0;
  });
})();
