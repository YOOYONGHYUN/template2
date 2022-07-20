const AnalogClock = ($container) => {
  //class를 사용할 때는 인덱스를 꼭 넣자.

  console.log($container);
  let c = document.createElement("span");

  for (let i = 0; i < 15; i++) {
    let div = document.createElement("div");
    if (i <= 2) {
      div.classList.add("hand");
    } else div.classList.add("time");
    $container.appendChild(div);
  }

  const hand = $container.querySelectorAll(".hand");
  console.log(hand.length);
  for (let i = 0; i < hand.length; i++) {
    if (i % 3 == 0) hand[i].classList.add("hour");
    else if (i % 3 == 1) hand[i].classList.add("minute");
    else if (i % 3 == 2) hand[i].classList.add("second");
  }

  const time = $container.querySelectorAll(".time");
  for (let i = 0; i < time.length; i++) {
    time[i].classList.add(`time${i + 1}`);
    time[i].innerText = "|";
  }

  const deg = 6;
  setInterval(function () {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hand[0].style.setProperty("--deg", hh);
    hand[1].style.setProperty("--deg", mm);
    hand[2].style.setProperty("--deg", ss);
  }, 1000);
};

export default AnalogClock;
