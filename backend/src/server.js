const app = require('./app')
const port = 3333

//Exclusive to make the backend run on the port regardless of the test script
console.log('[VIRTUAL STORE BACKEND]')
app.listen(port)
console.log('[HTTP] Port:', port)
