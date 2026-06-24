   // Smooth animation on scroll
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 300;
        const height = section.offsetHeight;

        if(top >= offset && top < offset + height){
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    });

    sections.forEach(section => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "1s";
    });