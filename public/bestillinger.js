if (sessionStorage.getItem("username") && sessionStorage.getItem("password")) {
} else {
    window.location.assign("log_in.html")
}

async function get_orders() {

    const res = await fetch("/bought/items",
        {
            method: "GET"
        })
    const data = await res.json()



    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "production") {
            var bought_items = [
                LaNi = { navn: "LaNi", pris: 80, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/Laks_nigiri_maki.png", been_before: false, calc_before: false, full_name: "Laks Nigiri" },
                Cola = { navn: "Cola", pris: 30, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/coca_cola.jpg", been_before: false, calc_before: false, full_name: "Cola" },
            ]
            bought_items[0].antall = data[i].LaNi
            bought_items[1].antall = data[i].cola
            let element = document.getElementById("order_holder")
            let order_div = document.createElement("div")
            let order_title = document.createElement("h1")
            let order_hold = document.createElement("div")

            let ot_hold = document.createElement("div")
            let ot_title = document.createElement("h1")
            let ot_amount = document.createElement("h1")

            let total_hold = document.createElement("div")
            let total_tekst = document.createElement("h1")
            let total_nr = document.createElement("h1")

            let button = document.createElement("h1")
            order_div.setAttribute("class", "orders")
            order_title.setAttribute("class", "order_title")
            order_hold.setAttribute("class", "order_list")
            total_hold.setAttribute("class", "order_total")
            total_tekst.setAttribute("class", "order_amount_total")
            total_nr.setAttribute("class", "order_amount_nr")
            ot_hold.setAttribute("class", "orders_titles")
            ot_title.setAttribute("class", "order_name_title")
            ot_amount.setAttribute("class", "order_amount_title")
            button.setAttribute("class", "order_btn")

            element.appendChild(order_div)
            order_div.appendChild(order_title)
            order_div.appendChild(order_hold)
            order_div.appendChild(total_hold)
            order_div.appendChild(button)
            order_hold.appendChild(ot_hold)
            ot_hold.appendChild(ot_title)
            ot_hold.appendChild(ot_amount)
            total_hold.appendChild(total_tekst)
            total_hold.appendChild(total_nr)

            order_title.innerHTML = "Bestilling " + data[i].order_nr
            ot_title.innerHTML = "Produktnavn"
            ot_amount.innerHTML = "Antall"
            total_tekst.innerHTML = "Total"
            button.innerHTML = "Trykk for å se bestilling"


            let total_amount = 0
            for (let i = 0; i < bought_items.length; i++) {
                if (bought_items[i].antall > 0) {
                    let list = document.createElement("div")
                    let list_name = document.createElement("h1")
                    let list_number = document.createElement("h1")
                    list.setAttribute("class", "order_div")
                    list_name.setAttribute("class", "order_name")
                    list_number.setAttribute("class", "order_amount")

                    list_name.innerHTML = bought_items[i].full_name
                    list_number.innerHTML = bought_items[i].antall
                    list.appendChild(list_name)
                    list.appendChild(list_number)
                    order_hold.appendChild(list)
                    total_amount += bought_items[i].antall

                }
            }
            total_nr.innerHTML = total_amount
        }

    }
    let button_class = document.getElementsByClassName("order_btn")
    for (let i = 0; i < button_class.length; i++) {
        button_class[i].addEventListener("click", full_order)
    }
}

var overlay = document.getElementById("order_overlay")
var trans = document.getElementById("transition")
function close_modal() {
    trans.style.height = "0%"
    setTimeout(close_close, 900)
}

function close_close() {
    overlay.close()
}
function open_modal() {
    overlay.showModal()

    setTimeout(open_open, 100)
}

function open_open() {
    trans.style.height = "100%"
}


async function full_order(event) {
    const res = await fetch("/bought/items",
        {
            method: "GET"
        })
    const data = await res.json()

    let order = event.target.parentElement.getElementsByClassName("order_title")[0].innerHTML
    let order_nr = order.replace("Bestilling ", "")
    sessionStorage.setItem("order_nr", order_nr)
    document.getElementsByClassName("action_items")[0].innerHTML = "";
    document.getElementById("overlay_items").innerHTML = '<hr class="overlay_split">'
    document.getElementById("order_over_title").innerHTML = "BESTILLING NR " + order_nr
    for (let i = 0; i < data.length; i++) {
        if (data[i].order_nr == order_nr) {
            
            var order_items = [
                LaNi = { navn: "LaNi", pris: 80, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/Laks_nigiri_maki.png", been_before: false, calc_before: false, full_name: "Laks Nigiri" },
                Cola = { navn: "Cola", pris: 30, antall: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat", link: "pictures/coca_cola.jpg", been_before: false, calc_before: false, full_name: "Cola" },
            ]
            order_items[0].antall = data[i].LaNi
            order_items[1].antall = data[i].cola

            for (let x = 0; x < order_items.length; x++) {
                if (order_items[x].antall > 0) {
                    let element = document.getElementById("overlay_items")
                    let main_div = document.createElement("div")
                    let over_img = document.createElement("img")
                    let tekst_div = document.createElement("div")
                    let over_title = document.createElement("h1")
                    let over_desc = document.createElement("h1")
                    let splitter = document.createElement("hr")
                    let amount_hold = document.createElement("div")
                    let amount_tekst = document.createElement("h1")
                    let amount = document.createElement("h1")

                    let action_holder = document.getElementsByClassName("action_items")[0]
                    let action_item = document.createElement("div")
                    let action_div = document.createElement("div")
                    let label = document.createElement("label")
                    let checkbox = document.createElement("input")
                    let checkmark = document.createElement("span")
                    let fill = document.createElement("div")
                    let action_info = document.createElement("div")
                    let split1 = document.createElement("hr")
                    let split2 = document.createElement("hr")
                    let action_gen = document.createElement("div")
                    let action_image = document.createElement("img")
                    let action_tekst = document.createElement("div")
                    let action_title = document.createElement("h1")
                    let action_desc = document.createElement("h1")

                    action_item.setAttribute("class", "action_item")
                    action_div.setAttribute("class", "action_div")
                    label.setAttribute("class", "container")
                    checkbox.setAttribute("type", "checkbox")
                    checkmark.setAttribute("class", "checkmark")
                    fill.setAttribute("class", "over_fill")
                    action_info.setAttribute("class", "action_info")
                    split1.setAttribute("class", "action_split")
                    split2.setAttribute("class", "action_split")
                    action_gen.setAttribute("class", "action_general")
                    action_image.setAttribute("class", "action_image")
                    action_tekst.setAttribute("class", "action_tekst")
                    action_title.setAttribute("class", "action_title")
                    action_desc.setAttribute("class", "action_desc")

                    action_holder.appendChild(action_item)
                    action_item.appendChild(label)
                    action_item.appendChild(fill)
                    action_item.appendChild(action_info)     
                    label.appendChild(checkbox)
                    label.appendChild(checkmark)
                    action_info.appendChild(split1)
                    action_info.appendChild(action_gen)
                    action_info.appendChild(split2)
                    action_gen.appendChild(action_image)
                    action_gen.appendChild(action_tekst)
                    action_tekst.appendChild(action_title)
                    action_tekst.appendChild(action_desc)

                    action_image.setAttribute("src", order_items[x].link)
                    action_title.innerHTML = order_items[x].full_name
                    action_desc.innerHTML = order_items[x].desc
                    console.log(data[i].order_nr)

                    main_div.setAttribute("class", "overlay_item")
                    over_img.setAttribute("class", "overlay_image")
                    tekst_div.setAttribute("class", "overlay_details")
                    over_title.setAttribute("class", "overlay_title")
                    over_desc.setAttribute("class", "overlay_desc")
                    splitter.setAttribute("class", "overlay_split")
                    amount_hold.setAttribute("class", "over_amount_div")
                    amount.setAttribute("class", "over_amount")
                    amount_tekst.setAttribute("class", "over_amount")

                    element.appendChild(main_div)
                    element.appendChild(splitter)
                    main_div.appendChild(over_img)
                    main_div.appendChild(tekst_div)
                    tekst_div.appendChild(over_title)
                    tekst_div.appendChild(over_desc)
                    tekst_div.append(amount_hold)
                    amount_hold.appendChild(amount_tekst)
                    amount_hold.appendChild(amount)

                    over_img.setAttribute("src", order_items[x].link)
                    over_title.innerHTML = order_items[x].full_name
                    over_desc.innerHTML = order_items[x].desc
                    amount.innerHTML = order_items[x].antall
                    amount_tekst.innerHTML = "Antall"

                }
            }
        }
    }
    var checkers = document.getElementsByClassName("checkmark")
    for (let i = 0; i < checkers.length; i++) {
        checkers[i].addEventListener("click", checked_item)
    }
    open_modal()
}





function checked_item(event) {
    let link = event.target.parentElement.parentElement.getElementsByClassName("action_image")[0].src
    let produkt_item = document.getElementsByClassName("overlay_image")
    for (let i = 0; i < produkt_item.length; i++) {
        if (link == produkt_item[i].src) {
            if (produkt_item[i].parentElement.style.opacity == "0.3") {
                produkt_item[i].parentElement.style.opacity = "1"
                event.target.parentElement.parentElement.style.opacity = "1"
            } else {
                produkt_item[i].parentElement.style.opacity = "0.3"
                event.target.parentElement.parentElement.style.opacity = "0.3"
            }

        }
    }

}


function open_finish(){
    let finish = document.getElementById("confirm_holder")
    finish.showModal()
    finish.style.display = "flex"
}

var checkers = document.getElementsByClassName("checkmark")
for (let i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener("click", checked_item)
}
document.getElementById("overlay_btn").addEventListener("click", open_finish)
document.getElementById("overlay_ht").addEventListener("click", close_modal)




function close_confirm(){
    let finish = document.getElementById("confirm_holder")
    finish.close()
    finish.style.display = "none"
}
document.getElementsByClassName("confirm_btn")[0].addEventListener("click", finish_order)

async function finish_order(){
    const res = await fetch("/bought/items",
    {
        method: "GET"
    })
    const data = await res.json()
    let order_nr = sessionStorage.getItem("order_nr")
    for (let i = 0; i < data.length; i++){
        if (data[i].order_nr == order_nr){
            const data = {
                order: order_nr,
            }
            fetch("/update/order", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
    }
    setTimeout(delay_refresh, 500)
}


function delay_refresh(){
    window.location.assign("bestillinger.html")
}
get_orders()
close_confirm()