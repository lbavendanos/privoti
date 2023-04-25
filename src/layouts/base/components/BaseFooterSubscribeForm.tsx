'use client'

import { useCallback, useState } from 'react'
import { useForm, FormController } from 'lib/utils/form'
import { KeyboardArrowRightIcon } from '@/common/components/Icons'
import Button from '@/common/components/Button'
import FormControl from '@/common/components/FormControl'
import FormHelperText from '@/common/components/FormHelperText'

interface BaseFooterSubscribeFormData {
  email: string
}

export default function BaseFooterSubscribeForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [hasError, setHasError] = useState(false)

  const {
    resetForm,
    formControl,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<BaseFooterSubscribeFormData>({
    defaultValues: {
      email: '',
    },
  })

  const handleValid = useCallback(
    async (data: BaseFooterSubscribeFormData) => {
      setIsLoading(true)
      setShowSuccessModal(false)
      setHasError(false)

      try {
        // await fetcher('/api/email/contact', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // })

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
      className="flex flex-col w-full space-y-1"
      onSubmit={handleSubmit(handleValid)}
    >
      <div className="flex justify-center w-full">
        <FormController
          name="email"
          control={formControl}
          rules={{ required: 'El correo electrónico es obligatorio.' }}
          render={({ field }) => (
            <FormControl
              {...field}
              id="email"
              type="email"
              className="shrink py-2 max-w-[350px] border-r-0"
              placeholder="Correo electrónico"
              autoComplete="off"
            />
          )}
        />
        <Button type="submit" disabled={isLoading}>
          <KeyboardArrowRightIcon />
        </Button>
      </div>
      {formErrors.email && (
        <FormHelperText className="text-red-500">
          {formErrors.email.message}
        </FormHelperText>
      )}
    </form>
  )
}
