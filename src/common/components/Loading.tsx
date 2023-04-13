import Paragraph, { ParagraphProps } from './Paragraph'

export interface LoadingProps extends ParagraphProps {}

export default function Loading(props: LoadingProps) {
  return (
    <Paragraph size="xs" weight="semibold" uppercase {...props}>
      Loading...
    </Paragraph>
  )
}
