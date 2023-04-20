const mail = {
  host: process.env.MAIL_HOST || 'sandbox.smtp.mailtrap.io',
  port: process.env.MAIL_PORT || 2525,
  username: process.env.MAIL_USERNAME || '',
  password: process.env.MAIL_PASSWORD || '',
  from: {
    address: process.env.MAIL_FROM_ADDRESS || 'hello@example.com',
    name: process.env.MAIL_FROM_NAME || 'Privoti',
  },
}

export default mail
