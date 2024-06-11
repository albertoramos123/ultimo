document.querySelectorAll('.produtos .quant').forEach(quant => {
    const plus = quant.querySelector(".plus");
    const minus = quant.querySelector(".minus");
    const num = quant.querySelector(".num");
    let a = 1;

    plus.addEventListener("click", () => {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    });

    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
        }
    });
});