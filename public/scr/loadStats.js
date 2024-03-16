(() => {
  function calculateLoadTime() {
    const pageEnd = performance.mark('pageEnd');
    const loadTime = pageEnd.startTime;
    return loadTime;
  }

  function displayLoadStats() {
    const loadStats = document.createElement('p');
    loadStats.innerHTML = `Total load time: ${calculateLoadTime()} ms (client)`;
    document.querySelector('footer').appendChild(loadStats);
  }

  window.addEventListener('load', () => {
    displayLoadStats();
  });
})();
