$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$(document).ready(function () {
    $("input[maxlength]").maxlength();
});


function writeFunctionDes() {
    document.getElementById("textArea").readOnly = "false";
  }
  function previewFunctionDes() {
    document.getElementById("textArea").readOnly = "true";
  }

  function writeFunctionRep() {
    document.getElementById("reproduce").readOnly = "false";
  }
  function previewFunctionRep() {
    document.getElementById("reproduce").readOnly = "true";
  }
  function writeFunctionExp() {
    document.getElementById("exploitation").readOnly = "false";
  }
  function previewFunctionExp() {
    document.getElementById("exploitation").readOnly = "true";
  }
  function writeFunctionFix() {
    document.getElementById("fixation")= "true";
  }
  function previewFunctionFix() {
    document.getElementById("fixation").readOnly = "true";
  }
