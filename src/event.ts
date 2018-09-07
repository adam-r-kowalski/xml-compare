import { State, Route } from './state';

export interface Event {
    update: (state: State) => State;
}

export class ShowDatacodes implements Event {
    update(state: State): State {
        Object.keys(state.documents).forEach(document => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(state.documents[document], 'text/xml');
            const nodes = [...xmlDoc.querySelectorAll('data-desc-ref').values()];
            state.datacodes[document] = nodes.map(node => node.getAttribute('datacode'));
        });
        return { ...state, route: Route.Datacodes };
    }
}

export class ShowDocuments implements Event {
    update = (state: State): State =>
        ({ ...state, route: Route.Documents })
}

export class ChangeXML implements Event {
    constructor(private title: string, private content: string) {}

    update(state: State): State {
        state.documents[this.title] = this.content;
        return state;
    }
}
