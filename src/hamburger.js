// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원 할인)

// let hamburger1, hamburger2, hamburger3;
// let drink1, drink2;

// hamburger1 = Number(prompt("첫번째 버거 가격"));
// hamburger2 = Number(prompt("두번째 버거 가격"));
// hamburger3 = Number(prompt("세번째 버거 가격"));

// drink1 = Number(prompt("첫번째 음료 가격"));
// drink2 = Number(prompt("두번째 음료 가격"));

// let lowBurgerPrice = Math.min(hamburger1, hamburger2, hamburger3);
// let lowDrinkPrice = Math.min(drink1, drink2);

// let set = lowBurgerPrice + lowDrinkPrice - 50;
// document.getElementById("result").textContent = "가장 저렴한 세트 메뉴 가격: " + set;

function getPrice(){
    let menu = [];
    for (let i = 0; i < 5; i++){
        menu[i] = Number(document.getElementById(`menu${i+1}`).value);
    }
    let minB = menu[0];
    let minD = menu[3];
    for(let i = 0; i < menu.length; i++){
        if(i < 3 && minB > menu[i]) minB = menu[i];
        if(i > 3 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById("value").innerHTML = (minB + minD - 50) + "원";
}