// ? YT PORTFOLIO
function videoList() {
  $.getJSON("../json/yt.json", function (data) {
    let url = data.url;
    console.log(url);
    $.each(url, function (i, data) {
      $("#video-list").append(
        `
          <div class="col-lg-4 mb-2">
          <iframe width="275" height="154" src="` +
          data.url +
          `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="photo"></iframe>
          </div>   `
      );
    });
  });
}
videoList();
