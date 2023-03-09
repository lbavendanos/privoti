import { Variants } from 'lib/types/variant'

interface ProductSizeFormControlFallbackProps {
  variants: Variants
}

export default function ProductSizeFormControlFallback({
  variants,
  ...props
}: ProductSizeFormControlFallbackProps) {
  const options = variants.map(({ id, short }) => ({
    value: id!,
    name: short!,
  }))

  return (
    <div {...props} className="flex flex-nowrap gap-2">
      {options.map((option) => (
        <div key={option.value} className="btn btn-md w-20 pointer-events-none">
          {option.name}
        </div>
      ))}
    </div>
  )
}
