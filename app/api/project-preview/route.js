const projectPreviews = {
  aigenthic: {
    name: "Aigenthic",
    url: "https://www.aigenthic.xyz/",
    description: "AI agent marketplace for trusted installs and verifiable releases."
  },
  lunatrixx: {
    name: "Lunatrixx",
    url: "https://www.lunatrixx.xyz/",
    description: "Crypto signal intelligence and agent-driven market workflows."
  },
  pixunio: {
    name: "Pixunio",
    url: "https://www.pixunio.xyz/",
    description: "Clean image-link sharing with previews and developer-ready flows."
  },
  lizzotech: {
    name: "Lizzotech",
    url: "https://lizzotech.vercel.app/",
    description:
      "Solar power station storefront and sizing wizard for Nigerian homes and businesses."
  }
};

export const dynamic = "force-dynamic";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function createFallbackPage(project) {
  const name = escapeHtml(project.name);
  const description = escapeHtml(project.description);
  const url = escapeHtml(project.url);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${name} preview</title>
    <style>
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        padding: 34px;
        color: #fffdf4;
        background:
          linear-gradient(135deg, rgba(255, 192, 75, 0.18), rgba(255, 192, 75, 0) 38%),
          linear-gradient(180deg, #15191f 0%, #080a0d 100%);
        font-family: Arial, Helvetica, sans-serif;
      }
      main {
        width: min(100%, 680px);
        border: 1px solid rgba(255, 253, 244, 0.14);
        border-radius: 8px;
        padding: 34px;
        background: rgba(255, 253, 244, 0.06);
        box-shadow: 0 26px 70px rgba(0, 0, 0, 0.28);
      }
      span {
        color: #ffc04b;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }
      h1 {
        margin: 18px 0 14px;
        font-size: clamp(44px, 9vw, 78px);
        font-weight: 390;
        line-height: 0.96;
      }
      p {
        max-width: 520px;
        margin: 0;
        color: rgba(255, 253, 244, 0.72);
        font-size: 18px;
        font-weight: 520;
        line-height: 1.5;
      }
      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 52px;
        margin-top: 28px;
        padding: 0 20px;
        border-radius: 4px;
        color: #111317;
        background: #ffc04b;
        font-size: 15px;
        font-weight: 850;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <main>
      <span>Project preview</span>
      <h1>${name}</h1>
      <p>${description}</p>
      <a href="${url}" target="_blank" rel="noreferrer">Open live site</a>
    </main>
  </body>
</html>`;
}

function prepareHtml(html, project) {
  const baseTag = `<base href="${project.url}">`;
  const withoutCspMeta = html.replace(
    /<meta[^>]+http-equiv=["']content-security-policy["'][^>]*>/gi,
    ""
  );

  if (/<head[^>]*>/i.test(withoutCspMeta)) {
    return withoutCspMeta.replace(/<head([^>]*)>/i, `<head$1>${baseTag}`);
  }

  return `<!doctype html><html><head>${baseTag}</head><body>${withoutCspMeta}</body></html>`;
}

export async function GET(request) {
  const site = new URL(request.url).searchParams.get("site");
  const project = projectPreviews[site];

  if (!project) {
    return new Response("Unknown preview site.", { status: 404 });
  }

  try {
    const response = await fetch(project.url, {
      cache: "no-store",
      signal: AbortSignal.timeout(6500),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
      }
    });

    if (!response.ok) {
      throw new Error(`Preview request failed with ${response.status}`);
    }

    const html = await response.text();

    return new Response(prepareHtml(html, project), {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=3600",
        "Content-Type": "text/html; charset=utf-8"
      }
    });
  } catch {
    return new Response(createFallbackPage(project), {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/html; charset=utf-8"
      }
    });
  }
}
