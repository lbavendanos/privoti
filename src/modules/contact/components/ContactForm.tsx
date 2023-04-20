'use client'

import { fetcher } from 'lib/utils/http'
import { useForm, FormController } from 'lib/utils/form'
import { useCallback, useState } from 'react'
import Alert from '@/common/components/Alert'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import TextField from '@/common/components/TextField'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const {
    resetForm,
    formControl,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const handleValid = useCallback(
    async (data: ContactFormData) => {
      setIsLoading(true)
      setIsSuccess(false)
      setIsError(false)

      try {
        await fetcher('/api/email/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        setIsSuccess(true)
        resetForm()
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    },
    [resetForm]
  )

  return (
    <form
      className="flex flex-col items-center space-y-3 border border-zinc-800 p-4"
      onSubmit={handleSubmit(handleValid)}
    >
      {isSuccess && (
        <Alert variant="primary">
          <Paragraph size="xs">
            Gracias por contactarnos. Te responderemos lo antes posible.
          </Paragraph>
        </Alert>
      )}
      {isError && (
        <Alert variant="danger">
          <Paragraph size="xs">
            Ha ocurrido un error, por favor inténtelo de nuevo más tarde
          </Paragraph>
        </Alert>
      )}
      <Paragraph size="sm">
        Si tienes alguna duda, por favor escríbenos un mensaje y te
        responderemos lo antes posible.
      </Paragraph>
      <FormController
        name="name"
        control={formControl}
        rules={{ required: 'The name field is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="name"
            label="Name *"
            error={!!formErrors.name}
            helperText={formErrors.name?.message}
          />
        )}
      />
      <FormController
        name="email"
        control={formControl}
        rules={{ required: 'The email field is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="email"
            label="Email *"
            autoComplete="off"
            error={!!formErrors.email}
            helperText={formErrors.email?.message}
          />
        )}
      />
      <FormController
        name="phone"
        control={formControl}
        rules={{ required: 'The phone field is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="phone"
            label="Phone *"
            error={!!formErrors.phone}
            helperText={formErrors.phone?.message}
          />
        )}
      />
      <FormController
        name="message"
        control={formControl}
        rules={{ required: 'The message field is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="message"
            label="Message *"
            error={!!formErrors.message}
            helperText={formErrors.message?.message}
            rows={10}
            multiline
          />
        )}
      />
      <Button type="submit" className="w-full md:w-2/5" disabled={isLoading}>
        Enviar
      </Button>
    </form>
  )
}
