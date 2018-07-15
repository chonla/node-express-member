# RESTful API with Node Express Example

## ใช้ยังไง

### ทำผ่าน docker compose

ใช้ `docker-compose up --build -d`

### ทำเองด้วยวิธี manual

* ข้อมูลสำหรับ seed อยู่ที่ [./docker/mongo-seed](./docker/mongo-seed) เอาไป import เองเลย

## API

### Data ที่เตรียมไว้ให้ใน seed แล้ว

* 2 Users (admin/password กับ john/password)
* 7 Members

### Create User

**Method:** POST
**Endpoint:** /users

```
{
	"login": "john",
	"password": "password"
}
```

### Authenticate User

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