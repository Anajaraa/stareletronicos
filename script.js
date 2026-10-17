// ===== CAROUSEL =====
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const slides = document.querySelectorAll('.carousel-slide');

let currentSlide = 0;
const totalSlides = slides.length;
let interval;

// Criar dots
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    goToSlide(index);
    resetAutoPlay();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

// Função para ir ao slide
function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// Próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}

// Autoplay
function startAutoPlay() {
  interval = setInterval(nextSlide, 4000);
}

// Reset autoplay quando clicar
function resetAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

// Iniciar
startAutoPlay();

// ===== CATÁLOGO =====
const WHATSAPP = '5551991658175';

// img: foto do produto (opcional). Sem foto, usa o ícone da categoria.
// preco: valor do produto (opcional), ex: preco: 'R$ 29,90'. Vazio mostra "Consulte".
const catalogo = [
  {
    categoria: 'Fones de Ouvido', icone: '🎧',
    produtos: [
      { nome: 'Fone Bluetooth de Ponto', desc: 'Vários modelos e valores.', img: 'imagens/fone bluetooth ponto.jpg' },
      { nome: 'Fone Bluetooth de Arco', desc: 'Conforto e som sem fio.', img: 'fone.jpg' },
      { nome: 'Fone Gamer', desc: 'Ideal para jogos.', img: 'imagens/Fone gamer.jpg' },
      { nome: 'Fone para iPhone com Fio', desc: 'Conector Lightning.', img: 'imagens/Fone p iphone c fio.jpg' },
      { nome: 'Fone para iPhone sem Fio', desc: 'Compatível com iPhone.', img: 'imagens/Fone p iphone sem fio.jpg' },
      { nome: 'Fone Tipo-C', desc: 'Para celulares com entrada USB-C.', img: 'imagens/Fone tipo c.jpg' }
    ]
  },
  {
    categoria: 'Acessórios para Celular', icone: '📱',
    produtos: [
      { nome: 'Carregadores em Geral', desc: 'Diversos modelos e potências.', img: 'carregador.jpg' },
      { nome: 'Películas 3D', desc: 'Proteção completa da tela.', img: 'imagens/pelicula 3d.jpg' },
      { nome: 'Cabo de Celular', desc: 'Diversos tipos de conexão.', img: 'imagens/cabo de telefone.jpg' },
      { nome: 'Suporte de Celular para Carro', desc: 'Firme e prático.', img: 'imagens/suporte de celular pra carro.jpg' },
      { nome: 'Suporte de Painel', desc: 'Fixação no painel do carro.', img: 'imagens/suporte de painel.jpg' },
      { nome: 'Suporte Magnético (Ímã)', desc: 'Encaixe rápido com ímã.', img: 'imagens/suporteima1.jpg' },
      { nome: 'Suporte Magnético Redondo', desc: 'Discreto, em várias cores.', img: 'imagens/suporteima2.jpg' },
      { nome: 'Suporte Magnético Articulado', desc: 'Base giratória e ajustável.', img: 'imagens/suporteima4.jpg' },
      { nome: 'Suporte Magnético de Painel', desc: 'Ímãs reforçados.', img: 'imagens/suporteima5.jpg' },
      { nome: 'Suporte de Moto', desc: 'Segurança para usar o GPS.', img: 'imagens/suporte de moto.jpg' }
    ]
  },
  {
    categoria: 'TV e Vídeo', icone: '📺',
    produtos: [
      { nome: 'TV Box 4K', desc: 'Transforme sua TV em Smart TV.', img: 'imagens/tv box 4k.jpg' },
      { nome: 'TV Stick', desc: 'Compacto, conecta direto no HDMI.', img: 'imagens/tv box stick.jpg' },
      { nome: 'Antena Digital', desc: 'Sinal digital de qualidade.', img: 'imagens/antena digital.jpg' },
      { nome: 'Conversor para TV', desc: 'Receba o sinal digital na sua TV.', img: 'imagens/Conversor para TV.jpg' },
      { nome: 'Suporte de TV', desc: 'Vários tamanhos.', img: 'imagens/suporte tv.jpg' },
      { nome: 'Cabo HDMI', desc: 'HDMI x HDMI.', img: 'imagens/cabo hdmi com hdmi.jpg' }
    ]
  },
  {
    categoria: 'Som e Rádio', icone: '🔊',
    produtos: [
      { nome: 'Rádios', desc: 'Vários tamanhos.' }
    ]
  },
  {
    categoria: 'Informática', icone: '💻',
    produtos: [
      { nome: 'Mouse com Fio', desc: 'Preciso e confiável.', img: 'imagens/mouse com fio.jpg' },
      { nome: 'Mouse sem Fio', desc: 'Liberdade de movimento.', img: 'imagens/mouse sem fio.jpg' },
      { nome: 'Teclado com Fio para Notebook', desc: 'Conexão USB.' },
      { nome: 'Teclado sem Fio', desc: 'Prático e sem cabos.' },
      { nome: 'Adaptador Bluetooth', desc: 'Adicione Bluetooth ao seu aparelho.', img: 'imagens/adaptador de bluetooth.jpg' },
      { nome: 'Cabo USB', desc: 'USB x USB.', img: 'imagens/cabo USB com usb.jpg' }
    ]
  },
  {
    categoria: 'Games', icone: '🎮',
    produtos: [
      { nome: 'Controle PlayStation 2', desc: 'Compatível com PS2.' },
      { nome: 'Controle PlayStation 3', desc: 'Compatível com PS3.' },
      { nome: 'Controle PlayStation 4', desc: 'Compatível com PS4.' }
    ]
  },
  {
    categoria: 'Armazenamento', icone: '💾',
    produtos: [
      { nome: 'Pendrive 8GB', desc: 'Leve seus arquivos com você.', img: 'imagens/pendrive todos os tamanhos.jpg' },
      { nome: 'Pendrive 16GB', desc: 'Leve seus arquivos com você.', img: 'imagens/pendrive todos os tamanhos.jpg' },
      { nome: 'Pendrive 32GB', desc: 'Leve seus arquivos com você.', img: 'imagens/pendrive todos os tamanhos.jpg' },
      { nome: 'Cartão de Memória 8GB', desc: 'Para celular, câmera e mais.' },
      { nome: 'Cartão de Memória 16GB', desc: 'Para celular, câmera e mais.' },
      { nome: 'Cartão de Memória 32GB', desc: 'Para celular, câmera e mais.' },
      { nome: 'Cartão de Memória 64GB', desc: 'Para celular, câmera e mais.' }
    ]
  },
  {
    categoria: 'Pilhas', icone: '🔋',
    produtos: [
      { nome: 'Pilha Recarregável', desc: 'Economia e sustentabilidade.' },
      { nome: 'Pilha Palito Recarregável', desc: 'Tamanho AAA.' }
    ]
  },
  {
    categoria: 'Relógios', icone: '⌚',
    produtos: [
      { nome: 'Relógio de Parede', desc: 'Vários modelos.' },
      { nome: 'Relógio de Pulso', desc: 'Vários modelos.' }
    ]
  }
];

function renderCatalogo() {
  const container = document.getElementById('catalogContainer');
  if (!container) return;

  container.innerHTML = catalogo.map(({ categoria, icone, produtos }) => `
    <h3 class="catalog-category">${icone} ${categoria}</h3>
    <div class="products-grid">
      ${produtos.map(p => {
        const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, tenho interesse no produto: ${p.nome}`)}`;
        const imagem = p.img
          ? `<img src="${encodeURI(p.img)}" alt="${p.nome}" loading="lazy">`
          : `<div class="product-icon">${icone}</div>`;
        return `
          <div class="product-card">
            ${imagem}
            <div class="product-info">
              <h3>${p.nome}</h3>
              <p>${p.desc}</p>
              <div class="product-price">
                ${p.preco
                  ? `<span class="price">${p.preco}</span>`
                  : `<span class="price price-consult">Consulte</span>`}
                <a class="btn-buy" href="${link}" target="_blank">Comprar</a>
              </div>
            </div>
          </div>`;
      }).join('')}
    </div>
  `).join('');
}

renderCatalogo();
