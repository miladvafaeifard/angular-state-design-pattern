import { AbstractState, State, Off } from './State';

export class LightBulb extends AbstractState {
    constructor(public state: State<LightBulb> = new Off()) {
        super();
    }

    get State(): State<LightBulb> {
        return this.state;
    }

    set State(state: State<LightBulb>) {
        this.state = state;
    }

    public getStatus() {
        return this.state.status();
    }

    public toggle(): void {
        return this.state.handle(this);
    }
}