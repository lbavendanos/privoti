import { Sizes } from 'lib/types/size'

interface ProductSizeFormControlFallbackProps {
  sizes: Sizes
}

export default function ProductSizeFormControlFallback({
  sizes,
  ...props
}: ProductSizeFormControlFallbackProps) {
  const options = sizes.map(({ id, short }) => ({ value: id!, name: short! }))

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
