import { Children, ReactNode, cloneElement, isValidElement } from "react"

interface FlexViewProps {
  ailgn: string
  justify: string
  wrap: string
  direction: string
}
const FlexView = styled.div<FlexViewProps>`
  display: flex;
  align-items: ${({ ailgn }) => ailgn};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction};
`
type Ailgn = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit'
type Justify = Ailgn
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit'
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
interface Props {
  children?: React.ReactNode
  ailgn?: Ailgn
  justify?: Justify
  wrap?: Wrap
  direction?: FlexDirection
  className?: string
  iref?: any
  onClick?: () => void
  style?: React.CSSProperties
}
const getDecoratedChildren = (props: {
  children?: React.ReactNode
}): string | number | true | Iterable<ReactNode> | null => {
  if (!props.children) return null
  if (!isValidElement(props.children)) return props.children as Iterable<ReactNode>
  return Children.map(props.children, (child: any) => cloneElement(child))
}

const getJsx = (isRow: boolean): React.FC<Props> => {
  return props => {
    const {
      ailgn = 'center',
      justify = 'flex-start',
      direction = isRow ? 'row' : 'column',
      wrap = 'nowrap',
      className = '',
      iref = null,
      onClick = undefined,
      style = {},
    } = props
    const propsData = {
      ailgn,
      justify,
      wrap,
      className,
      direction,
      style,
      onClick,
      ref: iref,
    }
    return <FlexView {...propsData}>{getDecoratedChildren(props)}</FlexView>
  }
}

export const Row = getJsx(true)
export const Column = getJsx(false)
