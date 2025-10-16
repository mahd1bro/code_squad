class TeamCarousel {
  constructor() {
    this.currentSlide = 0
    this.totalSlides = 5
    this.slides = document.querySelector(".team-slides")
    this.dots = document.querySelectorAll(".dot")
    this.teamCards = document.querySelectorAll(".team-card")

    this.init()
  }

  init() {
    // Add click event listeners to dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goToSlide(index)
      })
    })

    // Set initial state
    this.updateCarousel()
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex
    this.updateCarousel()
  }

  updateCarousel() {
    // Move slides container
    const translateX = -this.currentSlide * 20 // 20% per slide
    this.slides.style.transform = `translateX(${translateX}%)`

    // Update active states
    this.teamCards.forEach((card, index) => {
      card.classList.toggle("active", index === this.currentSlide)
    })

    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide)
    })
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides
    this.updateCarousel()
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides
    this.updateCarousel()
  }
}

let carouselInstance

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  carouselInstance = new TeamCarousel()
})

// Global functions for arrow navigation
function nextSlide() {
  if (carouselInstance) {
    carouselInstance.nextSlide()
  }
}

function previousSlide() {
  if (carouselInstance) {
    carouselInstance.prevSlide()
  }
}
