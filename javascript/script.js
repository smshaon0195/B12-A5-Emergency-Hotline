// hard icon click and top adding ++
let historys = [];
let historyCall = document.getElementById("calling-history");

let count = 0;
let hartValue = document.getElementById("hart-count");

let hartIcon = document.getElementsByClassName("fa-heart");
for (let iconList of hartIcon) {
  iconList.addEventListener("click", function () {
    count++;

    hartValue.innerText = count;
  });
}

// calling alert funcation
function nameAlert(target) {
  document.getElementById(target).addEventListener("click", function (e) {
    // coin counter --
    let mainCoin = document.getElementById("total-coin");
    let coin = Number(mainCoin.innerText);

    if (coin >= 20) {
      let right = coin - 20;
      mainCoin.innerText = right;
    } else {
      alert("দুঃখিত!! আপনার পর্যাপ্ত কয়েন নেই");
      return;
    }
    // card history

    let addHistory = {
      name: this.parentNode.parentElement.querySelector(".sub-title").innerText,
      number:
        this.parentNode.parentNode.querySelector(".calling-number").innerText,
      date: new Date().toLocaleTimeString(),
    };
    historys.push(addHistory);

    let createDoc = document.createElement("div");

    createDoc.innerHTML = `

        <div class="history-card bg-[#F2F2F2] flex items-center justify-between p-3 rounded-lg my-3">
          <div class="titile-left">
            <h3 class="title font-bold  w-[170px] leading-4.5">
            ${addHistory.name}
            </h3>
          <p class="text-gray text-[15px]">${addHistory.number}</p>
          </div>
          <div class="time">
            <p>${addHistory.date}</p>
          </div>
        </div>
`;
    historyCall.appendChild(createDoc);

    // Calling count
    let callingText =
      this.parentNode.parentElement.querySelector(".sub-title").innerText;
    let callingNumber =
      this.parentNode.parentNode.querySelector(".calling-number").innerText;
    alert("📞 Calling " + callingText + " " + callingNumber + "....");
  });
}
// calling alert
nameAlert("call-emarjence");
nameAlert("call-police");
nameAlert("call-fire");
nameAlert("call-health");
nameAlert("call-child");
nameAlert("call-dudok");
nameAlert("call-biddut");
nameAlert("call-ngo");
nameAlert("call-ralway");
