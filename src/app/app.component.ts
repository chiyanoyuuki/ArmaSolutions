import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeContent', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', [animate('300ms ease-out')]),
      transition('hidden => visible', [animate('300ms ease-in')]),
    ]),
  ]
})
export class AppComponent 
{
  mobile = false;
  mobileThreshold = 700;
  littleScreenThreshold = 500;
  littleScreen = false;
  menuClicked = 0;
  moved = false;
  intervalId?: any;

  fadeState = 'hidden';

  animations = ['animate-rotate', 'animate-zoom', 'animate-flip'];
  currentAnimation = '';

  data : any = {
    menus: [
        "Accueil",
        "Nos Solutions",
        "A Propos",
        "Contact"
    ]
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let innerHeight = event.target.innerHeight;
    let innerWidth = event.target.innerWidth;

    console.log(innerHeight, innerWidth);

    if (innerHeight > innerWidth && innerWidth < this.mobileThreshold){this.mobile = true;}
    else {this.mobile = false;}

    if (innerHeight < innerWidth && innerHeight < this.littleScreenThreshold){this.littleScreen = true;}
    else {this.littleScreen = false;}
  }


  ngOnInit() {

    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;

    if (innerHeight > innerWidth && innerWidth < this.mobileThreshold)this.mobile = true;
    else this.mobile = false;

    if (innerHeight < innerWidth && innerHeight < this.littleScreenThreshold){this.littleScreen = true;}
    else {this.littleScreen = false;}    

    this.initAnimations();
  }

  initAnimations()
  {
    setInterval(() => {
      let next;
      do {
        next = this.animations[Math.floor(Math.random() * this.animations.length)];
      } while (next === this.currentAnimation);
      this.currentAnimation = '';
      setTimeout(() => {
        this.currentAnimation = next;
      }, 50);
    }, 4000);
  }

  openSiteCloe()
  {
    window.open('https://www.cloechaudronbeauty.com/', '_blank');
  }

  clickMenu(i:any){
    if (this.menuClicked === i) return;

    this.fadeState = 'visible';

    let timeo = setTimeout(() => {
      this.menuClicked = i;
      window.scrollTo(0, 0);
      this.fadeState = 'hidden';
      clearInterval(timeo);
    }, 300); // temps du fade-out
  }
}
