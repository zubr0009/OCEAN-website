const APP = {
  currentIndex: 0,

  init() {
    const itemList = document.getElementById("carousel-list");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    document.querySelector(".hamburger").addEventListener("click", () => {
      const nav = document.querySelector(".nav-overlay");
      const barOne = document.querySelector(".bar-first");
      const barTwo = document.querySelector(".bar-second");
      const barThree = document.querySelector(".bar-third");
      nav.classList.toggle("active");
      barOne.classList.toggle("active");
      barTwo.classList.toggle("active");
      barThree.classList.toggle("active");
  });

  document.querySelectorAll(".nav-overlay .nav-item").forEach(link => {
      link.addEventListener("click", () => {
          const nav = document.querySelector(".nav-overlay");
          const barOne = document.querySelector(".bar-first");
          const barTwo = document.querySelector(".bar-second");
          const barThree = document.querySelector(".bar-third");
          nav.classList.remove("active");
          barOne.classList.remove("active");
          barTwo.classList.remove("active");
          barThree.classList.remove("active");
      });
  });
  

    this.itemList = itemList;
    this.items = items;

    window.addEventListener("resize", () => this.updateCarousel());
    this.updateCarousel();

    prevBtn.addEventListener("click", () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.items.length - 1;
      }
      this.updateCarousel();
    });
    
    nextBtn.addEventListener("click", () => {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updateCarousel();
    });
  },

  updateCarousel() {
    const items = this.items;
    const itemList = this.itemList;
    const currentIndex = this.currentIndex;

    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    if (items.length > 0) {
      const itemWidth = items[0].clientWidth;
      const newScrollLeft = currentIndex * itemWidth;
      itemList.scrollLeft = newScrollLeft;
    }
  },
};

document.addEventListener("DOMContentLoaded", () => APP.init());
