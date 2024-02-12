import { HoverTapFocusVariants } from '../../lib/animations'
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
  toggleProjectOpen,
  projectOpen,
}: TInfoBoxProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <CreditWrapper>
          <h3>{artist}</h3>
          <p>{client}</p>
        </CreditWrapper>
        <DateWrapper>{date}</DateWrapper>
        <Cta
          whileHover={HoverTapFocusVariants.hover}
          whileTap={HoverTapFocusVariants.tap}
          whileFocus={HoverTapFocusVariants.focus}
          aria-label="Have a look"
          onClick={toggleProjectOpen}
        >
          {projectOpen ? 'Close' : 'Have a look'}
        </Cta>
      </InnerWrapper>
    </Wrapper>
  )
}
