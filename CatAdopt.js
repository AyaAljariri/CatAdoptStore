



var myB1=document.getElementById("num1");
var myB2 = document.getElementById("num2");
var myB3 = document.getElementById("num3");
myB1.onclick=function(){"use strict" ;
myB1.style.backgroundColor="Purple";
}
myB2.onclick=function(){"use strict" ;
myB2.style.backgroundColor="Purple";
}
myB3.onclick=function(){"use strict" ;
myB3.style.backgroundColor="Purple";
}
var myB4=document.getElementById("num4");
var myB5 = document.getElementById("num5");
var myB6 = document.getElementById("num6");
myB4.onclick=function(){"use strict" ;
myB4.style.backgroundColor="Purple";
}
myB5.onclick=function(){"use strict" ;
myB5.style.backgroundColor="Purple";
}
myB6.onclick=function(){"use strict" ;
myB6.style.backgroundColor="Purple";
}


var ajaxRequest = new XMLHttpRequest();


   
  function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
  

//for (var i =1 ; i<93 ; i=i+1) {

  ajax_get('https://api.thecatapi.com/v1/images/search?size=xsmall', function(data) {
        document.getElementById("id").innerHTML = data[0]["id"];
        document.getElementById("url").innerHTML = data[0]["url"];
      
        var html = '<img src="' + data[0]["url"] + '">';
        document.getElementById("image").innerHTML = html;

});
///}

    var myImg1=document.getElementById("1");
    var myDiv1=document.getElementById("d1");
    
    myImg1.ondblclick =function (){"use strict";
    myDiv1.innerHTML="a1g4Ycw-z";
    };
    myImg1.onclick=function(){"use strict";
    myDiv1.innerHTML="";}
    //-----------
     var myImg2=document.getElementById("2");
    var myDiv2=document.getElementById("d2");
    
    myImg2.ondblclick =function (){"use strict";
    myDiv2.innerHTML="ath";
    };
    myImg2.onclick=function(){"use strict";
    myDiv2.innerHTML="";}
    //---------
     var myImg3=document.getElementById("3");
    var myDiv3=document.getElementById("d3");
    
    myImg3.ondblclick =function (){"use strict";
    myDiv3.innerHTML="dl4";
    };
    myImg3.onclick=function(){"use strict";
    myDiv3.innerHTML="";}
    //------
     var myImg4=document.getElementById("4");
    var myDiv4=document.getElementById("d4");
    
    myImg4.ondblclick =function (){"use strict";
    myDiv4.innerHTML="4mi";
    };
    myImg4.onclick=function(){"use strict";
    myDiv4.innerHTML="";}
    //------
     var myImg5=document.getElementById("5");
    var myDiv5=document.getElementById("d5");
    
    myImg5.ondblclick =function (){"use strict";
    myDiv5.innerHTML="yy-Zdca1h";
    };
    myImg5.onclick=function(){"use strict";
    myDiv5.innerHTML="";}
    //---------
     var myImg6=document.getElementById("6");
    var myDiv6=document.getElementById("d6");
    
    myImg6.ondblclick =function (){"use strict";
    myDiv6.innerHTML="4th";
    };
    myImg6.onclick=function(){"use strict";
    myDiv6.innerHTML="";}
    //-------
     var myImg7=document.getElementById("7");
    var myDiv7=document.getElementById("d7");
    
    myImg7.ondblclick =function (){"use strict";
    myDiv7.innerHTML="bq4";
    };
    myImg7.onclick=function(){"use strict";
    myDiv7.innerHTML="";}
    //-------
     var myImg8=document.getElementById("8");
    var myDiv8=document.getElementById("d8");
    
    myImg8.ondblclick =function (){"use strict";
    myDiv8.innerHTML="dh9";
    };
    myImg8.onclick=function(){"use strict";
    myDiv8.innerHTML="";}


//-----------------------------------------------------------------------------------------------------
//Second Row
var myImg9=document.getElementById("9");
    var myDiv9=document.getElementById("d9");
    
    myImg9.ondblclick =function (){"use strict";
    myDiv9.innerHTML="agh";
    };
    myImg9.onclick=function(){"use strict";
    myDiv9.innerHTML="";}
    //-----------
     var myImg10=document.getElementById("10");
    var myDiv10=document.getElementById("d10");
    
    myImg10.ondblclick =function (){"use strict";
    myDiv10.innerHTML="54";
    };
    myImg10.onclick=function(){"use strict";
    myDiv10.innerHTML="";}
    //---------
     var myImg11=document.getElementById("11");
    var myDiv11=document.getElementById("d11");
    
    myImg11.ondblclick =function (){"use strict";
    myDiv11.innerHTML="e9b";
    };
    myImg11.onclick=function(){"use strict";
    myDiv11.innerHTML="";}
    //------
     var myImg12=document.getElementById("12");
    var myDiv12=document.getElementById("d12");
    
    myImg12.ondblclick =function (){"use strict";
    myDiv12.innerHTML="9XFpC6FUz";
    };
    myImg12.onclick=function(){"use strict";
    myDiv12.innerHTML="";}
    //------
     var myImg13=document.getElementById("13");
    var myDiv13=document.getElementById("d13");
    
    myImg13.ondblclick =function (){"use strict";
    myDiv13.innerHTML="cdj";
    };
    myImg13.onclick=function(){"use strict";
    myDiv13.innerHTML="";}
    //---------
     var myImg14=document.getElementById("14");
    var myDiv14=document.getElementById("d14");
    
    myImg14.ondblclick =function (){"use strict";
    myDiv14.innerHTML="MTkwMDAxMw";
    };
    myImg14.onclick=function(){"use strict";
    myDiv14.innerHTML="";}
    //-------
     var myImg15=document.getElementById("15");
    var myDiv15=document.getElementById("d15");
    
    myImg15.ondblclick =function (){"use strict";
    myDiv15.innerHTML="dks";
    };
    myImg15.onclick=function(){"use strict";
    myDiv15.innerHTML="";}
    //-------
     var myImg16=document.getElementById("16");
    var myDiv16=document.getElementById("d16");
    
    myImg16.ondblclick =function (){"use strict";
    myDiv16.innerHTML="a1o";
    };
    myImg16.onclick=function(){"use strict";
    myDiv16.innerHTML="";}
    
    //-----------------------------------------------------------------------
    //third Row
    var myImg17=document.getElementById("17");
    var myDiv17=document.getElementById("d17");
    
    myImg17.ondblclick =function (){"use strict";
    myDiv17.innerHTML="dLrzJVXo1";
    };
    myImg17.onclick=function(){"use strict";
    myDiv17.innerHTML="";}
    //-----------
     var myImg18=document.getElementById("18");
    var myDiv18=document.getElementById("d18");
    
    myImg18.ondblclick =function (){"use strict";
    myDiv18.innerHTML="bbd";
    };
    myImg18.onclick=function(){"use strict";
    myDiv18.innerHTML="";}
    //---------
     var myImg19=document.getElementById("19");
    var myDiv19=document.getElementById("d19");
    
    myImg19.ondblclick =function (){"use strict";
    myDiv19.innerHTML="3l0";
    };
    myImg19.onclick=function(){"use strict";
    myDiv19.innerHTML="";}
    //------
     var myImg20=document.getElementById("20");
    var myDiv20=document.getElementById("d20");
    
    myImg20.ondblclick =function (){"use strict";
    myDiv20.innerHTML="ZGoY_Ivly";
    };
    myImg20.onclick=function(){"use strict";
    myDiv20.innerHTML="";}
    //------
     var myImg21=document.getElementById("21");
    var myDiv21=document.getElementById("d21");
    
    myImg21.ondblclick =function (){"use strict";
    myDiv21.innerHTML="cut";
    };
    myImg21.onclick=function(){"use strict";
    myDiv21.innerHTML="";}
    //---------
     var myImg22=document.getElementById("22");
    var myDiv22=document.getElementById("d22");
    
    myImg22.ondblclick =function (){"use strict";
    myDiv22.innerHTML="4wz5Zyi2m";
    };
    myImg22.onclick=function(){"use strict";
    myDiv22.innerHTML="";}
    //-------
     var myImg23=document.getElementById("23");
    var myDiv23=document.getElementById("d23");
    
    myImg23.ondblclick =function (){"use strict";
    myDiv23.innerHTML="2tb";
    };
    myImg23.onclick=function(){"use strict";
    myDiv23.innerHTML="";}
    //-------
     var myImg24=document.getElementById("24");
    var myDiv24=document.getElementById("d24");
    
    myImg24.ondblclick =function (){"use strict";
    myDiv24.innerHTML="7aj";
    };
    myImg24.onclick=function(){"use strict";
    myDiv24.innerHTML="";}
    
    //------------------------------------------------------------
    //forth Row
     var myImg25=document.getElementById("25");
    var myDiv25=document.getElementById("d25");
    
    myImg25.ondblclick =function (){"use strict";
    myDiv25.innerHTML="3bh";
    };
    myImg25.onclick=function(){"use strict";
    myDiv25.innerHTML="";}
    //-----------
     var myImg26=document.getElementById("26");
    var myDiv26=document.getElementById("d26");
    
    myImg26.ondblclick =function (){"use strict";
    myDiv26.innerHTML="djf";
    };
    myImg26.onclick=function(){"use strict";
    myDiv26.innerHTML="";}
    //---------
     var myImg27=document.getElementById("27");
    var myDiv27=document.getElementById("d27");
    
    myImg27.ondblclick =function (){"use strict";
    myDiv27.innerHTML="gYC-q13An";
    };
    myImg27.onclick=function(){"use strict";
    myDiv27.innerHTML="";}
    //------
     var myImg28=document.getElementById("28");
    var myDiv28=document.getElementById("d28");
    
    myImg28.ondblclick =function (){"use strict";
    myDiv28.innerHTML="abd";
    };
    myImg28.onclick=function(){"use strict";
    myDiv28.innerHTML="";}
    //------
     var myImg29=document.getElementById("29");
    var myDiv29=document.getElementById("d29");
    
    myImg29.ondblclick =function (){"use strict";
    myDiv29.innerHTML="zFm4AbO-d";
    };
    myImg29.onclick=function(){"use strict";
    myDiv29.innerHTML="";}
    //---------
     var myImg30=document.getElementById("30");
    var myDiv30=document.getElementById("d30");
    
    myImg30.ondblclick =function (){"use strict";
    myDiv30.innerHTML="8vg";
    };
    myImg30.onclick=function(){"use strict";
    myDiv30.innerHTML="";}
    //-------
     var myImg31=document.getElementById("31");
    var myDiv31=document.getElementById("d31");
    
    myImg31.ondblclick =function (){"use strict";
    myDiv31.innerHTML="9vg";
    };
    myImg31.onclick=function(){"use strict";
    myDiv31.innerHTML="";}
    //-------
     var myImg32=document.getElementById("32");
    var myDiv32=document.getElementById("d32");
    
    myImg32.ondblclick =function (){"use strict";
    myDiv32.innerHTML="4vg";
    };
    myImg32.onclick=function(){"use strict";
    myDiv32.innerHTML="";}
    
    
    

    




 
 

    