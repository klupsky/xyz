import Link from 'next/link'
import {
  CreditWrapper,
  Cta,
  DateWrapper,
  InnerWrapper,
  Wrapper,
} from './styles'
import { TInfoBoxProps } from './types'

export default function InfoBox({
  date,
  client,
  artist,
  slug,
  cta,
}: TInfoBoxProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <CreditWrapper>
          <h3>{artist}</h3>
          <p>for {client}</p>
        </CreditWrapper>
        <DateWrapper>{date}</DateWrapper>
        <Link href={`/${slug}`}>
          <Cta>{cta}</Cta>
        </Link>
      </InnerWrapper>
    </Wrapper>
  )
}
