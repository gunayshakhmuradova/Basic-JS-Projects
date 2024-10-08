document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("amount").value);
        const baseCurrency = document.getElementById("baseCurrency").value;
        const targetCurrency = document.getElementById("targetCurrency").value;

    
        const exchangeRates = {
            USD: { EUR: 0.85, AZN: 1.7, TRY: 9.5 },
            EUR: { USD: 1.18, AZN: 2, TRY: 11.2 },
            AZN: { USD: 0.59, EUR: 0.5, TRY: 5.6 },
            TRY: { USD: 0.105, EUR: 0.089, AZN: 0.18 },
        };

        if (!isNaN(amount) && exchangeRates[baseCurrency] && exchangeRates[baseCurrency][targetCurrency]) {
            const convertedAmount = amount * exchangeRates[baseCurrency][targetCurrency];
            document.getElementById("conversionResult").innerText = `${amount} ${baseCurrency} is equal to ${convertedAmount.toFixed(2)} ${targetCurrency}`;
        } else {
            document.getElementById("conversionResult").innerText = "Invalid input or unsupported conversion.";
        }
    });
});
