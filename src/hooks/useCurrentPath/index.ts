import { matchRoutes, useLocation } from "react-router-dom"
import {NavigationRoutes} from "../../components/common/NavigationRoutes/NavigationRoutes.types";
const routes = Object.values(NavigationRoutes).map(path => {
    return {path}
})

const useCurrentPath = () => {
    const location = useLocation()
    const resultMatch = matchRoutes(routes, location)

    if (resultMatch !== null) {
        const [{route}] = resultMatch
        return route.path
    }

}
export default useCurrentPath