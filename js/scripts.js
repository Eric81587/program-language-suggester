$(document).ready(function(){
  $("form#Suggester").submit(function(event){
    const Age = $("#Age").val();
    const Height = $("#Height").val();
    const Wieght = $("#Weight").val();
    const Eyes = $("#Eyes").val();
    const Hair = $("#Hair").val();
    

    if (Age + Height > Weight && Age + Weight > Height && Height + Weight > Age) {
      if (Age === Height && Height == Weight) {
        $("#Javascript").show();
      } else if (Age === Height || Height === Weight || Age === Weight) {
        $("#CSharp").show();
      } else {
        $("#Python").show();
      }
    } 
      
    

    
      
      event.preventDefault();

  });
});