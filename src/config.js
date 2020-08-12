  module.exports = {
  PORT: 5432,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: 'postgres://zovtduicxjtess:7c9c066bd7fd3782f8576262a81fe14fd07025270c8943c2ddcfdcd6c9873877@ec2-34-195-115-225.compute-1.amazonaws.com:5432/d8f3004n1adorn',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
}