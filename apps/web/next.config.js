const [repoOwner = "", repoName = ""] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isRootPagesRepo = repoName.toLowerCase() === `${repoOwner.toLowerCase()}.github.io`;
const shouldUseBasePath = process.env.GITHUB_ACTIONS === "true" && repoName && !isRootPagesRepo;
const basePath = shouldUseBasePath ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : ""
};

module.exports = nextConfig;
