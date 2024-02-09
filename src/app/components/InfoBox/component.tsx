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
          <p>{client}</p>
        </CreditWrapper>
        <DateWrapper>{date}</DateWrapper>
        <Link href={`/${slug}`}>
          <Cta aria-label="Have a look">{cta}</Cta>
        </Link>
      </InnerWrapper>
    </Wrapper>
  )
}
