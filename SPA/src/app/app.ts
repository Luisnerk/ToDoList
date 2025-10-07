import { Component, computed, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SPA');

  color = signal<string>('azul')
  cambio = computed(() => {
    const a = this.color()
    switch(a) {
      case "green":
        return 'verdecio'
      case 'blue':
        return 'azulio'
      case 'yellow':
        return 'amarilloso'
      default:
        return 'nones'
    }
  })
  color2 = linkedSignal(() => {
    const a = this.color()
    switch(a) {
      case "green":
        return 'v'
      case 'blue':
        return 'a'
      case 'yellow':
        return 'am'
      default:
        return 'n'
    }
  })

  changeColor() {
    var colors = ['green', 'yellow', 'blue'];
    var num = Math.round(Math.random()*2)
    this.color.set(colors[num])
  }

  resetColor2() {
    this.color2.set("n")
  }
}
