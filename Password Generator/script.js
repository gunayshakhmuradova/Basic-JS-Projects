function randomPassword() {
   let displayPassword = document.getElementById('display-password');
   let passwordLength = document.getElementById('password-length');
   let errorInfo = document.getElementById('error-info');
   let password = '';
   let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

   parseInt(passwordLength.value);

   if (passwordLength == 0) {
      errorInfo.innerHTML = 'Please enter a number';
      error.style.padding = '10px 15px';
      setTimeout(() => {
         error.style.visibility = 'hidden';
         window.location.reload();
      }, 2000);
   }

   for (let i = 0; i < passwordLength.value; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   displayPassword.value = password;
}
