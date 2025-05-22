import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://9370dca92a7beb292d85e77975b49328@o4506980235280384.ingest.us.sentry.io/4509253663391744",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
