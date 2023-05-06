import { cn } from 'lib/utils/helpers'
import Container from '@/common/components/Container'
import Heading from '@/common/components/Heading'

interface CollectionModuleProps extends React.ComponentPropsWithoutRef<'div'> {
  slug: string
}

export default function CollectionModule({
  slug,
  className,
  ...props
}: CollectionModuleProps) {
  return (
    <Container {...props} className={cn('my-6 md:my-10', className)}>
      <Heading as="h1">Coleccione de {slug}</Heading>
    </Container>
  )
}
