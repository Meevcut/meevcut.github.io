document.addEventListener('DOMContentLoaded', () => {
    // Accordion işlevi
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('h2');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Dropdown menü işlevi
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    dropdownBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#dropdownBtn')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });

    // Kaydırma (scroll) efekti için JavaScript kodu
    let lastScrollY = window.scrollY;
    const navigationBar = document.querySelector('.navigation-bar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Aşağı kaydırıyor
            navigationBar.classList.add('hidden');
        } else {
            // Yukarı kaydırıyor
            navigationBar.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});