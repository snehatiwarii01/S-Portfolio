
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

 
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      e.stopPropagation();

      if(form.checkValidity()){
       
        const alert = document.getElementById('formAlert');
        alert.innerHTML = '<div class="alert alert-success">Thank you! Your message is ready to be sent (UI only).</div>';
        form.reset();
        form.classList.remove('was-validated');
      } else {
        form.classList.add('was-validated');
        const alert = document.getElementById('formAlert');
        alert.innerHTML = '<div class="alert alert-danger">Please fill the required fields correctly.</div>';
      }
    }, false);
  }
});
