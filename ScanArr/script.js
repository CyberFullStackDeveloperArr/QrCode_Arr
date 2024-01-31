let qrPanel = document.querySelector("#qr-panel");
let qrInput = document.querySelector("#qr-input");
let qrBtn = document.querySelector("#qr-btn");


(function() {
    let qr = new QRious({
        element: qrPanel,
        value: "https://wa.me/qr/43R3U3LQYVWLJ1",
        size: 300
    });
})();
qrBtn.addEventListener("click", () => {
    new QRious({
        element: qrPanel,
        value: qrInput.value,
        size: 300
    });
})