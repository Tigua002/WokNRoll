if (document.getElementsByClassName("cart_add")) {
    var ca_btn = document.getElementsByClassName("cart_add")
    for (let i = 0; i < ca_btn.length; i++) {
        ca_btn[i].addEventListener("click", add_to_cart)
    }
}

var bought_items = [
    LaNi = { navn: "LaNi", pris: 80, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/Laks_nigiri_maki.png", been_before: false, calc_before: false, full_name: "Laks Nigiri" },
    Cola = { navn: "Cola", pris: 30, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/coca_cola.jpg", been_before: false, calc_before: false, full_name: "Cola" },
]
if (sessionStorage.getItem("cart")) {
    bought_items = JSON.parse(sessionStorage.getItem("cart"))
}

function add_to_cart(event) {
    var parent = event.target.parentElement
    var link = parent.getElementsByClassName("shc_img")[0].src
    for (let i = 0; i < bought_items.length; i++) {
        if (link.includes(bought_items[i].link)) {
            bought_items[i].antall += 1
            sessionStorage.setItem("cart", JSON.stringify(bought_items))
        }
    }
}

document.getElementsByClassName("hamburgerButton")[0].addEventListener("click", openNav)
document.getElementById("menuClose").addEventListener("click", closeNav)
function openNav() {
    document.getElementById("menuHolder").style.display = "flex"
    document.getElementById("menuHolder").showModal()
    document.getElementById("menuHolder").style.width = "60%"
    if (document.getElementById("header")) {
        document.getElementById("header").style.border = "none"
    } 


}
function closeNav() {
    document.getElementById("menuHolder").style.width = "0%"
    if (document.getElementById("header")) {
        document.getElementById("header").style.borderBottom = "white solid 1px"
    }else {
        document.getElementById("header_log").style.borderBottom = "white solid 1px"
    }
    
    
    document.getElementById("menuHolder").close()
    setTimeout(delayClose, 500)
}

function delayClose() {
    document.getElementById("menuHolder").style.display = "none"
}

document.getElementById("menuHolder").addEventListener("click", e => {
    let dialogDim = document.getElementById("menuHolder").getBoundingClientRect()
    if (e.clientX < dialogDim.left || e.clientX > dialogDim.right || e.clientY < dialogDim.top || e.clientY > dialogDim.bottom) {
        closeNav()
    }
})