function addClass (el, cls) {
  el.classList.add(cls)
}

function removeClass (el, cls) {
  el.classList.remove(cls)
}

const accordionItems = document.querySelectorAll('.accordion-item')
const accordionContentPanes = document.querySelectorAll('.accordion-content')

// show first set of content by default
accordionItems[0].querySelector('.accordion-content').classList.remove('hidden')

// hide all content blocks except the accordion that's clicked on
accordionItems.forEach(function (accordion) {
  const accordionTitleRow = accordion.firstElementChild
  accordionTitleRow.addEventListener('click', toggleAccordion)
})

function toggleAccordion (e) {
  accordionContentPanes.forEach(function (content) {
    if (content.previousElementSibling === e.target) {
      removeClass(content, 'hidden')
      addClass(content.parentElement, 'active')
    } else {
      addClass(content, 'hidden')
    }
  })
}
