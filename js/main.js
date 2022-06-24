const elsFeaturesButtons = document.querySelectorAll('.js-features-button');
const elsFeaturesItem = document.querySelectorAll('.js-features-item');
const elsTabsItem = document.querySelectorAll('.js-tabs-box');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');
const elsAccordionItem = document.querySelectorAll('.accordion__item');

elsFeaturesButtons.forEach(function(elFeaturesButton){
  elFeaturesButton.addEventListener('click', function(){
    function deactivateFeaturesItem (){
      elsFeaturesItem.forEach(function(elFeaturesItem){
        elFeaturesItem.classList.remove('features__button--active');
      })

    }
    deactivateFeaturesItem();

    elFeaturesButton.parentElement.classList.add('features__button--active');
  })

})
elsFeaturesButtons.forEach(function(elFeaturesButton){
  elFeaturesButton.addEventListener('click', function(){
    elsTabsItem.forEach(function(elTabsItem){
      elTabsItem.classList.remove('tabs__box--active');
    })
    const elTargetPanel = document.querySelector(`#${elFeaturesButton.dataset.title}`);
    elTargetPanel.classList.add('tabs__box--active');
  })
})


elsAccordionItemToggler.forEach(function(elAccordionItemToggler){
  elAccordionItemToggler.addEventListener('click', function(){
    elsAccordionItem.forEach(function(elAccordionItem){
      elAccordionItem.classList.remove('accordion__item--open');
    })
    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  })
})