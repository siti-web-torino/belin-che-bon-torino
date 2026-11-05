'use strict';

/* Tutti i contenuti modificabili. Dopo una modifica: node scripts/render.mjs */
const SITE_DATA = {
  name: 'Belin Che Bon',
  title: 'Belin Che Bon — La farinata a Torino',
  description: 'Sforniamo farinata ligure nel cuore di Torino. Scopri il nostro menu, componi la tua teglia e vieni a trovarci in Via Giambattista Bogino 5.',
  nav: [{label:'Menu',href:'#menu'},{label:'Senza glutine',href:'#senza-glutine'},{label:'Dove siamo',href:'#dove'}],
  actions: { menu:'Scopri il menu', order:'Ordina a casa', directions:'Come arrivare' },
  address: 'Via Giambattista Bogino, 5',
  city: '10123 Torino',
  locationShort: 'Via Bogino 5 · Torino centro',
  maps: 'https://www.google.com/maps/search/Belin+Che+Bon+Torino',
  instagram: 'https://www.instagram.com/belinchebon_torino/',
  logo: {src:'img/logo.svg',alt:'Belin Che Bon, con il marinaio del marchio',width:820,height:365},
  mascot: {src:'img/marinaio.svg',alt:'Il marinaio con occhiali e calice di Belin Che Bon',width:800,height:800},
  hero: {
    eyebrow:'Farinata ligure · Torino',
    heading:['Farinata.','Belin, che bon!'],
    text:'Abbiamo portato un pezzo di Liguria in via Bogino. Sforniamo farinata dorata e la serviamo calda, dalla nostra Classica alle teglie farcite.',
    photo:'hero',
    badges:['100% Farina di Ceci','Cotta in teglia','Croccante fuori, morbida dentro'],
    scroll:'Scorri, si gira!',
    bottom:['Farinata di ceci','Via Bogino 5','Asporto & delivery']
  },
  menu: {
    eyebrow:'Il menu',heading:'Che farinata sei?',
    text:'Partiamo sempre dalla nostra farinata di ceci. La sforniamo con la crosta dorata e ci divertiamo a farcirla in sette modi.',
    iconic:'Le 3 Iconiche Illustrate',
    categories:[
      {id:'all',label:'Tutte'},
      {id:'farinate',label:'Le Farinate (7)'},
      {id:'custom',label:'Componi la Tua'},
      {id:'dolci',label:'Muffin di Ceci'},
      {id:'bevande',label:'Da Bere & Cocktail'}
    ],
    groups:[
      {id:'farinate',heading:'Tutte le Farinate in Teglia',items:[
        {name:'Classica',description:'Sale, pepe e scorza di limone.',price:'5,00',photo:'classica',tag:'🌱 Vegetariana',taste:'vegetariana'},
        {name:'Belin',description:'Stracchino, olive taggiasche e crema al basilico.',price:'9,00',photo:'belin',tag:'🌿 Ligure DOC',taste:'ligure'},
        {name:'Porky',description:'Porchetta, ciuffi di patate arrosto e crema al rosmarino.',price:'8,50',photo:'porky',tag:'🍖 Saporita',taste:'saporita'},
        {name:'Spicy',description:'Ventricina, cipolle caramellate e crema di gorgonzola.',price:'9,00',tag:'🌶️ Piccante',taste:'piccante'},
        {name:'Bosco',description:'Funghi, toma e nocciole tostate.',price:'9,00',tag:'🍄 Autunnale',taste:'autunnale'},
        {name:'Billy',description:'Peperoni arrosto, pesto di rucola e scaglie di grana.',price:'9,00',tag:'🌿 Alle erbe',taste:'ligure'},
        {name:'Speciale Zucca & Pancetta',description:'Pancetta, crema di zucca e scaglie di grana.',price:'8,00',tag:'🎃 Autunnale',taste:'autunnale'}
      ]},
      {id:'dolci',heading:'Muffin di Ceci',items:[
        {name:'Muffin Ciock',description:'Farina di ceci, yogurt greco e gocce di cioccolato.',price:'3,50'},
        {name:'Muffin Bosco',description:'Farina di ceci, yogurt greco e frutti di bosco.',price:'3,50'}
      ]},
      {id:'bevande',heading:'Da Bere & Cocktail',items:[
        {name:'Acqua',description:'Naturale o frizzante · 0,5 l.',price:'2,00'},
        {name:'Lurisia',description:'Limonata, aranciata rossa, chinotto o gazzosa · 33 cl.',price:'3,50'},
        {name:'Molecola',description:'Classica o zero · 33 cl.',price:'3,00'},
        {name:'Heineken',description:'Classica o zero alcol · 33 cl. Per ingredienti e allergeni consulta la confezione.',price:'3,50'},
        {name:'Cocktail in lattina',description:'Red Spritz, Nobel, Moscow Mule, Gin Tonic, Cuba Libre o Negroni · 33 cl.',price:'7,00',tag:'Bevande alcoliche · solo maggiorenni'}
      ]}
    ],
    custom:{
      heading:'La Farinata è la Tela, Tu l’Artista',
      base:'Base da 5,00 €',
      text:'Noi ci mettiamo la base. Tocca gli ingredienti e guarda la tua teglia prendere forma.',
      empty:'La tua teglia parte dalla Classica.',
      handoff:'Quando passi all’app, scegli di nuovo gli ingredienti disponibili e controlla il prezzo finale.',
      action:'Ordinala ora su Glovo o Just Eat',
      ingredients:[
        {name:'Stracchino',icon:'🧀'},
        {name:'Gorgonzola',icon:'🧀'},
        {name:'Toma',icon:'🧀'},
        {name:'Porchetta',icon:'🍖'},
        {name:'Ventricina',icon:'🌶️'},
        {name:'Pancetta',icon:'🥓'},
        {name:'Olive Taggiasche',icon:'🫒'},
        {name:'Funghi',icon:'🍄'},
        {name:'Cipolle Caramellate',icon:'🧅'},
        {name:'Peperoni',icon:'🫑'},
        {name:'Nocciole',icon:'🌰'},
        {name:'Crema al Basilico',icon:'🌿'},
        {name:'Pesto di Rucola',icon:'🌱'}
      ]
    },
    allergens:'Chiedici la lista degli ingredienti e degli allergeni prima di ordinare.'
  },
  gluten:{
    eyebrow:'Dalla nostra cucina',
    heading:['La nostra farinata è senza glutine?','Sì, al 100%.'],
    answer:'Senza glutine',
    lead:'Dal nostro forno, dritta in teglia.',
    points:[
      {
        number:'01',
        title:'Solo 4 ingredienti naturali',
        text:'Per la base ci bastano quattro ingredienti.',
        ingredients:['Farina di ceci selezionata','Acqua','Olio extravergine di oliva','Sale'],
        note:'Per farcire le nostre teglie scegliamo condimenti senza glutine. Anche i nostri muffin dolci, Ciock e Bosco da 3,50 €, li prepariamo con farina di ceci e ingredienti senza glutine.'
      },
      {number:'02',title:'Un forno dedicato solo alla farinata',text:'Nel nostro forno cuociamo esclusivamente farinata e teniamo fuori gli impasti di frumento.'}
    ],
    note:'Se hai allergie o esigenze alimentari, parlane con noi prima di ordinare. Ti aiutiamo a controllare ingredienti e allergeni, bevande comprese.',
    photo:{src:'img/gluten-free-post.svg',alt:'Due teglie della nostra farinata appena sfornata',width:709,height:430}
  },
  delivery:{
    eyebrow:'Delivery & asporto',
    heading:['La nostra farinata,','dove vuoi tu.'],
    text:'Te la sforniamo in via Bogino 5. Gustala calda da noi, portala via oppure ordinala a domicilio su Glovo o Just Eat.',
    note:'Nell’app trovi tempi, costi e disponibilità di consegna per il tuo indirizzo.',
    platforms:[
      {name:'Glovo',label:'Ordina su Glovo',url:'https://glovoapp.com/it/it/torino/stores/belin-che-bon-tor'},
      {name:'Just Eat',label:'Ordina su Just Eat',url:'https://www.justeat.it/restaurants-belin-che-bon-torino/menu'}
    ]
  },
  visit:{
    eyebrow:'Vieni a trovarci',
    heading:['Ci vediamo','in via Bogino.'],
    addressLabel:'Il nostro indirizzo',
    text:'Siamo nel cuore di Torino, a due passi da Via Po, Piazza Castello, Piazza Carlina e dalla Mole Antonelliana.',
    hoursLabel:'Pranzo o cena?',
    hours:'Passa a trovarci a pranzo o a cena in Via Bogino 5. Seguici su Instagram @belinchebon_torino per scoprire le farinate speciali fuori menu e gli orari sempre aggiornati.'
  },
  footer:{line:'Progetto digitale realizzato su misura per Belin Che Bon Torino.'},
  photos:{
    hero:{src:'img/farinata-intera-ai.webp',alt:'Farinata Belin intera con olive, stracchino e crema al basilico',width:1254,height:1254},
    classica:{src:'img/classica.svg',alt:'Farinata Classica su un tagliere',width:709,height:885},
    belin:{src:'img/farinata-intera-ai.webp',alt:'Farinata Belin intera con olive, stracchino e crema al basilico',width:1254,height:1254,cutout:true},
    porky:{src:'img/porky.svg',alt:'Farinata Porky su un tagliere',width:709,height:602}
  }
};
// END_SITE_DATA

function setupMenuFilters() {
  const buttons = Array.from(document.querySelectorAll('[data-menu-filter]'));
  const groups = Array.from(document.querySelectorAll('[data-menu-group]'));
  const status = document.querySelector('#menu-status');
  if (!buttons.length || !groups.length || !status) return;
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.menuFilter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    groups.forEach(group => {
      group.hidden = selected !== 'all' && group.dataset.menuGroup !== selected;
    });
    const visibleCount = groups.filter(group => !group.hidden).reduce(
      (count, group) => count + group.querySelectorAll('.menu-item').length,
      0
    );
    status.textContent = selected === 'custom'
      ? 'Configuratore della farinata visualizzato.'
      : `${visibleCount} proposte visualizzate.`;
  }));
}

function setupCustomFarinata() {
  const builder = document.querySelector('[data-custom]');
  if (!builder) return;

  const buttons = Array.from(builder.querySelectorAll('[data-ingredient]'));
  const toppings = builder.querySelector('[data-custom-toppings]');
  const summary = builder.querySelector('[data-custom-summary]');
  const reset = builder.querySelector('[data-custom-reset]');
  if (!buttons.length || !toppings || !summary || !reset) return;

  const {ingredients, empty} = SITE_DATA.menu.custom;
  const updatePreview = () => {
    const selected = buttons
      .filter(button => button.getAttribute('aria-pressed') === 'true')
      .map(button => ingredients[Number(button.dataset.ingredient)]);
    const pieces = selected.map(({icon}) => {
      const piece = document.createElement('li');
      piece.textContent = icon;
      return piece;
    });
    toppings.replaceChildren(...pieces);
    summary.textContent = selected.length
      ? `Nella tua teglia: ${selected.map(({name}) => name).join(', ')}.`
      : empty;
    reset.disabled = selected.length === 0;
  };

  buttons.forEach(button => button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    updatePreview();
  }));
  reset.addEventListener('click', () => {
    buttons.forEach(button => button.setAttribute('aria-pressed', 'false'));
    updatePreview();
    buttons[0].focus();
  });
  updatePreview();
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
  setupCustomFarinata();
  setupScrollPlate();
  setupReveals();
}
