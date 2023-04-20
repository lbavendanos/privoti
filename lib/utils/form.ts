import {
  Control,
  FormState,
  FieldValues,
  UseFormProps,
  UseFormWatch,
  UseFormReset,
  UseFormTrigger,
  UseFormSetError,
  UseFormSetValue,
  UseFormRegister,
  UseFormSetFocus,
  UseFormGetValues,
  UseFormUnregister,
  UseFormResetField,
  UseFormClearErrors,
  UseFormHandleSubmit,
  UseFormGetFieldState,
  useForm as useBaseForm,
} from 'react-hook-form'
export { Controller as FormController } from 'react-hook-form'

export type UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = {
  watch: UseFormWatch<TFieldValues>
  getValues: UseFormGetValues<TFieldValues>
  getFieldState: UseFormGetFieldState<TFieldValues>
  setError: UseFormSetError<TFieldValues>
  clearErrors: UseFormClearErrors<TFieldValues>
  setFormValue: UseFormSetValue<TFieldValues>
  trigger: UseFormTrigger<TFieldValues>
  formState: FormState<TFieldValues>
  resetField: UseFormResetField<TFieldValues>
  resetForm: UseFormReset<TFieldValues>
  handleSubmit: UseFormHandleSubmit<TFieldValues>
  unregister: UseFormUnregister<TFieldValues>
  formControl: Control<TFieldValues, TContext>
  register: UseFormRegister<TFieldValues>
  setFocus: UseFormSetFocus<TFieldValues>
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(
  props?: UseFormProps<TFieldValues, TContext>
): UseFormReturn<TFieldValues, TContext> {
  const {
    control: formControl,
    setValue: setFormValue,
    reset: resetForm,
    ...extra
  } = useBaseForm<TFieldValues, TContext>(props)

  return { formControl, setFormValue, resetForm, ...extra }
}
