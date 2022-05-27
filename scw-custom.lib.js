/*scw-custom.lib.js v1.0.0
scw.lib.js v3.6.0
Made by VoicefulBread66, 2019-2022*/
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
//scw-countdown
class SCWCountdown extends HTMLElement {
  constructor() {
    super();
    var time, display, start, end, element = this, mode, pe = this.hasAttribute("param-edit"), decima = this.hasAttribute("decimal"), interval;
    //test if element has defined time
    //Interval/function, depending on decimal, param-edit, and mode
    var Params = function() {
      mode = element.getAttribute("mode")
      if (element.hasAttribute("time")) {
        time = new Date(element.getAttribute("time")).getTime()
      } else {
        //Default time based on "uf"/"dt"/"tb"
        if (mode === "uf") {
          time = new Date("2022-01-01T00:00").getTime()
          element.setAttribute("time", "2022-01-01T00:00")
        } else {
          time = new Date("2023-01-01T00:00").getTime()
          element.setAttribute("time", "2023-01-01T00:00")
        }
      }
      if (element.hasAttribute("mode") === false) {
        element.setAttribute("mode", "dt")
      }
      if (element.hasAttribute("start")) {
        start = new Date(element.getAttribute("start")).getTime()
      } else {
        start = new Date("2022-01-01T00:00").getTime()
        element.setAttribute("start", "2022-01-01T00:00")
      }
      if (element.hasAttribute("end")) {
        end = new Date(element.getAttribute("end")).getTime()
      } else {
        end = new Date("2023-01-01T00:00").getTime()
        element.setAttribute("end", "2023-01-01T00:00")
      }
      if (element.hasAttribute("display")) {
        display = element.getAttribute("display")
      } else {
        element.setAttribute("display", "w")
      }
    }
    Params()
    if (pe === true) {setInterval(Params, 1000)}
    //Variable defining for normal time
    var now, diff, w, wt, d, dt, h, ht, m, mt, s, norm, doe;
    //Defines the normal time function to be repeated with setInterval()
    norm = function () {
      //Defines the current time
      now = new Date().getTime();
      //Uses different settings for different modes
      if (mode === "uf") {
        diff = now - time;
      } else if (mode === "tb") {
        diff = end - start;
      } else {
        diff = time - now;
      }
      //Calculations, based on what is specified in 'display'
      if (display === "s") {
        s = Math.floor(diff / 1000);
      } else if (display === "m") {
        m = Math.floor(diff/ (1000 * 60));
        mt = diff % (1000 * 60)
        s = Math.floor(mt / 1000);
      } else if (display === "h") {
        h = Math.floor(diff / (1000 * 60 * 60));
        ht = diff % (1000 * 60 * 60);
        m = Math.floor(ht / (1000 * 60));
        mt = ht % (1000 * 60)
        s = Math.floor(mt / 1000);
      } else if (display === "d") {
        d = Math.floor(diff / (1000 * 60 * 60 * 24));
        dt = diff % (1000 * 60 * 60 * 24);
        h = Math.floor(dt / (1000 * 60 * 60));
        ht = dt % (1000 * 60 * 60);
        m = Math.floor(ht / (1000 * 60));
        mt = ht % (1000 * 60);
        s = Math.floor(mt / 1000);
      } else {
        w = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        wt = diff % (1000 * 60 * 60 * 24 * 7);
        d = Math.floor(wt / (1000 * 60 * 60 * 24));
        dt = wt % (1000 * 60 * 60 * 24);
        h = Math.floor(dt / (1000 * 60 * 60));
        ht = dt % (1000 * 60 * 60);
        m = Math.floor(ht / (1000 * 60));
        mt = ht % (1000 * 60);
        s = Math.floor(mt / 1000);
      }
       //Checks if difference is greater than or equal to 0ms
      if (diff >= 0) {
        //Message based on mode defined in 'display'
        if (display === "s" ) {
          doe = s + "s"
        } else if (display === "m") {
          doe = m + "m " + s + "s";
        } else if (display === "h") {
         doe = h + "h " + m + "m " + s + "s";
        } else if (display === "d") {
           doe = d + "d " + h + "h " + m + "m " + s + "s";
        } else {
          doe = w + "w " + d + "d " + h + "h " + m + "m " + s + "s";
        }
      } else {
        //Message based on mode defined in 'mode'
        if (element.hasAttribute("message")) {
          if (mode === "tb") {
            doe = "NaN";
            console.log("Check your start and end values in scw-countdown.")
          } else {
            doe = element.getAttribute("message")
            if (pe === false && mode === "uf") {clearInterval(interval)}
          }
        } else {
          if (mode === "uf") {
            doe = "The time at which the timer starts counting up hasn't even started yet!";
          } else if (mode === "tb") {
            doe = "NaN";
            console.log("Check your start and end values in scw-countdown.")
          } else {
            doe = "The time this countdown is counting down to has come";
            if (pe === false) {clearInterval(interval)}
          }
        }
      }
      //Puts text into HTML
      element.innerHTML = doe;
      //console.log(this.innerHTML)
    };
    //Variable defining for decimal time
    var mw, mwt, md, mdt, mh, mht, mm, mmt, ms, decimal;
    decimal = function () {
      //Defines the current time
      now = new Date().getTime();
      //Uses different settings for different modes
      if (mode === "uf") {
         diff = now - time;
      } else if (mode === "tb") {
        diff = end - start
      } else {
        diff = time - now
      }
      //Calculations, based on what is specified in 'display'
      if (display === "s") {
        ms = Math.floor(diff / 864);
      } else if (display === "m") {
        mm = Math.floor(diff / (864 * 100));
        mmt = diff % (864 * 100);
        ms = Math.floor(mmt / 864);
      } else if (display === "h") {
        mh = Math.floor(diff / (864 * 100 * 100));
        mht = diff % (864 * 100 * 100);
        mm = Math.floor(mht / (864 * 100));
        mmt = mht % (864 * 100);
        ms = Math.floor(mmt / 864);
      } else if (display === "d") {
        md = Math.floor(diff / (1000 * 60 * 60 * 24));
        mdt = diff % (1000 * 60 * 60 * 24);
        mh = Math.floor(mdt / (864 * 100 * 100));
        mht = mdt % (864 * 100 * 100);
        mm = Math.floor(mht / (864 * 100));
        mmt = mht % (864 * 100);
        ms = Math.floor(mmt / 864);
      } else {
        mw = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        mwt = diff % (1000 * 60 * 60 * 24 * 7);
        md = Math.floor(mwt / (1000 * 60 * 60 * 24));
        mdt = mwt % (1000 * 60 * 60 * 24);
        mh = Math.floor(mdt / (864 * 100 * 100));
        mht = mdt % (864 * 100 * 100);
        mm = Math.floor(mht / (864 * 100));
        mmt = mht % (864 * 100);
        ms = Math.floor(mmt / 864);
      }
      //Checks if difference is greater than or equal to 0ms
      if (diff >= 0) {
        //Message based on mode defined in 'display'
        if (display === "s") {
          doe = ms + "s"
        } else if (display === "m") {
          doe = mm + "m " + ms + "s";
        } else if (display === "h") {
          doe = mh + "h " + mm + "m " + ms + "s";
        } else if (display === "d") {
          doe = md + "d " + mh + "h " + mm + "m " + ms + "s";
        } else {
         doe = mw + "w " + md + "d " + mh + "h " + mm + "m " + ms + "s";
        }
      } else {
        //Message based on mode
        if (element.hasAttribute("message")) {
          if (mode === "tb") {
            doe = "NaN";
            console.log("Check your start and end values in scw-countdown.");
          } else {
            doe = element.getAttribute("message");
            if (pe === false && mode === "uf") {clearInterval(interval)}
          }
        } else {
          if (mode === "uf") {
            doe = "The time at which the timer starts counting up hasn't even started yet!";
          } else if (mode === "tb") {
            doe = "NaN";
            console.log("Check your start and end values in scw-countdown.");
          } else {
            doe = "The time this countdown is counting down to has come";
            if (pe === false) {clearInterval(interval)}
          }
        }
      }
      //Puts text into HTML
      element.innerHTML = doe;
    };
    if ((mode === "tb" && pe === true && decima === true) || (mode !== "tb" && decima === true)) {
      interval = setInterval(decimal, 864)
    } else if (mode === "tb" && pe === false && decima === true) {
      decimal()
    } else if (mode === "tb" && pe === false && decima === false) {
      norm()
    } else {
      interval = setInterval(norm, 1000)
    }
  }
}
window.customElements.define("scw-countdown", SCWCountdown);
//scw-generate
class SCWGenerate extends HTMLElement {
  constructor() {
    super();
    var element = document.createElement("span");
    var main = this, mode;
    this.appendChild(element);
    //Defining variables
    var a1, a2, a3, b1, b2, b3, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16;
    //Defines arrays and number to multiply by
    if (this.hasAttribute("button")) {
      if (this.hasAttribute("line-break")) {
        this.appendChild(document.createElement("br"))
      }
      var button = document.createElement("button");
      this.appendChild(button)
      if (this.hasAttribute("button-text")) {
        button.innerHTML = this.getAttribute("button-text")
      } else {
        button.innerText = "Generate!"
      }
    }
    function Generate() {
      mode = main.getAttribute("mode")
      if (mode === "64_16") {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "$", "."];
        a2 = a1;
        a3 = a1;
        b1 = 64;
        b2 = b1;
      } else if (mode === "psw") {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        a2 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
        a3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        b1 = 10;
        b2 = 52;
      } else if (mode === "yt") {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "-", "_"];
        b1 = 64;
        b2 = b1;
      } else if (mode !== "number") {
        a1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        a2 = a1;
        a3 = a1;
        b1 = 16;
        b2 = b1;
        main.setAttribute("mode", "16_16")
      }
      if (mode !== "number") {
        c1 = Math.floor(Math.random() * b2);
        c2 = Math.floor(Math.random() * b2);
        c3 = Math.floor(Math.random() * b1);
        c4 = Math.floor(Math.random() * b2);
        c5 = Math.floor(Math.random() * b1);
        c6 = Math.floor(Math.random() * b2);
        c7 = Math.floor(Math.random() * b2);
        c8 = Math.floor(Math.random() * b2);
        c9 = Math.floor(Math.random() * b1);
        c10 = Math.floor(Math.random() * b2);
        c11 = Math.floor(Math.random() * b2);
        c12 = Math.floor(Math.random() * b1);
        c13 = Math.floor(Math.random() * b2);
        c14 = Math.floor(Math.random() * b2);
        c15 = Math.floor(Math.random() * b2);
        c16 = Math.floor(Math.random() * b2);
      }
      if (mode === "yt") {
        element.innerHTML = a1[c1] + a1[c2] + a1[c3] + a1[c4] + a1[c5] + a1[c6] + a1[c7] + a1[c8] + a1[c9] + a1[c10] + a1[c11];
      } else if (mode === "number") {
        var min, max
        if (main.hasAttribute("min")) {
          min = parseInt(main.getAttribute("min"))
        } else {
          min = 0;
          main.setAttribute("min", 0)
        }
        if (main.hasAttribute("max")) {
          max = parseInt(main.getAttribute("max"))
        } else {
          max = 1000;
          main.setAttribute("max", 1000)
        }
        if (max > min) {
          element.innerHTML = Math.round(Math.random() * (max - min)) + min
        } else {
          console.log("Check your min and max values in scw-generate");
          return
        }
      } else {
        element.innerHTML = a3[c1] + a3[c2] + a1[c3] + a3[c4] + a2[c5] + a3[c6] + a3[c7] + a3[c8] + a1[c9] + a3[c10] + a3[c11] + a2[c12] + a3[c13] + a3[c14] + a3[c15] + a3[c16];
      }
    }
    Generate()
    button.onclick = Generate
  }
}
window.customElements.define("scw-generate", SCWGenerate);
//scw-time2dec
class SCWTime2Dec extends HTMLElement {
  constructor() {
    super();
    var d, e, dd, date, tsds, h, ht, m, mt, s, timezone, element = this;
    var func = function () {
      var time = element.getAttribute("time")
      if (element.getAttribute("timezone") === "default") {
        //Defines offset if value is "default"
        timezone = new Date().getTimezoneOffset() * -1 * 60 * 1000;
      } else if (element.hasAttribute("timezone")) {
        //Defines offset if defined and not "default"
        timezone = parseInt(element.getAttribute("timezone")) * 60 * 60 * 1000;
      } else {
        //Defines offset if no value provided
        timezone = new Date().getTimezoneOffset() * -1 * 60 * 1000;
        element.setAttribute("timezone", "default")
      }
      //Variable for new Date() function
      if (element.hasAttribute("time")) {
        d = new Date(time);
      } else {
        d = new Date();
      }
      //Locale Date String to get [DD: Int.toString()] [MMM: string] [YYYY: Int.toString()]
      dd = d.toLocaleDateString("en-SG", {year: "numeric", "month": "short", "day": "numeric"});
      //Calculation of amount of time (days) minus hours, minutes, seconds
      date = Math.floor((d.getTime() + timezone) / (864 * 100 * 100 * 10)) * 864 * 100 * 100 * 10;
      //Time since day start
      tsds = d.getTime() - date + timezone;
      //Calculations
      h = Math.floor(tsds / (864 * 100 * 100));
      ht = tsds % (864 * 100 * 100);
      m = Math.floor(ht / (864 * 100));
      mt = ht % (864 * 100);
      s = Math.floor(mt / 864);
      //Adds 0 to the front if less than 10
      if (m < 10) {
        m = "0" + m
      }
      if (s < 10) {
        s = "0" + s
      }
      //Puts text into HTML
      element.innerHTML = dd + " " + "0" + h + ":" + m + ":" + s;
    }
    if (element.hasAttribute("param-edit") === false && element.hasAttribute("time") === true)  {
      func()
    } else {
      setInterval(func, 864)
    }
  }
}
window.customElements.define("scw-time2dec", SCWTime2Dec)
}}, 100)
