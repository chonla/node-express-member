# RESTful API with Node Express Example

## Create User

**Method:** POST
**Endpoint:** /users

```
{
	"login": "john",
	"password": "password"
}
```

## Authenticate User

**Method:** POST
**Endpoint:** /auth/login

```
{
	"login": "john",
	"password": "password"
}
```

## Update user profile

**Method:** POST
**Endpoint:** /users/:id
**Remark:** This API requires access token returned from login API as Auth Bearer

```
{
	"display": "John Farmer"
}
```