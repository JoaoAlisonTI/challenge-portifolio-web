
  const oBservador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
  });

  const elements = document.querySelectorAll('.animate', '.animate-left');

  elements.forEach( (element) => oBservador.observe(element) );