
const scrollSections = document.querySelectorAll('.scroll-video-section');

function updateScrollVideos() {
  const viewportHeight = window.innerHeight;

  scrollSections.forEach(section => {
    const video = section.querySelector('.scroll-sync-video');
    if (!video) return;

    const duration = video.duration;
    if (!duration || !isFinite(duration)) return; 

    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;

  
    const start = viewportHeight;
    const end   = -sectionHeight;

    const rawProgress = (sectionTop - start) / (end - start);
    let progress = Math.min(Math.max(rawProgress, 0), 1);

    const safeProgress = 0.05 + progress * 0.9; 
    video.currentTime = safeProgress * duration;
  });
}

window.addEventListener('load', updateScrollVideos);
window.addEventListener('scroll', updateScrollVideos);

