import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.page.html',
  styleUrls: ['./especialistas.page.scss'],
})
export class EspecialistasPage implements OnInit {

  private especialistas = [
    {
      id:'1',
      nombre:'Patrick Shepard',
      url:"https://i.pinimg.com/originals/39/76/49/3976494e8c4b8a5e7f98925a94bf1483.jpg",
      especialidad: 'Doctor cirujano',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'2',
      nombre:'Meredith Grey',
      url:"https://upload.wikimedia.org/wikipedia/en/5/53/Greys-Anatomy-Season-7-Promo-9.jpg",
      especialidad: 'Doctor cirujano',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'3',
      nombre:'Gregory House',
      url:"https://joacosoft.wordpress.com/files/2009/07/dr-house.jpg",
      especialidad: 'Diagnostico medico',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'4',
      nombre:'Max Goodwin',
      url:"https://es.web.img2.acsta.net/c_162_216/pictures/19/06/22/13/38/1944794.jpg",
      especialidad: 'Director medico',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'5',
      nombre:'Ignatius Froome',
      url:"https://bellomag.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-14-at-3.44.52-PM.png",
      especialidad: 'Psiquiatra',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'6',
      nombre:'Lauren Bloom',
      url:"https://elcomercio.pe/resizer/9mb2qJ2hyeftMPwcj2GoXIxl_pM=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TVLGP36HVRE37JE2U3IJOQNCT4.jpg",
      especialidad: 'Urgencia',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'7',
      nombre:'Floyd Reynolds',
      url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-amsterdam-floyd-reynolds-jocko-sims-1614792240.jpg?crop=0.670xw:1.00xh;0.0340xw,0&resize=480:*",
      especialidad: 'Cirujano cardiologo',
      informacion: ["comentarios","comentario 2"]

    },
    {
      id:'8',
      nombre:'Shaun Murphy',
      url:"https://redgol.cl/__export/1659645791786/sites/redgol/img/2022/08/04/thegooddoctr_crop1645628864083_crop1659645791100.png_1159711837.png",
      especialidad: 'Diagnostico medico',
      informacion: ["comentarios","comentario 2"]

    }
    

  
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.especialistas)
  }

}
