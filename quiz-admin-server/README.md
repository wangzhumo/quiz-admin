# Quizzess Admin

Project for quizzess admin server, include quiz create, statics resource , project config ...

-   **Quiz :** create quizzess with web and flutter, provide api and manage quiz.
-   **Resources :** some static resource, like: `image`, `file`, provide api for upload and download.
-   **Config :** config for web and flutter project , manage config , edit config , dispatch config.

## Features

npx prisma generate --schema src/database/postgres/schema.prisma
npx prisma generate --schema src/database/mongo/schema.prisma

npx prisma db push --schema src/database/postgres/schema.prisma
npx prisma db push --schema src/database/mongo/schema.prisma
