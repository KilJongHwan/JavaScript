let a, b, c;
a = prompt("숫자 입력", "");
b = prompt("숫자 입력", "");
c = prompt("숫자 입력", "");

a = Number(a);
b = Number(b);
c = Number(c);

if (a > b && a > c) {
    document.write("가장 큰 숫자는 " + a);
} else if (b > a && b > c) {
    document.write("가장 큰 숫자는 " + b);
} else if (c > a && c > b) {
    document.write("가장 큰 숫자는 " + c);
}

if (a < b && a < c) {
    document.write("가장 작은 숫자는 " + a);
} else if (b < a && b < c) {
    document.write("가장 작은 숫자는 " + b);
} else if (c < a && c < b) {
    document.write("가장 작은 숫자는 " + c);
}