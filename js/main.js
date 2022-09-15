window.onload = function() {
  cassett = document.getElementById('cassett');
  function deleteCassett() {
    cassett.style.setProperty('display', 'none');
  } 
  function enter() {
    cassett.style.setProperty('animation', 'animatePp 5s linear');
    setInterval(deleteCassett, 5000);
  }
  console.log(cassett);
  cassett.onclick = enter;
  
}

