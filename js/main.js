const clockEl = document.getElementById("clock");
let taymerInterval;

function soat() {
  const now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (clockEl) {
    clockEl.innerHTML = `${hour}:${minute}:${seconds}`;
  }
}
soat();
setInterval(soat, 1000);

function vaqtniBoshlash() {
  clearInterval(taymerInterval);

  const enter_minutes = document.getElementById("enter_minutes").value;
  const timer_screen = document.getElementById("taymer-ekrani");

  if (!enter_minutes || enter_minutes <= 0) {
    alert("Iltimos, to'g'ri vaqt kiriting!");
    return;
  }

  let total_seconds = parseInt(enter_minutes) * 60;

  taymerInterval = setInterval(function () {
    let m = Math.floor(total_seconds / 60);
    let s = total_seconds % 60;

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    if (timer_screen) {
      timer_screen.innerText = `${m}:${s}`;
    }

    if (total_seconds <= 0) {
      clearInterval(taymerInterval);
      if (timer_screen) {
        timer_screen.innerText = "Vaqt tugadi!";
      }

      const signal = document.getElementById("signal-tovushi");
      if (signal) {
        signal.play().catch((e) => console.log("Audio chalishda xato:", e));
      }
    }

    total_seconds--;
  }, 1000);
}
function vaqtniBekorQilish() {
  clearInterval(taymerInterval);

  const timer_screen = document.getElementById("taymer-ekrani");
  if (timer_screen) {
    timer_screen.innerText = "00:00";
  }

  const enter_minutes = document.getElementById("enter_minutes");
  if (enter_minutes) {
    enter_minutes.value = "";
  }

  const signal = document.getElementById("signal-tovushi");
  if (signal) {
    signal.pause();
    signal.currentTime = 0;
  }
}
