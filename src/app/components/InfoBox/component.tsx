import { HoverTapFocusVariants } from '@/app/lib/animations'
import Link from 'next/link'
import {
  CreditWrapper,
  Cta,
  DateWrapper,
  InnerWrapper,
  Wrapper,
} from './styles'
import { TInfoBoxProps } from './types'

export default function InfoBox({ date, client, artist, slug }: TInfoBoxProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <CreditWrapper>
          <h3>{artist}</h3>
          <p>{client}</p>
        </CreditWrapper>
        <DateWrapper>{date}</DateWrapper>
        <Link href={`/${slug}`}>
          <Cta
            whileHover={HoverTapFocusVariants.hover}
            whileTap={HoverTapFocusVariants.tap}
            whileFocus={HoverTapFocusVariants.focus}
            aria-label="Have a look"
          >
            Have a look
          </Cta>
        </Link>
      </InnerWrapper>
    </Wrapper>
  )
}
