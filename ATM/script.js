var hesabA = {
    ad: 'Abbas Şahmuradov',
    hesabNo : '11012022',
    balans : 2000,
    əlavəHesab : 1000
}

var hesabB = {
    ad: 'Zeynəb Şahmuradov',
    hesabNo : '10022020',
    balans : 3000,
    əlavəHesab : 2000
}

function pulÇıxartma(hesab, miqdar) {
    console.log(`Salam ${hesab.ad}`);
    if (hesab.balans >= miqdar) {
        hesab.balans = hesab.balans - miqdar;
        console.log('Pulunuzu çıxardın.');
    } else {
        var toplam = hesab.balans + hesab.əlavəHesab;
        if (toplam >= miqdar) {
            if (confirm(`Əlavə balansınızdan istifadə etmək istəyirsiniz mi?`)) {
                console.log('Pulunuzu çıxarda bilərsiniz.');
                var balans = hesab.balans;
                var əlavəHesab = miqdar - balans;
                hesab.balans = 0;
                hesab.əlavəHesab = hesab.əlavəHesab - əlavəHesab;
            } else {
                console.log(`${hesab.hesabNo} nömrəli hesabınızda ${miqdar} yoxdur.`);
            }
        } else {
            console.log('Balansınızda kifayət qədər məbləğ yoxdur.');
        }
    }
}

document.getElementById("btnHesabA").addEventListener("click", function() {
    pulÇıxartma(hesabA, 2000);
});

document.getElementById("btnHesabB").addEventListener("click", function() {
    pulÇıxartma(hesabB, 2000);
});
