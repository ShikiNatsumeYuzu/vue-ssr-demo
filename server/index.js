const express = require("express");
const fs = require("fs");

const app = express();

const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle = require("../dist/server/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/client/vue-ssr-client-manifest.json");
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync("../public/index.template.html", "utf-8"),
  clientManifest
});

app.use(express.static("../dist/client", { index: false }));

app.get("*", async (req, res) => {
  const context = { url: req.url };
  const html = await renderer.renderToString(context);
  res.send(html);
});

app.listen(3000);
