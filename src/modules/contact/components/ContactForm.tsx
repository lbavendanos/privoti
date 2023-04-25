'use client'

import { fetcher } from 'lib/utils/http'
import { useCallback, useState } from 'react'
import { useForm, FormController } from 'lib/utils/form'
import Alert from '@/common/components/Alert'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import TextField from '@/common/components/TextField'
import ContactSuccessModal from './ContactSuccessModal'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [hasError, setHasError] = useState(false)

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
      setShowSuccessModal(false)
      setHasError(false)

      try {
        await fetcher('/api/email/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        })

        setShowSuccessModal(true)
        resetForm()
      } catch (error) {
        setHasError(true)
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
      <Paragraph size="sm" centered>
        Si tienes alguna duda, por favor escríbenos un mensaje y te
        responderemos lo antes posible.
      </Paragraph>
      <FormController
        name="name"
        control={formControl}
        rules={{ required: 'El nombre es obligatorio.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="name"
            type="text"
            label="Nombre *"
            error={!!formErrors.name}
            helperText={formErrors.name?.message}
          />
        )}
      />
      <FormController
        name="email"
        control={formControl}
        rules={{ required: 'El correo electrónico es obligatorio.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="email"
            type="email"
            label="Correo electrónico *"
            autoComplete="off"
            error={!!formErrors.email}
            helperText={formErrors.email?.message}
          />
        )}
      />
      <FormController
        name="phone"
        control={formControl}
        rules={{ required: 'El teléfono es obligatorio.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="phone"
            type="tel"
            label="Número de teléfono *"
            error={!!formErrors.phone}
            helperText={formErrors.phone?.message}
          />
        )}
      />
      <FormController
        name="message"
        control={formControl}
        rules={{ required: 'El comentario es obligatorio.' }}
        render={({ field }) => (
          <TextField
            {...field}
            id="message"
            label="Comentario *"
            error={!!formErrors.message}
            helperText={formErrors.message?.message}
            rows={10}
            multiline
          />
        )}
      />
      {hasError && (
        <Alert variant="danger">
          <Paragraph size="xs" centered>
            Ha ocurrido un error, por favor inténtelo de nuevo más tarde
          </Paragraph>
        </Alert>
      )}
      <Button
        type="submit"
        size="lg"
        className="w-full md:w-2/5"
        disabled={isLoading}
      >
        Enviar
      </Button>
      <ContactSuccessModal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
      />
    </form>
  )
}
