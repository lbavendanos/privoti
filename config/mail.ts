const mail = {
  service: process.env.MAIL_SERVICE || '',
  username: process.env.MAIL_USERNAME || '',
  password: process.env.MAIL_PASSWORD || '',
  from: {
    address: process.env.MAIL_FROM_ADDRESS || 'info@privoti.com',
    name: process.env.MAIL_FROM_NAME || 'App',
  },
}

export default mail
