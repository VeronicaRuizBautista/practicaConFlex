function botonMenu() {
    var btn = document.getElementById("myopcion");
    btn.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    const temasItems= document.querySelectorAll(".temas >li");
    temasItems.forEach(item => {
        item.addEventListener("click", function() {
            const subItem = this.querySelector(".ite");
            const icon = this.querySelector(".fi.fi-sr-angle-circle-right");
            const allSubItem = document.querySelectorAll(".ite");
            allSubItem.forEach(item => {
                if (item !== subItem && 
                    item.classList.contains("active")) {
                    item.classList.remove("active");
                }
            });
            subItem.classList.toggle("active");
            if (subItem.classList.contains("active")) {
                icon.classList.add("fi-sr-angle-circle-down");
                icon.classList.remove("fi-sr-angle-circle-right");
                
            }
            else {
                icon.classList.add("fi-sr-angle-circle-right");
                icon.classList.remove("fi-sr-angle-circle-down");
            }
        });
    });
});

