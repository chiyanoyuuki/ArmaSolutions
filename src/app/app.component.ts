import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  showIntro = true;
  panelsOpened = false;

  animations = ['animate-rotate', 'animate-zoom', 'animate-flip'];
  currentAnimation = '';

  ngOnInit() {
    setTimeout(() => {
        this.panelsOpened = true;
      }, 2500);

    setInterval(() => {
      // Choisir une animation aléatoire différente de la précédente
      let next;
      do {
        next = this.animations[Math.floor(Math.random() * this.animations.length)];
      } while (next === this.currentAnimation);

      this.currentAnimation = '';
      
      // Re-forcer la classe pour que l'animation redémarre
      setTimeout(() => {
        this.currentAnimation = next;
      }, 50); // délai pour que le DOM détecte le retrait/ajout
    }, 5000);
  }
}
