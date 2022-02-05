const fs = require("fs");
const ytdl = require("ytdl-core");
const randomstring = require("randomstring");
const humanizeDuration = require("humanize-duration");

let url = "http://www.youtube.com/watch?v=aqz-KE-bpKQ";

function telechargeMp4() {
  let name = randomstring.generate(7);
  ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
    fs.createWriteStream(name + ".mp4")
  );
}

const getInfosGlobal = (url) => {
  ytdl.getInfo(url).then((res) => {
    console.log(res["videoDetails"]);
  });
};

function getInfoDetails(url) {
  ytdl.getInfo(url).then((res) => {
    console.log(res["videoDetails"]["title"]);
    let temps_video = humanizeDuration(res["videoDetails"]["lengthSeconds"], {
      units: ["s"],
    });
    console.log(temps_video);
  });
}
// telechargeMp4();
//  getInfoDetails(url);
// getInfosGlobal(url);
