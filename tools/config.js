const config = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,

  auth: {
    domain: process.env.AUTH0_CLIENT_DOMAIN,
    secret: process.env.AUTH0_CLIENT_SECRET,
    clientId: process.env.AUTH0_CLIENT_ID,
  },
}

module.exports = config
