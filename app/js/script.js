// let accordionButton = document.querySelector('.accordion__question');
document.querySelectorAll('.accordion__question').forEach((item) => {
  item.addEventListener('click', (event) => {
    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains('collapsing')) {
      // Open accordion item
      if (!item.classList.contains('open')) {
        console.log('toggle accordion button');

        accCollapse.style.display = 'block';
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + 'px';
          accCollapse.style.display = '';
        }, 1);

        // Remove "collapse", add "collapsing" class to .accordion__collapse (sibling)
        accCollapse.classList = 'accordion__collapse collapsing';
        // After X amount of time, remove "collapsing" class and add "collapse open" class
        setTimeout(() => {
          console.log('open accordion content');
          accCollapse.classList = 'accordion__collapse open';
        }, 300);
      }
      // Close accordion item
      else {
        // If doesn't have class "open"
        // Remove "collapse open" from .accordion__collapse, add "collapsing"
        accCollapse.classList = 'accordion__collapse collapsing';

        setTimeout(() => {
          accCollapse.style.height = '0px';
        }, 1);
        // After X amount of time, remove "collapsing" class and add "collapse" class
        setTimeout(() => {
          console.log('open accordion content');
          accCollapse.classList = 'accordion__collapse collapse';
          accCollapse.style.height = '';
        }, 300);
      }

      item.classList.toggle('open');
    }
  });
});
