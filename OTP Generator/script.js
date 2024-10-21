function generateOTP() {
    const digits = '0123456789';
    const otpLength = 4;
    const otpShow = document.getElementById('display-otp');


    let otp = '';
    const randomValues = new Uint32Array(otpLength);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < otpLength; i++) {
        otp += digits[randomValues[i] % 10];
    }

    otpShow.value = otp;

    setTimeout(() => {
        otpShow.value = '';
    }, 1000);
}
