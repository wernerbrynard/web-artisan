// src/data/work.js
// The client showcase. The home page reads this list, so adding a client means
// adding one entry here and one screenshot in public/images/work.
// Every client gets the same card: order is the only difference.

export const clients = [
  {
    slug: 'mira',
    name: 'Mira',
    kind: 'Motorcycle gear',
    built: 'A product showcase for custom off-road riding gear, with a sizing guide and a clear way to order.',
    url: 'https://miragearco.com/',
    image: '/images/work/mira.jpg',
  },
  {
    slug: 'onelifetours',
    name: 'One Life Tours',
    kind: 'Guided motorcycle tours',
    built: 'A site for a 15-day guided tour of the Western Cape. It takes riders through the route day by day and sends enquiries straight to the team.',
    url: 'https://onelifetours.co.za/',
    image: '/images/work/onelifetours.jpg',
  },
  {
    slug: 'mynhardt',
    name: 'Mynhardt',
    kind: 'Chef and events venue',
    built: "A site for chef Mynhardt Joubert's venue at the KWV Cathedral Cellar, covering everything from weddings to corporate functions.",
    url: 'https://www.mynhardt.co.za/',
    image: '/images/work/mynhardt.jpg',
  },
  {
    slug: 'xplr',
    name: 'XPLR South Africa',
    kind: 'Adventure riding series',
    built: 'The home of a travel documentary series, built around video for a growing community of adventure riders.',
    url: 'https://xplrsouthafrica.co.za/',
    image: '/images/work/xplr.jpg',
  },
  {
    slug: 'edeconsulting',
    name: 'EDE Consulting Engineers',
    kind: 'Building services engineering',
    built: 'A site for a firm of building services and fire engineering consultants, setting out their services, industries and process.',
    url: 'https://www.edeconsulting.co.za/',
    image: '/images/work/edeconsulting.jpg',
  },
  {
    slug: 'sarahkashyap',
    name: 'Sarah Kashyap',
    kind: 'Rally racer',
    built: "A personal site for India's leading female rally racer, made for sponsors and the media.",
    url: 'https://sarahkashyap.com/',
    image: '/images/work/sarahkashyap.jpg',
  },
  {
    slug: 'lawnandladder',
    name: 'Lawn & Ladder',
    kind: 'Property maintenance',
    built: 'A site for a Pretoria property maintenance service, built around a quick quote request.',
    url: 'https://www.lawnandladder.co.za/',
    image: '/images/work/lawnandladder.jpg',
  },
];

// Our own product. Shown in its own section, not as a client card.
export const rideout = {
  name: 'Rideout',
  url: 'https://rideout.co.za/',
  image: '/images/work/rideout.jpg',
};

// The year the studio started. Shown on the About page and in the footer.
export const studio = {
  since: 2025,
};
