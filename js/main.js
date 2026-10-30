/* Tutti i contenuti modificabili. Dopo una modifica: node scripts/render.mjs */
const SITE_DATA = {
  name: 'Belin Che Bon',
  title: 'Belin Che Bon — La farinata a Torino',
  description: 'La farinata di Belin Che Bon a Torino: menu, foto, informazioni sul senza glutine e collegamenti a Glovo e Just Eat. Proposta dimostrativa non ufficiale.',
  demo: 'Proposta di sito · non ufficiale',
  nav: [{label:'Menu',href:'#menu'},{label:'Senza glutine',href:'#senza-glutine'},{label:'Dove siamo',href:'#dove'}],
  actions: { menu:'Scopri il menu', order:'Ordina a casa', directions:'Come arrivare', instagram:'Seguici su Instagram', top:'Torna su' },
  address: 'Via Giambattista Bogino, 5',
  city: '10123 Torino',
  locationShort: 'Via Bogino 5 · Torino centro',
  maps: 'https://www.google.com/maps/search/Belin+Che+Bon+Torino',
  instagram: 'https://www.instagram.com/belinchebon_torino/',
  instagramHandle: '@belinchebon_torino',
  logo: {src:'img/logo.svg',alt:'Belin Che Bon, con il marinaio del marchio',width:820,height:365},
  mascot: {src:'img/marinaio.svg',alt:'Il marinaio con occhiali e calice di Belin Che Bon',width:800,height:800},
  hero: {
    eyebrow:'Farinata · Torino',
    heading:['La farinata.','A Torino.'],
    text:'Farina di ceci, acqua, olio e sale. Dalla Classica alle farinate farcite: scopri il menu di Belin Che Bon, in via Bogino 5.',
    photo:'hero',
    caption:'Farinata farcita',
    scroll:'Scorri, si gira!',
    glutenLabel:'E il glutine?',
    glutenAnswer:'Ne parliamo qui',
    bottom:['Farinata di ceci','Via Bogino 5','Glovo & Just Eat']
  },
  menu: {
    eyebrow:'Il menu',heading:'Che farinata sei?',
    text:'Classica o farcita? Qui trovi le proposte e gli ingredienti del menu disponibile sul delivery.',
    validation:'[DA CONFERMARE] Menu e prezzi in locale. Listino Glovo rilevato il 29 ottobre 2026; sulle app prezzi e disponibilità possono variare.',
    photoNote:'Abbinamento delle foto a Classica, Belin e Porky da confermare con il locale.',
    categories:[{id:'all',label:'Tutto'},{id:'farinate',label:'Farinate'},{id:'dolci',label:'Dolci'},{id:'bevande',label:'Da bere'}],
    groups:[
      {id:'farinate',heading:'Le farinate',items:[
        {name:'Classica',description:'Sale, pepe e scorza di limone.',price:'5,00',photo:'classica'},
        {name:'Belin',description:'Stracchino, olive taggiasche e crema al basilico.',price:'9,00',photo:'belin'},
        {name:'Porky',description:'Porchetta, ciuffi di patate arrosto e crema al rosmarino.',price:'8,50',photo:'porky'},
        {name:'Spicy',description:'Ventricina, cipolle caramellate e crema di gorgonzola.',price:'9,00'},
        {name:'Bosco',description:'Funghi, toma e nocciole tostate.',price:'9,00'},
        {name:'Billy',description:'Peperoni arrosto, pesto di rucola e scaglie di grana.',price:'9,00'},
        {name:'Halloween',description:'Pancetta, crema di zucca e scaglie di grana.',price:'8,00',tag:'Stagionale · disponibilità da verificare'}
      ]},
      {id:'dolci',heading:'Un dolce, dopo?',items:[
        {name:'Muffin Ciock',description:'Farina di ceci, yogurt greco e gocce di cioccolato.',price:'3,50'},
        {name:'Muffin Bosco',description:'Farina di ceci, yogurt greco e frutti di bosco.',price:'3,50'}
      ]},
      {id:'bevande',heading:'Da bere',items:[
        {name:'Acqua',description:'Naturale o frizzante · 0,5 l.',price:'2,00'},
        {name:'Lurisia',description:'Limonata, aranciata rossa, chinotto o gazzosa · 33 cl.',price:'3,50'},
        {name:'Molecola',description:'Classica o zero · 33 cl.',price:'3,00'},
        {name:'Heineken',description:'Classica o zero alcol · 33 cl. Per ingredienti e allergeni consulta la confezione.',price:'3,50'},
        {name:'Cocktail in lattina',description:'Red Spritz, Nobel, Moscow Mule, Gin Tonic, Cuba Libre o Negroni · 33 cl.',price:'7,00',tag:'Bevande alcoliche · solo maggiorenni'}
      ]}
    ],
    custom:{heading:'La farinata la tela, tu l’artista',text:'Scegli gli ingredienti direttamente sulle app. Base farinata da 5,00 €; aggiunte e prezzo finale da verificare prima dell’ordine.',action:'Componila sul delivery'},
    allergens:'Per gli allergeni e la composizione completa chiedi al personale prima di ordinare. Le descrizioni sono sintetiche.'
  },
  gluten:{
    eyebrow:'Parliamo di senza glutine',
    heading:['La farinata è','senza glutine?'],answer:'Sì.',
    lead:'È fatta con farina di ceci, acqua, olio e sale.',
    points:[{number:'01',title:'Gli ingredienti, in breve',text:'La base della farinata, come indicata da Belin Che Bon:',ingredients:['Farina di ceci','Acqua','Olio','Sale'],note:'Il locale dichiara di utilizzare ingredienti gluten free.'},{number:'02',title:'Il forno',text:'Nel post sul senza glutine, Belin Che Bon spiega che nel proprio forno cuoce esclusivamente la farinata.'}],
    source:'Dal post Instagram del locale che ci hai condiviso.',
    publicSource:'Fonte: i materiali di Belin Che Bon.',
    note:'Informazioni dichiarate dal locale. Per allergie, esigenze specifiche e ingredienti delle bevande, chiedi sempre al personale. Scheda allergeni completa [DA CONFERMARE].',
    photo:{src:'img/gluten-free-post.svg',alt:'Due teglie di farinata nella foto del post sul senza glutine di Belin Che Bon',width:709,height:430}
  },
  delivery:{eyebrow:'Delivery & asporto',heading:['La farinata,','dove vuoi tu.'],text:'Scegli la tua app e verifica consegna o ritiro per il tuo indirizzo. L’ordine si completa direttamente sulla piattaforma.',note:'Disponibilità, costi e tempi sono quelli mostrati dall’app al momento dell’ordine.',platforms:[{name:'Glovo',label:'Ordina su Glovo',url:'https://glovoapp.com/it/it/torino/stores/belin-che-bon-tor'},{name:'Just Eat',label:'Ordina su Just Eat',url:'https://www.justeat.it/restaurants-belin-che-bon-torino/menu'}]},
  visit:{eyebrow:'Vieni a trovarci',heading:['Ci vediamo','in via Bogino.'],addressLabel:'L’indirizzo',hoursLabel:'Gli orari',hours:'[DA CONFERMARE]',hoursNote:'Consulta gli aggiornamenti sulla scheda Google Maps prima di passare.',contactLabel:'Per restare in contatto',contactNote:'Per informazioni scrivi al profilo Instagram del locale.'},
  footer:{demo:'Proposta dimostrativa non ufficiale, da approvare con il locale.',sourcesTitle:'Fonti e dati da confermare',sourcesText:'Menu e prezzi: Glovo, consultato il 29 ottobre 2026. Prezzi al banco, disponibilità, abbinamento foto e scheda allergeni da confermare. Dichiarazioni sul senza glutine: post del locale fornito dall’utente. Foto iniziale: bordi completati con IA dalla foto fornita dall’utente. Indirizzo: Maps e Just Eat.',privacyTitle:'Privacy della demo',privacyText:'Questa pagina non usa moduli, analytics, cookie opzionali o contenuti incorporati da servizi esterni. Aprendo Maps, Instagram o le app di delivery si applicano le loro informative.',legal:'Ragione sociale e partita IVA: [DA CONFERMARE].'},
  photos:{
    hero:{src:'img/farinata-intera-ai.webp',alt:'Farinata Belin intera con olive, stracchino e crema al basilico; bordi completati con IA dalla foto originale',width:1254,height:1254},
    classica:{src:'img/classica.svg',alt:'Farinata semplice su un tagliere, dalla foto fornita dall’utente',width:709,height:885},
    belin:{src:'img/belin.svg',alt:'Farinata con olive e crema verde, dalla foto fornita dall’utente',width:709,height:602},
    porky:{src:'img/porky.svg',alt:'Farinata farcita su un tagliere, dalla foto fornita dall’utente',width:709,height:602}
  }
};
// END_SITE_DATA

'use strict';

function setupMenuFilters() {
  const buttons = Array.from(document.querySelectorAll('[data-menu-filter]'));
  const groups = Array.from(document.querySelectorAll('[data-menu-group]'));
  const custom = document.querySelector('[data-custom]');
  const status = document.querySelector('#menu-status');
  const toolbar = document.querySelector('.menu-filters');
  if (!buttons.length || !groups.length) return;
  toolbar.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.menuFilter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    groups.forEach(group => {group.hidden = selected !== 'all' && group.dataset.menuGroup !== selected;});
    custom.hidden = selected !== 'all' && selected !== 'farinate';
    const visibleCount = groups.filter(group => !group.hidden).reduce((count, group) => count + group.querySelectorAll('.menu-item').length, 0);
    status.textContent = `${button.textContent}: ${visibleCount} proposte visualizzate.`;
  }));
}

function setupScrollPlate() {
  const plate = document.querySelector('[data-scroll-plate]');
  const hero = document.querySelector('.hero');
  if (!plate || !hero || typeof matchMedia !== 'function') return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = null;
  const draw = () => {
    frame = null;
    if (preference.matches) return;
    const travel = Math.max(1, hero.offsetHeight);
    const progress = Math.max(0, Math.min(1.4, window.scrollY / travel));
    plate.style.transform = `rotate(${(-8 + progress * 95).toFixed(2)}deg)`;
  };
  const requestDraw = () => { if (frame === null && !preference.matches) frame = requestAnimationFrame(draw); };
  const applyPreference = () => {
    window.removeEventListener('scroll', requestDraw);
    window.removeEventListener('resize', requestDraw);
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    if (preference.matches) {plate.style.transform = 'none';return;}
    window.addEventListener('scroll', requestDraw, {passive:true});
    window.addEventListener('resize', requestDraw, {passive:true});
    requestDraw();
  };
  preference.addEventListener?.('change', applyPreference);
  applyPreference();
}

function setupReveals() {
  if (typeof matchMedia !== 'function' || !('IntersectionObserver' in window)) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = Array.from(document.querySelectorAll('[data-reveal]'));
  const running = new Set();
  const played = new Set();
  let observer;
  const update = () => {
    observer?.disconnect();
    for (const animation of running) animation.cancel();
    running.clear();
    if (preference.matches) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting || played.has(entry.target)) return;
      played.add(entry.target);
      observer.unobserve(entry.target);
      if (typeof entry.target.animate !== 'function') return;
      const animation = entry.target.animate([{transform:'translateY(10px)'},{transform:'translateY(0)'}],{duration:550,easing:'cubic-bezier(.2,.7,.3,1)'});
      running.add(animation);
      animation.finished.then(()=>running.delete(animation),()=>running.delete(animation));
    }),{threshold:0.08});
    targets.filter(target=>!played.has(target)).forEach(target=>observer.observe(target));
  };
  preference.addEventListener?.('change',update);
  update();
}

if (typeof document !== 'undefined') {
  setupMenuFilters();
  setupScrollPlate();
  setupReveals();
}
