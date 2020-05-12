# Genealogy Backend

The backend API component of the Genealogy Web Application.

This is a Node JS (Express JS) REST API with a Mongo DB document store.

Models are based on [GEDCOM X](http://www.gedcomx.org/schemas.html).

## TODO
* Add routes, controllers and any additional models for Events.
* Add routes, controllers and any additional models for Relationships.
* Develop model for multi-tree paradigm - tenancies for individual families to use with ability to link trees.
* Expand model to include all GEDCOMX types.
* Add additional logging to API endpoints.
* Add exception handling to API endpoints.
* Add Validation to models and API endpoints.
* Add additional Swagger documentation.
* Add Authentication and Authorisation
  * Authentication via passport modules as per [Nest JS Authentication](https://docs.nestjs.com/techniques/authentication) - Allow Google, Microsoft, Facebook.

## Getting Started

### Pre-reading

* [Nest JS Docs](https://docs.nestjs.com/)
* [Modern Full-Stack Development with Nest.js, React, TypeScript, and MongoDB](https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/)

### Prerequisites

* `Node JS` + NPM
* `Yarn`
* `Gitflow` (recommended)
* `Docker` / `Mongo DB` Locally installed
* `Nest CLI` (recommended)

### Installing

#### Node JS 

It is recommended to use Node Version Manager to do this. 

See 
[NVM ](https://github.com/nvm-sh/nvm "NVM Homepage")

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

nvm version-remote --lts

nvm install {{version}}

nvm install-latest-npm
```

#### Yarn

```
npm install -g yarn
```

#### Gitflow (recommended)

* See [Linux]([https://](https://github.com/nvie/gitflow/wiki/Linux))
* See [Mac OS](https://github.com/nvie/gitflow/wiki/Mac-OS-X)
* See [Windows](https://github.com/nvie/gitflow/wiki/Windows)

#### Docker

See your Operating System's distribution.

#### Nest CLI

```
npm install -g @nestjs/cli
```

#### Clone Project

```
git clone https://github.com/GrahamBragg/genealogy-backend.git
```
#### Install Dependencies

```
cd genealogy-backend/

yarn install
```

#### Create new .env file from .env.example
_Create a local one for dev/debug as well_

```
cp .env.example .env
```

Edit the `.env` and `.local.env` file to suit.

#### Debug

Make sure Mongo DB is accessible at the address in `.env`/`.local.env` (probably mongodb://localhost:27017)

##### Docker

```
mkdir ~/data

docker run --name mongo -d -p 27017:27017 -v ~/data:/data/db mongo
```

### Debug the project

```
yarn run start:debug
```

The application will start on the port defined in `.env`/`.local.env`.

### Nest CLI

It is recommended to use Nest CLI when adding `modules`, `services`, etc.

View the docs at [Nest CLI Usage](https://docs.nestjs.com/cli/usages)

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

//TODO

```
Example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Nest JS](https://nestjs.com/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [MongoDB](https://www.mongodb.com/) - Database and document store

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/GrahamBragg/genealogy-backend/tags). 

## Authors

* **Graham Bragg** - *Concept, Design and main developer* - [Graham Bragg](https://github.com/GrahamBragg)
* **Simon Bragg** - *Design and developer* - [Simon Bragg](https://github.com/maiorsi)

See also the list of [contributors](https://github.com/GrahamBragg/genealogy-backend/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Significant inspiration (straight copying) for models from [gedcomx-ts](https://github.com/Freedoms-Loom/gedcomx-ts)

## Swagger UI

This project includes a swagger api definition which can be accessed at [http://localhost:3000/api](http://localhost:3000/api).

This contains a reference to the API end points and the models involved.

## Sample JSON

### Create a new Person
```
{
    "names": [
        {
            "type": "BIRTH_NAME",
            "nameForms": [
                {
                    "fullText": "John Abraham Mark Smith",
                    "parts": [
                        {
                            "type": "GIVEN",
                            "value": "John"
                        },
                        {
                            "type": "GIVEN",
                            "value": "Abraham"
                        },
                        {
                            "type": "GIVEN",
                            "value": "Mark"
                        },
                        {
                            "type": "SURNAME",
                            "value": "Smith"
                        }
                    ]
                }
            ],
            "confidence": "HIGH"
        }
    ],
    "facts": [
        {
            "type": "BIRTH",
            "date": "1970-01-01",
            "place": {
                "original": "Canberra"
            },
            "confidence": "HIGH",
            "sources": [
                {
                    "description": "Birth Certificate"
                }
            ]
        }
    ],
    "gender": "MALE"
}
```
