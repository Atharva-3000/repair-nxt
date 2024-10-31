import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
};

export default withSentryConfig(nextConfig, {
  org: "freelancer-5ft",
  project: "repair-nxt",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs


  hideSourceMaps: true,

  disableLogger: true,
});
