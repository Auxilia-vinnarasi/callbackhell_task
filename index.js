const countdown = document.querySelector(".countdown");
const msg = (num) =>
    new Promise((resolve, reject) => {
        if (num) {
            setTimeout(() => {
                countdown.innerText = num;
                //console.log(num);
                resolve(num);
            }, 1000)
        } else {
            reject(num);
        }

    });
msg(10)
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .then((x) => msg(--x))
    .catch((x) => msg("HAPPY INDEPENDECE DAY"));
