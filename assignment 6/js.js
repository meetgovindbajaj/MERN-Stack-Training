let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let flag1 = true;
let flag2 = true;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.value;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            flag1 = true;
            flag2 = true;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        } else if (buttonText == '<') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        } else if (buttonText == '.') {
            if (flag1) {
                screenValue += buttonText;
                screen.value = screenValue;
                flag1 = !flag1;
            }
        } else if (buttonText == '+' || buttonText == '-') {
            if (flag2) {
                screenValue += buttonText;
                screen.value = screenValue;
                flag2 = !flag2;
                if (!flag1)
                    flag1 = true;
            }
        } else if (buttonText == '/' || buttonText == '%') {
            if (flag2 && screen.value != "") {
                screenValue += buttonText;
                screen.value = screenValue;
                flag2 = !flag2;
                if (!flag1)
                    flag1 = true;
            }
        } else if (buttonText == '*') {
            if (screen.value != "") {
                screenValue += buttonText;
                screen.value = screenValue;
                flag2 = false;
                if (!flag1)
                    flag1 = true;
            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
            flag2 = true;
        }
    })
}