function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

loadData()
  .then(() => {
    const preloaderEl = document.querySelector('.loader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });
