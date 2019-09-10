import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  usuario = [{ nombre: 'Juan Camilo Herrera Ardila',
               pass: 1234,
               estado: true
             },
             { nombre: 'Ana Maria Herrera Moreno',
               pass: 12345,
               estado: false
             }
            ];

  lugar = [
            { name: 'Barranquilla',
              // tslint:disable-next-line: max-line-length
              description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              image: 'assets/image/barranquilla.jpg',
              status: true
            },
            { name: 'Bogotá D.C.',
              // tslint:disable-next-line: max-line-length
              description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              image: 'assets/image/bogota.png',
              status: true
            },
            { name: 'Bucaramanga',
              // tslint:disable-next-line: max-line-length
              description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              image: 'assets/image/bucaramanga.png',
              status: true
            },
            { name: 'Cali',
              // tslint:disable-next-line: max-line-length
              description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              image: 'assets/image/cali.jpg',
              status: true
            },
            { name: 'Cartagena',
              // tslint:disable-next-line: max-line-length
              description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              image: 'assets/image/cartagena.jpg',
              status: true
            }
          ];

}
