import React, { PropsWithChildren } from 'react'

export function Typography(props: PropsWithChildren<TypographyProps>) {
  const { children, component = 'span', ...rest } = props

  return React.createElement(component, rest, children)
}

type TypographyProps = {
  component?: keyof JSX.IntrinsicElements
  className?: string
}
