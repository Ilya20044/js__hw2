"use strict"
// exersize 1
// {
//     let name = "Ilya";
//     let age = 19;
//     let city = "Vitebsk"
//     let phone = "+36454235";
//     let email = "20044ilya@gmail/com";
//     let company = "bntu";
//     let phrase = prompt('Меня зовут',name);
//     let phrase1 = prompt('Мне',age);
//     let phrase2 = prompt('Я живу в',city);
//     let phrase3 = prompt('мои контактные данные',phone);
//     let phrase4 = prompt('мои контактные данные',email);
//     let phrase5 = prompt('я работаю в',company);
// }

// //exersize2
// {
//     let name ="ilya";
//     let age =  19
//     let date = 2023 - age
//     let phrase= prompt('родился',date);
// }

//exersize3
{
    let str = "221222";
    if (Number(str[0])+Number(str[1])+Number(str[2]) === Number(str[3])+Number(str[4])+Number(str[5])){
        console.log("yes");
    }
        else{
            console.log("no")
        }
}

//exersize 4
{
    let a = 1
    if(a > 0){
        console.log("rigth");
    }
    else{
        console.log("error");
    }
}
//exersize 5
let a = 10;
let b = 2;
{
    let sum = a + b;
    console.log(sum);
    let raz = a - b;
    console.log(raz);
    let pro = a * b;
    console.log(pro);
    let chas = a / b;
    console.log(chas);
    let sum2;
    if (sum > 1){
        let sum2 = sum * sum;
        console.log(sum2) 
    }
    
}
//exersize 6
{
    if (a > 2 && a < 11 || b >= 6 && b <= 14){
        console.log("верно");
    }
    else{
        console.log("неверно");
    }
}
//exersize 7
{
    let n = 24;
    if (n <= 15){
        console.log("первая");
    }
    if (n > 15 && n <= 30){
        console.log("вторая");
    }
    if (n > 30 && n <= 45){
        console.log("третья");
    }
    if (n > 45 && n <= 59){
        console.log("четвертая");
    }
}

//exersize 8
{
    let day = 24;
    if (day <= 10){
        console.log("первая");
    }
    if (day > 10 && day <= 20){
        console.log("вторая");
    }
    if (day > 20 && day <= 31){
        console.log("третья");
    }
}
//exersize 9
    let days = 60;
    console.log("колтчество дней"+days);
{
    
    let weeks = days / 7;
    console.log("колтчество недель"+weeks);
    let mes = days / 31;
    console.log("количество месяцев"+mes);
    let years = days / 365;
    console.log("колтчество лет"+years);
    let hours = days * 24;
    console.log("колтчество часов"+hours);
    let minuts = hours * 60;
    console.log("колтчество минут"+minuts);
    let sec = minuts * 60;
    console.log("колтчество секунд"+sec);
    if (days < 365){
        console.log("меньше года")  
    }
    else{
        console.log("больше года");
    }
    if (days < 31){
        console.log("меньше месяца")  
    }
    else{
        console.log("больше месяца");
    }
    if (days < 7){
        console.log("меньше недели")  
    }
    else{
        console.log("больше недели");
    }
    if (days < 1){
        console.log("меньше суток")  
    }
    else{
        console.log("больше суток");
    }
    if (hours < 1){
        console.log("меньше минуты")  
    }
    else{
        console.log("больше минуты");
    }
    if (minuts < 60){
        console.log("меньше cекунды")  
    }
    else{
        console.log("больше секунды");
    }
}
//exersize 10
{
    let jan = 31;
    let feb = jan + 28;
    let mar = feb + 31;
    let apr = mar + 30;
    let may = apr + 31;
    let jun = may + 30;
    let jul = jun + 31;
    let aug = jul + 31;
    let sep = aug + 30;
    let okt = sep + 31;
    let nov = okt + 30;
    let dec = nov + 31;
    let season1 = "зима"
    let season2 = "весна"
    let season3 = "лето"
    let season4 = "осень"
    if(days <= jan){
        console.log("январь")
    }
    if(days > jan && days <= feb){
        console.log("февраль")
    }
    if(days > feb && days <= mar){
        console.log("март")
    }
    if(days > mar && days <= apr){
        console.log("апрель")
    }
    if(days > apr && days <= may){
        console.log("май")
    }
    if(days > may && days <= jun){
        console.log("июнь")
    }
    if(days > jun && days <= jul){
        console.log("июль")
    }
    if(days > jul && days <= aug){
        console.log("август")
    }
    if(days > aug && days <= sep){
        console.log("сентябрь")
    }
    if(days > sep && days <= okt){
        console.log("октябрь")
    }
    if(days > okt && days <= nov){
        console.log("ноябрь")
    }
    if(days > nov && days <= dec){
        console.log("декабрь")
    }
    if (days <= feb){
        console.log(season1);
    }
    if (days > feb && days <= may){
        console.log(season2);
    }
    if (days > may && days <= aug){
        console.log(season3);
    }
    if (days > aug && days <= nov){
        console.log(season4)
    }
    if (days > nov && days <= dec){
        console.log(season1);
    }


}
