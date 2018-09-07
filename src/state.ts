export enum Route {
    Documents
}

export interface State {
    documents: {[name: string]: string};
    route: Route;
}

export const initialState: State = {
    documents: {
        From: '',
        To: ''
    },
    route: Route.Documents
}
