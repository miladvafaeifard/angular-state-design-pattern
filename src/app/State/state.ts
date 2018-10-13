export interface State<T> {
  handle(context: T);
  status();
}

export abstract class AbstractState {
  abstract state;
  abstract get State();
  abstract set State(state: State<any>);
  abstract getStatus();
}
