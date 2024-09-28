/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        NEXTAUTH_URL: "http://localhost:3000",
        DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",
        DB_URI: "",
    
        STRIPE_WEBHOOK_SECRET: "",
    
        STRIPE_SECRET_KEY: "",
    
        CLOUDINARY_CLOUD_NAME: "drajqohpv",
        CLOUDINARY_API_KEY: "864257176237652",
        CLOUDINARY_API_SECRET: "NcMS74B2Jf3nHnbBZxB9Xymzdg0",
    
        SMTP_HOST: "sandbox.smtp.mailtrap.io",
        SMTP_PORT: "2525",
        SMTP_USER: "",
        SMTP_PASSWORD: "",
        SMTP_FROM_EMAIL: "noreply@bookit.com",
        SMTP_FROM_NAME: "BookIT",
    
        GEOCODER_PROVIDER: "mapquest",
        GEOCODER_API_KEY: "",
        MAPBOX_ACCESS_TOKEN: "",
    
        NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
        REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
      },
      images: {
        domains: ["res.cloudinary.com"],
      },
};

export default nextConfig;
