const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('text');
const imgEl = document.getElementById('QR-CODE');

const getQrCode = () => {
    const text = inputEl.value.trim();

    if (text) {
        const qr = new QRCode(document.createElement("div"), {
            text: text,
            width: 200,
            height: 200,
        });
        imgEl.classList.add('hide');
        btnEl.innerHTML = "Generating QR code...";

        setTimeout(() => {
            const canvas = qr._oDrawing._elCanvas; // Access generated QR code
            imgEl.src = canvas.toDataURL("image/png"); // Convert QR to image
            btnEl.innerHTML = "Generate QR Code";
            imgEl.classList.remove('hide');
        }, 1000);

    }

};


btnEl.addEventListener('click', getQrCode);
