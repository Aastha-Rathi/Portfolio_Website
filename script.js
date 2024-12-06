const navLinks = document.querySelectorAll('header nav a');



const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach((otherBtn) => {
            otherBtn.classList.remove('active');
        });
        btn.classList.add('active');

        const detailId = btn.getAttribute('data-detail');
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        document.querySelector(`.resume-detail.${detailId}`).classList.add('active');
    });
});