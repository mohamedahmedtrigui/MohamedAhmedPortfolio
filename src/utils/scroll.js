/**
 * Smoothly scrolls the window to the element matching the given CSS selector.
 * @param {string} selector - CSS selector, e.g. "#projects"
 * @param {number} offset - Pixels to subtract from top (for fixed navbar). Default 80.
 */
export function scrollToSection(selector, offset = 80) {
  const el = document.querySelector(selector);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth"
    });
  }
}
