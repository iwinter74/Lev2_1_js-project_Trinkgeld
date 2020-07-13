function myFunct() {
    let bill = document.getElementById("bill").value
    let y
    let service = document.getElementById("service").value
    if (service == "schlecht") {
        y = 0.02
    } else if (service == "OK") {
        y = 0.1
    } else if (service == "Super") {
        y=0.2
    } else if (service == "Wie war der Service?") {
document.getElementById("error").innerHTML = "Du musst eingeben wie der Service war!"
    }
    let people = document.getElementById("people").value
    let tip = bill * y
    let total = bill * (1 + y)
    let person = total / people
    document.getElementById("tip").innerHTML = "Das Trinkgled ist: " + tip
    document.getElementById("sum").innerHTML = "Die Gesamtsumme beträgt: " + total
    document.getElementById("person").innerHTML = "Der Preis pro Person ist: " + person
}




// function berechnen() {
//     console.log("test")
//     let price = document.getElementById("price").value
//     let person = document.getElementById("person").value
//     let service = document.getElementById("service").value
//     console.log(price, person, service)
//     if (service == 'notSelected') {
//         document.getElementById("alert").innerHTML = "Du musst angeben wie war der Service"
//     } else if (service == 'good') {
//         document.getElementById("alert").innerHTML = ''
//         document.getElementById('trink').innerHTML = `Trinkgeld ist: ${Number(price) * 0.2}`
//         document.getElementById('total').innerHTML = `Gesamtsumme ist :${Number(price) + (Number(price) * 0.2)}`
//         document.getElementById("pro-person").innerHTML = `pro person :${((Number(price) + (Number(price) * 0.2)) / Number(person)).toFixed(2)}`

//     } else if (service == 'okay') {
//         document.getElementById("alert").innerHTML = ''
//         document.getElementById('trink').innerHTML = `Trinkgeld ist: ${Number(price) * 0.1}`
//         document.getElementById('total').innerHTML = `Gesamtsumme ist :${Number(price) + (Number(price) * 0.1)}`
//         document.getElementById("pro-person").innerHTML = `pro person :${((Number(price) + (Number(price) * 0.1)) / Number(person)).toFixed(2)}`

//     } else if (service == 'bad') {
//         document.getElementById("alert").innerHTML = ''
//         document.getElementById('trink').innerHTML = `Trinkgeld ist: ${Number(price) * 0.02}`
//         document.getElementById('total').innerHTML = `Gesamtsumme ist :${Number(price) + (Number(price) * 0.02)}`
//         document.getElementById("pro-person").innerHTML = `pro person :${((Number(price) + (Number(price) * 0.02)) / Number(person).toFixed(2))}`

//     }

// }


