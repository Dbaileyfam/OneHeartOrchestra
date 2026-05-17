const homepage = "https://www.oneheartorchestra.com/";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractFirst(html, re) {
  const m = html.match(re);
  return m?.[1] ?? null;
}

function extractStylesheetHref(html, mustInclude) {
  const linkRe = /<link\b[^>]*>/gi;
  let m;
  const candidates = [];
  while ((m = linkRe.exec(html)) !== null) {
    const tag = m[0];
    if (!/\brel\s*=\s*["']stylesheet["']/i.test(tag)) continue;
    const hrefM = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i);
    if (hrefM?.[1]) candidates.push(hrefM[1]);
  }
  if (mustInclude) {
    const match = candidates.find((href) => href.includes(mustInclude));
    if (match) return match;
  }
  return candidates[0] ?? null;
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }
  return await res.text();
}

async function fetchOk(url) {
  const res = await fetch(url, {
    method: "HEAD",
    redirect: "follow",
    headers: {
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
  });
  return res.ok;
}

async function verifyOnce() {
  const busted = `${homepage}?__verify=${Date.now()}`;
  const html = await fetchText(busted);

  if (html.includes("/src/main.tsx")) {
    throw new Error(
      [
        "GitHub Pages is serving the Vite dev index.html (blank page).",
        "Fix: GitHub repo Settings → Pages → Build and deployment → Source:",
        "set to Deploy from a branch → gh-pages → / (root).",
        "Do NOT publish from main while main contains /src/main.tsx.",
      ].join(" ")
    );
  }

  const jsHref = extractFirst(
    html,
    /<script[^>]+src=["']([^"']+)["'][^>]*>/i
  );
  const cssHref = extractStylesheetHref(html, "/assets/");

  if (!jsHref || !cssHref) {
    throw new Error("Could not find built JS/CSS references in live index.html.");
  }

  if (!jsHref.includes("/assets/")) {
    throw new Error(`Unexpected JS path in live HTML: ${jsHref}`);
  }
  if (!cssHref.includes("/assets/")) {
    throw new Error(`Unexpected CSS path in live HTML: ${cssHref}`);
  }

  const heroUrl = new URL("band-hero-home.png", homepage).toString();
  if (!(await fetchOk(heroUrl))) {
    throw new Error(`Home hero image not reachable: ${heroUrl}`);
  }

  const jsUrl = new URL(jsHref, homepage).toString();
  const cssUrl = new URL(cssHref, homepage).toString();

  const [jsOk, cssOk] = await Promise.all([fetchOk(jsUrl), fetchOk(cssUrl)]);
  if (!jsOk) {
    throw new Error(`Live JS bundle not reachable (stale index?): ${jsUrl}`);
  }
  if (!cssOk) {
    throw new Error(`Live CSS bundle not reachable (stale index?): ${cssUrl}`);
  }
}

async function check() {
  let lastErr = null;
  for (let i = 0; i < 6; i++) {
    try {
      await verifyOnce();
      console.log(`Pages check passed: ${homepage}`);
      return;
    } catch (err) {
      lastErr = err;
      await sleep(5000);
    }
  }
  throw lastErr ?? new Error("Pages verification failed.");
}

check().catch((err) => {
  console.error(`Pages check failed: ${err.message}`);
  process.exit(1);
});
