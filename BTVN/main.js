let arrNumber = [11, 17, 19, 25, 17, 31, 37];
import { findAndUpdate } from "./methol.js";
document.getElementById("update").onclick = function () {
  let valGoc = document.getElementById("valGoc").value * 1;
  let valReplace = document.getElementById("valReplace").value * 1;
  let kqUpdate = findAndUpdate(valGoc, arrNumber, valReplace);
  if (kqUpdate) {
    document.getElementById(
      "ket_qua_replace"
    ).innerHTML = `Cập nhật thành công !`;
    document.getElementById("arrNumber").innerHTML = arrNumber;
  } else {
    document.getElementById(
      "ket_qua_replace"
    ).innerHTML = `Không tìm thấy giá trị cần thay đổi!`;
  }
};
