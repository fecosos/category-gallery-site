import { CATEGORY_CONCESIONARIAS } from '../constants';
import { CATEGORY_VIVIENDAS } from '../constants';
import { CATEGORY_BARES } from '../constants';

const nbsp = '\u00a0';

export const GALLERY_ITEMS_INITIAL_STATE = {
  0: {
    title: 'TITLE 0',
    category: CATEGORY_CONCESIONARIAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-0',
    year: 2013,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=zero',
      'https://dummyimage.com/375x333.jpg?text=zero'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  1: {
    title: 'TITLE 1',
    category: CATEGORY_VIVIENDAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-1',
    year: 2022,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=one',
      'https://dummyimage.com/330x375.jpg?text=one'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  2: {
    title: 'TITLE 2',
    category: CATEGORY_BARES,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-2',
    year: 1322,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-2',
      'https://dummyimage.com/330x375.jpg?text=img-2'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  3: {
    title: 'TITLE 3',
    category: CATEGORY_CONCESIONARIAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-3',
    year: 2014,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-3',
      'https://dummyimage.com/330x375.jpg?text=img-3'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  }
  , 4: {
    title: 'TITLE 4',
    category: CATEGORY_VIVIENDAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-4',
    year: 1933,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-4',
      'https://dummyimage.com/330x375.jpg?text=img-4'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  5: {
    title: 'TITLE 5',
    category: CATEGORY_BARES,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-5',
    year: 1999,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-5',
      'https://dummyimage.com/330x375.jpg?text=img-5'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  6: {
    title: 'TITLE 6',
    category: CATEGORY_VIVIENDAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-6',
    year: 2001,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-6',
      'https://dummyimage.com/330x375.jpg?text=img-6'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  7: {
    title: 'TITLE 7',
    category: CATEGORY_CONCESIONARIAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-7',
    year: 2312,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-7',
      'https://dummyimage.com/330x375.jpg?text=img-7'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  8: {
    title: 'TITLE 8',
    category: CATEGORY_VIVIENDAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-8',
    year: 2013,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-8',
      'https://dummyimage.com/330x375.jpg?text=img-8'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  9: {
    title: 'TITLE 9',
    category: CATEGORY_BARES,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-9',
    year: 2018,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-9',
      'https://dummyimage.com/330x375.jpg?text=img-9'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  },
  10: {
    title: 'TITLE 10',
    category: CATEGORY_CONCESIONARIAS,
    introImage: 'https://dummyimage.com/330x375.jpg?text=img-10',
    year: 1942,
    galleryImages: [
      'https://dummyimage.com/330x375.jpg?text=img-10',
      'https://dummyimage.com/330x375.jpg?text=img-10'
    ],
    description: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel.',
      nbsp,
      'Project and construction',
      'Lorem, ipsum.',
      'Lorem, ipsum.',
      nbsp,
      'Development',
      'John Doe',
      'Jane Dafoe'
    ]
  }
}