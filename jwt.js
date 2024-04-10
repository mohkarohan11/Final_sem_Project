const jwt = require('jsonwebtoken')
//let token = jwt.sign({name:"rohan"},'abc')
let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9oYW4iLCJpYXQiOjE3MDkxMDI2Nzd9.vaw7ktQO2K2WAkhv9iav9gIovUaSU4KI6X-AlEoriOQ"
let value=jwt.verify(token, 'abc')
//console.log(token)
console.log(value)
