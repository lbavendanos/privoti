import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Section } from '@react-email/section'
import { Container } from '@react-email/container'

export interface ContactEmailProps {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  phone,
  message,
}: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            * {
              font-family: Roboto Mono, monospace;
             }

            p {
              margin: 0;
            }
          `}
        </style>
      </Head>
      <Section
        style={{
          backgroundColor: '#fff',
          color: '#27272a',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        }}
      >
        <Container
          style={{
            width: '100%',
            borderCollapse: 'initial',
            borderSpacing: 0,
            maxWidth: '470px',
            textAlign: 'left',
            overflow: 'hidden',
            margin: '32px auto',
            padding: '20px',
            border: '1px solid #27272a',
          }}
        >
          <p>
            Recibiste un nuevo mensaje del formulario de contacto de tu tienda
            online.
          </p>
          <hr
            style={{
              width: '100%',
              border: 'none',
              borderTop: '1px solid #27272a',
            }}
          />
          <div style={{ marginBottom: '8px' }}>
            <p>
              <b>Country Code:</b>
            </p>
            <p>PE</p>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <p>
              <b>Nombre:</b>
            </p>
            <p>{name}</p>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <p>
              <b>Correo electrónico:</b>
            </p>
            <p>{email}</p>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <p>
              <b>Número De Teléfono:</b>
            </p>
            <p>{phone}</p>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <p>
              <b>Comentario:</b>
            </p>
            <p>{message}</p>
          </div>
        </Container>
      </Section>
    </Html>
  )
}
