require('dotenv').config()

const knex = require('knex')
const app = require('./app');
const cors = require('cors');
const { DB_URL } = require('./config')
app.use(
    cors({
    })
);

const PORT = process.env.PORT || 8000;


app.get('/api', (req, res) => {
  res.send('Hello worlddd')
})

const db = knex({
  client: 'pg',
  connection: DB_URL,
})

app.set('db', db)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};