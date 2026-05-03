export type Language = 'DE' | 'EN';

export interface Puppy {
  id: string;
  name: string;
  birthOrder: number;
  gender: 'Male' | 'Female';
  genderDe: 'Rüde' | 'Hündin';
  barkTraits: { [key in Language]: string[] };
  birthWeight: number;
  weightAt12Weeks: number;
  story: { [key in Language]: string };
  formerName?: string;
  color: string;
}

export interface TimelineEvent {
  date: { [key in Language]: string };
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  icon: string;
}

export const PUPPIES: Puppy[] = [
  {
    id: 'eve',
    name: 'Eve',
    birthOrder: 1,
    gender: 'Female',
    genderDe: 'Hündin',
    barkTraits: {
      DE: ['Mamas Zwilling', 'Anführerin', 'Wuschel-Schwanz'],
      EN: ['Mommy\'s Twin', 'Alpha Girl', 'Tail-Wagger'],
    },
    birthWeight: 380,
    weightAt12Weeks: 11.2,
    story: {
      DE: 'Die erste im Wurf und ein echtes Ebenbild von Trinity. Sie blieb der Familie treu und ist heute die Chefin bei einer guten Freundin.',
      EN: 'The first to arrive and a total mini-Trinity. She stayed close to the pack and is now rule-breaker-in-chief with a lucky human friend.',
    },
    color: 'bg-amber-100',
  },
  {
    id: 'rory',
    name: 'Rory',
    birthOrder: 2,
    gender: 'Male',
    genderDe: 'Rüde',
    barkTraits: {
      DE: ['Zoomie Experte', 'Großer Beller', 'Muskel-Welpe'],
      EN: ['Zoomie Specialist', 'Big Barker', 'Muscle Pup'],
    },
    birthWeight: 370,
    weightAt12Weeks: 10.9,
    story: {
      DE: 'Pures Chaos in Pelz! Rory war der Meister der Mitternachts-Zoomies und immer als Erster am Napf.',
      EN: 'Total chaos in a fur coat! Rory was the master of the "midnight zoomies" and always the first to reach the food bowl.',
    },
    color: 'bg-blue-100',
  },
  {
    id: 'dotty',
    name: 'Dotty',
    birthOrder: 3,
    gender: 'Female',
    genderDe: 'Hündin',
    barkTraits: {
      DE: ['Punktnase', 'Fleckvieh Queen', 'Chefmechanikerin'],
      EN: ['Spotty Paws', 'Fleckvieh Queen', 'Chief Mechanic'],
    },
    birthWeight: 382,
    weightAt12Weeks: 10.0,
    story: {
      DE: 'Berühmt für ihre "Zwei-Augen"-Maske. Sie ist heute Werkstatt-Hündin und lässt sich von lauten Geräuschen nicht erschrecken.',
      EN: 'Famous for her "Two-Eye" mask. She\'s now a professional nap-taker at the motorcycle workshop and isn\'t scared of loud barks (tools)!',
    },
    color: 'bg-slate-100',
  },
  {
    id: 'brownie',
    name: 'Brownie',
    birthOrder: 4,
    gender: 'Male',
    genderDe: 'Rüde',
    barkTraits: {
      DE: ['Coffee 2.0', 'Zen-Meister', 'Scheitel-Chakra Fleck'],
      EN: ['Coffee 2.0', 'Zen Master', 'Crown Chakra Spot'],
    },
    birthWeight: 375,
    weightAt12Weeks: 10.2,
    story: {
      DE: 'Ganz nach dem Papa! Er hat Coffees markanten Fleck auf dem Kopf. Er ist der entspannteste Bursche im ganzen Park.',
      EN: 'A chip off the old Coffee block! He has Dad\'s special "Magic Spot" on his head. He\'s the most chill boy in the whole dog park.',
    },
    color: 'bg-orange-100',
  },
  {
    id: 'bounty',
    name: 'Bounty',
    birthOrder: 5,
    gender: 'Male',
    genderDe: 'Rüde',
    barkTraits: {
      DE: ['Piraten-Klappe', 'Nacken-Kuschler', 'Bauchkraul-Profi'],
      EN: ['Ahoy Pirate!', 'Neck-Cuddler', 'Belly-Rub Pro'],
    },
    birthWeight: 376,
    weightAt12Weeks: 10.8,
    story: {
      DE: 'Der Piratenkönig! Mit seiner coolen Augenklappe stiehlt er Herzen und dann deinen Platz auf dem Sofa für Schmuseeinheiten.',
      EN: 'The Pirate King! With his cool eye-patch, he steals hearts and then steals your spot on the sofa for a neck-cuddle session.',
    },
    color: 'bg-emerald-100',
  },
  {
    id: 'cora',
    name: 'Cora',
    formerName: 'Boa',
    birthOrder: 6,
    gender: 'Female',
    genderDe: 'Hündin',
    barkTraits: {
      DE: ['Weißer Kragen', 'Akademische Hündin', 'Park-Entdeckerin'],
      EN: ['Fancy Collar', 'Academic Pup', 'Grass Explorer'],
    },
    birthWeight: 357,
    weightAt12Weeks: 9.7,
    story: {
      DE: 'Die Schlauste der Klasse! Früher "Boa" wegen ihres weißen Kragens. Sie hat schon ein Diplom in Uni-Campus-Erkundung.',
      EN: 'The smartest girl in school! Formerly "Boa" because of her fancy white neck-fur. She already has a degree in University Campus Zoomies.',
    },
    color: 'bg-zinc-100',
  },
  {
    id: 'amor',
    name: 'Amor',
    birthOrder: 7,
    gender: 'Male',
    genderDe: 'Rüde',
    barkTraits: {
      DE: ['Herzensbrecher', 'Schnee-Fan', 'Küsschen-Geber'],
      EN: ['Mr. Steal-Your-Girl', 'Snow Lover', 'Lick Monster'],
    },
    birthWeight: 360,
    weightAt12Weeks: 11.0,
    story: {
      DE: 'Der Letzte im Bunde, aber der Erste in deinem Herzen. Amor macht seinem Namen alle Ehre mit jedem liebevollen Schlabber.',
      EN: 'The last out but the first into your heart. Amor (Love) is a professional face-licker and the boldest explorer of the Great White Snow!',
    },
    color: 'bg-rose-100',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    date: { DE: '28. Sept 2025', EN: 'Sept 28, 2025' },
    title: { DE: 'Die Ankunft 🐾', EN: 'The Great Arrival 🐾' },
    description: { 
      DE: 'Trinity bringt 8 winzige "Würmchen" zur Welt. Sieben starke Entdecker starteten heute ihre Reise!',
      EN: 'Trinity brings 8 tiny "würmchen" into the world. Seven strong survivors started their "Awooo" journey today!',
    },
    icon: 'Baby',
  },
  {
    date: { DE: '8. Okt 2025', EN: 'Oct 8, 2025' },
    title: { DE: 'Augen auf! 👀', EN: 'Peepers Open! 👀' },
    description: {
      DE: 'Tag 10: Brownie macht den Anfang! Plötzlich beobachten uns 14 winzige Augen. Die Welt wurde gerade viel größer.',
      EN: 'Day 10: Brownie lead the way! Suddenly, 14 tiny eyes are judging our every move. The world just got much bigger.',
    },
    icon: 'Eye',
  },
  {
    date: { DE: '14. Okt 2025', EN: 'Oct 14, 2025' },
    title: { DE: 'Milch & Brei 🥩', EN: 'Got Milk? (and Mush!) 🥩' },
    description: {
      DE: 'Die "Milchkuh" Trinity bekommt Pause! Der erste Brei war ein wunderbares, schwanzwedelndes Chaos.',
      EN: 'The "Milk Cow" Trinity gets a break! First taste of solid food – it was a messy, tail-wagging disaster of joy.',
    },
    icon: 'Utensils',
  },
  {
    date: { DE: '23. Okt 2025', EN: 'Oct 23, 2025' },
    title: { DE: 'Gras ist Lava! 🌳', EN: 'Grass is Lava! 🌳' },
    description: {
      DE: 'Erstes Mal im Gras. Eine beeindruckende Erfahrung für alle, gefolgt von einem 4-Stunden-Nickerchen.',
      EN: 'First paws on the grass. A "flashy" and confusing experience in the park followed by a 4-hour nap.',
    },
    icon: 'Trees',
  },
  {
    date: { DE: '12. Nov 2025', EN: 'Nov 12, 2025' },
    title: { DE: 'Helden beim Pieks 💉', EN: 'Pokey Doctor Visit 💉' },
    description: {
      DE: 'Die tapferen Sieben waren beim Tierarzt. Kein Jaulen! Sie sind 12x schwerer als bei der Geburt.',
      EN: 'The Brave Seven went to the vet. No whimpering here! They are 12x bigger than birth and ready for trouble.',
    },
    icon: 'Syringe',
  },
  {
    date: { DE: 'Heute', EN: 'Now' },
    title: { DE: 'Neues Zuhause 🏠', EN: 'Forever Home Bound 🏠' },
    description: {
      DE: 'Die Abnabelung ist da. Trinities und Coffees Liebe verbreitet sich über die ganze Stadt!',
      EN: 'The "Abnabelung" is here. Spreading Trinity & Coffee\'s love across the city. The pack grows bigger!',
    },
    icon: 'Home',
  },
];

export const TRANSLATIONS = {
  DE: {
    heroSub: 'Die wunderbare Reise von <span className="font-bold text-gray-900 underline decoration-amber-400 decoration-4">Trinity</span> und ihren sieben wilden Entdeckern.',
    meetPack: 'Rudel-Check',
    stammbaum: 'Ahnen-Tafel',
    journey: 'Zeitleiste',
    community: 'Netzwerk',
    followOriginal: 'Live-Tagebuch',
    birth: 'Gewicht Geburt',
    weight12: '12 Wochen',
    aka: 'bekannt als',
    born: 'Welpe Nr.',
    funFacts: 'Wuff-Wissen',
    meetSeven: 'Lerne die sieben',
    wildAdventures: 'wilden Abenteurer kennen',
    sniffingTrouble: 'Nackenhaare hoch, Schwanz wedeln!',
    communityTitle: 'Rudel-Gemeinschaft',
    communitySub: 'Trinity und Coffee haben eine Familie geschaffen, die über Blutlinien hinausgeht.',
    nextWalk: 'Gassi-Runde',
    findSitter: 'Hunde-Sitter',
    scheduleVisit: 'Besuch buchen',
    followJourney: 'Tagebuch ansehen',
    navJourney: 'Reise',
    navPack: 'Rudel',
    navTree: 'Stammbaum',
    navSocial: 'Social',
    zoomies: 'Zoomies ansehen',
    photos: 'Fotos',
    scroll: 'Schnüffel runter',
    fact1Body: 'Viele Babys haben Coffees legendären "Scheitel-Punkt" genau auf dem Chakra geerbt!',
    fact2Title: 'Musik-Snobs',
    fact2Body: 'Chopin und mongolischer Kehlgesang = Sofortschlaf. Garantiert!',
    fact3Title: 'Genie-Alarm',
    fact3Body: 'Selbstreflexion im Spiegel schon mit 6 Wochen. Kluge Köpfchen!',
    fact4Title: 'Die Milchbar',
    fact4Body: 'Trinities Bar war so beliebt, dass sie bis Woche 6 wie Unkraut gewachsen sind.',
    ownerMeetups: 'Besitzer-Treffen',
    ownerMeetupsBody: 'Monatliche Gassi-Runden im Auer-Welsbach Park oder der HuZo Alszeile.',
    holidaySupport: 'Urlaubs-Hilfe',
    holidaySupportBody: 'Urlaub geplant? Vernetze dich mit anderen Trinity-Eltern für vertrautes Sitten.',
    puppyBath: 'Das Welpenbad',
    puppyBathBody: 'Lust auf Kaffee und Welpentherapie? Das "Kinderzimmer" steht immer offen!',
  },
  EN: {
    heroSub: 'Dive into the paws-itively magical journey of <span className="font-bold text-gray-900 underline decoration-amber-400 decoration-4">Trinity</span> and her seven wild explorers.',
    meetPack: 'Meet the Pack',
    stammbaum: 'The Stammbaum',
    journey: 'The Journey',
    community: 'Community',
    followOriginal: 'Follow Original',
    birth: 'Birth',
    weight12: '12 Weeks',
    aka: 'AKA',
    born: 'Pup #',
    funFacts: 'Fun Pup Facts',
    meetSeven: 'Meet the Seven',
    wildAdventures: 'Wild Adventurers',
    sniffingTrouble: 'Sniffing out trouble, one paw at a time!',
    communityTitle: 'Puppy Parents Community',
    communitySub: 'Trinity and Coffee created a family that extends beyond bloodlines.',
    nextWalk: 'Join next walk',
    findSitter: 'Find a sitter',
    scheduleVisit: 'Schedule visit',
    followJourney: 'Follow the Journey',
    navJourney: 'Journey',
    navPack: 'Pack',
    navTree: 'Tree',
    navSocial: 'Social',
    zoomies: 'Watch Zoomies',
    photos: 'Photos',
    scroll: 'Sniff Down',
    fact1Body: 'Many babies inherited Coffee\'s legendary "Head Spot" exactly on their crown chakra!',
    fact2Title: 'Music Snobs',
    fact2Body: 'Chopin and Mongolian throat singing = Instant Sleep. Guaranteed!',
    fact3Title: 'Genius Alert',
    fact3Body: 'They were doing self-reflection checks in mirrors at just 6 weeks old.',
    fact4Title: 'Milk Bar',
    fact4Body: 'Trinity\'s "Milk Bar" was so popular that they were growing like beanstalks.',
    ownerMeetups: 'Owner Meetups',
    ownerMeetupsBody: 'Monthly walks at the Auer-Welsbach Park or the Alszeile dog zone.',
    holidaySupport: 'Holiday Support',
    holidaySupportBody: 'Going on vacation? Connect with other Trinity Parents for sitting.',
    puppyBath: 'The Puppy Bath',
    puppyBathBody: 'Drop by for a coffee and a puppy therapy session. The pack is waiting!',
  }
};

export const CHAT_MEMORIES = [
  {
    author: 'Clemens',
    text: {
      DE: 'Trinity spielt grad Fleckvieh-Milchkuh❗😋😂',
      EN: 'Trinity is playing "Spotted Milk Cow" right now❗😋😂'
    }
  },
  {
    author: 'Clemens',
    text: {
      DE: 'Bussimaschine ... 🤣',
      EN: 'Kissing machine ... 🤣'
    }
  },
  {
    author: 'Guest',
    text: {
      DE: 'So depressiv kannst\' garnicht sein, dass du dann nicht voll happy bist ... 🤣',
      EN: 'You can\'t be depressed enough to not be fully happy here ... 🤣'
    }
  },
  {
    author: 'Claus',
    text: {
      DE: 'Geduld zahlt sich aus. 💯❤️💯',
      EN: 'Patience pays off. 💯❤️💯'
    }
  },
  {
    author: 'Guest',
    text: {
      DE: 'Nico will sie alle haben ❣️',
      EN: 'Nico wants them all ❣️'
    }
  },
  {
    author: 'Arabelle',
    text: {
      DE: 'Das Highlight war in der Früh: Geknutsche und Geknabberte von Sonderklasse. ❤️',
      EN: 'The highlight was in the morning: World-class kissing and nibbling. ❤️'
    }
  }
];
