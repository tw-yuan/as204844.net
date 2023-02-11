let prefixes;

axios
  .get(
    "https://stat.ripe.net/data/announced-prefixes/data.json?resource=AS204844"
  )
  .then(function (response) {
    prefixes = response.data.data.prefixes;
    prefixes.forEach((ip) => {
      $(".ip-info").append(`<tr><td>${ip.prefix}</td></tr>`);
    });
  })
  .catch(function (error) {
    $(".ip-info").append("<tr><td>資料錯誤請重新整理頁面</tr>.");
  });
