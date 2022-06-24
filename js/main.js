const modifiers = {
  tabButtonActive : 'features__button--active',
  tabItemActive : 'tabs__box--active',
  accordionItemActive : 'accordion__item--open'
}
const elsFeaturesButtons = document.querySelectorAll('.js-features-button');
const elsFeaturesItem = document.querySelectorAll('.js-features-item');
const elsTabsItem = document.querySelectorAll('.js-tabs-box');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');
const elsAccordionItem = document.querySelectorAll('.accordion__item');

elsFeaturesButtons.forEach(function(elFeaturesButton){
  elFeaturesButton.addEventListener('click', function(){
    function deactivateFeaturesItem (){
      elsFeaturesItem.forEach(function(elFeaturesItem){
        elFeaturesItem.classList.remove(modifiers.tabButtonActive);
      })

    }
    deactivateFeaturesItem();

    elFeaturesButton.parentElement.classList.add(modifiers.tabButtonActive);
  })

})
elsFeaturesButtons.forEach(function(elFeaturesButton){
  elFeaturesButton.addEventListener('click', function(){
    elsTabsItem.forEach(function(elTabsItem){
      elTabsItem.classList.remove(modifiers.tabItemActive);
    })
    const elTargetPanel = document.querySelector(`#${elFeaturesButton.dataset.title}`);
    elTargetPanel.classList.add(modifiers.tabItemActive);
  })
})


elsAccordionItemToggler.forEach(function(elAccordionItemToggler){
  elAccordionItemToggler.addEventListener('click', function(){
    elsAccordionItem.forEach(function(elAccordionItem){
      elAccordionItem.classList.remove(modifiers.accordionItemActive);
    })
    elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accordionItemActive);
  })
})