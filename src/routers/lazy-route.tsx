import React from "react"
import { Suspense } from "react"
import { useLocation, useOutletContext } from 'react-router-dom'

interface LzyRouteProps {
  children: React.ReactNode
  title?: string
  options?: ObjectType
}

const LazyRoute: React.FC<LzyRouteProps> = props => {
  const [routeProps, setRouteProps] = useOutletContext<any>()
  const [loding, setLoding] = useState(true)
  const { state = {} } = useLocation() as {
    state: {} | null
  }

  const title = useMemo(() => {
    if (!props.title) return ''
    return encodeURIComponent(props.title)
  }, [props.title])

  const options: ObjectType = useMemo(() => {
    if (!props.options)
      return {
        ...state,
      }
    return Object.assign({}, state, props.options)
  }, [props.options])

  useEffect(() => {
    if (options) {
      setRouteProps({
        ...options,
        title,
      })
    }
    // 页面title修改
    if (title) {
      document.title = decodeURIComponent(title)
    }
    
    setLoding(false)
  }, [options, title])

  const getChildren = () => {
    return React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, { ...options,routeProps, setRouteProps })
    })
  }
  
  return (
    <Suspense
      fallback={
        <>
          loading...
        </>
      }
    >
      {!loding && getChildren()}
    </Suspense>
  )
}
export default LazyRoute