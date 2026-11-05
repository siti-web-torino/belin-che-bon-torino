import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import vm from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=readFileSync(resolve(root,'js/main.js'),'utf8').split('// END_SITE_DATA')[0];
const d=vm.runInNewContext(source+';SITE_DATA;');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const arrow='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const image=(p,attrs='')=>`<img src="${esc(p.src)}" alt="${esc(p.alt)}" width="${p.width}" height="${p.height}" ${attrs}>`;
const lines=a=>a.map(esc).join('<br>');
const button=(label,href,extra='')=>`<a class="button ${extra}" href="${esc(href)}">${esc(label)}${arrow}</a>`;
const price=item=>`<span class="dish-price">${esc(item.price)} <span>€</span></span>`;
const dishTitle=item=>`<div class="dish-name"><h4>${esc(item.name)}</h4>${price(item)}</div>`;
const farinate=d.menu.groups.find(group=>group.id==='farinate');
const iconicCards=farinate.items.filter(item=>item.photo).map(item=>{
  const photo=d.photos[item.photo];
  return `<article class="iconic-card" data-reveal>
    <figure class="dish-photo${photo.cutout?' dish-photo-cutout':''}">${image(photo,'loading="lazy" decoding="async"')}</figure>
    <div class="dish-info"><span class="dish-tag">Le Più Amate</span>${dishTitle(item)}<p>${esc(item.description)}</p></div>
  </article>`;
}).join('');
const renderGroup=group=>{
  const isFarinata=group.id==='farinate';
  const items=group.items.map((item,index)=>`<article class="menu-item" data-reveal>
    ${isFarinata?`<span class="dish-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span>`:''}
    <div class="dish-info">${dishTitle(item)}<p>${esc(item.description)}</p>
    ${item.tag?`<span class="dish-tag${item.taste?` taste-${esc(item.taste)}`:''}">${esc(item.tag)}</span>`:''}</div>
  </article>`).join('');
  return `<section class="menu-group${isFarinata?' farinata-group':''}" data-menu-group="${esc(group.id)}" aria-labelledby="group-${esc(group.id)}">
    <h3 id="group-${esc(group.id)}">${esc(group.heading)}</h3><div class="menu-items">${items}</div>
  </section>`;
};
const custom=d.menu.custom;
const ingredientChips=custom.ingredients.map((ingredient,index)=>`<button type="button" class="ingredient-chip" data-ingredient="${index}" aria-pressed="false"><span aria-hidden="true">${esc(ingredient.icon)}</span> ${esc(ingredient.name)}</button>`).join('');
const html=`<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(d.title)}</title><meta name="description" content="${esc(d.description)}">
<meta name="robots" content="noindex, nofollow, noarchive"><meta name="theme-color" content="#FBF6EC">
<meta property="og:title" content="${esc(d.title)}"><meta property="og:description" content="${esc(d.description)}"><meta property="og:type" content="website">
<link rel="icon" type="image/svg+xml" href="img/favicon.svg">
<link rel="preload" as="font" href="fonts/bricolage-grotesque.ttf" type="font/ttf" crossorigin>
<link rel="preload" as="font" href="fonts/dm-sans.ttf" type="font/ttf" crossorigin>
<link rel="stylesheet" href="css/style.css"><script defer src="js/main.js"></script>
</head>
<body id="inizio">
<a class="skip-link" href="#contenuto">Vai al contenuto</a>
<header class="header"><div class="header-inner wrap">
<a class="brand" href="#inizio" aria-label="${esc(d.name)} — inizio">${image(d.logo,'fetchpriority="high"')}</a>
<nav aria-label="Navigazione principale">${d.nav.map(n=>`<a href="${esc(n.href)}">${esc(n.label)}</a>`).join('')}</nav>
<a href="#ordina" class="header-order">${esc(d.actions.order)}${arrow}</a>
</div></header>
<main id="contenuto">
<section class="hero wrap" aria-labelledby="hero-title">
<div class="hero-copy"><p class="eyebrow"><span class="tiny-circle" aria-hidden="true"></span>${esc(d.hero.eyebrow)}</p>
<h1 id="hero-title">${esc(d.hero.heading[0])}<br><span class="hero-title-accent">${esc(d.hero.heading[1])}</span></h1><p class="hero-text">${esc(d.hero.text)}</p>
<div class="hero-actions">${button(d.actions.menu,'#menu')}${button(d.actions.directions,d.maps,'button-outline')}</div>
<a class="hero-location" href="#dove"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>${esc(d.locationShort)}</a>
</div>
<div class="hero-visual"><div class="plate-ring" aria-hidden="true"></div><div class="plate"><div class="plate-spin" data-scroll-plate>${image(d.photos[d.hero.photo],'fetchpriority="high" decoding="async"')}</div></div>
${d.hero.badges.map((badge,index)=>`<span class="plate-badge plate-badge-${['ceci','teglia','crosta'][index]}">${esc(badge)}</span>`).join('')}
<p class="scroll-note">${esc(d.hero.scroll)}<span aria-hidden="true">↻</span></p>
</div>
<div class="hero-bottom">${d.hero.bottom.map(x=>`<span>${esc(x)}</span>`).join('<span class="bottom-dot" aria-hidden="true">✳</span>')}</div>
</section>
<section class="menu-section" id="menu" aria-labelledby="menu-title"><div class="wrap">
<div class="section-intro" data-reveal><div><p class="eyebrow">01 / ${esc(d.menu.eyebrow)}</p><h2 id="menu-title">${esc(d.menu.heading)}</h2></div><p>${esc(d.menu.text)}</p></div>
<div class="menu-filters" role="group" aria-label="Categorie del menu">${d.menu.categories.map((c,i)=>`<button type="button" data-menu-filter="${esc(c.id)}" aria-pressed="${i===0}">${esc(c.label)}</button>`).join('')}</div><p class="sr-only" id="menu-status" role="status"></p>
<section class="menu-group iconic-group" data-menu-group="farinate" aria-labelledby="iconic-title">
  <h3 id="iconic-title">${esc(d.menu.iconic)}</h3>
  <div class="menu-items">${iconicCards}</div>
</section>
${renderGroup(farinate)}
<section class="custom-dish" data-menu-group="custom" data-custom data-reveal aria-labelledby="custom-title">
  <div class="custom-intro"><p class="eyebrow">${esc(custom.base)}</p><h3 id="custom-title">${esc(custom.heading)}</h3><p>${esc(custom.text)}</p></div>
  <div class="custom-builder">
    <div class="custom-controls"><fieldset class="ingredient-chips"><legend>Scegli i tuoi ingredienti</legend>${ingredientChips}</fieldset></div>
    <div class="custom-preview">
      <div class="custom-plate" aria-hidden="true"><ul class="custom-toppings" data-custom-toppings></ul></div>
      <p class="custom-summary" data-custom-summary role="status">${esc(custom.empty)}</p>
      <button class="custom-reset" type="button" data-custom-reset disabled>Ricomincia</button>
    </div>
  </div>
  <div class="custom-order">${button(custom.action,'#ordina')}<p class="custom-handoff">${esc(custom.handoff)}</p></div>
</section>
${d.menu.groups.filter(group=>group.id!=='farinate').map(renderGroup).join('')}
<div class="menu-notes"><p>${esc(d.menu.allergens)}</p></div>
</div></section>
<section class="gluten-section" id="senza-glutine" aria-labelledby="gluten-title"><div class="wrap">
<div class="gluten-heading" data-reveal><div><p class="eyebrow">02 / ${esc(d.gluten.eyebrow)}</p><h2 id="gluten-title">${lines(d.gluten.heading)}</h2></div><span class="gluten-answer">${esc(d.gluten.answer)}</span></div>
<div class="gluten-grid"><div class="gluten-photo" data-reveal>${image(d.gluten.photo,'loading="lazy" decoding="async"')}<p>${esc(d.gluten.lead)}</p></div><div class="gluten-details" data-reveal>${d.gluten.points.map(p=>`<article><span>${esc(p.number)}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>${p.ingredients?`<ul class="ingredient-list">${p.ingredients.map(ingredient=>`<li>${esc(ingredient)}</li>`).join('')}</ul>`:''}${p.note?`<p>${esc(p.note)}</p>`:''}</div></article>`).join('')}</div></div>
<p class="gluten-note">${esc(d.gluten.note)}</p>
</div></section>
<section class="delivery-section wrap" id="ordina" aria-labelledby="delivery-title"><div class="delivery-copy" data-reveal><p class="eyebrow">03 / ${esc(d.delivery.eyebrow)}</p><h2 id="delivery-title">${lines(d.delivery.heading)}</h2><p>${esc(d.delivery.text)}</p></div><div class="delivery-links" data-reveal>${d.delivery.platforms.map((p,i)=>`<a class="delivery-link" href="${esc(p.url)}"><span class="platform-count">0${i+1}</span><span><small>Ordina su</small><strong>${esc(p.name)}</strong></span>${arrow}</a>`).join('')}<p>${esc(d.delivery.note)}</p></div></section>
<section class="visit-section" id="dove" aria-labelledby="visit-title"><div class="wrap">
  <div class="visit-heading" data-reveal><div><p class="eyebrow">04 / ${esc(d.visit.eyebrow)}</p><h2 id="visit-title">${lines(d.visit.heading)}</h2></div><div class="mascot">${image(d.mascot,'loading="lazy" decoding="async"')}</div></div>
  <div class="visit-grid" data-reveal>
    <div><h3>${esc(d.visit.addressLabel)}</h3><address>${esc(d.address)}<br>${esc(d.city)}</address><p>${esc(d.visit.text)}</p></div>
    <div><h3>${esc(d.visit.hoursLabel)}</h3><p>${esc(d.visit.hours)}</p></div>
  </div>
  <div class="visit-links">${button('Google Maps',d.maps,'button-light')}${button('Instagram',d.instagram,'button-light')}${d.delivery.platforms.map(p=>button(p.name,p.url,'button-light')).join('')}</div>
</div></section>
</main>
<footer class="footer wrap"><div class="footer-main"><p>${esc(d.footer.line)}</p></div></footer>
</body></html>`;
writeFileSync(resolve(root,'index.html'),html);
console.log('index.html aggiornato da SITE_DATA; nessuna build necessaria per il deploy.');
