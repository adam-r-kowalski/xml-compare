import { Theme, createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

export enum Route {
    Documents,
    Datacodes
}

export interface State {
    documents: {[name: string]: string};
    datacodes: {[name: string]: Set<string>};
    uniqueDatacodes: {[name: string]: Set<string>};
    route: Route;
    theme: Theme;
}

export const initialState: State = {
    documents: {
        From: '',
        To: ''
    },
    datacodes: {},
    uniqueDatacodes: {},
    route: Route.Documents,
    theme: createMuiTheme({
        palette: {
            primary: colors.lightGreen,
            secondary: colors.orange
        }
    })
}
