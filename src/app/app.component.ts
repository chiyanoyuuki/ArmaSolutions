import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  num = 0;
  imgInterval:any;
  currentIndex = 0;
  previousIndex = 0;
  lg = "en";

  data:any = [
    {
      icone: "💼",
      fr: {
        
        nom: "Solutions pour entreprises",
        content: "Chez SwissKey Solutions, nous aidons les entreprises à gagner du temps et à améliorer leur productivité grâce à des outils digitaux sur mesure. Automatisez vos tâches répétitives, centralisez vos données, optimisez vos processus internes et facilitez la collaboration entre vos équipes. Chaque solution est conçue pour s’adapter à votre activité, quel que soit votre secteur. Nous créons des interfaces intuitives, performantes et sécurisées qui transforment votre quotidien professionnel."
      },
      en: {
        nom: "Solutions for Businesses",
        content: "At SwissKey Solutions, we help businesses save time and boost productivity through tailor-made digital tools. Automate repetitive tasks, centralize your data, streamline internal processes, and enhance team collaboration. Each solution is custom-built to fit your industry and workflow. We design intuitive, high-performance, and secure interfaces that transform your day-to-day operations."
      },
      imgs: ["0","1","2","3","4"]
    },
    {
      icone: "🌐",
      fr: {
        nom: "Développement de sites web",
        content: "Votre présence en ligne mérite d’être à la hauteur de vos ambitions. Nous concevons des sites web modernes, rapides et responsive, pensés pour valoriser votre image, générer des contacts ou vendre vos produits. Vitrine, e-commerce, landing pages ou portails complexes : nous développons des solutions web sur mesure, alliant design élégant et performances techniques optimales. Nous vous accompagnons de la maquette à la mise en ligne, avec un vrai souci du détail."
      },
      en: {
        nom: "Website Development",
        content: "Your online presence should reflect your ambition. We create modern, fast, and responsive websites designed to showcase your brand, attract leads, or sell your products. From showcase sites to e-commerce, landing pages, or complex platforms, we deliver custom web solutions that combine elegant design with top-notch performance. From wireframing to launch, we support you every step of the way with meticulous attention to detail."
      },
      imgs: ["0","1","2","3"]
    },
    {
      icone: "📱",
      fr: {
        nom: "Applications",
        content: "Faites entrer votre projet dans la poche de vos utilisateurs. SwissKey Solutions développe des applications mobiles et logiciels fluides et intuitives. Que ce soit pour un usage professionnel, commercial ou ludique, nous transformons vos idées en applications puissantes, fiables et évolutives. De l’UX/UI à la publication, nous gérons l’ensemble du cycle de développement pour une application qui vous ressemble et performe."
      },
      en: {
        nom: "Applications",
        content: "Put your project right into your users’ hands. SwissKey Solutions develops smooth, intuitive mobile and desktop applications. Whether for business, commercial, or entertainment purposes, we turn your ideas into powerful, reliable, and scalable apps. From UX/UI design to deployment, we handle the entire development cycle to deliver an app that fits your vision and performs exceptionally."
      },
      imgs: ["0","1","2","3"]
    },
    {
      icone: "📋",
      fr: {
        nom: "En détail",
        content: [
          {
            nom: "🗓️ Outil de Gestion de Planning & Suivi du Chiffre d’Affaires",
            desc: "Cet outil sur mesure permet de gérer efficacement son planning quotidien tout en suivant l’évolution de son chiffre d’affaires. Grâce aux données enregistrées jour par jour, il offre une vue claire des revenus générés par mois ou par année. Idéal pour les indépendants ou petites structures souhaitant gagner en visibilité sur leur activité, optimiser leur temps et prendre des décisions éclairées."
          },
          {
            nom: "🧾 Outil de Création de Devis Personnalisés",
            desc: "Cet outil permet de générer des devis professionnels et personnalisés en quelques clics, avec un format adapté à l’image de l’utilisateur. Connecté à l’outil de planning, il peut préremplir certaines données automatiquement. Les devis peuvent être exportés en PDF ou en JPG, prêts à être envoyés ou imprimés. Idéal pour gagner du temps tout en gardant une présentation soignée et cohérente."
          },
          {
            nom: "🧾 Outil de Facturation Connecté & Automatisé",
            desc: "Cet outil facilite la création rapide de factures professionnelles, en s’appuyant sur les données des devis ou du planning. Il assure une cohérence des informations, calcule automatiquement les totaux, et permet l’export en PDF ou JPG. Grâce à son intégration avec les autres outils, il devient un véritable assistant administratif, réduisant les erreurs et gagnant un temps précieux."
          },
          {
            nom: "📄 Outil de Création de Documents PDF/JPG Personnalisés",
            desc: "Cet outil permet de générer des documents PDF ou JPG entièrement personnalisés, à partir de modèles adaptés à l’activité de l’utilisateur. Que ce soit pour des attestations, des comptes rendus, des fiches client ou tout autre document professionnel, il offre une mise en page maîtrisée et une génération en un clic. Compatible avec les autres outils (planning, devis, factures), il garantit cohérence et gain de temps."
          }
        ]
      },
      en: {
        nom: "In detail",
        content: [
          {
            nom: "🗓️ Schedule Management & Revenue Tracking Tool",
            desc: "This custom-built tool helps manage daily schedules while tracking revenue over time. By recording day-to-day activity, it provides a clear overview of earnings by month or by year. Perfect for freelancers or small businesses looking to gain visibility on their performance, optimize their time, and make informed decisions."
          },
          {
            nom: "🧾 Custom Quote Creation Tool",
            desc: "This tool allows users to quickly create professional, customized quotes with a format tailored to their brand. Linked to the scheduling tool, it can automatically prefill data for faster entry. Quotes can be exported as PDF or JPG, ready to send or print. Perfect for saving time while ensuring a polished, consistent presentation."
          },
          {
            nom: "🧾 Connected & Automated Invoicing Tool",
            desc: "This tool makes it easy to generate professional invoices quickly, using data from quotes or the scheduling system. It ensures consistent information, automatically calculates totals, and supports PDF or JPG export. Seamlessly integrated with your other tools, it becomes a powerful administrative assistant, helping reduce errors and save valuable time."
          },
          {
            nom: "📄 Custom PDF/JPG Document Generator",
            desc: "This tool lets users generate fully customized PDF or JPG documents from templates tailored to their business needs. Whether it’s for certificates, reports, client summaries, or other professional documents, it offers precise layout control and one-click generation. Compatible with the other tools (scheduling, quotes, invoices), it ensures consistency and time savings."
          }
        ]
      }
    },
    {
      icone: "👨‍💼",
      fr: {
        nom: "Qui suis-je",
        content: "Je suis Charles Poure, développeur indépendant passionné, avec près de 10 ans d'expérience dans la création de solutions web, logicielles et mobiles sur mesure. Spécialisé dans l’automatisation des tâches administratives, j’aide les TPE, PME et indépendants à gagner un temps précieux en concevant des outils simples, efficaces et adaptés à leurs besoins. De la facturation à la gestion d’agenda, j’ai développé des applications concrètes qui optimisent le quotidien des professionnels. Mon approche à distance, centrée sur l’écoute et l’agilité, me permet de livrer rapidement des solutions performantes qui transforment votre organisation."
      },
      en: {
        nom: "About me",
        content: "I'm Charles Poure, a passionate freelance developer with nearly 10 years of experience in building custom web, software, and mobile solutions. I specialize in automating administrative tasks to help small businesses, freelancers, and entrepreneurs save time and focus on what truly matters. From invoicing and quote creation to smart scheduling tools, I’ve developed practical applications that streamline day-to-day operations. Working remotely with a flexible and collaborative approach, I deliver efficient, tailored solutions that make a real difference."
      },
      imgs: ["0"]
    }
  ]

  mobileThreshold = 700;
  mobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let innerHeight = event.target.innerHeight;
    let innerWidth = event.target.innerWidth;

    if (innerHeight > innerWidth && innerWidth < this.mobileThreshold){this.mobile = true;}
    else {this.mobile = false;}
  }


  ngOnInit() {

    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;

    if (innerHeight > innerWidth && innerWidth < this.mobileThreshold)this.mobile = true;
    else this.mobile = false;

    this.initAnimations();
    this.clickMenu(0);
  }

  clickMenu(i:any)
  {
    if(this.selectedMenu==i)return;
    this.img=0;
    this.selectedMenu=i;
    
    clearInterval(this.imgInterval);
    this.img = 0;
    this.previousIndex = 0;
    this.currentIndex = 1;
    if(this.selectedMenu<3)
    {
      this.imgInterval = setInterval(() => {
        this.previousIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex + 1) % this.data[this.selectedMenu].imgs.length;
      }, 3000);
    }
    else{this.previousIndex = this.previousIndex = this.data[this.selectedMenu][this.lg].content.length-1;this.currentIndex = 0;}
  }

  go(nb:any)
  {
    if(nb==1)
    {
      this.previousIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex + 1) % this.data[this.selectedMenu][this.lg].content.length;
    }
    else
    {
      this.currentIndex = this.previousIndex;
      this.previousIndex = this.previousIndex - 1;
      if(this.previousIndex<0)this.previousIndex = this.data[this.selectedMenu][this.lg].content.length-1;
    }
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

  sendMail()
  {
      const to = "swisskeysolutions.contact@gmail.com";
      const subject = "Contact from website";
      const body = encodeURIComponent("Name : \r\n\r\nMessage : ");
      
      const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
  }

  isString(content: any)
  {
    return typeof content === 'string';
  }
}
