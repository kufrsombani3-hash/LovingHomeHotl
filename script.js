// سلايدر صور تلقائي

let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-container img");

function showSlide() {
    // إخفاء جميع الصور
    slides.forEach((img) => {
        img.style.display = "none";
    });

    // الانتقال للصورة التالية
    currentSlide++;
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }

    // عرض الصورة الحالية
    slides[currentSlide - 1].style.display = "block";

    // تغيير الصورة كل 3 ثواني
    setTimeout(showSlide, 1000);
}

// تشغيل السلايدر
showSlide();