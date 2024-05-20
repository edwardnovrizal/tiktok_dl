function ValidateUrlTiktok(inputUrl) {
  const urls = inputUrl.split("\n").map((url) => url.trim());
  const validUrls = urls.filter((url) => url !== "");

  if (validUrls.length === 0) {
    return [];
  } else {
    let urlTiktok = [];
    for (const key in validUrls) {
      const tiktokURLPattern = /^https:\/\/www\.tiktok\.com\/[^\/]+\/video\/\d+$/;
      const data = tiktokURLPattern.test(validUrls[key]);
      if (data) {
        urlTiktok.push(validUrls[key]);
      }
    }
    return urlTiktok;
  }
}

module.exports = ValidateUrlTiktok;
