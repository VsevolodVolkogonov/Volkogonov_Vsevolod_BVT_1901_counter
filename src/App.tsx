import {StyledProvider} from "./styles/StyledProvider";
import {NavigationRoutes} from "./components/common/NavigationRoutes/NavigationRoutes";

function App() {
  return (
      <StyledProvider>
          <NavigationRoutes/>
      </StyledProvider>
  )
}

export default App
