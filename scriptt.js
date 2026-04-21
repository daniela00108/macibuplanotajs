const datums = new Date()
izvade.innerHTML = datums

let minējums = Math.floor(Math.random() * 11)
let izmeginajums = 0

function parbaudit() {
    let ievade = Number(document.getElementById("ievade").value)
    izmeginajums ++

    if( ievade === "") {
        document.getElementById("rezultats").textContent = "Lūdzu ievadi skaitli"
        return
    }
    let skaitlis = Number(ievade)
    izmeginajums ++
    if(skaitlis === minējums)
        document.getElementById("rezultats").textContent = "Pareizi, skaitlis bija" + minējums
    else if (skaitlis > minējums) {
        document.getElementById("rezultats").textContent = "Mēģini mazāku skaitli"
    }
    else {
        document.getElementById("rezultats").textContent = "Mēģini lielāku skaitli"
    }
}
function atkārtot() {
    minējums = Math.floor(Math.random()* 11)
    mini = 0
    document.getElementById("rezultats").textContent = ""
    document.getElementById("meg").textContent = ""
    document.getElementById("ievade").textContent = ""
}
