import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable test = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
