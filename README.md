This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Event Manager is a neat short project that I have worked on during my first job. It is a mock web app written in TypeScript, designed to show local events and as a platform to promote them.
At the moment, the project itself is very dull, having only the "skeleton" of its features, that being the Signing up and Signing in, view of the current events, adding an event (/events/create; no button added) and editing existing events.

Since the project is done and run locally, it is using MySQL database, utilizing Prisma ORM for query building, Tailwindcss for styling and Bcrypt for hashing passwords.

Future plans for the project would surely be the addition of tokens or some sort of validation, a detailed overview of each event and a comment section for each of the events.
Furthermore, Event Manager could be improved by a searchbar and the addition of roles, at least two of them (admin and guest) which would differ in the ability to access certain commands on the app itself.
