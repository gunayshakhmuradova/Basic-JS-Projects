document.getElementById('check-btn').addEventListener('click', function () {
    const input = document.getElementById('text-input').value.trim();
    const resultDiv = document.getElementById('result');

    if (!input) {
        alert("Please input a value");
        return;
    }

    const normalizedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const isPalindrome = normalizedInput === normalizedInput.split('').reverse().join('');

    if (isPalindrome) {
        resultDiv.innerText = `${input} is a palindrome`;
    } else {
        resultDiv.innerText = `${input} is not a palindrome`;
    }
});
