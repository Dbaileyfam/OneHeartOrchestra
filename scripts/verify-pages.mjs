const homepage = "https://dbaileyfam.github.io/OneHeartOrchestra/";

async function check() {
  const res = await fetch(homepage, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${homepage} (${res.status})`);
  }

  const html = await res.text();

  if (html.includes('/src/main.tsx')) {
    throw new Error(
      [
        "GitHub Pages is serving source index.html (blank page risk).",
        "Set repo Pages source to: gh-pages branch / root.",
      ].join(" ")
    );
  }

  if (!html.includes("/OneHeartOrchestra/assets/")) {
    throw new Error(
      "Live page does not reference built /OneHeartOrchestra/assets files yet."
    );
  }

  console.log(`Pages check passed: ${homepage}`);
}

check().catch((err) => {
  console.error(`Pages check failed: ${err.message}`);
  process.exit(1);
});
