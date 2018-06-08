$(window).on("load", sidenvises);
var modal = $("#myModal");

var img = $("#myImg");
var modalImg = $("#img01");
var captionText = $("#caption");


function sidenvises() {
    console.log("siden vises");

    $(".open_modal").on("click", visModal);
}

function visModal() {
    console.log("vis modal");
    $(".modal").addClass("show");
    $("#img01").attr("src", this.src);
    $("#caption").html(this.alt);

    $(".close").on("click", closeModal);
}

var span = $(".close")[0];

function closeModal() {
    console.log("Close modal");

    $(".modal").removeClass("show");
}
