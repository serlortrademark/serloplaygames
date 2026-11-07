'use strict';
const translations = {
  es: {
    skip:'Saltar al contenido', nav_features:'Funciones', nav_experience:'Experiencia', nav_news:'Novedades', nav_faq:'Preguntas', nav_contact:'Contacto',
    hero_eyebrow:'EL HOGAR DE TU BIBLIOTECA DIGITAL', hero_title_1:'Tus juegos.', hero_title_2:'Tu espacio.', hero_title_3:'Tus reglas.',
    hero_description:'Una forma más cómoda de organizar, encontrar y ejecutar tus juegos y aplicaciones en Windows. Todo lo que necesitas, en un solo lugar.',
    cta_store:'Descargar desde Microsoft Store', cta_explore:'Descubrir funciones',
    hero_check_free:'Gratuito',hero_check_os:'Windows 10 y 11 · 64 bits',hero_check_lang:'Español e inglés',
    preview_lib:'Tu biblioteca',preview_tools:'Herramientas',preview_settings:'Configuración',preview_collection:'MI COLECCIÓN',preview_add:'Añadir',preview_search:'Buscar en tu biblioteca...',preview_ready:'Biblioteca lista',preview_start:'Iniciar',preview_disclaimer:'Representación conceptual de la interfaz · No es una captura real',
    stat1_title:'Una sola biblioteca',stat1_sub:'Todo organizado',stat2_title:'A tu estilo',stat2_sub:'Temas y colores',stat3_title:'Sin complicaciones',stat3_sub:'Añade, inicia y disfruta',
    features_kicker:'TODO LO QUE NECESITAS',features_title:'Tu biblioteca, a otro nivel.',features_subtitle:'Diseñado para que disfrutes de tus juegos y aplicaciones, sin perder tiempo buscando dónde están.',
    feature1_title:'Todo en un mismo lugar',feature1_body:'Organiza juegos, aplicaciones y accesos directos en una biblioteca personal, siempre a mano.',
    feature2_title:'Encuentra tus juegos',feature2_body:'Búsqueda automática de juegos instalados y posibilidad de añadirlos manualmente.',
    feature3_title:'Steam y accesos',feature3_body:'Accede a tus juegos de Steam, ejecutables y accesos directos desde tu biblioteca.',
    feature4_title:'Hazlo tuyo',feature4_body:'Elige tema, color de acento, vista e iconos para adaptar la experiencia a tu gusto.',
    feature5_title:'Tus datos a salvo',feature5_body:'Exporta e importa una copia completa de tu biblioteca y configuración en un ZIP.',
    feature6_title:'Juega sin rodeos',feature6_body:'Busca, selecciona y ejecuta tus favoritos desde una interfaz clara y sencilla.',
    experience_kicker:'DISEÑADO PARA WINDOWS',experience_title:'La apariencia también importa.',experience_body:'Una experiencia visual limpia, con tonos oscuros y claros, colores de acento y controles organizados para que cada detalle encaje contigo.',experience_li1:'Tema claro y oscuro',experience_li2:'Colores de acento personalizables',experience_li3:'Vistas de lista y tarjetas',
    news_kicker:'ACTUALIZACIONES',faq_kicker:'SIN COMPLICACIONES',faq_title:'Todo claro, desde el principio.',faq_description:'Las respuestas rápidas que necesitas antes de empezar.',
    faq1_q:'¿SerLO PLay GamES es gratuito?',faq1_a:'Sí. Todas sus funciones están disponibles gratuitamente. El apoyo voluntario al proyecto no desbloquea contenido ni funciones.',
    faq2_q:'¿Dónde se descarga y actualiza?',faq2_a:'Se distribuye exclusivamente a través de Microsoft Store, que también gestiona sus actualizaciones.',
    faq3_q:'¿Puedo añadir mis juegos manualmente?',faq3_a:'Sí. Puedes buscar juegos instalados automáticamente o añadir juegos, aplicaciones y accesos directos por tu cuenta.',
    faq4_q:'¿Funciona en Windows 10 y 11?',faq4_a:'Sí, en las versiones compatibles de Windows 10 y Windows 11 de 64 bits.',
    cta_kicker:'TU PRÓXIMA PARTIDA EMPIEZA AQUÍ',cta_title:'Todo preparado para jugar.',cta_body:'Tu biblioteca, tus juegos, tus aplicaciones y tus accesos favoritos, en un mismo lugar. Gratuito y disponible en Microsoft Store.',cta_store_short:'Ver ficha en Microsoft Store',
    footer_description:'Organiza tu mundo digital. Disfruta de lo importante.',footer_links:'Explorar',footer_contact:'Contacto y apoyo',footer_help:'Formulario de contacto',footer_support:'Apoyo voluntario',legal_summary:'Términos y condiciones',legal_text:'SerLO PLay GamES se ofrece gratuitamente a través de Microsoft Store. El apoyo económico es opcional y no condiciona el acceso a las funciones. El software se proporciona tal cual, sin garantías adicionales; se recomienda realizar copias de seguridad de los datos.',footer_made:'Hecho para Windows, con pasión por los videojuegos.',
    theme_label:'Cambiar a modo claro',menu_open:'Abrir menú',menu_close:'Cerrar menú',meta:'SerLO PLay GamES: organiza, personaliza y ejecuta tus juegos y aplicaciones en Windows. Gratis en Microsoft Store.',page_title:'SerLO PLay GamES — Tu universo, un solo lugar'
  },
  en: {
    skip:'Skip to content',nav_features:'Features',nav_experience:'Experience',nav_news:'What’s new',nav_faq:'FAQ',nav_contact:'Contact',
    hero_eyebrow:'A HOME FOR YOUR DIGITAL LIBRARY',hero_title_1:'Your games.',hero_title_2:'Your space.',hero_title_3:'Your rules.',
    hero_description:'A simpler way to organize, find and launch your games and apps on Windows. Everything you need, all in one place.',
    cta_store:'Get it on Microsoft Store',cta_explore:'Explore features',hero_check_free:'Free',hero_check_os:'Windows 10 & 11 · 64-bit',hero_check_lang:'English & Spanish',
    preview_lib:'Your library',preview_tools:'Tools',preview_settings:'Settings',preview_collection:'MY COLLECTION',preview_add:'Add',preview_search:'Search your library...',preview_ready:'Library ready',preview_start:'Launch',preview_disclaimer:'Concept UI illustration · Not an actual screenshot',
    stat1_title:'One library',stat1_sub:'Everything organized',stat2_title:'Make it yours',stat2_sub:'Themes and colors',stat3_title:'Keep it simple',stat3_sub:'Add, launch and enjoy',
    features_kicker:'ALL YOU NEED',features_title:'Your library, elevated.',features_subtitle:'Designed to help you enjoy your games and apps without wasting time looking for them.',
    feature1_title:'Everything in one place',feature1_body:'Keep games, applications and shortcuts together in your very own library.',
    feature2_title:'Discover your games',feature2_body:'Automatically find installed games or add them manually whenever you like.',
    feature3_title:'Steam and shortcuts',feature3_body:'Launch Steam games, executables and shortcuts from your library.',
    feature4_title:'Make it yours',feature4_body:'Choose a theme, accent color, layout and icons to match your style.',
    feature5_title:'Back up your library',feature5_body:'Export and import your entire library and settings in a ZIP backup.',
    feature6_title:'Launch with ease',feature6_body:'Find, select and launch your favorites from a clean, straightforward interface.',
    experience_kicker:'BUILT FOR WINDOWS',experience_title:'Looks matter, too.',experience_body:'A clean visual experience with light and dark themes, accent colors and thoughtful controls that fit the way you use your PC.',experience_li1:'Light and dark themes',experience_li2:'Customizable accent colors',experience_li3:'List and card layouts',
    news_kicker:'UPDATES',faq_kicker:'NO COMPLICATIONS',faq_title:'Everything you need to know.',faq_description:'Quick answers before you get started.',
    faq1_q:'Is SerLO PLay GamES free?',faq1_a:'Yes. All features are available for free. Optional support does not unlock content or functionality.',
    faq2_q:'Where can I get updates?',faq2_a:'It is distributed exclusively through Microsoft Store, which also handles updates.',
    faq3_q:'Can I add games manually?',faq3_a:'Yes. You can automatically search for installed games or add games, apps and shortcuts yourself.',
    faq4_q:'Does it work on Windows 10 and 11?',faq4_a:'Yes, on compatible 64-bit versions of Windows 10 and Windows 11.',
    cta_kicker:'YOUR NEXT SESSION STARTS HERE',cta_title:'Ready when you are.',cta_body:'Your library, your games, your apps and your favorite shortcuts, all in one place. Free on Microsoft Store.',cta_store_short:'View app listing on Microsoft Store',
    footer_description:'Organize your digital world. Enjoy what matters.',footer_links:'Explore',footer_contact:'Contact & support',footer_help:'Contact form',footer_support:'Optional support',legal_summary:'Terms and conditions',legal_text:'SerLO PLay GamES is offered for free through Microsoft Store. Financial support is optional and does not affect feature access. The software is provided as is, without additional warranties; keeping regular backups of your data is recommended.',footer_made:'Made for Windows, with a passion for gaming.',
    theme_label:'Switch to light mode',menu_open:'Open menu',menu_close:'Close menu',meta:'SerLO PLay GamES: organize, customize and launch your games and apps on Windows. Free on Microsoft Store.',page_title:'SerLO PLay GamES — Your games, your space'
  }
};

// Ampliación de idioma de la web 02: galería real, identidad y textos revisados.
Object.assign(translations.es, {
  nav_gallery:'Capturas', hero_realshot:'Captura real de la aplicación · Pulsa para ampliar',
  stat3_sub:'Añade, inicia y disfruta',
  feature6_title:'Todo a un clic',
  cta_kicker:'TU ESPACIO, LISTO PARA TI',cta_title:'Todo preparado para disfrutar.',
  footer_made:'Hecho para Windows, con pasión por lo que disfrutas.',
  gallery_kicker:'LA EXPERIENCIA REAL',gallery_title:'Así se ve tu nuevo espacio.',
  gallery_subtitle:'Juegos, aplicaciones y herramientas, tal como los encontrarás en SerLO PLay GamES. Pulsa una imagen para verla en grande.',
  gallery_legal:'Los nombres, marcas e iconos de juegos y aplicaciones pertenecen a sus propietarios. Se muestran únicamente como ejemplos visuales.',
  gal_cards:'Tus juegos, en tarjetas',gal_cards_desc:'Todo más visual, a tu manera.',
  gal_list:'Biblioteca en lista',gal_list_desc:'Encuentra lo que buscas de un vistazo.',
  gal_apps:'También tus aplicaciones',gal_apps_desc:'Tu PC, mucho más organizado.',
  gal_tools:'Herramientas a mano',gal_tools_desc:'Búsqueda, copias y mantenimiento.',
  gal_settings:'Personaliza tu espacio',gal_settings_desc:'Temas, colores y preferencias.',
  gal_light:'Luz a tu estilo',gal_light_desc:'La misma experiencia, también en claro.',
  gal_about:'Conoce SerLO',gal_about_desc:'Una aplicación gratuita y con personalidad.',
  lightbox_help:'Usa las flechas para cambiar de imagen y Esc para cerrar.',
  faq1_q:'¿SerLO PLay GamES es gratuito?',
  meta:'SerLO PLay GamES: organiza, personaliza y ejecuta tus juegos y aplicaciones en Windows. Gratis en Microsoft Store.',
  page_title:'SerLO PLay GamES — Tu universo, un solo lugar'
});
Object.assign(translations.en, {
  nav_gallery:'Screenshots',hero_realshot:'Actual app screenshot · Click to enlarge',
  stat3_sub:'Add, launch and enjoy',feature6_title:'Everything a click away',
  cta_kicker:'YOUR SPACE, READY FOR YOU',cta_title:'Everything you need to enjoy.',
  footer_made:'Made for Windows, with passion for what you love.',
  gallery_kicker:'THE REAL EXPERIENCE',gallery_title:'Meet your new space.',
  gallery_subtitle:'Games, apps and tools as they really look in SerLO PLay GamES. Select a screenshot to enlarge it.',
  gallery_legal:'Names, trademarks and icons of games and applications belong to their respective owners and are shown for illustration only.',
  gal_cards:'Games in cards',gal_cards_desc:'A more visual way to browse.',
  gal_list:'Library in list view',gal_list_desc:'Find everything at a glance.',
  gal_apps:'Apps belong here, too',gal_apps_desc:'Make more of your PC.',
  gal_tools:'Tools within reach',gal_tools_desc:'Scanning, backups and maintenance.',
  gal_settings:'Make it yours',gal_settings_desc:'Themes, colors and preferences.',
  gal_light:'A brighter view',gal_light_desc:'The same experience, now in light.',
  gal_about:'Meet SerLO',gal_about_desc:'Free software, with character.',
  lightbox_help:'Use arrow keys to switch images and Esc to close.',
  faq1_q:'Is SerLO PLay GamES free?',
  meta:'SerLO PLay GamES: organize, customize and launch your games and apps on Windows. Free on Microsoft Store.',
  page_title:'SerLO PLay GamES — Your games, your space'
});

const store = {
  read(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem(key, value); } catch {} }
};
const root = document.documentElement;
const themeButton = document.querySelector('#theme-toggle');
const menuButton = document.querySelector('#mobile-menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
let language = store.read('serlo-site-lang', 'es') === 'en' ? 'en' : 'es';
let theme = store.read('serlo-site-theme', 'dark') === 'light' ? 'light' : 'dark';
function updateNews() {
  const config = window.SERLO_SITE_CONFIG?.news;
  const section = document.querySelector('.news-section');
  document.querySelectorAll('.news-nav').forEach(el => { el.hidden = !config?.enabled; });
  if (!config?.enabled) { section.hidden = true; return; }
  const data = config[language];
  if (!data) { section.hidden = true; return; }
  section.hidden = false;
  document.querySelector('#news-title').textContent = data.title;
  document.querySelector('#news-intro').textContent = data.intro;
  const container = document.querySelector('#news-items');
  container.replaceChildren();
  for (const [index, item] of data.items.entries()) {
    const article = document.createElement('article'); article.className = 'news-card';
    const number = document.createElement('span'); number.className = 'news-number'; number.textContent = String(index+1).padStart(2,'0');
    const heading = document.createElement('h3'); heading.textContent = item.title;
    const desc = document.createElement('p'); desc.textContent = item.body;
    article.append(number, heading, desc); container.append(article);
  }
}
function setLanguage(next) {
  language = next === 'en' ? 'en' : 'es';
  root.lang = language;
  document.querySelectorAll('ms-store-badge').forEach(badge => badge.setAttribute('language', language));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = translations[language][el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    const selected = btn.dataset.setLang === language;
    btn.classList.toggle('is-active', selected); btn.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#meta-description').content = translations[language].meta;
  document.title = translations[language].page_title;
  updateNews();
  updateMenuA11y();
  updateLocalizedShots();
  document.querySelectorAll('[data-lang-block]').forEach(el => { el.hidden = el.dataset.langBlock !== language; });
  if (!lightbox.hidden) renderLightbox();
  store.write('serlo-site-lang',language);
}
function setTheme(next) {
  theme = next === 'light' ? 'light' : 'dark';
  root.dataset.theme = theme;
  const label = theme === 'dark' ? translations[language].theme_label : (language === 'en' ? 'Switch to dark mode' : 'Cambiar a modo oscuro');
  themeButton.setAttribute('aria-label', label); themeButton.setAttribute('title', label);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101116' : '#faf8f5';
  store.write('serlo-site-theme',theme);
  updateLocalizedShots();
}
function updateMenuA11y() {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', translations[language][open ? 'menu_close' : 'menu_open']);
}
function closeMenu() {
  menuButton.setAttribute('aria-expanded','false');
  mobileNav.hidden = true; updateMenuA11y();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open)); mobileNav.hidden = !open; updateMenuA11y();
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.querySelectorAll('[data-set-lang]').forEach(button => button.addEventListener('click', () => { setLanguage(button.dataset.setLang);setTheme(theme); }));
themeButton.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
// Galería de capturas reales ES/EN, con interacción accesible.
const shotOrder = ['cards','list','apps','tools','settings','light','about'];
const shotCaptions = {
  cards:'gal_cards',list:'gal_list',apps:'gal_apps',tools:'gal_tools',settings:'gal_settings',light:'gal_light',about:'gal_about'
};
const lightbox = document.getElementById('shot-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCount = document.getElementById('lightbox-count');
let currentShotKey = 'cards';
let lastShotTrigger = null;
function previewSrc(key) { return 'assets/capturas/'+key+'-'+language+'.webp'; }
function lightboxSrc(key) { return key === 'about' ? 'assets/capturas/about-'+language+'-full.webp' : previewSrc(key); }
function updateLocalizedShots() {
  const heroTrigger = document.querySelector('.hero-shot');
  if (heroTrigger) heroTrigger.dataset.shotKey = theme === 'light' ? 'light' : 'cards';
  document.querySelectorAll('.localized-shot').forEach(img => {
    const parent = img.closest('[data-shot-key]');
    const key = parent?.dataset.shotKey;
    const value = key ? previewSrc(key) : img.dataset['shot'+(language==='es'?'Es':'En')];
    if (value && img.getAttribute('src') !== value) img.setAttribute('src',value);
    if (key) img.alt = translations[language][shotCaptions[key]] || 'SerLO PLay GamES';
    if (parent?.tagName === 'BUTTON') parent.setAttribute('aria-label', (language==='es'?'Ampliar: ':'Enlarge: ')+(translations[language][shotCaptions[key]]||'SerLO PLay GamES'));
  });
}
function renderLightbox() {
  if (lightbox.hidden) return;
  lightboxImage.src = lightboxSrc(currentShotKey);
  lightboxImage.alt = translations[language][shotCaptions[currentShotKey]] || 'SerLO PLay GamES';
  lightboxTitle.textContent = lightboxImage.alt;
  lightboxCount.textContent = String(shotOrder.indexOf(currentShotKey)+1)+' / '+shotOrder.length;
  document.querySelectorAll('[data-close-lightbox]').forEach(el=>el.setAttribute('aria-label',language==='es'?'Cerrar imagen':'Close image'));
  document.getElementById('shot-prev').setAttribute('aria-label',language==='es'?'Imagen anterior':'Previous image');
  document.getElementById('shot-next').setAttribute('aria-label',language==='es'?'Imagen siguiente':'Next image');
}
function openLightbox(key, trigger) {
  currentShotKey = shotOrder.includes(key) ? key : 'cards'; lastShotTrigger = trigger;
  lightbox.hidden = false; document.body.classList.add('lightbox-open');
  renderLightbox(); lightbox.focus({preventScroll:true});
}
function closeLightbox(){ if(lightbox.hidden)return; lightbox.hidden=true;document.body.classList.remove('lightbox-open');lastShotTrigger?.focus({preventScroll:true}); }
function moveLightbox(inc){const i=shotOrder.indexOf(currentShotKey);currentShotKey=shotOrder[(i+inc+shotOrder.length)%shotOrder.length];renderLightbox();}
document.querySelectorAll('.screenshot-trigger').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.shotKey,el)));
document.querySelectorAll('[data-close-lightbox]').forEach(el=>el.addEventListener('click',closeLightbox));
document.getElementById('shot-prev').addEventListener('click',()=>moveLightbox(-1));
document.getElementById('shot-next').addEventListener('click',()=>moveLightbox(1));
document.addEventListener('keydown',event=>{if(lightbox.hidden)return;
  if(event.key==='Escape'){event.preventDefault();closeLightbox();}
  if(event.key==='ArrowRight'){event.preventDefault();moveLightbox(1);}
  if(event.key==='ArrowLeft'){event.preventDefault();moveLightbox(-1);}
  if(event.key==='Tab'){ const focusables=[...lightbox.querySelectorAll('button')];const first=focusables[0],last=focusables[focusables.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();} }
});
setLanguage(language); setTheme(theme);
