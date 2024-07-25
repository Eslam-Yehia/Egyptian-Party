// timeNow and b are javascript Date objects
let diff;
export function dateDiffInDays(b) {
  const timeNow = new Date();
  const sec = 1000;
  const min = 1000 * 60;
  const hour = 1000 * 60 * 60;
  const day = 1000 * 60 * 60 * 24;
  const utc1 = timeNow.getTime();
  const utc2 = b.getTime();

  let diffDay =
    Math.floor((utc2 - utc1) / day) < 0
      ? Math.floor((utc2 - utc1) / day) + 1
      : Math.floor((utc2 - utc1) / day);
  let diffHr = Math.abs(Math.abs((utc1 - utc2) / day) - Math.abs(diffDay)) * 24;
  let diffMin = Math.abs(Math.abs(diffHr) - Math.abs(Math.floor(diffHr))) * 60;
  let diffSec =
    Math.abs(Math.abs(diffMin) - Math.abs(Math.floor(diffMin))) * 60;

  diff = [
    diffDay,
    Math.floor(diffHr),
    Math.floor(diffMin),
    Math.floor(diffSec),
  ];

  if (
    Math.floor((utc2 - utc1) / day) < 0 &&
    Math.floor((utc2 - utc1) / day) + 1 == 0
  ) {
    $(".day-sign").html("-");
  } else {
    $(".day-sign").html("");
  }

  displayCount();
}

function displayCount() {
  $(".day-num").html(diff[0]);
  $(".hours span").html(diff[1]);
  $(".minutes span").html(diff[2]);
  $(".seconds span").html(diff[3]);
}
