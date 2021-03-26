$(document).ready(function(){
  $("form#Suggester").submit(function(event){
    const Age = parseInt($("#Age").val());
    const Height = parseInt($("#Height").val());
    const Wieght = parseInt($("#Weight").val());
    const Eyes = parseInt($("#Eyes").val());
    const Hair = parseInt($("#Hair").val());
    

    if (Age < 0) 
      if (Age < 0) {
        $("#Javascript").show();
      } else if (Age > 0) {
        $("#CSharp").show();
      } else {
        $("#Python").show();
      }
    } 
      
    

    
      
      event.preventDefault();

  });
});