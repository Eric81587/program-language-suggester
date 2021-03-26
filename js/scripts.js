$(document).ready(function(){
  $("form#Suggester").submit(function(event){
    const Age = parseInt($("#Age").val());
    const Height = parseInt($("#Height").val());
    const Wieght = parseInt($("#Weight").val());
    const Eyes = parseInt($("#Eyes").val());
    const Hair = parseInt($("#Hair").val());
    

     
    if (Age >= 40) {
      $('#Javascript').show();
    } else if (Age <= 20) {
      $('#CSharp').show();
    } else {
      $('#Python').show();
    }
     
      
    

    
      
      event.preventDefault();

  });
});