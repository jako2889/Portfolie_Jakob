$(window).on("load", sidenvises)

function sidenvises() {
    console.log("sidenvises")

    $(".menubutton").on("click", openNav);
    $(".closebtn").on("click", closeNav);
}

function openNav() {
    $("#mySidenav").addClass("show");
}

function closeNav() {
    console.log("")
    $("#mySidenav").removeClass("show");
}
