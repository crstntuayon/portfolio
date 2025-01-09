// Function to open the modal with the selected image
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
