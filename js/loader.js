function loader() {
    const loader = document.querySelector(".div-loader")

    setTimeout(() => {
        loader.style.display = "flex"
    }, 1000)
    window.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            loader.style.display = "none";
            loader.firstElementChild.remove();
        }, 5000)
    
    })
}


loader()