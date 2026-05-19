const WHATSAPP_NUMBER = "5491179059831";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const CONTACT = {
  email: "alpanel.ar@gmail.com",
  instagram: "https://www.instagram.com/alpanel.ar",
  whatsapp: "+54 9 11 7905-9831",
};

const BASE_SPECS = [
  ["Espesores disponibles", "45 mm / 65 mm / 95 mm"],
  ["Ancho efectivo", "950 mm"],
  ["Núcleo aislante", "PU alta densidad (>=40 kg/m3)"],
  ["Clase de fuego", "B1 (material ignífugo)"],
  ["Garantía / Vida útil", "5 años / Más de 25 años"],
];

const FAQ_ITEMS = [
  {
    q: "¿Qué es Alpanel?",
    a: "Es un sistema constructivo de panel de aluminio con aislación integrada que reemplaza estructura, aislación y terminación en una sola pieza, reduciendo tiempos de obra hasta un 40%.",
  },
  {
    q: "¿De qué material está hecho?",
    a: "Está fabricado con aleación de aluminio H26 y núcleo de poliuretano de 5 componentes de alta densidad (>=40 kg/m3), logrando resistencia mecánica y térmica a la vez.",
  },
  {
    q: "¿Cuánto dura un cerramiento con Alpanel?",
    a: "Más de 25 años de vida útil proyectada, con cero mantenimiento correctivo habitual y sin necesidad de repintado periódico.",
  },
  {
    q: "¿Tiene clasificación de fuego?",
    a: "Sí. Clasificación B1, indicada para proyectos con exigencia de comportamiento ignífugo en entornos industriales y logísticos.",
  },
  {
    q: "¿Sirve para paredes y techos?",
    a: "Sí, para ambos. Se usa como envolvente completa en viviendas, galpones, depósitos y edificios industriales.",
  },
  {
    q: "¿Cuánto se ahorra en tiempo de obra?",
    a: "Hasta un 40% en montaje de envolvente por su sistema de encastre tipo clic y resolución en un solo paso.",
  },
  {
    q: "¿Qué terminaciones hay disponibles?",
    a: "Más de 100 terminaciones y colores para integración arquitectónica de fachadas y cubiertas visibles.",
  },
  {
    q: "¿Se instala con selladores húmedos?",
    a: "No en los empalmes longitudinales. Su junta superpuesta tipo clic minimiza filtraciones y puentes térmicos sin dependencia de selladores tradicionales.",
  },
  {
    q: "¿Cómo se cotiza el m2?",
    a: "La cotización se define por espesor, metrados, tipología de obra y logística. La inversión total suele mejorar al considerar tiempos y mantenimiento a largo plazo.",
  },
  {
    q: "¿Hay distribución nacional?",
    a: "Sí. Alpanel opera con distribución en toda Argentina y soporte técnico comercial para obras nuevas y ampliaciones.",
  },
];

const ROUTES = {
  inicio: {
    name: "Inicio",
    title: "Panel de Aluminio con Aislación Integrada",
    subtitle: "Estructura, aislación y terminación en una sola pieza.",
    description:
      "Reduce un 40% el tiempo de obra. Cero mantenimiento. Veinticinco años de vida útil.",
    heroImage: "https://alpanel.com.ar/img_hero.png",
    kpis: [
      { display: "-40%", counter: 40, prefix: "-", suffix: "%", label: "Tiempo de montaje" },
      { display: "+25", counter: 25, prefix: "+", suffix: "", label: "Años de vida útil" },
      { display: "B1", counter: null, prefix: "", suffix: "", label: "Clasificación de fuego" },
    ],
    advantages: [
      {
        label: "Velocidad de obra",
        value: "-40%",
        desc: "Un solo gremio. Encastre clic. Menor tiempo de montaje en envolvente completa.",
      },
      {
        label: "Durabilidad real",
        value: "+25 años",
        desc: "Aluminio H26 con resistencia a corrosión y sin mantenimiento correctivo recurrente.",
      },
      {
        label: "Aislación térmica",
        value: "PU >=40",
        desc: "Núcleo de poliuretano de alta densidad para lograr mejor estabilidad térmica interior.",
      },
    ],
    applications: [
      {
        title: "Industria",
        desc: "Naves industriales de alta exigencia",
        img: "https://alpanel.com.ar/img_industria.jpg",
        alt: "Nave industrial construida con sistema Alpanel",
        route: "panel-aluminio",
      },
      {
        title: "Agro",
        desc: "Infraestructura rural optimizada",
        img: "https://alpanel.com.ar/img_agro.jpg",
        alt: "Infraestructura agropecuaria con paneles Alpanel",
        route: "panel-aluminio",
      },
      {
        title: "Construcciones metálicas",
        desc: "Estructuras de rápida ejecución",
        img: "https://alpanel.com.ar/img_panel.png",
        alt: "Detalle de panel Alpanel para construcciones metálicas",
        route: "panel-aluminio",
        fit: "contain",
      },
      {
        title: "Oficinas",
        desc: "Espacios corporativos aislados",
        img: "https://alpanel.com.ar/img_oficinas.jpg",
        alt: "Oficinas con envolvente de paneles de aluminio Alpanel",
        route: "comparativas",
      },
      {
        title: "Vivienda moderna",
        desc: "Residencias de vanguardia térmica",
        img: "https://alpanel.com.ar/img_vivienda.jpg",
        alt: "Vivienda moderna construida con sistema Alpanel",
        route: "panel-aluminio",
      },
      {
        title: "Logística",
        desc: "Centros de distribución inteligentes",
        img: "./logistica-nueva.png",
        alt: "Centro logístico con paneles Alpanel",
        route: "panel-aluminio",
      },
    ],
    materials: [
      {
        tab: "Composición",
        text: "Lámina de aluminio aleado H26 en ambas caras + núcleo inyectado de poliuretano (>=40 kg/m3). Resultado: bloque monolítico liviano, autoportante y térmicamente eficiente.",
      },
      {
        tab: "Dimensiones",
        text: "Ancho efectivo 950 mm con espesores de 45, 65 y 95 mm. Producción modular para reducir juntas y desperdicio de corte en obra.",
      },
      {
        tab: "Performance",
        text: "Clase de fuego B1, comportamiento higrotérmico estable y terminación lista para uso interior/exterior sin capas secundarias.",
      },
    ],
    about: [
      "Distribución nacional y soporte técnico para etapa comercial, diseño y montaje.",
      "Enfoque de costo total de propiedad: menor tiempo, menor mantenimiento y menor intervención correctiva.",
      "Sistema orientado a galpones, logística, industria y vivienda modular/steel frame.",
    ],
  },
  "panel-aluminio": {
    name: "Panel Aluminio",
    title: "Panel de Aluminio con Aislación Integrada",
    heroImage: "https://alpanel.com.ar/img_panel.png",
    intro:
      "Alpanel resuelve de forma integral la envolvente, integrando núcleo térmico de poliuretano y caras H26 en una única pieza de alto rendimiento.",
    bullets: [
      "Doble función mecánica y térmica con espesores de hasta 95 mm.",
      "Capa exterior H26 resistente a corrosión y exposición UV severa.",
      "Cara interior limpia y lavable para usos higiénicos y productivos.",
    ],
    faq: [
      ["¿Qué diferencia tiene H26 frente a chapa estándar?", "Aporta ductilidad y resistencia, evitando procesos de oxidación que sí aparecen en sistemas convencionales."],
      ["¿Es autoportante?", "Sí. Según luces y cálculo, su geometría nervada permite trabajar con menor densidad estructural."],
      ["¿Se usan selladores en junta?", "No en junta longitudinal. El sistema clic reduce riesgo de filtración capilar y puente térmico."],
    ],
  },
  comparativas: {
    name: "Comparativas",
    title: "Alpanel vs Chapa Galvanizada vs Panel de Acero",
    heroImage: "https://alpanel.com.ar/img_oficinas.jpg",
    intro:
      "La decisión técnica debe evaluarse por costo total de propiedad, no solo costo inicial. Esta sección facilita una comparación rápida orientada a obra real.",
    bullets: [
      "Frente a chapa tradicional, elimina corrosión, condensación y ruido por lluvia.",
      "Frente a panel de acero, baja peso propio y mejora comportamiento en entornos húmedos.",
      "Resuelve techo + aislación + terminación en una misma unidad constructiva.",
    ],
    faq: [
      ["¿Es más económico a largo plazo?", "Sí. A largo plazo es más rentable porque reduce tiempos de montaje y baja el costo de mantenimiento en el tiempo."],
      ["¿Es más delicado que otras opciones?", "No. Aluminio H26 combina dureza, flexibilidad estructural y buena estabilidad superficial."],
      ["¿La terminación mantiene el color?", "Sí. Los procesos industriales de pintado mejoran la durabilidad del color frente a lluvia, radiación UV y exposición exterior continua."],
      ["¿Requiere mantenimiento frecuente?", "No. El mantenimiento habitual es mínimo: limpieza periódica e inspección visual preventiva."],
    ],
  },
  faq: {
    name: "FAQ",
    title: "Preguntas Frecuentes sobre Alpanel",
  },
  contacto: {
    name: "Contacto",
    title: "Contacto Comercial Alpanel",
    intro: "Canales directos para cotización y consultas comerciales.",
  },
};

const app = document.getElementById("app");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.getElementById("siteHeader");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let sliderTimer = null;
let lightboxItems = [];
let lightboxIndex = 0;
let lightboxBound = false;

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  mainNav.classList.toggle("open", !expanded);
});

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 10);
});

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) {
    location.hash = "#/inicio";
    return;
  }
  render();
  initBackground();
});

function routeKey() {
  const raw = location.hash.replace(/^#\/?/, "") || "inicio";
  if (raw === "material") return "panel-aluminio";
  if (raw === "principales" || raw === "nosotros") return "inicio";
  if (raw === "galpones" || raw === "viviendas" || raw === "industrial") return "panel-aluminio";
  return ROUTES[raw] ? raw : "inicio";
}

function waLink(text) {
  if (!text) return WHATSAPP_BASE;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function render() {
  const key = routeKey();
  setActiveNav(key);
  closeMenu();
  closeLightbox();
  app.dataset.route = key;
  document.body.dataset.route = key;

  if (key === "inicio") {
    app.innerHTML = renderHome();
  } else if (key === "panel-aluminio") {
    app.innerHTML = renderPanelPage(ROUTES[key]);
  } else if (key === "comparativas") {
    app.innerHTML = renderComparativesPage(ROUTES[key]);
  } else if (key === "faq") {
    app.innerHTML = renderFaqPage();
  } else if (key === "contacto") {
    app.innerHTML = renderContactPage();
  } else {
    app.innerHTML = renderGenericPage(ROUTES[key]);
  }

  bindAccordions();
  bindTabs();
  bindCalculator();
  bindSlider();
  bindLightbox();
  bindPanelHotspots();
  bindHomeSimulator();
  bindReveals();
  bindCounters();
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("open");
}

function setActiveNav(key) {
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === key);
  });
}

function renderHome() {
  const data = ROUTES.inicio;

  return `
    <article class="page page-home">
      <section class="hero hero-home hero-home-bg reveal" style="--hero-image:url('${data.heroImage}')">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="kicker">Sistema 3 en 1 para envolventes</div>
            <h1><span class="gold">ALPANEL</span></h1>
            <p class="hero-title-sub"><strong>${data.title}</strong></p>
            <p>${data.description}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="${waLink("Hola Alpanel, quiero cotizar mi obra")}" target="_blank" rel="noopener noreferrer">Cotizar por WhatsApp</a>
              <a class="btn btn-ghost" href="#/panel-aluminio">Ver ficha técnica</a>
            </div>
            <div class="kpi-strip">
              <span>ISO 9001</span>
              <span>ISO 14001</span>
              <span>CE</span>
              <span>SONCAP</span>
            </div>
          </div>
          <div class="hero-side">
            <div class="stat-panel">
            ${data.kpis
              .map((item) => {
                if (item.counter === null) {
                  return `
                    <div class="stat-card">
                      <div class="stat-value">${item.display}</div>
                      <small>${item.label}</small>
                    </div>
                  `;
                }
                return `
                  <div class="stat-card">
                    <div class="stat-value" data-counter="${item.counter}" data-prefix="${item.prefix}" data-suffix="${item.suffix}">0</div>
                    <small>${item.label}</small>
                  </div>
                `;
              })
              .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-advantages band-light reveal">
        <div class="section-head">
          <h2>ALPANEL: Tres Ventajas Concretas</h2>
          <p>Las mismas fortalezas del sistema actual, presentadas con foco comercial y claridad técnica.</p>
        </div>
        <div class="grid-3 grid-metrics">
          ${data.advantages
            .map(
              (adv) => `
              <article class="card metric-card">
                <h3>${adv.label}</h3>
                <strong>${adv.value}</strong>
                <p>${adv.desc}</p>
              </article>
            `,
            )
            .join("")}
        </div>
      </section>

      <section class="section section-gallery reveal">
        <div class="section-head">
          <h2>Galería de Aplicaciones</h2>
          <p>Versatilidad constructiva con estándar industrial para múltiples tipologías de proyecto.</p>
        </div>
        <div class="slider" data-slider>
          <div class="slider-track">
            ${data.applications
              .map(
                (item) => `
                <div class="slide">
                  <figure class="slide-media ${item.fit === "contain" ? "fit-contain" : ""}">
                    <button class="media-open" type="button" data-lightbox-trigger data-lightbox-caption="${item.title} · ${item.desc}" aria-label="Abrir imagen ${item.title}">
                      <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
                    </button>
                  </figure>
                  <div class="slide-copy">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <div class="chips">
                    <span class="chip">Reducción cronograma</span>
                    <span class="chip">Menor costo operativo</span>
                    <span class="chip">Cierre modular</span>
                    </div>
                  </div>
                </div>
              `,
              )
              .join("")}
          </div>
          <div class="slider-dots"></div>
        </div>
        <div class="gallery-mosaic" aria-label="Galería expandida de aplicaciones">
          ${data.applications
            .map(
              (item, index) => `
              <button class="mosaic-item mosaic-${(index % 6) + 1}" type="button" data-lightbox-trigger data-lightbox-caption="${item.title} · ${item.desc}" aria-label="Abrir imagen ${item.title}">
                <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
                <span>${item.title}</span>
              </button>
            `,
            )
            .join("")}
        </div>
      </section>

      <section class="section section-operativa band-neutral reveal">
        <div class="section-head">
          <h2>Base Operativa</h2>
          <p>Base técnica, experiencia operativa y enfoque en resultados medibles de obra.</p>
        </div>
        <div class="grid-3 grid-emphasis">
          ${data.about
            .map(
              (line, i) => `
              <article class="card">
                <h3>Punto ${i + 1}</h3>
                <p>${line}</p>
              </article>
            `,
            )
            .join("")}
        </div>
      </section>

      <section class="section section-material reveal">
        <div class="section-head">
          <h2>Material y Ficha Técnica</h2>
          <p>Resumen técnico directo para evaluación rápida del sistema.</p>
        </div>
        <table class="data-table" aria-label="Especificaciones técnicas Alpanel">
          <thead>
            <tr><th>Parámetro</th><th>Valor</th></tr>
          </thead>
          <tbody>
            ${BASE_SPECS.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody>
        </table>
      </section>

      <section class="section section-certified reveal">
        <div class="section-head">
          <h2>Inversión Certificada y Segura</h2>
          <p>Indicadores comerciales clave para acelerar decisiones de compra.</p>
        </div>
        <div class="grid-3">
          <article class="card"><h3>Reducción cronogramas</h3><strong>-40%</strong></article>
          <article class="card"><h3>Ahorro en envolvente</h3><strong>-30%</strong></article>
          <article class="card"><h3>Comportamiento al fuego</h3><strong>B1</strong></article>
        </div>
      </section>

      ${renderHomeInteractionSection()}

      ${renderContactBlock()}
    </article>
  `;
}

function renderGenericPage(data) {
  const routeSlug = slugify(data.name);
  const routeHero = data.heroImage || ROUTES.inicio.heroImage;

  return `
    <article class="page page-generic page-${routeSlug} route-${routeSlug}">
      <section class="hero hero-generic hero-route reveal" style="--route-image:url('${routeHero}')">
        <div class="hero-grid generic-grid">
          <div class="hero-copy">
            <div class="kicker">${data.name}</div>
            <h1>${data.title}</h1>
            <p>${data.intro}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="${waLink(`Hola Alpanel, quiero info sobre ${data.name}`)}" target="_blank" rel="noopener noreferrer">Cotizar ahora</a>
              <a class="btn btn-ghost" href="#/comparativas">Comparar sistemas</a>
            </div>
          </div>
          <div class="spec-matrix">
            <h3>Ficha Resumen</h3>
            <ul>
              ${BASE_SPECS.map((row) => `<li><span>${row[0]}</span><strong>${row[1]}</strong></li>`).join("")}
            </ul>
          </div>
          <div class="stat-panel">
            <div class="stat-card"><div class="stat-value" data-counter="40" data-suffix="%">0</div><small>Menos tiempo de montaje</small></div>
            <div class="stat-card"><div class="stat-value" data-counter="25" data-suffix=" años">0</div><small>Vida útil esperada</small></div>
            <div class="stat-card"><div class="stat-value">B1</div><small>Clasificación ignífuga</small></div>
          </div>
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>Por qué Alpanel</h2>
          <p>Beneficios específicos para esta tipología de proyecto.</p>
        </div>
        <div class="grid-3 grid-benefits">
          ${data.bullets
            .map(
              (bullet, idx) => `
              <article class="card card-step">
                <span class="card-index">0${idx + 1}</span>
                <p>${bullet}</p>
              </article>
            `,
            )
            .join("")}
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>Especificaciones Técnicas</h2>
          <p>Parámetros base utilizados en la propuesta comercial y técnica.</p>
        </div>
        <table class="data-table" aria-label="Especificaciones técnicas Alpanel">
          <thead><tr><th>Parámetro</th><th>Valor</th></tr></thead>
          <tbody>
            ${BASE_SPECS.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody>
        </table>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>Preguntas Frecuentes</h2>
          <p>Respuestas rápidas para acelerar evaluación técnica y comercial.</p>
        </div>
        <div class="accordion">
          ${data.faq.map((pair) => accordionItem(pair[0], pair[1])).join("")}
        </div>
      </section>

      ${data.name === "Comparativas" ? renderComparisonSection() : ""}
      ${renderContactBlock()}
    </article>
  `;
}

function renderPanelPage(data) {
  const routeSlug = slugify(data.name);
  const routeHero = data.heroImage || ROUTES.inicio.heroImage;

  return `
    <article class="page page-generic page-${routeSlug} route-${routeSlug}">
      <section class="hero hero-generic hero-route reveal" style="--route-image:url('${routeHero}')">
        <div class="hero-grid generic-grid">
          <div class="hero-copy">
            <div class="kicker">${data.name}</div>
            <h1>${data.title}</h1>
            <p>${data.intro}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="${waLink(`Hola Alpanel, quiero info sobre ${data.name}`)}" target="_blank" rel="noopener noreferrer">Cotizar ahora</a>
              <a class="btn btn-ghost" href="#/comparativas">Comparar sistemas</a>
            </div>
          </div>
          <div class="spec-matrix">
            <h3>Ficha Resumen</h3>
            <ul>
              ${BASE_SPECS.map((row) => `<li><span>${row[0]}</span><strong>${row[1]}</strong></li>`).join("")}
            </ul>
          </div>
          <div class="stat-panel">
            <div class="stat-card"><div class="stat-value" data-counter="40" data-suffix="%">0</div><small>Menos tiempo de montaje</small></div>
            <div class="stat-card"><div class="stat-value" data-counter="25" data-suffix=" años">0</div><small>Vida útil esperada</small></div>
            <div class="stat-card"><div class="stat-value">B1</div><small>Clasificación ignífuga</small></div>
          </div>
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>Por qué Alpanel</h2>
          <p>Beneficios específicos para esta tipología de proyecto.</p>
        </div>
        <div class="grid-3 grid-benefits">
          ${data.bullets
            .map(
              (bullet, idx) => `
              <article class="card card-step">
                <span class="card-index">0${idx + 1}</span>
                <p>${bullet}</p>
              </article>
            `,
            )
            .join("")}
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>Especificaciones Técnicas</h2>
          <p>Parámetros base utilizados en la propuesta comercial y técnica.</p>
        </div>
        <table class="data-table" aria-label="Especificaciones técnicas Alpanel">
          <thead><tr><th>Parámetro</th><th>Valor</th></tr></thead>
          <tbody>
            ${BASE_SPECS.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody>
        </table>
      </section>

      ${renderPanelDetailSection()}
      ${renderProcessSection()}

      <section class="section reveal">
        <div class="section-head">
          <h2>Preguntas Frecuentes</h2>
          <p>Respuestas rápidas para acelerar evaluación técnica y comercial.</p>
        </div>
        <div class="accordion">
          ${data.faq.map((pair) => accordionItem(pair[0], pair[1])).join("")}
        </div>
      </section>
    </article>
  `;
}

function renderComparativesPage(data) {
  const routeSlug = slugify(data.name);
  const routeHero = data.heroImage || ROUTES.inicio.heroImage;

  return `
    <article class="page page-generic page-${routeSlug} route-${routeSlug}">
      <section class="hero hero-generic hero-route reveal" style="--route-image:url('${routeHero}')">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="kicker">${data.name}</div>
            <h1>${data.title}</h1>
            <p>${data.intro}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#/contacto">Solicitar evaluación</a>
              <a class="btn btn-ghost" href="#/panel-aluminio">Ver panel de aluminio</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>Diferencias Clave</h2>
          <p>Comparación enfocada en tiempos, mantenimiento y costo operativo.</p>
        </div>
        <div class="grid-3">
          ${data.bullets.map((bullet) => `<article class="card"><p>${bullet}</p></article>`).join("")}
        </div>
      </section>

      ${renderComparisonSection()}

      <section class="section reveal">
        <div class="section-head">
          <h2>Preguntas Frecuentes</h2>
          <p>Respuestas rápidas para evaluar alternativas constructivas.</p>
        </div>
        <div class="accordion">
          ${data.faq.map((pair) => accordionItem(pair[0], pair[1])).join("")}
        </div>
      </section>
    </article>
  `;
}

function renderPanelDetailSection() {
  return `
    <section class="section section-detail reveal">
      <div class="section-head">
        <h2>Detalle Técnico Interactivo</h2>
        <p>Pasá el cursor por cada capa para ver su función en el sistema constructivo.</p>
      </div>
      <div class="panel-detail">
        <div class="panel-detail-visual" aria-label="Detalle técnico del panel de aluminio">
          <img src="https://alpanel.com.ar/img_panel.png" alt="Detalle técnico del panel Alpanel" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
          <button class="hotspot active" data-layer="externa" data-title="Aluminio exterior H26" data-copy="Primera barrera frente a clima, corrosión y radiación UV." data-impact="Impacto: máxima durabilidad en exposición exterior." style="top:16%;left:14%;" type="button" aria-label="Aluminio exterior"></button>
          <button class="hotspot" data-layer="nucleo" data-title="Núcleo PU alta densidad" data-copy="Aislación térmica continua para estabilizar temperatura interior." data-impact="Impacto: menor mantenimiento por condensación y mejor confort." style="top:50%;left:48%;" type="button" aria-label="Núcleo PU"></button>
          <button class="hotspot" data-layer="interna" data-title="Aluminio interior" data-copy="Terminación limpia, durable y lista para uso industrial o residencial." data-impact="Impacto: cierre interior sólido y de fácil limpieza." style="top:82%;left:70%;" type="button" aria-label="Aluminio interior"></button>
        </div>
        <div class="panel-layer-copy">
          <article class="layer-card active" data-layer-card="externa">
            <h3>Aluminio exterior H26</h3>
            <p>Primera barrera frente a clima, corrosión y radiación UV.</p>
          </article>
          <article class="layer-card" data-layer-card="nucleo">
            <h3>Núcleo PU alta densidad</h3>
            <p>Aislación térmica continua para estabilizar temperatura interior en uso real.</p>
          </article>
          <article class="layer-card" data-layer-card="interna">
            <h3>Aluminio interior</h3>
            <p>Terminación limpia, durable y lista para uso industrial o residencial.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderProcessSection() {
  return `
    <section class="section section-process band-light reveal">
      <div class="section-head">
        <h2>Proceso de Implementación</h2>
        <p>Secuencia corta para cotizar e implementar sin fricción operativa.</p>
      </div>
      <div class="process-strip">
        <article class="process-step"><span>01</span><h3>Cotizás</h3></article>
        <article class="process-step"><span>02</span><h3>Definimos espesor</h3></article>
        <article class="process-step"><span>03</span><h3>Se fabrica</h3></article>
        <article class="process-step"><span>04</span><h3>Se instala</h3></article>
      </div>
    </section>
  `;
}

function renderHomeInteractionSection() {
  return `
    <section class="section section-home-sim reveal">
      <div class="section-head">
        <h2>Simulador de Escenario de Obra</h2>
        <p>Explorá en segundos cómo cambia el resultado global según el sistema de cierre.</p>
      </div>
      <div class="home-sim" id="homeSim">
        <div class="home-sim-controls" role="tablist" aria-label="Escenarios de obra">
          <button class="sim-btn active" type="button" data-sim-mode="tradicional">Sistema tradicional</button>
          <button class="sim-btn" type="button" data-sim-mode="acero">Panel de acero</button>
          <button class="sim-btn" type="button" data-sim-mode="alpanel">Alpanel</button>
        </div>
        <div class="home-sim-grid">
          <article class="sim-card">
            <small>Tiempo de cierre</small>
            <strong id="simTime">100%</strong>
          </article>
          <article class="sim-card">
            <small>Mantenimiento relativo</small>
            <strong id="simMaint">100%</strong>
          </article>
          <article class="sim-card">
            <small>Costo total a 10 años</small>
            <strong id="simTco">100%</strong>
          </article>
        </div>
        <p class="home-sim-note" id="simNote">Referencia base para obra convencional de cierre.</p>
      </div>
    </section>
  `;
}

function renderFaqPage() {
  return `
    <article class="page page-faq">
      <section class="hero hero-faq reveal">
        <div>
          <div class="kicker">FAQ</div>
          <h1>${ROUTES.faq.title}</h1>
          <p>Todo lo que necesitás saber sobre materiales, instalación, garantía, precio y diferencias frente a otros sistemas.</p>
        </div>
      </section>

      <section class="section reveal">
        <div class="accordion">
          ${FAQ_ITEMS.map((item) => accordionItem(item.q, item.a)).join("")}
        </div>
      </section>

      ${renderContactBlock()}
    </article>
  `;
}

function renderContactPage() {
  return `
    <article class="page page-contacto">
      <section class="hero hero-contact reveal">
        <div>
          <div class="kicker">Contacto Comercial</div>
          <h1>${ROUTES.contacto.title}</h1>
          <p>${ROUTES.contacto.intro}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${waLink()}" target="_blank" rel="noopener noreferrer">WhatsApp directo</a>
            <a class="btn btn-ghost" href="mailto:${CONTACT.email}">${CONTACT.email}</a>
            <a class="btn btn-ghost" href="${CONTACT.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </section>
      ${renderContactBlock()}
    </article>
  `;
}
function renderComparisonSection() {
  return `
    <section class="section reveal">
      <div class="section-head">
        <h2>Calculadora Comparativa</h2>
        <p>Estimación orientativa de tiempos y costo relativo por superficie de cierre.</p>
      </div>
      <div class="compare-box" id="compareBox">
        <div class="compare-controls">
          <label>
            Superficie a cerrar (m2)
            <input id="areaInput" type="number" min="50" step="10" value="500" />
          </label>
          <label>
            Ajuste rápido de superficie
            <input id="areaRange" type="range" min="50" max="5000" step="50" value="500" />
          </label>
        </div>
        <div class="compare-presets" id="comparePresets">
          <button type="button" class="preset-btn active" data-system="galvanizada">Base tradicional</button>
          <button type="button" class="preset-btn" data-system="acero">Escenario acero</button>
          <button type="button" class="preset-btn" data-system="alpanel">Escenario Alpanel</button>
        </div>
        <div class="compare-callout" id="compareCallout">
          Base tradicional: referencia de comparación para tiempos, costo y mantenimiento.
        </div>
        <div class="result-grid" id="calcResult">
          <div class="result"><small>Tiempo de montaje</small><strong>--</strong></div>
          <div class="result"><small>Costo relativo envolvente</small><strong>--</strong></div>
          <div class="result"><small>Mantenimiento a 20 años</small><strong>--</strong></div>
        </div>
        <div class="compare-bars" id="compareBars">
          <div class="bar-item">
            <div class="bar-head"><span>Tiempo relativo</span><strong id="barTimeValue">--</strong></div>
            <div class="bar-track"><div class="bar-fill" id="barTime"></div></div>
          </div>
          <div class="bar-item">
            <div class="bar-head"><span>Mantenimiento relativo</span><strong id="barMaintValue">--</strong></div>
            <div class="bar-track"><div class="bar-fill" id="barMaint"></div></div>
          </div>
          <div class="bar-item">
            <div class="bar-head"><span>Costo relativo</span><strong id="barCostValue">--</strong></div>
            <div class="bar-track"><div class="bar-fill" id="barCost"></div></div>
          </div>
        </div>
        <p class="compare-note" id="compareNote">Base de comparación: sistema tradicional (100%).</p>
      </div>
    </section>
  `;
}

function renderContactBlock() {
  return `
    <section class="section reveal">
      <div class="section-head">
        <h2>Contacto</h2>
        <p>Canales directos para cotizar: WhatsApp, email e Instagram.</p>
      </div>
      <div class="contact-grid contact-grid-single">
        <aside class="contact-card">
          <h3>Alpanel Argentina</h3>
          <p>Estructura, aislación y terminación. En una sola pieza.</p>
          <div class="chips" style="margin: 1rem 0;">
            <span class="chip">Distribución nacional</span>
            <span class="chip">Soporte técnico</span>
            <span class="chip">Respuesta comercial rápida</span>
          </div>
          <ul class="contact-channels">
            <li><span>Email</span><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
            <li><span>Instagram</span><a href="${CONTACT.instagram}" target="_blank" rel="noopener noreferrer">@alpanel.ar</a></li>
            <li><span>WhatsApp</span><a href="${waLink()}" target="_blank" rel="noopener noreferrer">${CONTACT.whatsapp}</a></li>
          </ul>
          <a class="btn btn-primary" href="${waLink()}" target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a>
        </aside>
      </div>
    </section>
  `;
}
function accordionItem(question, answer) {
  return `
    <article class="ac-item">
      <button class="ac-trigger" type="button">${question}</button>
      <div class="ac-panel"><p>${answer}</p></div>
    </article>
  `;
}

function bindAccordions() {
  document.querySelectorAll(".ac-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".ac-item");
      const panel = item.querySelector(".ac-panel");
      const isOpen = item.classList.contains("open");

      item.classList.toggle("open", !isOpen);
      panel.style.maxHeight = !isOpen ? `${panel.scrollHeight}px` : "0px";
    });
  });
}

function bindTabs() {
  const tabsRoot = document.querySelector("[data-tabs]");
  if (!tabsRoot) return;

  const buttons = Array.from(tabsRoot.querySelectorAll(".tab-btn"));
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.tabTarget;
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.hidden = panel.id !== target;
      });
    });
  });
}

function bindCalculator() {
  const areaInput = document.getElementById("areaInput");
  const areaRange = document.getElementById("areaRange");
  const presets = Array.from(document.querySelectorAll(".preset-btn"));
  const compareNote = document.getElementById("compareNote");
  const result = document.getElementById("calcResult");
  const barTime = document.getElementById("barTime");
  const barMaint = document.getElementById("barMaint");
  const barCost = document.getElementById("barCost");
  const barTimeValue = document.getElementById("barTimeValue");
  const barMaintValue = document.getElementById("barMaintValue");
  const barCostValue = document.getElementById("barCostValue");
  if (!areaInput || !result) return;

  const systems = {
    galvanizada: {
      speed: 1.0,
      cost: 1.0,
      maintenance: 1.0,
      label: "Base tradicional",
      callout: "Base tradicional: referencia de comparación para tiempos, costo y mantenimiento.",
    },
    acero: {
      speed: 0.84,
      cost: 0.92,
      maintenance: 0.75,
      label: "Panel de acero",
      callout: "Panel de acero: mejora parcial, pero mantiene mantenimiento proyectado.",
    },
    alpanel: {
      speed: 0.6,
      cost: 0.85,
      maintenance: 0.0,
      label: "Alpanel",
      callout: "Alpanel reduce hasta 40% el tiempo frente a sistemas tradicionales y proyecta 0 u.r. de mantenimiento.",
    },
  };
  let selectedSystem = presets.find((btn) => btn.classList.contains("active"))?.dataset.system || "galvanizada";

  const runCalc = () => {
    const area = Math.max(50, Number(areaInput.value || 0));
    if (areaRange) areaRange.value = String(area);
    const base = systems[selectedSystem] || systems.galvanizada;

    const days = Math.round((area / 110) * base.speed);
    const costRel = (base.cost * area).toFixed(0);
    const m20 = (base.maintenance * area * 0.32).toFixed(0);
    const timeRel = Math.round(base.speed * 100);
    const maintRel = Math.round(base.maintenance * 100);
    const costRelPercent = Math.round(base.cost * 100);
    const isAlpanel = selectedSystem === "alpanel";

    result.innerHTML = `
      <div class="result ${isAlpanel ? "result-best" : ""}"><small>Tiempo de montaje estimado</small><strong>${days} días</strong></div>
      <div class="result ${isAlpanel ? "result-best" : ""}"><small>Costo relativo envolvente</small><strong>${costRel} u.r.</strong></div>
      <div class="result ${isAlpanel ? "result-best" : ""}"><small>Mantenimiento proyectado (20 años)</small><strong>${m20} u.r.</strong></div>
    `;

    if (compareNote) {
      const labels = {
        galvanizada: "Base de comparación: sistema tradicional (100%).",
        acero: "Base de comparación: panel de acero (reducción intermedia).",
        alpanel: "Base de comparación: Alpanel (menor tiempo y cero mantenimiento).",
      };
      compareNote.textContent = labels[selectedSystem] || labels.galvanizada;
    }

    const compareCallout = document.getElementById("compareCallout");
    if (compareCallout) {
      compareCallout.textContent = base.callout;
      compareCallout.classList.toggle("is-best", isAlpanel);
    }

    if (barTime && barMaint && barCost && barTimeValue && barMaintValue && barCostValue) {
      barTime.style.width = `${timeRel}%`;
      barMaint.style.width = `${maintRel}%`;
      barCost.style.width = `${costRelPercent}%`;
      [barTime, barMaint, barCost].forEach((bar) => bar.classList.toggle("is-best", isAlpanel));
      barTimeValue.textContent = `${timeRel}%`;
      barMaintValue.textContent = `${maintRel}%`;
      barCostValue.textContent = `${costRelPercent}%`;
    }
  };

  areaInput.addEventListener("input", () => {
    if (areaRange) areaRange.value = areaInput.value;
    runCalc();
  });
  if (areaRange) {
    areaRange.addEventListener("input", () => {
      areaInput.value = areaRange.value;
      runCalc();
    });
  }
  presets.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.system;
      if (!target || !systems[target]) return;
      selectedSystem = target;
      presets.forEach((item) => item.classList.toggle("active", item === btn));
      runCalc();
    });
  });
  runCalc();
}

function bindSlider() {
  if (sliderTimer) {
    clearInterval(sliderTimer);
    sliderTimer = null;
  }

  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const track = slider.querySelector(".slider-track");
  const slides = Array.from(track.children);
  const dotsWrap = slider.querySelector(".slider-dots");
  if (!track || slides.length === 0 || !dotsWrap) return;

  let idx = 0;
  dotsWrap.innerHTML = slides
    .map((_, i) => `<button type="button" data-dot="${i}" class="${i === 0 ? "active" : ""}"></button>`)
    .join("");

  const dots = Array.from(dotsWrap.querySelectorAll("button"));

  const go = (next) => {
    idx = next;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === idx));
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => go(Number(dot.dataset.dot)));
  });

  sliderTimer = setInterval(() => {
    const next = (idx + 1) % slides.length;
    go(next);
  }, 4000);
}

function bindLightbox() {
  const triggers = Array.from(document.querySelectorAll("[data-lightbox-trigger]"));
  const uniqueMap = new Map();
  lightboxItems = [];

  triggers.forEach((trigger) => {
    const img = trigger.querySelector("img");
    if (!img) return;
    const caption = trigger.dataset.lightboxCaption || "";
    const key = `${img.src}|${caption}`;
    let idx = uniqueMap.get(key);
    if (idx === undefined) {
      idx = lightboxItems.length;
      lightboxItems.push({
        src: img.src,
        alt: img.alt || "Imagen Alpanel",
        caption,
      });
      uniqueMap.set(key, idx);
    }
    trigger.dataset.lightboxIndex = String(idx);
  });

  if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxClose || !lightboxPrev || !lightboxNext) return;

  triggers.forEach((trigger) => {
    const idx = Number(trigger.dataset.lightboxIndex || 0);
    trigger.onclick = () => openLightbox(idx);
  });

  if (lightboxBound) return;
  lightboxBound = true;

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  window.addEventListener("keydown", (event) => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") stepLightbox(1);
    if (event.key === "ArrowLeft") stepLightbox(-1);
  });
}

function openLightbox(index) {
  if (!lightbox || lightboxItems.length === 0) return;
  lightboxIndex = index;
  updateLightbox();
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function stepLightbox(offset) {
  if (lightboxItems.length === 0) return;
  lightboxIndex = (lightboxIndex + offset + lightboxItems.length) % lightboxItems.length;
  updateLightbox();
}

function updateLightbox() {
  const item = lightboxItems[lightboxIndex];
  if (!item || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
  if (lightboxCounter) {
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
  }
}

function bindPanelHotspots() {
  const spots = Array.from(document.querySelectorAll(".hotspot"));
  const cards = Array.from(document.querySelectorAll("[data-layer-card]"));
  if (spots.length === 0 || cards.length === 0) return;

  const activateLayer = (layer) => {
    spots.forEach((spot) => {
      spot.classList.toggle("active", spot.dataset.layer === layer);
    });
    cards.forEach((card) => card.classList.toggle("active", card.dataset.layerCard === layer));
  };

  spots.forEach((spot) => {
    const layer = spot.dataset.layer;
    if (!layer) return;
    spot.addEventListener("mouseenter", () => activateLayer(layer));
    spot.addEventListener("focus", () => activateLayer(layer));
    spot.addEventListener("click", () => activateLayer(layer));
  });

  const initialLayer = spots.find((spot) => spot.classList.contains("active"))?.dataset.layer || spots[0]?.dataset.layer;
  if (initialLayer) {
    activateLayer(initialLayer);
  }
}

function bindHomeSimulator() {
  const root = document.getElementById("homeSim");
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll(".sim-btn"));
  const time = document.getElementById("simTime");
  const maint = document.getElementById("simMaint");
  const tco = document.getElementById("simTco");
  const note = document.getElementById("simNote");
  if (!time || !maint || !tco || !note || buttons.length === 0) return;

  const scenarios = {
    tradicional: { time: "100%", maint: "100%", tco: "100%", note: "Referencia base para obra convencional de cierre." },
    acero: { time: "78%", maint: "75%", tco: "92%", note: "Escenario acero: mejora parcial de tiempos y mantenimiento." },
    alpanel: { time: "60%", maint: "45%", tco: "85%", note: "Escenario Alpanel: menor tiempo de obra y menor costo acumulado de mantenimiento." },
  };

  const applyScenario = (mode) => {
    const data = scenarios[mode] || scenarios.tradicional;
    buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.simMode === mode));
    time.textContent = data.time;
    maint.textContent = data.maint;
    tco.textContent = data.tco;
    note.textContent = data.note;
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyScenario(btn.dataset.simMode));
  });

  applyScenario("tradicional");
}

function bindReveals() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((item) => observer.observe(item));
}

function bindCounters() {
  const nodes = document.querySelectorAll("[data-counter]");
  nodes.forEach((node) => {
    const target = Number(node.dataset.counter || 0);
    const prefix = node.dataset.prefix || "";
    const suffix = node.dataset.suffix || "";
    if (!target) {
      if (suffix || prefix) node.textContent = `${prefix}${suffix}`;
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      node.textContent = `${prefix}${current}${suffix}`;
    }, 24);
  });
}

function initBackground() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dots = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    dots.length = 0;
    const total = Math.max(24, Math.floor(window.innerWidth / 45));
    for (let i = 0; i < total; i += 1) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.8 + 0.9,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((d) => {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 202, 130, 0.4)";
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < dots.length; i += 1) {
      for (let j = i + 1; j < dots.length; j += 1) {
        const a = dots[i];
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 193, 114, ${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  resize();
  draw();
}




