import nodemailer from 'nodemailer'
import { config } from 'lib/utils/helpers'
import { render } from '@react-email/render'
import { NextResponse } from 'next/server'
import ContactEmail from './ContactEmail'

export async function POST(request: Request) {
  const params = await request.json()

  const transporter = nodemailer.createTransport({
    service: config('mail.service'),
    auth: {
      user: config('mail.username'),
      pass: config('mail.password'),
    },
  })

  await transporter.sendMail({
    from: `${config('mail.from.name')} <${config('mail.from.address')}>`,
    to: 'lbavendanos@gmail.com',
    subject: 'Contacto',
    html: render(ContactEmail(params)),
  })

  return NextResponse.json({})
}
