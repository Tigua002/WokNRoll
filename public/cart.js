var alerts = document.getElementById("alerts")
var alert_tekst = document.getElementById("alert_tekst")
function close_modal() {
    alerts.style.display = "none";
    alerts.close();
}
function show_alert() {
    alerts.style.display = "flex";
    alerts.showModal()
}
close_modal()

document.getElementsByClassName("alert_btn")[0].addEventListener("click", purchase)

function addEvents() {
    var pluses = document.getElementsByClassName("ci_plus")
    for (let i = 0; i < pluses.length; i++) {
        pluses[i].addEventListener("click", increment_item)
    }

    var minuses = document.getElementsByClassName("ci_minus")
    for (let i = 0; i < pluses.length; i++) {
        minuses[i].addEventListener("click", decrease_item)
    }

    var reTekst = document.getElementsByClassName("remove_tekst")
    for (let i = 0; i < pluses.length; i++) {
        reTekst[i].addEventListener("click", removeItem)
    }

    var reX = document.getElementsByClassName("remove_x")
    for (let i = 0; i < pluses.length; i++) {
        reX[i].addEventListener("click", removeItem)
    }
    document.getElementById("accept_button").addEventListener("click", close_cart)

}


function increment_item(event) {
    let item_parent = event.target.parentElement.parentElement.parentElement

    let src = item_parent.getElementsByClassName("cart_image")[0].src
    for (let i = 0; i < bought_items.length; i++) {
        if (src.includes(bought_items[i].link)) {
            bought_items[i].antall += 1
            item_parent.getElementsByClassName("item_amount")[0].innerHTML = bought_items[i].antall
        }
    }
    sessionStorage.setItem("cart", JSON.stringify(bought_items))
    summary()
}

function decrease_item(event) {
    let item_parent = event.target.parentElement.parentElement.parentElement

    let src = item_parent.getElementsByClassName("cart_image")[0].src
    for (let i = 0; i < bought_items.length; i++) {
        if (src.includes(bought_items[i].link)) {
            bought_items[i].antall -= 1
            if (bought_items[i].antall < 0) {
                bought_items[i].antall = 0
            }
            item_parent.getElementsByClassName("item_amount")[0].innerHTML = bought_items[i].antall
        }
    }
    sessionStorage.setItem("cart", JSON.stringify(bought_items))
    summary()
}

var bought_items = [
    LaNi = { navn: "LaNi", pris: 80, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/Laks_nigiri_maki.png", been_before: false, calc_before: false, full_name: "Laks Nigiri" },
    Cola = { navn: "Cola", pris: 30, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/coca_cola.jpg", been_before: false, calc_before: false, full_name: "Cola" },
]

if (sessionStorage.getItem("cart")) {
    bought_items = JSON.parse(sessionStorage.getItem("cart"))
}


for (let i = 0; i < bought_items.length; i++) {
    bought_items[i].been_before = false
    bought_items[i].calc_before = false
}

function calculate_cart() {
    for (let i = 0; i < bought_items.length; i++) {
        if (bought_items[i].antall > 0) {
            if (bought_items[i].been_before == false) {
                let element = document.getElementById("cart_items_holder")

                let cart_img = document.createElement("img")

                let cart_div = document.createElement("div")
                let info_div = document.createElement("div")
                let info_title = document.createElement("h1")
                let info_underline = document.createElement("hr")
                let info_desc = document.createElement("h1")
                let info_price = document.createElement("h1")

                let amount_h_div = document.createElement("div")
                let amount_div = document.createElement("div")
                let amount_plus = document.createElement("h1")
                let amount_amount = document.createElement("h1")
                let amount_minus = document.createElement("h1")

                let remove_div = document.createElement("div")
                let remover_div = document.createElement("div")
                let remove_tekst = document.createElement("h1")
                let remove_icon = document.createElement("h1")

                let cart_splitter = document.createElement("hr")

                element.appendChild(cart_div)
                element.appendChild(cart_splitter)
                cart_div.appendChild(cart_img)
                cart_div.appendChild(info_div)
                cart_div.appendChild(amount_h_div)
                cart_div.appendChild(remove_div)

                info_div.appendChild(info_title)
                info_div.appendChild(info_underline)
                info_div.appendChild(info_desc)
                info_div.appendChild(info_price)

                amount_h_div.appendChild(amount_div)
                amount_div.appendChild(amount_plus)
                amount_div.appendChild(amount_amount)
                amount_div.appendChild(amount_minus)

                remove_div.appendChild(remover_div)
                remover_div.appendChild(remove_tekst)
                remover_div.appendChild(remove_icon)



                cart_div.setAttribute("class", "cart_item")
                cart_img.setAttribute("class", "cart_image")
                cart_img.setAttribute("src", bought_items[i].link)
                info_div.setAttribute("class", "ci_info")
                info_title.setAttribute("class", "ci_title")
                info_underline.setAttribute("class", "cit_underline")
                info_desc.setAttribute("class", "ci_desc")
                info_price.setAttribute("class", "price")

                amount_h_div.setAttribute("class", "ci_amount_holder")
                amount_div.setAttribute("class", "cia_packer")
                amount_plus.setAttribute("class", "ci_plus")
                amount_minus.setAttribute("class", "ci_minus")
                amount_amount.setAttribute("class", "item_amount")

                remove_div.setAttribute("class", "ci_remover")
                remover_div.setAttribute("class", "cir_remover")
                remove_tekst.setAttribute("class", "remove_tekst")
                remove_icon.setAttribute("class", "remove_x")

                cart_splitter.setAttribute("class", "cart_split")
                cart_splitter.setAttribute("id", bought_items[i].navn)

                info_title.innerHTML = bought_items[i].full_name
                info_desc.innerHTML = bought_items[i].desc
                info_price.innerHTML = bought_items[i].pris + "Kr"

                amount_plus.innerHTML = "&#x2b;"
                amount_minus.innerHTML = "&#8722;"
                amount_amount.innerHTML = bought_items[i].antall

                remove_tekst.innerHTML = "REMOVE"
                remove_icon.innerHTML = "&#10005;"

                bought_items[i].been_before = true
            }
        }
    }
    addEvents()
    summary()
}

function removeItem(event) {
    let item_parent = event.target.parentElement.parentElement.parentElement

    let src = item_parent.getElementsByClassName("cart_image")[0].src
    for (let i = 0; i < bought_items.length; i++) {
        if (src.includes(bought_items[i].link)) {
            bought_items[i].antall = 0
            bought_items[i].been_before = false
            bought_items[i].calc_before = false
            document.getElementById(bought_items[i].navn).remove()
            item_parent.remove()
            let holder = document.getElementsByClassName("si_name")
            for (let x = 0; x < holder.length; x++) {
                if (holder[x].innerHTML == bought_items[i].full_name) {
                    holder[x].parentElement.remove()
                }
            }
        }
    }
    sessionStorage.setItem("cart", JSON.stringify(bought_items))
}

calculate_cart()
function summary() {
    let total_price = 0

    for (let i = 0; i < bought_items.length; i++) {
        if (bought_items[i].calc_before == true) {
            let holder = document.getElementsByClassName("si_name")
            for (let x = 0; x < holder.length; x++) {
                if (holder[x].innerHTML == bought_items[i].full_name) {
                    let price = bought_items[i].antall * bought_items[i].pris
                    let sum_item = holder[x].parentElement
                    sum_item.getElementsByClassName("si_price")[0].innerHTML = price + " Kr"
                }
            }
        } else {
            if (bought_items[i].antall > 0) {
                let element = document.getElementById("summary_items_holder")

                let sum_div = document.createElement("div")
                let sum_name = document.createElement("h1")
                let sum_price = document.createElement("h1")

                sum_div.setAttribute("class", "summary_item")
                sum_name.setAttribute("class", "si_name")
                sum_price.setAttribute("class", "si_price")

                element.appendChild(sum_div)
                sum_div.appendChild(sum_name)
                sum_div.appendChild(sum_price)


                sum_name.innerHTML = bought_items[i].full_name
                let price = bought_items[i].antall * bought_items[i].pris
                sum_price.innerHTML = price + " Kr"

                bought_items[i].calc_before = true
            }
        }

    }
    let price_el = document.getElementsByClassName("si_price")
    for (let i = 0; i < price_el.length; i++) {
        let number = parseInt(price_el[i].innerHTML.replace(" Kr", ""))
        total_price += number
    }
    document.getElementById("subtotal").innerHTML = total_price + " Kr"
}




function purchase() {
    const data = {
        LaNi: bought_items[0].antall,
        cola: bought_items[1].antall,
    }
    fetch("/purchase/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    for (let i = 0; i < bought_items.length; i++) {
        bought_items[i].antall = 0
    }
    sessionStorage.setItem("cart", JSON.stringify(bought_items))
    close_modal()
    document.getElementById("accepted").showModal()
    document.getElementById("accepted").style.display = "flex"
}


if (document.getElementsByClassName("al_add")) {
    var ca_btn = document.getElementsByClassName("al_add")
    for (let i = 0; i < ca_btn.length; i++) {
        ca_btn[i].addEventListener("click", add_to_cart)
    }
}

function add_to_cart(event) {
    var parent = event.target.parentElement
    var link = parent.getElementsByClassName("al_img")[0].src
    for (let i = 0; i < bought_items.length; i++) {
        if (link.includes(bought_items[i].link)) {
            bought_items[i].antall += 1
            sessionStorage.setItem("cart", JSON.stringify(bought_items))
            close_modal()
            calculate_cart()
            summary()
        }
    }
}

function close_cart(){
    window.location.assign("index.html")
}

document.getElementById("accepted").close()
document.getElementById("accepted").style.display = "none"


