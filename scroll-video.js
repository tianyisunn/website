// scroll-video.js

// 选中所有 section
const scrollSections = document.querySelectorAll('.scroll-video-section');

function updateScrollVideos() {
  const viewportHeight = window.innerHeight;

  scrollSections.forEach(section => {
    const video = section.querySelector('.scroll-sync-video');
    if (!video) return;

    const duration = video.duration;
    if (!duration || !isFinite(duration)) return; // 视频信息还没加载好就先不算

    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;

    // 定义一个非常简单、暴力的区间：
    // 当 section 顶部从视口底部 (viewportHeight) 滚到视口顶部 (-sectionHeight)
    // 对应 progress 从 0 到 1
    const start = viewportHeight;
    const end   = -sectionHeight;

    const rawProgress = (sectionTop - start) / (end - start);
    let progress = Math.min(Math.max(rawProgress, 0), 1);

    // 避免一直停在 0 秒（有些视频开头就是黑画面）
    const safeProgress = 0.05 + progress * 0.9; // 区间稍微往里面挤一点
    video.currentTime = safeProgress * duration;
  });
}

// 页面加载完先算一次
window.addEventListener('load', updateScrollVideos);
// 每次滚动重新计算
window.addEventListener('scroll', updateScrollVideos);

