const btn = document.getElementById('btns');


btn.onclick = () => {

  let revalue = true;

  const name = document.getElementById('fname').value;
  if (name.length < 2) {
    alert("name length is too short");
    return false
  }
  localStorage.setItem('Name', name);

  const email = document.getElementById('femail').value;
  if (email.length < 7) {
    alert("please check your email");
    return false;
  }
  localStorage.setItem('Email', email);

  const number = document.getElementById('fnumber').value;
  if (number.length < 10) {
    alert("please enter  valide number");
    return false;
  }
  localStorage.setItem('Number', number);

  const password = document.getElementById('fpass').value;
  const cpassword = document.getElementById('fcpass').value;
  localStorage.setItem('Password', password);
  localStorage.setItem('confirmPassword', cpassword);
  if (password != cpassword) {
    alert("wrong Password");
    return false;
  }
  else {
    alert('good job')
  }
  return revalue;
}

