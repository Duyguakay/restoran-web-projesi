
const galleryModal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");

function openGallery(element) {
    galleryModal.style.display = "block";
    fullImage.src = element.src; /*Küçük resmin adresini kopyala, büyük çerçevenin içine yapıştır." Böylece hangi küçük resme tıklarsan o büyür.*/
}

window.onclick = function(event) {
    if (event.target == galleryModal) {
        galleryModal.style.display = "none";
    }
}

/* Form uyarısı */
const buton = document.getElementById("rezervasyonBtn");
buton.onclick = function() {
    alert("Rezervasyonunuz alınmıştır!");
}