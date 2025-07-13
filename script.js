const ageInput = document.getElementById("ageInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");


calculateBtn.addEventListener('click', () => {

  const dob = new Date(ageInput.value);
  let y1 = dob.getFullYear();
  let m1 = dob.getMonth() + 1;
  let d1 = dob.getDate();

  const today = new Date();
  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();

  if( !ageInput.value  || dob > today){
    alert("Please enter valid DOB");
    return;
  }

  let y3,m3,d3;

  y3 = y2 - y1;

  if(m2 >= m1){
    m3 = m2 - m1;
  }
  else{
    y3--;
    m3 =  12 + m2 - m1;
  }
   if(d2 >= d1){
    d3 = d2 - d1;
   }        
   else{
    m3--;
    d3 =getDatesInMonth(y1,m1) + d2 - d1;
   }
   if(m3 < 0){
    m3 = 11;
    y3--;
   }

   result.innerHTML =  `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;


   function getDatesInMonth(year,month){
      return new Date(year,month,0).getDate();
   }
})


