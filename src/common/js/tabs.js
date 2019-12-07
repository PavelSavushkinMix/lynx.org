const initTabs = (containerClass, btnsClass, contentClass, initialIndex) => {
  const container = document.querySelector(`.${containerClass}`);
  const btns = container.querySelectorAll(`.${btnsClass}`);
  const contents = container.querySelectorAll(`.${contentClass}`);

  const displayCurrentTab = (current) => {
    if (contents.length) {
      contents.forEach((link, i) => {
        link.style.display = current === i ? 'flex' : 'none';
      });
    }
  };

  const onTabClick = (e, i) => {
    const current = document.querySelector(`.${containerClass} .is-active`);
    if (current !== null) {
      current.classList.remove('is-active');
    }
    e.target.classList.add('is-active');
    displayCurrentTab(i);
  };

  btns.forEach((link, i) => link.addEventListener('click', (link) => onTabClick(link, i)));
  displayCurrentTab(initialIndex || 0);
};

initTabs('games', 'tabs-btn', 'tabs__content');
initTabs('partners', 'tabs-btn', 'tabs__content');
