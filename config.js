const DB_URI =
  "mongodb+srv://somkiat:6Eba0874@cluster0.l2npy.gcp.mongodb.net/nextecom?retryWrites=true&w=majority";
const API =
  process.env.NODE_ENV === "production"
    ? "https://nextecom-hazel.vercel.app/api"
    : "http://localhost:3000/api";
    
const NEXTAUTH_SECRET = "GSFGS5566dhdhDHDH888";
const GOOGLE_CLIENT_ID = "1051833473520-0u00l10smfs7gn4agqajb05qd4jfkui8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "JpNPaXaDnU985DhyyUSMXlvT";

CLOUDINARY_CLOUD_NAME = "eleclabs";
CLOUDINARY_API_KEY = "918554882973485";
CLOUDINRAY_API_SECRET = "5pSVGc975MXTdhjF0lJI0VjlG3s";

STRIPE_PUBLISHABLE_KEY = "pk_test_51IuCvTDuMnHAa36ipjGFhK0evt3q77E1sZLu8UEcQYeUnOJ2SuwPJQO8lfgXE9ma68BWCexZQhoz2xWUnDFXN756003jr0zoBe";
STRIPE_SECRET_KEY = "sk_test_51IuCvTDuMnHAa36icXsSrXcnhe9Ob8fHz9mrq6LtK2yuKcz4AX45BPvuI6xwChbRIKXAh5nbU8MNxy3uiiOnLv4P00BjpC1gqe";
STRIPE_TAX_RATE = "txr_xxx";
STRIPE_SHIPPING_RATE = "shr_xxx";

STRIPE_WEBHOOK_SECRET = "whsec_xxx";

DOMAIN = "http://localhost:3000";

module.exports = {
  DB_URI,
  API,
  NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINRAY_API_SECRET,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
  STRIPE_TAX_RATE,
  DOMAIN,
  STRIPE_SHIPPING_RATE,
  STRIPE_WEBHOOK_SECRET,
};
