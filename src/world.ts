export default class World {
  message: string

  constructor(message: string) {
    this.message = message
  }








  public sayHallo(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerHTML = this.message







      
    }
  }
}
