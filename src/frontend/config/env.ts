export enum ENVIRONMENTS {
  "PRODUCTION" = "PRODUCTION",
  "PRODUCTION_CHINA" = "PRODUCTION_CHINA",
  "STAGE" = "STAGE",
}

export const ENVIRONMENT = process.env.ENVIRONMENT as ENVIRONMENTS;
export const MONGODB_URI = process.env.MONGODB_URI;
export const IS_DEV = process.env.NODE_ENV === "development";
