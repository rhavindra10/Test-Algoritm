
function number(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}


function algoritm() {
    console.clear() ;
    let input = document.getElementById('inputid').value ;
    let text = document.getElementById('output') ;
    text.innerHTML = '';
    let hasil = 0 ;
  
    let ubahkearray = function(str){
        return [...str]
    }
       let total = input;
    // console.log(strinput[0]  ,"+" ,strinput[1] ,"=" ,total  );
    for(i = 0 ; i < 10; i++){
    if(total != 1){
        let total2 = 0;
        total = String(total); 
        ubahtotal = ubahkearray(total); 
    
         str= ubahtotal.join("<sub>2</sub>" + " +");

        for(s = 0 ; s < ubahtotal.length; s++){
            total2  += Math.pow(ubahtotal[s],2);
           
           }
          
          
              total = total2;
                 array =  str+ " = "+ total2;
            
             
          text.innerHTML +=   str+ "<sub>2</sub>" +'='+  total2 +'  <br>';
      
   
        
    }
    else{
        break;
    }
    
    
}
               
   

  

}