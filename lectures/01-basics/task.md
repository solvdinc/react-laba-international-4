# Postman practice

You should create a user on the server and set your name and phone number.

I’m not giving you any information about fields I just say URLs to API endpoints:

**Server URL**: https://shoes-shop-strapi.herokuapp.com/api/

**Server Documentation**: https://shoes-shop-strapi.herokuapp.com/documentation

The server has the following API endpoints:

- **POST** register user: `https://shoes-shop-strapi.herokuapp.com/api/auth/local/register`
- **POST** login user: `https://shoes-shop-strapi.herokuapp.com/api/auth/local`
- **GET** users: `https://shoes-shop-strapi.herokuapp.com/api/users`
- **PUT** user: `https://shoes-shop-strapi.herokuapp.com/api/users/166`
- **GET** user by id: `https://shoes-shop-strapi.herokuapp.com/api/users/:id`

The server has Bearer Token authorization. You have to use JWT token that you receive from the login endpoint.

In the end I want to see information about you. E.g.

```json
{
  "id": 1,
  "username": "mmelnyk",
  "email": "mmelnyk@solvd.com",
  "firstName": "Mykhailo",
  "lastName": "Melnyk"
}
```

P.S. for all POST and PUT request please use :

```json
"Content-Type", "application/json"
```

P.S. please check your email box and confirmed email address after registration!!!

Good luck!