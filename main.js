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

