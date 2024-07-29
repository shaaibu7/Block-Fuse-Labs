How would you store passwords securely?

- Passwords are not stored plainly in the database they must hashed or encrypted properly in the database with rounds of hashing to protect them from theft, i used bcrypt package for this.

Explain the process of generating and validating a JWT.

- JSON Web token are comprised of the following

- Header
- Payload
- Signature