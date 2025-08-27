// hard icon click and top adding ++

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
    let callingText =
      this.parentNode.parentElement.querySelector(".sub-title").innerText;
    let callingNumber =
      this.parentNode.parentNode.querySelector(".calling-number").innerText;
    alert("📞 Calling " + callingText + " " + callingNumber + "....");
  });

// document.getElementById("total-coin").addEventListener()

let coin = Number(document.getElementById("total-coin").innerText);

let totalCoin = coin - 20
coin.innerText=totalCoin

console.log(totalCoin)

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

// coin counter --






