const login = document.getElementById('login');



login.onclick = (e) => {
   let reval = true;
   e.preventDefault();
   const EmailAddress = document.getElementById('femail').value;
   const Password = document.getElementById('fpass').value;
   const Emails = localStorage.getItem('Email');
   const Passwords = localStorage.getItem('Password');

   if (EmailAddress != Emails) {
      alert("Wrong EmailAddress");
      return false;
   }
   if (Password != Passwords) {
      alert("Wrong Password");
      return false;
   }
   else {
      alert('Successful Login');
   }
   return reval;
}