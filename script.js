console.log("sup");

$("#donate").click(function() {
    $("#membership-content").hide();
    $("#shop-content").hide();
    $("#donate-content").show();

    $("#donate").css("background","lightgrey");
    $("#membership").css("background","none");
    $("#shop").css("background","none");

});

$("#membership").click(function() {
    $("#membership-content").show();
    $("#shop-content").hide();
    $("#donate-content").hide();

    $("#donate").css("background","none");
    $("#membership").css("background","lightgrey");
    $("#shop").css("background","none");

});

$("#shop").click(function() {
    $("#membership-content").hide();
    $("#shop-content").show();
    $("#donate-content").hide();

    $("#donate").css("background","none");
    $("#membership").css("background","none");
    $("#shop").css("background","lightgrey");
});

$("#hamburger").click(  function() {
    $("#nav-mobile").toggle();
});