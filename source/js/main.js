const productItem = document.querySelectorAll('.product__item');

/* Карточка товаров в позиции Selected */
productItem.forEach(item => item.addEventListener('click', function() {
  item.classList.toggle('product__item--selected');
  const productDecor = item.querySelector('.product__decor-line');
  const productLabel = item.querySelector('.product__label-default');
  const productContent = item.querySelector('.product__content');
  const productWeight = item.querySelector('.product__weigth');
  const productFooterText = item.querySelector('.product__footer-text');
  const productFooterInfo = item.querySelector('.product__footer-info');
  productDecor.classList.toggle('product__decor-line--selected');
  productLabel.classList.toggle('product__label--selected');
  productContent.classList.toggle('product__content--selected');
  productWeight.classList.toggle('product__weigth--selected');
  productFooterText.classList.toggle('product__footer-text--selected');
  productFooterInfo.classList.toggle('product__footer-info--selected');
})
);
