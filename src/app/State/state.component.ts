export interface State {
  handle(context: Context);
  status();
}

export class On implements State {
  public handle(context: Context){
    console.log(`light is on now.`);
    context.state = new Off();
  }

  public status(){
    return 'ON';
  }
}

export class Off implements State {
  public handle(context: Context){
    console.log(`light is off now.`);
    context.state = new On();
  }

  public status(){
    return 'OFF';
  }
}

export class Context {
  constructor(public state: State){}
  
  get State(): State {
    return this.state;
  }

  set State(state: State) {
    this.state = state;
  }

  public getStatus(){
    return this.state.status();
  }

  public request(): void{
    return this.state.handle(this);
  }
}