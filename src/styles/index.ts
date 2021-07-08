import { css, SerializedStyles } from '@emotion/react'
import config from './config'
import mixin from './mixin'
import calc from './calc'
import colors from './colors'
import easing from './easing'

export const sp = (style: SerializedStyles): SerializedStyles => {
  return css`
    @media screen and (max-width: ${config.sp.breakpoint - 1}px) {
      ${style}
    }
  `
}

export const tab = (style: SerializedStyles): SerializedStyles => {
  return css`
    @media screen and (min-width: ${config.sp
        .breakpoint}px) and (max-width: ${config.tab.breakpoint}px) {
      ${style}
    }
  `
}

export const pc = (style: SerializedStyles): SerializedStyles => {
  return css`
    @media screen and (min-width: ${config.sp.breakpoint}px) {
      ${style}
    }
  `
}

export default {
  sp,
  tab,
  pc,
  config,
  mixin,
  colors,
  easing,
  vwsp: calc.vwsp,
  vwpc: calc.vwpc,
}
