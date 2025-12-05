const posts = [
  {
    image:
      'https://static.wixstatic.com/media/92e9f8_2c9add8fa72648388e210b0a9718628f~mv2.jpg/v1/fill/w_900,h_520,al_c,q_80,enc_auto/Texas%20Aviation%20Zap.jpg',
    date: '2024-05-23',
    category: { pt: 'Sustentabilidade', en: 'Sustainability' },
    title: {
      pt: 'Certificação SAF coloca a frota em rota de carbono neutro',
      en: 'SAF certification pushes the fleet toward carbon neutrality'
    },
    excerpt: {
      pt: 'Programa Taz Neutral Flights amplia o abastecimento com combustível sustentável em GRU e VCP, mantendo performance premium.',
      en: 'Taz Neutral Flights expands SAF fueling in GRU and VCP, preserving premium performance across long-range missions.'
    },
    reading: { pt: '4 min de leitura', en: '4 min read' },
    link: '#'
  },
  {
    image:
      'https://static.wixstatic.com/media/92e9f8_96bf8bb96b364ed491191f3da300839d~mv2.png/v1/fill/w_675,h_392,al_c/92e9f8_96bf8bb96b364ed491191f3da300839d~mv2.png',
    date: '2024-04-14',
    category: { pt: 'Frota', en: 'Fleet' },
    title: {
      pt: 'Global 7500 integra a malha e expande alcance hemisférico',
      en: 'Global 7500 joins the network and expands hemispheric reach'
    },
    excerpt: {
      pt: 'Nova aeronave entrega quatro ambientes de cabine, conectividade Ka-band e alcance para rotas como São Paulo ✈ Singapura.',
      en: 'The new aircraft adds four cabin zones, Ka-band connectivity and nonstop reach for São Paulo ✈ Singapore profiles.'
    },
    reading: { pt: '3 min de leitura', en: '3 min read' },
    link: '#'
  },
  {
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    date: '2024-03-08',
    category: { pt: 'Inovação', en: 'Innovation' },
    title: {
      pt: 'IA meteorológica antecipa 92% dos desvios em rota',
      en: 'AI weather radar anticipates 92% of inflight reroutings'
    },
    excerpt: {
      pt: 'Modelos proprietários cruzam dados satelitais e slots para reduzir solo não programado e aumentar a segurança.',
      en: 'Proprietary models blend satellite data and slot analytics to cut unplanned ground time and raise safety margins.'
    },
    reading: { pt: '5 min de leitura', en: '5 min read' },
    link: '#'
  },
  {
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    date: '2024-02-21',
    category: { pt: 'Mercado', en: 'Market' },
    title: {
      pt: 'Estudo aponta crescimento de 7% no charter premium latino',
      en: 'Study points to 7% growth for Latin premium charter'
    },
    excerpt: {
      pt: 'Radar Taz identifica hubs estratégicos, comportamento da demanda corporativa e impacto das novas rotas norte-americanas.',
      en: 'The Taz radar maps strategic hubs, enterprise demand behavior and the impact of new North American routes.'
    },
    reading: { pt: '6 min de leitura', en: '6 min read' },
    link: '#'
  }
];

const translations = {
  pt: {
    'nav.experiencias': 'Experiências',
    'nav.solucoes': 'Soluções',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    'hero.label': 'Especialistas em Ferry Flight',
    'hero.titleLine1': 'Entregamos sua aeronave',
    'hero.titleHighlight': 'em qualquer lugar do mundo',
    'hero.titleLine2': 'com cobertura Brasil ↔ EUA',
    'hero.lead':
      'Receba sua aeronave com rapidez, segurança e o mesmo time operacional que acompanha todo o ciclo FlyTaz.',
    'hero.primaryCta': 'Faça sua cotação agora',
    'hero.secondaryCta': 'Fale com um especialista',
    'hero.stat1': 'Horas voadas em 2023',
    'hero.stat2': 'Satisfação dos clientes',
    'hero.stat3': 'Aeronaves em operação',
    'solutions.label': 'Frota e soluções',
    'solutions.title': 'Performance inspirada nos líderes globais',
    'solutions.text':
      'Com uma paleta signature Taz e processos modelados nas melhores práticas internacionais, entregamos missões corporativas, charter e logística com eficiência e sofisticação.',
    'solutions.card1.tag': 'Programas corporativos',
    'solutions.card1.title': 'Fleet & mission design',
    'solutions.card1.text':
      'Células dedicadas, concierge global, controle operacional e previsibilidade financeira em contratos flexíveis.',
    'solutions.card1.badge': 'Ops 24/7',
    'solutions.card2.tag': 'Frota exclusiva',
    'solutions.card2.title': 'Cabines long range',
    'solutions.card2.text':
      'Curadoria da linha Global, Challenger e parcerias estratégicas para missões hemisféricas e intercontinentais.',
    'solutions.card2.badge': 'Jet IQ',
    'solutions.card3.tag': 'Tecnologia',
    'solutions.card3.title': 'Digital flight center',
    'solutions.card3.text':
      'Telemetria, IA meteorológica e manutenção preditiva conectadas aos nossos times de despacho e safety.',
    'solutions.card3.badge': 'Data Ops',
    'experience.label': 'Experiência Taz',
    'experience.title': 'Design sensorial, hospitalidade e precisão',
    'experience.text':
      'Do hangar aos lounges signature, cada ponto de contato é coreografado com hospitalidade autoral, bem-estar e integração digital.',
    'experience.card1.title': 'Hospitalidade Signature',
    'experience.card1.text': 'Menus, wellness e retail selecionados para cada missão.',
    'experience.card2.title': 'Operação Global',
    'experience.card2.text': 'Acesso imediato a +5000 aeroportos e FBOs parceiros.',
    'blog.label': 'Radar do setor',
    'blog.title': 'Blog com insights e notícias oficiais',
    'blog.text':
      'Atualize clientes e imprensa com estudos, comunicados e movimentos estratégicos da Taz em um feed inspirado no padrão editorial Bombardier.',
    'blog.sidebarLabel': 'Tendências',
    'blog.sidebarTitle': 'Workflow pronto para CMS',
    'blog.sidebarText':
      'Conecte esta grade a qualquer API (Contentful, Sanity ou Wix CMS) para automatizar o publishing e manter o time de Comunicação no controle.',
    'blog.sidebarCta': 'Ver cases completos',
    'footer.copy': '© 2024 Taz Aviation. Todos os direitos reservados.'
  },
  en: {
    'nav.experiencias': 'Experiences',
    'nav.solucoes': 'Solutions',
    'nav.blog': 'Newsroom',
    'nav.contact': 'Contact',
    'hero.label': 'Ferry Flight Specialists',
    'hero.titleLine1': 'We deliver your aircraft',
    'hero.titleHighlight': 'anywhere in the world',
    'hero.titleLine2': 'with Brazil ↔ U.S. coverage',
    'hero.lead':
      'Receive your aircraft quickly and safely with the FlyTaz team following every operational step.',
    'hero.primaryCta': 'Request a quote now',
    'hero.secondaryCta': 'Talk to a specialist',
    'hero.stat1': 'Flight hours in 2023',
    'hero.stat2': 'Client satisfaction',
    'hero.stat3': 'Aircraft in operation',
    'solutions.label': 'Fleet & solutions',
    'solutions.title': 'Performance inspired by global leaders',
    'solutions.text':
      'With the signature Taz palette and processes modeled on global best practices, we deliver corporate, charter and logistics missions with efficiency and sophistication.',
    'solutions.card1.tag': 'Corporate programs',
    'solutions.card1.title': 'Fleet & mission design',
    'solutions.card1.text':
      'Dedicated cells, global concierge, operational control and financial predictability in flexible agreements.',
    'solutions.card1.badge': 'Ops 24/7',
    'solutions.card2.tag': 'Exclusive fleet',
    'solutions.card2.title': 'Long-range cabins',
    'solutions.card2.text':
      'Curated Global and Challenger line plus strategic partners for hemispheric and intercontinental missions.',
    'solutions.card2.badge': 'Jet IQ',
    'solutions.card3.tag': 'Technology',
    'solutions.card3.title': 'Digital flight center',
    'solutions.card3.text':
      'Telemetry, AI weather and predictive maintenance connected to our dispatch and safety teams.',
    'solutions.card3.badge': 'Data Ops',
    'experience.label': 'Taz experience',
    'experience.title': 'Sensory design, hospitality and precision',
    'experience.text':
      'From hangar to signature lounges, every touchpoint is choreographed with wellness, hospitality and digital integration.',
    'experience.card1.title': 'Signature hospitality',
    'experience.card1.text': 'Menus, wellness and retail tailored to each mission.',
    'experience.card2.title': 'Global operation',
    'experience.card2.text': 'Instant access to 5,000+ airports and partner FBOs.',
    'blog.label': 'Sector radar',
    'blog.title': 'Blog with insights and official news',
    'blog.text':
      'Keep clients and press updated with studies, releases and strategic moves in a feed inspired by Bombardier editorial standards.',
    'blog.sidebarLabel': 'Trends',
    'blog.sidebarTitle': 'CMS-ready workflow',
    'blog.sidebarText':
      'Connect this grid to any API (Contentful, Sanity or Wix CMS) to automate publishing while keeping Comms in control.',
    'blog.sidebarCta': 'View full case studies',
    'footer.copy': '© 2024 Taz Aviation. All rights reserved.'
  }
};

const supportedLangs = ['pt', 'en'];
const i18nElements = document.querySelectorAll('[data-i18n]');
const blogGrid = document.getElementById('blogGrid');
const langButtons = document.querySelectorAll('[data-lang]');
let currentLang = detectLanguage();

applyLanguage(currentLang);
langButtons.forEach((button) =>
  button.addEventListener('click', () => applyLanguage(button.dataset.lang))
);

function detectLanguage() {
  const stored = localStorage.getItem('taz-lang');
  if (stored && supportedLangs.includes(stored)) return stored;
  const browser = navigator.language?.slice(0, 2);
  return supportedLangs.includes(browser) ? browser : 'pt';
}

function applyLanguage(lang) {
  if (!supportedLangs.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('taz-lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  translateElements(lang);
  renderPosts(lang);
  updateLangButtons(lang);
}

function translateElements(lang) {
  i18nElements.forEach((el) => {
    const key = el.dataset.i18n;
    const fallback = translations.pt[key] || el.textContent;
    const copy = translations[lang]?.[key] || fallback;
    el.textContent = copy;
  });
}

function renderPosts(lang) {
  if (!blogGrid) return;
  blogGrid.innerHTML = '';
  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'blog-card reveal';
    const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
    const date = new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: 'short'
    })
      .format(new Date(post.date))
      .toUpperCase();

    card.innerHTML = `
      <img src="${post.image}" alt="${post.category[lang]}" loading="lazy" />
      <div class="content">
        <time>${date}</time>
        <span class="tag">${post.category[lang]}</span>
        <h3>${post.title[lang]}</h3>
        <p>${post.excerpt[lang]}</p>
        <small>${post.reading[lang]}</small>
        <a href="${post.link}">${lang === 'pt' ? 'Continuar lendo' : 'Continue reading'}</a>
      </div>
    `;
    blogGrid.appendChild(card);
  });
  observeReveal();
}

function updateLangButtons(lang) {
  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.setAttribute('aria-pressed', isActive);
  });
}

function observeReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

observeReveal();
