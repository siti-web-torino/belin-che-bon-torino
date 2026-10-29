import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import vm from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=readFileSync(resolve(root,'js/main.js'),'utf8').split('// END_SITE_DATA')[0];
const d=vm.runInNewContext(source+';SITE_DATA;');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const arrow='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const up='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const image=(p,attrs='')=>`<img src="${esc(p.src)}" alt="${esc(p.alt)}" width="${p.width}" height="${p.height}" ${attrs}>`;
const lines=a=>a.map(esc).join('<br>');
const button=(label,href,extra='')=>`<a class="button ${extra}" href="${esc(href)}">${esc(label)}${arrow}</a>`;
const menuGroups=d.menu.groups.map(group=>`<section class="menu-group" data-menu-group="${group.id}" aria-labelledby="group-${group.id}"><h3 id="group-${group.id}">${esc(group.heading)}</h3><div class="menu-items">${group.items.map((item,i)=>`<article class="menu-item ${item.photo?'has-photo':''}" data-reveal>${item.photo?`<figure class="dish-photo">${image(d.photos[item.photo],'loading="lazy" decoding="async"')}</figure>`:''}<div class="dish-info"><div class="dish-name"><h4>${esc(item.name)}</h4><span class="dish-price">${esc(item.price)} <span>€</span></span></div><p>${esc(item.description)}</p>${item.tag?`<span class="dish-tag">${esc(item.tag)}</span>`:''}</div></article>`).join('')}</div></section>`).join('');
const html=`<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(d.title)}</title><meta name="description" content="${esc(d.description)}">
<meta name="robots" content="noindex, nofollow, noarchive"><meta name="theme-color" content="#1d4746">
<meta property="og:title" content="${esc(d.title)}"><meta property="og:description" content="${esc(d.description)}"><meta property="og:type" content="website">
<link rel="icon" type="image/svg+xml" href="img/favicon.svg">
<link rel="preload" as="font" href="fonts/bricolage-grotesque.ttf" type="font/ttf" crossorigin>
<link rel="preload" as="font" href="fonts/dm-sans.ttf" type="font/ttf" crossorigin>
<link rel="stylesheet" href="css/style.css"><script defer src="js/main.js"></script>
</head>
<body id="inizio">
<a class="skip-link" href="#contenuto">Vai al contenuto</a>
<div class="demo-bar">${esc(d.demo)} <span aria-hidden="true">↗</span></div>
<header class="header"><div class="header-inner wrap">
<a class="brand" href="#inizio" aria-label="${esc(d.name)} — inizio">${image(d.logo,'fetchpriority="high"')}</a>
<nav aria-label="Navigazione principale">${d.nav.map(n=>`<a href="${n.href}">${esc(n.label)}</a>`).join('')}</nav>
<a href="#ordina" class="header-order">${esc(d.actions.order)}${arrow}</a>
</div></header>
<main id="contenuto">
<section class="hero wrap" aria-labelledby="hero-title">
<div class="hero-copy"><p class="eyebrow"><span class="tiny-circle" aria-hidden="true"></span>${esc(d.hero.eyebrow)}</p>
<h1 id="hero-title">${lines(d.hero.heading)}</h1><p class="hero-text">${esc(d.hero.text)}</p>
<div class="hero-actions">${button(d.actions.menu,'#menu')}${button(d.actions.directions,d.maps,'button-outline')}</div>
<a class="hero-location" href="#dove"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>${esc(d.locationShort)}</a>
</div>
<div class="hero-visual"><div class="plate-ring" aria-hidden="true"></div><div class="plate"><div class="plate-spin" data-scroll-plate>${image(d.photos[d.hero.photo],'fetchpriority="high" decoding="async"')}</div></div>
<a class="gluten-sticker" href="#senza-glutine"><span>${esc(d.hero.glutenLabel)}</span><strong>${esc(d.hero.glutenAnswer)}</strong>${arrow}</a>
<p class="plate-caption">${esc(d.hero.caption)} <span aria-hidden="true">↗</span></p><p class="scroll-note">${esc(d.hero.scroll)}<span aria-hidden="true">↻</span></p>
</div>
<div class="hero-bottom">${d.hero.bottom.map(x=>`<span>${esc(x)}</span>`).join('<span class="bottom-dot" aria-hidden="true">✳</span>')}</div>
</section>
<section class="menu-section" id="menu" aria-labelledby="menu-title"><div class="wrap">
<div class="section-intro" data-reveal><div><p class="eyebrow">01 / ${esc(d.menu.eyebrow)}</p><h2 id="menu-title">${esc(d.menu.heading)}</h2></div><p>${esc(d.menu.text)}</p></div>
<p class="source-note">${esc(d.menu.validation)}</p>
<div class="menu-filters" role="group" aria-label="Categorie del menu" hidden>${d.menu.categories.map((c,i)=>`<button type="button" data-menu-filter="${c.id}" aria-pressed="${i===0}">${esc(c.label)}</button>`).join('')}</div><p class="sr-only" id="menu-status" role="status" aria-live="polite"></p>
${menuGroups}
<aside class="custom-dish" data-custom data-reveal><span class="custom-number" aria-hidden="true">+</span><div><h3>${esc(d.menu.custom.heading)}</h3><p>${esc(d.menu.custom.text)}</p></div><a href="#ordina" class="text-link">${esc(d.menu.custom.action)}${arrow}</a></aside>
<div class="menu-notes"><p>${esc(d.menu.photoNote)}</p><p>${esc(d.menu.allergens)}</p></div>
</div></section>
<section class="gluten-section" id="senza-glutine" aria-labelledby="gluten-title"><div class="wrap">
<div class="gluten-heading" data-reveal><div><p class="eyebrow">02 / ${esc(d.gluten.eyebrow)}</p><h2 id="gluten-title">${lines(d.gluten.heading)}</h2></div><span class="gluten-answer">${esc(d.gluten.answer)}</span></div>
<div class="gluten-grid"><div class="gluten-photo" data-reveal>${image(d.gluten.photo,'loading="lazy" decoding="async"')}<p>${esc(d.gluten.lead)}</p></div><div class="gluten-details" data-reveal>${d.gluten.points.map(p=>`<article><span>${p.number}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>${p.ingredients?`<ul class="ingredient-list">${p.ingredients.map(ingredient=>`<li>${esc(ingredient)}</li>`).join('')}</ul>`:''}${p.note?`<p>${esc(p.note)}</p>`:''}</div></article>`).join('')}<p class="gluten-source"><a href="${esc(d.instagram)}">${esc(d.gluten.publicSource)}</a></p></div></div>
<p class="gluten-note">${esc(d.gluten.note)}</p>
</div></section>
<section class="delivery-section wrap" id="ordina" aria-labelledby="delivery-title"><div class="delivery-copy" data-reveal><p class="eyebrow">03 / ${esc(d.delivery.eyebrow)}</p><h2 id="delivery-title">${lines(d.delivery.heading)}</h2><p>${esc(d.delivery.text)}</p></div><div class="delivery-links" data-reveal>${d.delivery.platforms.map((p,i)=>`<a class="delivery-link" href="${esc(p.url)}"><span class="platform-count">0${i+1}</span><span><small>Ordina su</small><strong>${esc(p.name)}</strong></span>${arrow}</a>`).join('')}<p>${esc(d.delivery.note)}</p></div></section>
<section class="visit-section" id="dove" aria-labelledby="visit-title"><div class="wrap"><div class="visit-heading" data-reveal><div><p class="eyebrow">04 / ${esc(d.visit.eyebrow)}</p><h2 id="visit-title">${lines(d.visit.heading)}</h2></div><div class="mascot">${image(d.mascot,'loading="lazy" decoding="async"')}</div></div><div class="visit-grid" data-reveal><div><h3>${esc(d.visit.addressLabel)}</h3><address>${esc(d.address)}<br>${esc(d.city)}</address>${button(d.actions.directions,d.maps,'button-light')}</div><div><h3>${esc(d.visit.hoursLabel)}</h3><p class="pending">${esc(d.visit.hours)}</p><p>${esc(d.visit.hoursNote)}</p></div><div><h3>${esc(d.visit.contactLabel)}</h3><a class="instagram-link" href="${esc(d.instagram)}">${esc(d.instagramHandle)}${arrow}</a><p>${esc(d.visit.contactNote)}</p></div></div></div></section>
</main>
<footer class="footer wrap"><div class="footer-main"><a class="brand footer-brand" href="#inizio" aria-label="${esc(d.name)} — inizio">${image(d.logo,'loading="lazy" decoding="async"')}</a><p>${esc(d.footer.demo)}</p><a href="#inizio" class="back-top" aria-label="${esc(d.actions.top)}">${up}</a></div><div class="footer-details"><details><summary>${esc(d.footer.sourcesTitle)}</summary><p>${esc(d.footer.sourcesText)}</p><p><a href="${esc(d.delivery.platforms[0].url)}">Glovo</a> · <a href="${esc(d.delivery.platforms[1].url)}">Just Eat</a> · <a href="${esc(d.maps)}">Google Maps</a> · <a href="${esc(d.instagram)}">Instagram</a></p><p>${esc(d.footer.legal)}</p></details><details><summary>${esc(d.footer.privacyTitle)}</summary><p>${esc(d.footer.privacyText)}</p></details></div></footer>
</body></html>`;
writeFileSync(resolve(root,'index.html'),html);
console.log('index.html aggiornato da SITE_DATA; nessuna build necessaria per il deploy.');
