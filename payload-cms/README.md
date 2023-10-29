# PWEB-PayloadCMS-P07-2023

A blank template for [Payload](https://github.com/payloadcms/payload) to help you get up and running quickly. This repo may have been created by running `npx create-payload-app` and selecting the "blank" template or by cloning this template on [Payload Cloud](https://payloadcms.com/new/clone/blank).

## Development
pre-requisit:
- `Yarn or NPM`.
- `Node.js version 16+`.
- Any compatible `database` (MongoDB or Postgres).
- dont't forget to add `mongodb/bin` to your environment
- also if there a cross-env problem `npm install --save-dev cross-env`
- also run the `MongoDB` with the connection string that is on your `.env`
- the `127.0.0.1/(insert here)`, you might want insert that with the name of you project 

To spin up the project locally, follow these steps:

1. First clone the repo
2. Then `cd YOUR_PROJECT_REPO && cp .env.example .env` to make the `.env` file
3. Next `npm run dev` (or `docker-compose up`, see [Docker](#docker)) 
4. Now `open http://localhost:3000/admin` to access the admin panel
5. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.
that's where the `collection` are!!

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this project locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then run `yarn serve` or `npm run serve` to run Node in production and serve Payload from the `./build` directory.

### Deployment

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).

NOTE:
this doesn't have the file below because of gitingnore
- build
- dist
- /media
- node_modules
- .DS_Store
- .env
 
