const [repoOwner = "", repoName = ""] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isUserPagesRepo = repoOwner.toLowerCase() === repoName.toLowerCase();
const shouldUseBasePath = process.env.GITHUB_ACTIONS === "true" && repoName && !isUserPagesRepo;
const basePath = shouldUseBasePath ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : ""
};

module.exports = nextConfig;
