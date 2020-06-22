const axios = require('axios');

axios.get('http://localhost:3000/posts/5ef009d286f2c423003da159')
.then(res=>console.log(res.data.title))
.catch(err=>console.log(err))


