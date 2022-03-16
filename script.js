console.log("sup");


$("#signUpButton").click(function(){
    $("#newsletter-container").hide();
    $("#newsletterSignUp-container").show();
});


$("#donate").click(function(){
    $("#membership-content").hide();
    $("#shop-content").hide();
    $("#donate-content").show();
    $("#membership-join").hide();
    $("#donate-join").hide();
    $("#shop-join").hide();

    $("#donate").css("background","lightgrey");
    $("#membership").css("background","none");
    $("#shop").css("background","none");

});

$("#membership").click(function(){
    $("#membership-content").show();
    $("#shop-content").hide();
    $("#donate-content").hide();
    $("#membership-join").hide();
    $("#donate-join").hide();
    $("#shop-join").hide();

    $("#donate").css("background","none");
    $("#membership").css("background","lightgrey");
    $("#shop").css("background","none");

});

$("#shop").click(function(){
    $("#membership-content").hide();
    $("#shop-content").show();
    $("#donate-content").hide();
    $("#membership-join").hide();
    $("#donate-join").hide();
    $("#shop-join").hide();

    $("#donate").css("background","none");
    $("#membership").css("background","none");
    $("#shop").css("background","lightgrey");
});

$("#joinTheWave").click(function(){
    $("#membership-content").hide();
    $("#membership-join").show();
});

$("#donateToTheWave").click(function(){
    $("#donate-content").hide();
    $("#donate-join").show();
});

$("#shopTheWave").click(function(){
    $("#shop-content").hide();
    $("#shop-join").show();
});



$("#hamburger").click(  function() {
    $("#nav-mobile").toggle();
});