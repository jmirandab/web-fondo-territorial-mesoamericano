/** @type {import('next').NextConfig} */
///import i18next from './src/config/initi18n' delete


const nextConfig = {
    // i18n: {
    //     // These are all the locales you want to support in
    //     // your application
    //     locales: ['en', 'es'],
    //     // This is the default locale you want to be used when visiting
    //     // a non-locale prefixed path e.g. `/hello`
    //     defaultLocale: 'en',
       
    //   },
}

// module.exports = nextConfig




module.exports = {
    target: "experimental-serverless-trace",
    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
  };
