const breakpointsFix = 0.02

export const size = {
  xs: 0,
  sm: 576 - breakpointsFix,
  md: 768 - breakpointsFix,
  lg: 992 - breakpointsFix,
  xl: 1200 - breakpointsFix,
  xxl: 1400 - breakpointsFix,
}

export const sizeInPX = {
  xs: `${size.xs}px`,
  sm: `${size.sm}px`,
  md: `${size.md}px`,
  lg: `${size.lg}px`,
  xl: `${size.xl}px`,
  xxl: `${size.xxl}px`,
}

export const device = {
  xs: `(min-width: ${sizeInPX.xs})`,
  sm: `(min-width: ${sizeInPX.sm})`,
  md: `(min-width: ${sizeInPX.md})`,
  lg: `(min-width: ${sizeInPX.lg})`,
  xl: `(min-width: ${sizeInPX.xl})`,
  xxl: `(min-width: ${sizeInPX.xxl})`,
}

export const media = {
  xs: `@media ${device.xs}`,
  sm: `@media ${device.sm}`,
  md: `@media ${device.md}`,
  lg: `@media ${device.lg}`,
  xl: `@media ${device.xl}`,
  xxl: `@media ${device.xxl}`,
}

export const fonts = {
  newYork: {
    small: `New York Small`,
    medium: `New York Medium`,
    extraLarge: `New York Extra Large`,
  },
  sf: {
    mono: `SF Mono`,
    proText: `SF Pro Text`,
    proDisplay: `SF Pro Display`,
  },
}
