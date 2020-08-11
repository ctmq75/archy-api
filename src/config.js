  module.exports = {
  PORT: 5432,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/archy-app',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
}