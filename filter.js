// JSON
const projects = [
  {
    id: 'eyes1', title: 'MY EYES', type: ['Practice'], image: 'media/1.png', description: 'A hand-draw by me.'
  },
  {
    id: 'eyes2', title: 'MY EYES', type: ['Practice'], image: 'media/2.png', description: 'A hand-draw by me.'
  },
  {
    id: 'eyes3', title: 'MY EYES', type: ['Practice'], image: 'media/3.png', description: 'A hand-draw by me.'
  },
  {
    id:'ball', title: 'Folded Forms: The 3D Sphere', type: ['Practice'], image: 'media/3d.jpg', description: '3D paper-fold sculpture model constructed by 2 different designed complex surfaces and painted with reflective material.'
  },
  {
    id:'chair', title: 'Modular Furniture Design', type: ['product'], image: 'media/chair.jpg', description: 'This modular children seat is ergonomically designed to provide optimal comfort and support while accommodating the dynamie needs of young users. Its customizable, tool-free assembly allows seamless adaptation across diverse environments, particularly in outdoor playgrounds and public recreational spaces. The structure promotes healthy posture and encourages physical activity while minimizing fall risks. Constructed from eco-friendly, durable materials, the seat is designed to enhance safety and support children physical development in a secure setting.'
  },
  {
    id:'color1', title: 'BLUE', type: ['Practice'], image: 'media/color.jpg', description: 'I explored different shades of blue to express a quiet sadness, paying attention to small changes in tone and gray values. Through this study, I learned how to handle color more clearly and build a simple, steady color structure.'
  },
  {
    id:'dragonfruit', title: 'DRAGONFRUIT', type: ['Practice'], image: 'media/dragon.jpg', description: 'A colored-pencil drawing of a dragon fruit.'
  },
  {
    id:'succulent', title: 'SUCCULENT', type: ['Practice'], image: 'media/flower.jpg', description: 'A colored-pencil drawing of a succulent.'
  },
  {
    id:'color2', title: 'ROSE', type: ['Practice'], image: 'media/flower2.jpg', description: 'A study using different color schemes—analogous, similar, and complementary—to explore simple visual contrast.'
  },
  {
    id:'furniture', title: 'Blossom', type: ['product'], image: 'media/furniture.jpg', description: 'In nowadays evolving landscape of furniture design, the integration of artistic inspiration with practical design has become an increasingly compelling pursuit. This project draws from Vincent van Gogh Almond Blossom, reinterpreting its symbolic beauty and delicate visual language through a collection of five furniture pieces. By combining modular forms, elegant linework, and contrasting materials, the series seeks to translate the poetic essence into spatial design. The result is a contemporary aesthetic that bridges art and functionality, offering a thoughtful exploration of how visual art can inform and elevate everyday living spaces.'
  },
  {
    id:'color3', title: 'Grass', type: ['Practice'], image: 'media/others.png', description: 'A color study comparing orange and blue at different purity levels to observe how saturation shifts affect contrast and visual balance.'
  },
  {
    id:'up', title: 'UP', type: ['product'], image: 'media/up.jpg', description: 'The concept for "Up" is inspired by the animated film Up. In the story, the elderly protagonist, Carl, embarks on an adventure, flying his house to South America with thousands of balloons to fulfill a lifelong promise. This community center design captures that same spirit of adventure, imagination, and discovery, creating a space where children can explore their own dreans and embark on imaginative journeys.'
  },
  {
    id:'zongzi', title: 'ZONGZI', type: ['Practice'], image: 'media/zongzi.jpg', description: 'A colored-pencil drawing of a tranditional Chinese food Zongzi.'
  },
  {
    id:'Wushi', title: 'Wushi', type: ['Practice'], image: 'media/wushi.jpg', description: 'A marker drawing of a traditional lion dance, using strong lines and blended colors to show movement and texture.'
  },
];

//function the slides
const slideImg   = document.getElementById('slide-img');
const slideTitle = document.getElementById('slide-title');
const slideDesc  = document.getElementById('slide-desc');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';           // 当前选中的 filter 类型
let currentList   = projects.slice(); // 当前要轮播的作品列表
let currentIndex  = 0;               // 当前播到列表中的第几张
let timer         = null;            // 自动轮播的计时器 id



function renderSlide() {
  const item = currentList[currentIndex];
  slideImg.src = item.image;
  slideImg.alt = item.title;
  slideTitle.textContent = item.title;
  slideDesc.textContent  = item.description;
}

function setFilter(filter) {
  currentFilter = filter;

  filterBtns.forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.filter === filter);
  });

  if (filter === 'all') {
    currentList = projects.slice();
  } else {
    currentList = projects.filter(p => p.type.includes(filter));
  }

  currentIndex = 0;

  renderSlide();
  restartAutoPlay();
}

function showNext() {
  if (!currentList.length) return;

  currentIndex = (currentIndex + 1) % currentList.length;
  renderSlide();
}



function startAutoPlay() {
  if (timer) return;        
  timer = setInterval(showNext, 4000);   
}

function stopAutoPlay() {
  if (!timer) return;
  clearInterval(timer);
  timer = null;
}

function restartAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}


// filter 
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter; 
    setFilter(filter);
  });
});

setFilter('all')
startAutoPlay();