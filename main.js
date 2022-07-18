document.querySelector("select").onchange = function () {
    let valus = ["Tosh", "Qaychi", "Qogoz"]

    let randoms = Math.floor(3 * Math.random())
    let randomLenght = this.value

    let num = randoms - randomLenght
    let result;

    if (num == 0) {
        result = "Teng"
    } else if (num == 1 || num == -2) {
        result = " Yuttingiz"
    } else {
        result = " yutqizdingiz"
    }
    const ulElement = document.querySelector(".result-ul")
    const newElement = document.createElement("li")
    ulElement.appendChild(newElement)
    newElement.textContent = " Siz - " + valus[randomLenght] + " :  Kompyuter - " + valus[randoms] + " = " + result
    this.selectedIndex = 0;
    newElement.classList.add("mb-3")
}































// document.querySelector("select").onchange = function() {

//     let mas = ["Камень", "Бумага", "Ножницы"]
//     let index1 = Math.floor(3 * Math.random());
//     let index2 = this.value;

//     let dif = index1 - index2;
//     let result;
//     if (dif == 0) {
//         result = " Ничья!";
//     } else if (dif == 1 || dif == -2) {
//         result = " - ты победил!"
//         ;
//     } else {
//         result = " - ты проиграл!";
//     }



//     alert(" ты - " + mas[index1] + " :  компьютер - " + mas[index2] + "\n" + result);
//     this.selectedIndex = 0;
// }
// const ulElement = document.querySelector(".result-ul")
// const newElement = document.createElement("li")
// ulElement.appendChild(newElement)