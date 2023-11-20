var countdown = () => {
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let ampm = document.getElementById("ampm");

    // Set the target time for the countdown (24-hour format)
    let targetHour = 23; // Replace with your target hour (0-23)
    let targetMinute = 59; // Replace with your target minute (0-59)
    let targetSecond = 59; // Replace with your target second (0-59)

    let currentTime = new Date();
    let targetTime = new Date();
    targetTime.setHours(targetHour, targetMinute, targetSecond);

    let timeDifference = targetTime - currentTime;
    if (timeDifference <= 0) {
        // Countdown has reached the target time
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
        ampm.innerHTML = "AM";
        return;
    }

    let hh = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mm = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let ss = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let slot = hh >= 12 ? "PM" : "AM";

    let doubleNum = (num) => {
        num = num < 10 ? "0" + num : num;
        return num;
    };

    hh = doubleNum(hh);
    mm = doubleNum(mm);
    ss = doubleNum(ss);

    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;
    ampm.innerHTML = slot;
};

setInterval(countdown, 1000);
