# Properboot

[![NPM](https://img.shields.io/npm/v/example-typescript-react-component-library.svg)](https://www.npmjs.com/package/example-typescript-react-component-library) [![LICENSE](https://img.shields.io/npm/l/example-typescript-react-component-library.svg?color=green)](https://www.npmjs.com/package/example-typescript-react-component-library)

Properboot application which is properly backend challenge built with [TypeScript](https://github.com/Microsoft/TypeScript) and [Nodejs](https://nodejs.org/en/)

## API DOCUMENTATION

[Properboot API Doc](https://properboot.herokuapp.com/api-docs/)
<br />
![erd](./images/doc1.png)
<br />
![erd](./images/doc2.png)

## Key Project Functionalities

```sh
# Ability to create users, hash passwords and pass JWT tokens to UI
# Ability of users to add homes to app subject to approval by an admin user
# Middleware to protest routes from unauthorized access
# Ability of user to book a viewing appointment - JUST DB ENTRIES
# Ability of admin to approve or deny added homes or appointments

```

## Project structure

The project contains a `src` directory which is where majority of the application resides with an entry point `server.ts` at the root directory of the src folder
<br />

| Folder         | Description                                                      |
| :------------- | :--------------------------------------------------------------- |
| application    | General application resources to handle users request and models |
| config         | Global application variables stored here or retrieved fron .env  |
| domain         | Domain Models for application                                    |
| infrastructure | Data access layer for application                                |
| migrations     | Postgres Migration Files                                         |

## Key Design Consideration

```sh
# Domain Driven Design
# App wraped in Inversion of Control container - using inversify

```

<br />

![erd](./images/ddd.png)
<br />

## Setup

```sh
# Install apllication dependencies
npm install

```

## Development

```sh
# Run Locally
npm run start:build && npm run start:run

# Run in Docker
docker build -t properboot:1.0.0 .

#Get docker image from list of images
docker images

#Run docker image
docker run -it -p 8080:8080 <imageId>
```

## Testing

```sh
# Run integration test for application
npm run test
```

## Entity Relationship Diagram

![erd](./images/erd.png)

## Posible test cases that could have been written

```sh
# More test cases with various edge cases in the service layer.
# More repository tests.
# More test on the request body.
```
