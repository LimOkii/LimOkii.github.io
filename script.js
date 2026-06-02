const yearNode = document.querySelector("[data-current-year]");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const lastUpdatedNode = document.querySelector("[data-last-updated-label]");
if (lastUpdatedNode) {
  const source = document.body.dataset.lastUpdated;
  const parsed = source ? new Date(source) : new Date();

  if (!Number.isNaN(parsed.getTime())) {
    lastUpdatedNode.textContent = new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
    }).format(parsed);
  } else {
    lastUpdatedNode.textContent = "recently";
  }
}
