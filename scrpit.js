const loader = document.getElementById("loader");

const reactor = document.querySelector(".reactor");

const percent = document.getElementById("percent");
const bar = document.getElementById("bar");

const status = document.getElementById("status");

const cpu = document.getElementById("cpu");
const mem = document.getElementById("mem");
const net = document.getElementById("net");

const clock = document.getElementById("clock");


/* =========================
   LOADING
========================= */

const messages = [
    "BOOTING CORE...",
    "LOADING ENGINE...",
    "CALIBRATING REACTOR...",
    "CONNECTING NETWORK...",
    "LOADING ASSETS...",
    "VERIFYING SECURITY...",
    "SYNCHRONIZING DATA...",
    "FINALIZING SYSTEM...",
    "SYSTEM READY"
];

let value = 0;


const loading = setInterval(() => {

    value++;

    percent.textContent = value;

    bar.style.width = value + "%";


    /* Dynamic status */

    let index = Math.floor(value / 12);

    if (index >= messages.length) {
        index = messages.length - 1;
    }

    status.textContent = messages[index];


    /* Fake system stats */

    cpu.textContent =
        Math.floor(35 + Math.random() * 60);

    mem.textContent =
        Math.floor(40 + Math.random() * 50);

    net.textContent =
        Math.floor(70 + Math.random() * 30);


    /* Finished */

    if (value >= 100) {

        clearInterval(loading);

        status.textContent = "SYSTEM READY";

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.transform =
                "scale(1.08)";

            setTimeout(() => {

                loader.remove();

            }, 1200);

        }, 500);
    }

}, 50);


/* =========================
   MOUSE 3D EFFECT
========================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - .5) * 2;

    const y =
        (event.clientY / window.innerHeight - .5) * 2;


    reactor.style.transform =
        `rotateY(${x * 12}deg)
         rotateX(${-y * 12}deg)`;

});


/* =========================
   DIGITAL CLOCK
========================= */

setInterval(() => {

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString(
            "en-US",
            { hour12: false }
        );

}, 1000);