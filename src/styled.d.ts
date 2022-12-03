import 'styled-components';
import {ITheme} from "./styles/theme/theme.types";

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}