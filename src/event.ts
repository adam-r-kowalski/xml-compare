import { State } from './state';

export interface Event {
    update: (state: State) => State;
}

export class Compare implements Event {
    update(state: State): State {
        console.log("compare event");
        return state;
    }
}

export class ChangeXML implements Event {
    constructor(private title: string, private content: string) {}

    update(state: State): State {
        state.documents[this.title] = this.content;
        return state;
    }
}
