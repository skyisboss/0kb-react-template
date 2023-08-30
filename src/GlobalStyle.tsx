import { Global, css } from '@emotion/react'
const GlobalStyle = () => {
  return <Global 
  styles={css`
    /* 在这里写全局样式 */
    html,
    body,
    #root {
      margin: 0;
      padding: 0;
    }
  `}
  />
}

export default GlobalStyle