$(function(){
   $(".ban li:gt(0)").fadeOut(); 
    //end메소드는 현재선택된 요소 이전요소선택
    function nextani(){
        $(".ban li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban");
    }
    function prevani(){
        $(".ban li:last").fadeOut(500).prev().fadeIn(500).end().prependTo(".ban");
    }
    let interval = setInterval(nextani,2000);
    $(".next").click(function(){
       nextani(); 
    });
    $(".prev").click(function(){
       prevani(); 
    });
    $(".slide").hover(function(){
        clearInterval(interval);
    },function(){
       interval = setInterval(nextani,2000); 
    })
});





