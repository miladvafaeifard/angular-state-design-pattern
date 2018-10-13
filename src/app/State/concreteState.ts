import { State, AbstractState } from './state';
import { SWITCH } from './../components/light/constant';

export class On implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new Off();
    }

    public status() {
        return SWITCH.ON;
    }
}

export class Off implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new On();
    }

    public status() {
        return SWITCH.OFF;
    }
}
