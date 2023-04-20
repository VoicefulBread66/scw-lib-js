/*scw-custom.lib.js v1.2.0
scw.lib.js v3.7.0
Made by VoicefulBread66, 2019-2023*/
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
//scw-countdown
class SCWCountdown extends HTMLElement {
  constructor() {
    super();
    var time, display, start, end, element = this, mode, decima = this.hasAttribute("decimal"), pe = this.hasAttribute("param-edit"), interval, endf, offset, adsp, wdsp, ddsp, hdsp, mdsp, sdsp;
    //test if element has defined time
    //Interval/function, depending on decimal, param-edit, and mode
    var Params = function() {
      var d1 = new Date()
      mode = element.getAttribute("mode")
      if (element.hasAttribute("time")) {
        time = new Date(element.getAttribute("time")).getTime()
      } else {
        //Default time based on "uf"/"dt"/"tb"
        if (mode === "uf") {
          time = new Date((d1.getFullYear()).toString() + "-01-01T00:00Z").getTime()
          element.setAttribute("time", (d1.getFullYear()).toString() + "-01-01T00:00Z")
        } else {
          time = new Date((d1.getFullYear() + 1).toString() + "-01-01T00:00Z").getTime()
          element.setAttribute("time", (d1.getFullYear() + 1).toString() + "-01-01T00:00Z")
        }
      }
      if (element.hasAttribute("mode") === false) {
        element.setAttribute("mode", "dt")
      }
      if (element.hasAttribute("start")) {
        start = new Date(element.getAttribute("start")).getTime()
      } else {
        start = new Date((d1.getFullYear()).toString() + "-01-01T00:00Z").getTime()
        element.setAttribute("start", (d1.getFullYear()).toString() + "-01-01T00:00Z")
      }
      if (element.hasAttribute("end")) {
        end = new Date(element.getAttribute("end")).getTime()
      } else {
        end = new Date("2023-01-01T00:00").getTime()
        element.setAttribute("end", "2023-01-01T00:00")
      }
      if (start > end) {[start, end] = [end, start]}
      if (element.hasAttribute("display")) {
        display = element.getAttribute("display")
      } else {
        element.setAttribute("display", "w")
      }
      adsp = "", wdsp = "w ", ddsp = "d ", hdsp = "h ", mdsp = "m ", sdsp = "s"
      if (element.hasAttribute("disp-a")) {adsp = element.getAttribute("disp-a")}
      if (element.hasAttribute("disp-w")) {wdsp = element.getAttribute("disp-w")}
      if (element.hasAttribute("disp-d")) {ddsp = element.getAttribute("disp-d")}
      if (element.hasAttribute("disp-h")) {hdsp = element.getAttribute("disp-h")}
      if (element.hasAttribute("disp-m")) {mdsp = element.getAttribute("disp-m")}
      if (element.hasAttribute("disp-s")) {sdsp = element.getAttribute("disp-s")}
    }
    Params()
    if (pe === true) {setInterval(Params, 2792)}
    //Variable defining for normal time
    var now, diff, w, wt, d, dt, ho, ht, m, mt, s, norm, doe;
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
        ho = Math.floor(diff / (1000 * 60 * 60));
        ht = diff % (1000 * 60 * 60);
        m = Math.floor(ht / (1000 * 60));
        mt = ht % (1000 * 60)
        s = Math.floor(mt / 1000);
      } else if (display === "d") {
        d = Math.floor(diff / (1000 * 60 * 60 * 24));
        dt = diff % (1000 * 60 * 60 * 24);
        ho = Math.floor(dt / (1000 * 60 * 60));
        ht = dt % (1000 * 60 * 60);
        m = Math.floor(ht / (1000 * 60));
        mt = ht % (1000 * 60);
        s = Math.floor(mt / 1000);
      } else {
        w = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        wt = diff % (1000 * 60 * 60 * 24 * 7);
        d = Math.floor(wt / (1000 * 60 * 60 * 24));
        dt = wt % (1000 * 60 * 60 * 24);
        ho = Math.floor(dt / (1000 * 60 * 60));
        ht = dt % (1000 * 60 * 60);
        m = Math.floor(ht / (1000 * 60));
        mt = ht % (1000 * 60);
        s = Math.floor(mt / 1000);
      }
       //Checks if difference is greater than or equal to 0ms
      if (diff >= 0 || (diff < 0 && f === false)) {
        //Message based on mode defined in 'display'
        if (display === "s") {
          doe = adsp + s + sdsp;
        } else if (display === "m") {
          doe = adsp + m + mdsp + s + sdsp;
        } else if (display === "h") {
          doe = adsp + ho + hdsp + m + mdsp + s + sdsp;
        } else if (display === "d") {
           doe = adsp + d + ddsp + ho + hdsp + m + mdsp + s + sdsp;
        } else {
          doe = adsp + w + wdsp + d + ddsp + ho + hdsp + m + mdsp + s + sdsp;
        }
      } else {
        //Message based on mode defined in 'mode'
        if (element.hasAttribute("message")) {
          if (mode === "tb") {
            doe = "NaN";
            console.log("Check your start and end values in scw-countdown.")
          } else {
            doe = element.getAttribute("message")
            if (pe === false && mode !== "uf") {clearInterval(interval)}
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
        //Runs function after countdown if in "countdown" mode
        if (element.hasAttribute("end-function") && mode !== "uf" && mode !== "tb") {
          endf = Function(element.getAttribute("end-function"));
          endf()
        }
      }
      //Puts text into HTML
      element.innerHTML = doe;
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
      if (diff >= 0 || (diff < 0 && f === false)) {
        //Message based on mode defined in 'display'
        if (display === "s") {
          doe = adsp + ms + sdsp;
        } else if (display === "m") {
          doe = adsp + mm + mdsp + ms + sdsp;
        } else if (display === "h") {
          doe = adsp + mh + hdsp + mm + mdsp + ms + sdsp;
        } else if (display === "d") {
          doe = adsp + md + ddsp + mh + hdsp + mm + mdsp + ms + sdsp;
        } else {
         doe = adsp + mw + wdsp + md + ddsp + mh + hdsp + mm + mdsp + ms + sdsp;
        }
      } else {
        //Message based on mode
        if (element.hasAttribute("message")) {
          if (mode === "tb") {
            doe = "NaN";
            console.log("Check your start and end values in scw-countdown.");
          } else {
            doe = element.getAttribute("message");
            if (pe === false && mode !== "uf") {clearInterval(interval)}
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
        //Runs function after countdown if in "countdown" mode
        if (element.hasAttribute("end-function") && mode !== "uf" && mode !== "tb") {
          endf = Function(element.getAttribute("end-function"));
          endf()
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
    //Defines arrays and number to multiply by
    function Generate() {
      //Defining variables
      var digits = "0123456789ABCDEF", rdg = "", cc = 0, total = 16, b1 = 16, a1 = false, a2 = a1, a3 = a1, a4 = a1
      mode = main.getAttribute("mode")
      if (mode === "64_16") {
        digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$."
        b1 = 64
      } else if (mode === "psw") {
        digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
        b1 = 72
      } else if (mode === "yt") {
        digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_"
        b1 = 64
        total = 11
      }
      if (mode !== "number") {
      do {
        rdg += digits[Math.floor(Math.random() * b1)]
        if (cc < (total - 1)) {cc++}
        else if (mode === "psw") {
          var a1 = false, a2 = a1, a3 = a1, a4 = a1
          for (let cp = 0; cp < total; cp++) {
            if (rdg[cp].toLowerCase() === rdg[cp]) {a1 = true}
            if (rdg[cp].toUpperCase() === rdg[cp]) {a2 = true}
            if ("!@#$%^&*()".includes(rdg[cp])) {a3 = true}
            if ("0123456789".includes(rdg[cp])) {a4 = true}
          }
          if ((a1 == false) || (a2 == false) || (a3 == false) || (a4 == false)) {
            rdg = ""
            a1 = false; a2 = a1; a3 = a1; a4 = a1
            cc = 0
          } else {
            element.innerHTML = rdg
            cc++
          }
        } else {
          element.innerHTML = rdg
          cc++
        }
      } while (cc < total)} else if (mode === "number") {
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
          element.innerHTML = Math.round(Math.random() * (min - max)) + max
          console.log("The values of min and max in scw-generate were swapped as your value of min was greater than your value for max.")
        }
      }
    }
    Generate()
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
      button.onclick = Generate
    }
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
      dd = d.toLocaleDateString("en-SG", {year: "numeric", month: "short", day: "numeric"});
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
      m = m.toString().padStart(2, "0")
      s = s.toString().padStart(2, "0")
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
