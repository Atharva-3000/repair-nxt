import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4aa790ea4816f6cea7b9d8f2d9412a2f@o4507606292496384.ingest.de.sentry.io/4508216098095184",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
