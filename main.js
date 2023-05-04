const token = "ltoken=xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2; ltuid=6XXXXX3;"

const genshin = true
const honkai_star_rail = true
const honkai_3 = false

function main() {
  let hoyolabResp = autoSignFunction();
  console.log(hoyolabResp);
}

function autoSignFunction() {
  const signurl_gs = "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481"
  const signurl_hsr = "https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202303301540311"
  const signurl_bh3 = "https://sg-public-api.hoyolab.com/event/mani/sign?lang=en-us&act_id=e202110291205111"

  const header = {
    Cookie: token
  };

  const options = {
    method: 'POST',
    headers: header,
    muteHttpExceptions: true,
  };

  let response = "";

  if(genshin == true) {
    let hoyolabResponse_gs = UrlFetchApp.fetch(signurl_gs,options);
    response += "\n" + JSON.parse(hoyolabResponse_gs).message;
  }

  if(honkai_star_rail == true) {
    let hoyolabResponse_hsr = UrlFetchApp.fetch(signurl_hsr,options);
    response += "\n" + JSON.parse(hoyolabResponse_hsr).message;
  }

  if(honkai_3 == true) {
    let hoyolabResponse_bh3 = UrlFetchApp.fetch(signurl_bh3,options);
    response += "\n" + JSON.parse(hoyolabResponse_bh3).message;
  }

  return response;
}
