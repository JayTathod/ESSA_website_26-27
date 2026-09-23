// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  if (typeof window.AOS !== "undefined") {
    window.AOS.init({
      offset: 250,
      delay: 2,
      duration: 2000,
    })
  }

  // Initialize Read More buttons
  initReadMoreButtons()

  // Initialize Dropdown Submenus
  initDropdownSubmenus()
})

// ==================== READ MORE FUNCTIONALITY ====================
function initReadMoreButtons() {
  // Read More Button 1
  const readMoreBtn1 = document.querySelector(".read-more-btn1")
  const dots1 = document.querySelector(".dots1")
  const moreText1 = document.querySelector(".moreText1")

  if (readMoreBtn1) {
    readMoreBtn1.addEventListener("click", () => {
      if (dots1.style.display === "none") {
        dots1.style.display = "inline"
        readMoreBtn1.textContent = "Read More"
        moreText1.style.display = "none"
      } else {
        dots1.style.display = "none"
        readMoreBtn1.textContent = "Read Less"
        moreText1.style.display = "inline"
      }
    })
  }

  // Read More Button 2
  const readMoreBtn2 = document.querySelector(".read-more-btn2")
  const dots2 = document.querySelector(".dots2")
  const moreText2 = document.querySelector(".moreText2")

  if (readMoreBtn2) {
    readMoreBtn2.addEventListener("click", () => {
      if (dots2.style.display === "none") {
        dots2.style.display = "inline"
        readMoreBtn2.textContent = "Read More"
        moreText2.style.display = "none"
      } else {
        dots2.style.display = "none"
        readMoreBtn2.textContent = "Read Less"
        moreText2.style.display = "inline"
      }
    })
  }

  // Read More Button 3
  const readMoreBtn3 = document.querySelector(".read-more-btn3")
  const dots3 = document.querySelector(".dots3")
  const moreText3 = document.querySelector(".moreText3")

  if (readMoreBtn3) {
    readMoreBtn3.addEventListener("click", () => {
      if (dots3.style.display === "none") {
        dots3.style.display = "inline"
        readMoreBtn3.textContent = "Read More"
        moreText3.style.display = "none"
      } else {
        dots3.style.display = "none"
        readMoreBtn3.textContent = "Read Less"
        moreText3.style.display = "inline"
      }
    })
  }

  // Read More Button 4
  const readMoreBtn4 = document.querySelector(".read-more-btn4")
  const dots4 = document.querySelector(".dots4")
  const moreText4 = document.querySelector(".moreText4")

  if (readMoreBtn4) {
    readMoreBtn4.addEventListener("click", () => {
      if (dots4.style.display === "none") {
        dots4.style.display = "inline"
        readMoreBtn4.textContent = "Read More"
        moreText4.style.display = "none"
      } else {
        dots4.style.display = "none"
        readMoreBtn4.textContent = "Read Less"
        moreText4.style.display = "inline"
      }
    })
  }

  // Read More Button 5
  const readMoreBtn5 = document.querySelector(".read-more-btn5")
  const dots5 = document.querySelector(".dots5")
  const moreText5 = document.querySelector(".moreText5")

  if (readMoreBtn5) {
    readMoreBtn5.addEventListener("click", () => {
      if (dots5.style.display === "none") {
        dots5.style.display = "inline"
        readMoreBtn5.textContent = "Read More"
        moreText5.style.display = "none"
      } else {
        dots5.style.display = "none"
        readMoreBtn5.textContent = "Read Less"
        moreText5.style.display = "inline"
      }
    })
  }

  // Read More Button 6
  const readMoreBtn6 = document.querySelector(".read-more-btn6")
  const dots6 = document.querySelector(".dots6")
  const moreText6 = document.querySelector(".moreText6")

  if (readMoreBtn6) {
    readMoreBtn6.addEventListener("click", () => {
      if (dots6.style.display === "none") {
        dots6.style.display = "inline"
        readMoreBtn6.textContent = "Read More"
        moreText6.style.display = "none"
      } else {
        dots6.style.display = "none"
        readMoreBtn6.textContent = "Read Less"
        moreText6.style.display = "inline"
      }
    })
  }
}

// ==================== DROPDOWN SUBMENU FUNCTIONALITY ====================
function initDropdownSubmenus() {
  // Handle dropdown submenu for desktop
  const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu")

  dropdownSubmenus.forEach((submenu) => {
    submenu.addEventListener("mouseenter", function () {
      const dropdownMenu = this.querySelector(".dropdown-menu")
      if (dropdownMenu) {
        dropdownMenu.style.display = "block"
      }
    })

    submenu.addEventListener("mouseleave", function () {
      const dropdownMenu = this.querySelector(".dropdown-menu")
      if (dropdownMenu) {
        dropdownMenu.style.display = "none"
      }
    })
  })

  // jQuery fallback for Bootstrap dropdowns (for compatibility)
  if (typeof window.$ !== "undefined") {
    // Declare $ variable
    window.$(document).ready(() => {
      window
        .$(".dropdown-submenu")
        .on("mouseenter", function () {
          window.$(this).find("ul").show()
        })
        .on("mouseleave", function () {
          window.$(this).find("ul").hide()
        })
    })
  }
}

// ==================== SMOOTH SCROLLING ====================
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href !== "") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})
