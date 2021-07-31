# Gifulator

Gifulator is your own personal animated gif library. Save, categorize, and self-host your
most favoritist gifs from all over the internet!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy To Netlify

This project is intended to be used with [Netlify CMS](https://www.netlifycms.org/) as its backend.

To get started you need:

- A github.com account
- A free-tier Netlify account

Once you have both, you can use the one-click installer below:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pbredenberg/gifulator&amp;stack=cms)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Netlify CMS

You can launch the CMS server locally and manage content if you wish:

`npm run cms`

This will launch a local server for the CMS: <http://localhost:8080/admin>

Click "log in" and you will see the admin panel.

When running in this mode, the built site front end will be available here: <http://localhost:8080>

NOTE: Auto-reloading is not supported in this mode. When changes are made you will have to manually
stop and restart the cms server. Once markdown files are created, the `npm run dev` can be used and
everything should work as normal.

## Learn More

To learn more about Netlify CMS:

- [Netlify CMS official site](https://www.netlifycms.org/docs/intro/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
