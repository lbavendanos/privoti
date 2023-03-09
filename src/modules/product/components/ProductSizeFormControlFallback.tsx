import { Sizes } from 'lib/types/size'

interface ProductSizeFormControlFallbackProps {
  sizes: Sizes
}

export default function ProductSizeFormControlFallback({
  sizes,
  ...props
}: ProductSizeFormControlFallbackProps) {
  const options = sizes.map(({ id, name }) => ({ value: id!, name: name! }))

  return (
    <div {...props} className="flex flex-nowrap gap-2">
      {options.map((option) => (
        <div key={option.value} className="btn btn-md w-20 pointer-events-none">
          {option.name === 'Extra small' && 'XS'}
          {option.name === 'Small' && 'S'}
          {option.name === 'Medium' && 'M'}
          {option.name === 'Large' && 'L'}
          {option.name === 'Extra large' && 'XL'}
        </div>
      ))}
    </div>
  )
}
