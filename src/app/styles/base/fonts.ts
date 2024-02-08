import { css } from 'styled-components'
import { DEVICE } from './breakpoints'

export const TUNGSTEN = {
  style: css`
    font-family: 'Tungsten';
    font-weight: 400;
    font-size: 100px;
    line-height: 80px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--c-white);
    text-align: center;

    ${DEVICE.tablet} {
      font-size: 220px;
      line-height: 176px;
    }
  `,
}

export const HELVETICA = {
  style: css`
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.08em;
    line-height: 12px;
    text-transform: uppercase;
  `,
}
