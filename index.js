const qrinput = document.getElementById('text');
const qrbutton = document.getElementById('btn1');
const qrimage = document.getElementById('qr-image');

console.log(qrinput,qrbutton,qrimage);

qrbutton.addEventListener('click', () =>{
    const inputValue = qrinput.value;
    console.log(inputValue);

    if (!inputValue) {
        alert('Please enter a valid url');
        return;
    }else{
        qrimage.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimage.alt = `QR code for ${inputValue}`;
    }
})


