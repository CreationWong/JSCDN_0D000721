$(document).ready(function(){
    $("#P_center").dblclick(function(){
      $("#P_center").hide("slow",function(){
            alert("Emmm,你为什么要点他（≧ ﹏ ≦）被你吓跑了找不回来了！(っ °Д °;)っ");
      });
    });
});
$(document).ready(function(){
  $.post("./PHP/IP.php", function(data){
      $("#ip_out").append(data);
  });
});