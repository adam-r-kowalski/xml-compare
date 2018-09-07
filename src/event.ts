import { State, Route } from './state';

export interface Event {
    update: (state: State) => State;
}

const difference = <T>(a: Set<T>, b: Set<T>): Set<T> =>
    new Set([...a].filter(x => !b.has(x)));


const unique = (sets: {[name: string]: Set<string>}): {[name: string]: Set<string>} => {
    let result: {[name: string]: Set<string>} = {};
    let [from, to] = Object.keys(sets);
    result[from] = difference(sets[from], sets[to]);
    result[to] = difference(sets[to], sets[from]);
    return result;
}

export class ShowDatacodes implements Event {
    update(state: State): State {
        Object.keys(state.documents).forEach(document => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(state.documents[document], 'text/xml');
            const nodes = [...xmlDoc.querySelectorAll('data-desc-ref').values()];

            state.datacodes[document] = new Set<string>();
            nodes.forEach(node => 
                state.datacodes[document].add(node.getAttribute('datacode')));
        });

        return { 
            ...state,
            route: Route.Datacodes, 
            uniqueDatacodes: unique(state.datacodes) 
        };
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
