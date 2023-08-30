import { BrowserRouter } from "react-router-dom"
import routes from "./routes"
import NiceModal from "@ebay/nice-modal-react"

const IRouter = BrowserRouter
const AppPage = () => {
  return useRoutes(routes)
}

const AppRoutes: React.FC<{}> = () => {
  return (
    <IRouter>
      <NiceModal.Provider>
        <AppPage />
      </NiceModal.Provider>
    </IRouter>
  )
}
export default AppRoutes