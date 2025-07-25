import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: false,
  env: {
    // Если нужно использовать и на клиенте и на сервере
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  // для использования scss-штук в стилях компонентов надо преподготовить эти самые scss-штуки:
  sassOptions: {
    includePaths: [`${__dirname}/sass`],
    prependData: "@import './assets/styles/global/index.scss';",
    // for disable warning deprecated @import
    silenceDeprecations: ["legacy-js-api", "import"],
  },
};

export default nextConfig;
