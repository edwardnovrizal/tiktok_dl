const { exec } = require("child_process");
const fs = require("fs");
const readline = require("readline");
async function CreateFileURL() {
  const namaFile = "url_tiktok.txt";
  try {
    fs.writeFile(namaFile, "", { encoding: "utf8", flag: "w" }, (err) => {
      if (err) {
        console.log("Gagal Membuat File URL", err);
      }
    });
    exec(`notepad.exe ${namaFile}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Gagal membuka Notepad: ${err.message}`);
      }
    });
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    await new Promise((resolve) => {
      rl.question("Silahkan tekan ENTER jika anda sudah mengisi URL TIKTOK dengan benar !", () => {
        rl.close();
        resolve();
      });
    });

    const isiFile = fs.readFileSync(namaFile, "utf8");

    return isiFile;
  } catch (error) {
    console.log("Gagal Membuat File URL", error);
  }
}

module.exports = CreateFileURL;
