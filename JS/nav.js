let newWidth = $(".home-section-container").width() - 250;
export function openNav() {
  $(".nav-side-bar").animate({ left: "0" }, 500);
  $(".home-section-container").animate({ width: newWidth }, 500);
}
export function closeNav() {
  $(".nav-side-bar").animate({ left: "-250px" }, 500);
  $(".home-section-container").animate({ width: "100%" }, 500);
}
