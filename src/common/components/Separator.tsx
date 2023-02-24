import Container from './Container'

interface SeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function Separator(props: SeparatorProps) {
  return (
    <Container {...props}>
      <hr className="block border-t border-zinc-800" />
    </Container>
  )
}
