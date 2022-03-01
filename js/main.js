const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')
const monthlyPriceText = document.getElementById('monthly-price-text')
const logoImage = document.querySelector('.netflix-logo')

window.addEventListener('load', setSmallScreenSettings())

window.addEventListener('resize', setSmallScreenSettings)

function setSmallScreenSettings () {
  if (this.innerWidth <= 768) {
   monthlyPriceText.textContent = 'Monthly price'
   logoImage.src = '../img/netflix-logo-symbol.png'
   return
  } 

  monthlyPriceText.textContent = 'Monthly price after free month ends on 22/03/2022'
  logoImage.src = '../img/netflix-logo.png'
  
}

function removeBorder () {
  tabItems.forEach(item => {
    item.classList.remove('tab-border')
  })
}

function hideContent () {
  tabContentItems.forEach(item => {
    item.classList.remove('show')
  })
}

tabItems.forEach(item => item.addEventListener('click', function () {
  removeBorder();
  hideContent();

  item.classList.add('tab-border')
  document.querySelector(`#${item.id}-content`).classList.add('show')
}))