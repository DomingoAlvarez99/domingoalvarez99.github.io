export const resetAnimation = (el) => {
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = null;
};

export const resetAnimations = (elements) => elements.forEach(resetAnimation);
