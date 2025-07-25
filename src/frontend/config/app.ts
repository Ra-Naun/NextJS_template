import { ENVIRONMENT, ENVIRONMENTS } from "./env";

const FAVICON_BY_ENV_MAP = {
  [ENVIRONMENTS.PRODUCTION]: "/images/logo.png",
  [ENVIRONMENTS.PRODUCTION_CHINA]: "/images/logo.png",
  [ENVIRONMENTS.STAGE]: "/images/logo.png",
};

export const FAVICON_URI = FAVICON_BY_ENV_MAP[ENVIRONMENT];
