const observer = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>
    {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('observerShow');
        }
        else {
            entry.target.classList.remove('observerShow');
        }
    });
});


const hiddenElement = document.querySelectorAll('.hiddenByObserver');
hiddenElement.forEach((el) => observer.observe(el));
