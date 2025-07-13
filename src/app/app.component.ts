import { CommonModule } from '@angular/common';
import { Component, HostListener, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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

    this.intervalId = setInterval(() => {
      this.moved = !this.moved; // toggle gauche/droite
    }, 3000); // toutes les 3 secondes, change de position
  }

  openSiteCloe()
  {
    window.open('https://www.cloechaudronbeauty.com/', '_blank');
  }

  clickMenu(i:any){
    this.menuClicked = i;
    window.scrollTo(0, 0);
  }
}
