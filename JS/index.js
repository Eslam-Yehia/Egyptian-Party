import { closeNav, openNav } from "./nav.js";
import { dateDiffInDays } from "./count.js";

let partyTime = new Date("1-1-2025 00:00:01");
setInterval(function () {
  dateDiffInDays(partyTime);
}, 1000);

$("body").on("click", ".open", async function () {
  openNav();
});
$("body").on("click", ".close-mark a", async function () {
  closeNav();
});
closeNav();

$(".contact-form").on("input", "#textArea", function (e) {
  let textChar = 100 - $("#textArea").val().length;
  $(this).off("blur");
  if (textChar < 0) {
    $(".remaining-char").html("your available character finished");
  } else {
    $(".remaining-char").html(textChar);
  }
});
