'use client'

import { useForm, FormController } from 'lib/utils/form'
import { useCallback } from 'react'
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
  const {
    formControl,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ContactFormData>()

  const handleValid = useCallback((data: ContactFormData) => {
    console.log(data)
  }, [])

  return (
    <form
      className="flex flex-col items-center space-y-3 border border-zinc-800 p-4"
      onSubmit={handleSubmit(handleValid)}
    >
      <Paragraph size="sm">
        If you have any questions, please write us a message and we will answer
        you as soon as possible.
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
      <Button type="submit" className="w-full md:w-2/5">
        Submit
      </Button>
    </form>
  )
}
