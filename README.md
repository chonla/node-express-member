# RESTful API with Node Express

Almost ready to use API Service.

## Content

* RESTful API Service with Node Express, CORS and PREFLIGHT enabled, JWT provided running on port `3000`.
* MongoDB with initial seed.

## Setup

### With Docker

Use docker compose: `docker-compose up --build -d`

### With Manual

* Seed data is located in [./docker/mongo-seed](./docker/mongo-seed). You can use `mongoimport` to migrate them into your database named `data`.

	```bash
	mongoimport --host mongodb --db data --type json --file /members.json --maintainInsertionOrder --jsonArray
	mongoimport --host mongodb --db data --type json --file /users.json --maintainInsertionOrder --jsonArray
	```

## Seed Data

See [seed data](./docker/mongo-seed) for detail.

### Users

2 logins (`admin` and `john`) with password `password`.

#### Fields

| Name | Description |
| - | - |
| login | Login name |
| password | Password (hashed) |
| display | Display name |
| email | Email address |

### Members

7 members.

#### Fields

| Name | Description |
| - | - |
| name | Member name |
| imgUrl | Member display photo URL |
| instagramId | Member instagram ID |


## API

### Public API

* **Login:** POST /auth/login
* **User register:** POST /users
* **Get list of members:** GET /bnk/members
* **Get member profile:** GET /bnk/members/`:id`

### Authorization required API

Authorization with Bearer authorization scheme is required in header.

* **Create a member:** POST /bnk/members
* **Update member profile:** PATCH /bnk/members/`:id`
* **Delete a member:** DELETE /bnk/members/`:id`
* **Update user profile:** PATCH /users/`:id`
* **Update my profile:** PATCH /me
* **Get my profile:** GET /me
