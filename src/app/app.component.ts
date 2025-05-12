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

  selectedMenu = -1;
  img = 0;
  imgInterval:any;

  data:any = [
    {
      fr: {
        nom: "💼 Solutions pour entreprises",
        content: "Chez SwissKey Solutions, nous aidons les entreprises à gagner du temps et à améliorer leur productivité grâce à des outils digitaux sur mesure. Automatisez vos tâches répétitives, centralisez vos données, optimisez vos processus internes et facilitez la collaboration entre vos équipes. Chaque solution est conçue pour s’adapter à votre activité, quel que soit votre secteur. Nous créons des interfaces intuitives, performantes et sécurisées qui transforment votre quotidien professionnel."
      },
      en: {
        nom: "💼 Solutions for Businesses",
        content: "At SwissKey Solutions, we help businesses save time and boost productivity through tailor-made digital tools. Automate repetitive tasks, centralize your data, streamline internal processes, and enhance team collaboration. Each solution is custom-built to fit your industry and workflow. We design intuitive, high-performance, and secure interfaces that transform your day-to-day operations."
      },
      imgs: ["0","1","2"]
    },
    {
      fr: {
        nom: "🌐 Développement de sites web",
        content: "Votre présence en ligne mérite d’être à la hauteur de vos ambitions. Nous concevons des sites web modernes, rapides et responsive, pensés pour valoriser votre image, générer des contacts ou vendre vos produits. Vitrine, e-commerce, landing pages ou portails complexes : nous développons des solutions web sur mesure, alliant design élégant et performances techniques optimales. Nous vous accompagnons de la maquette à la mise en ligne, avec un vrai souci du détail."
      },
      en: {
        nom: "🌐 Website Development",
        content: "Your online presence should reflect your ambition. We create modern, fast, and responsive websites designed to showcase your brand, attract leads, or sell your products. From showcase sites to e-commerce, landing pages, or complex platforms, we deliver custom web solutions that combine elegant design with top-notch performance. From wireframing to launch, we support you every step of the way with meticulous attention to detail."
      },
      imgs: ["0","1","2","3"]
    },
    {
      fr: {
        nom: "📱 Applications",
        content: "Faites entrer votre projet dans la poche de vos utilisateurs. SwissKey Solutions développe des applications mobiles et pc fluides et intuitives. Que ce soit pour un usage professionnel, commercial ou ludique, nous transformons vos idées en applications puissantes, fiables et évolutives. De l’UX/UI à la publication, nous gérons l’ensemble du cycle de développement pour une application qui vous ressemble et performe."
      },
      en: {
        nom: "📱 Applications",
        content: "Put your project right into your users’ hands. SwissKey Solutions develops smooth, intuitive mobile and desktop applications. Whether for business, commercial, or entertainment purposes, we turn your ideas into powerful, reliable, and scalable apps. From UX/UI design to deployment, we handle the entire development cycle to deliver an app that fits your vision and performs exceptionally."
      },
      imgs: ["0","1","2","3"]
    }
  ]


  ngOnInit() {
    this.initAnimations();
    this.clickMenu(0);
  }

  clickMenu(i:any)
  {
    if(this.selectedMenu==i)return;
    this.img=0;
    this.selectedMenu=i;
    
    clearInterval(this.imgInterval);
    this.imgInterval = setInterval(()=>{if(this.data[this.selectedMenu].imgs.length>this.img+1)this.img=this.img+1;else this.img=0;},1000);
  }

  initAnimations()
  {
    setTimeout(() => {
        this.panelsOpened = true;
        setTimeout(() => {
          this.showIntro = false;
        }, 5000);
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
