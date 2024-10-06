/*scw-custom.lib.js v1.3.0
scw.lib.js v3.8.0
Made by VoicefulBread66, 2019-2024*/
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
          time = new Date((d1.getFullYear()).toString() + "-01-01T00:00").getTime()
          element.setAttribute("time", (d1.getFullYear()).toString() + "-01-01T00:00")
        } else {
          time = new Date((d1.getFullYear() + 1).toString() + "-01-01T00:00").getTime()
          element.setAttribute("time", (d1.getFullYear() + 1).toString() + "-01-01T00:00")
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
        end = new Date((d1.getFullYear() + 1).toString() + "-01-01T00:00").getTime()
        element.setAttribute("end", (d1.getFullYear() + 1).toString() + "-01-01T00:00")
      }
      if (start > end) {[start, end] = [end, start]}
      if (element.hasAttribute("display")) {
        display = element.getAttribute("display")
        display = display.replaceAll("'", "\"")
        try {
          display = JSON.parse(display)
        } catch {
          if (display === "d") {
            display = ["d", "h", "m", "s"]
	  } else if (display === "h") {
            display = ["h", "m", "s"]
	  } else if (display === "m") {
            display = ["m", "s"]
	  } else if (display === "s") {
            display = ["s"]
	  } else {
            display = ["w", "d", "h", "m", "s"]
          }
        }
      } else {
        element.setAttribute("display", "w")
        display = ["w", "d", "h", "m", "s"]
      }
      adsp = "", wdsp = "w ", ddsp = "d ", hdsp = "h ", mdsp = "m ", sdsp = "s"
      if (element.hasAttribute("disp-a") && element.getAttribute("disp-a") !== undefined) {adsp = element.getAttribute("disp-a")}
      if (element.hasAttribute("disp-w") && element.getAttribute("disp-w") !== undefined) {wdsp = element.getAttribute("disp-w")}
      if (element.hasAttribute("disp-d") && element.getAttribute("disp-d") !== undefined) {ddsp = element.getAttribute("disp-d")}
      if (element.hasAttribute("disp-h") && element.getAttribute("disp-h") !== undefined) {hdsp = element.getAttribute("disp-h")}
      if (element.hasAttribute("disp-m") && element.getAttribute("disp-m") !== undefined) {mdsp = element.getAttribute("disp-m")}
      if (element.hasAttribute("disp-s") && element.getAttribute("disp-s") !== undefined) {sdsp = element.getAttribute("disp-s")}
    }
    Params()
    if (pe === true) {setInterval(Params, 2792)}
    //Variable defining for normal time
    var now, diff, subdiff, norm, endresult;
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
      subdiff = diff
	    endresult = adsp
      if (display.includes("w")) {
        endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24 * 7)).toString()
	subdiff = subdiff % (1000 * 60 * 60 * 24 * 7)
	endresult += wdsp
      }
      if (display.includes("d")) {
	endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24)).toString()
	subdiff = subdiff % (1000 * 60 * 60 * 24)
	endresult += ddsp
      }
      if (display.includes("h")) {
	endresult += Math.floor(subdiff / (1000 * 60 * 60)).toString()
	subdiff = subdiff % (1000 * 60 * 60)
	endresult += hdsp
      }
      if (display.includes("m")) {
	endresult += Math.floor(subdiff / (1000 * 60)).toString()
	subdiff = subdiff % (1000 * 60)
	endresult += mdsp
      }
      if (display.includes("s")) {
	endresult += Math.floor(subdiff / 1000).toString()
	endresult += sdsp
      }
      if (diff < 0) {
        //Message based on mode defined in 'mode'
        if (element.hasAttribute("message")) {
          if (mode === "tb") {
            endresult = "NaN";
            console.log("Check your start and end values in scw-countdown.")
          } else {
            endresult = element.getAttribute("message")
            if (pe === false && mode !== "uf") {clearInterval(interval)}
          }
        } else {
          if (mode === "uf") {
            endresult = "The time at which the timer starts counting up hasn't even started yet!";
          } else if (mode === "tb") {
            endresult = "NaN";
            console.log("Check your start and end values in scw-countdown.")
          } else {
            endresult = "The time this countdown is counting down to has come";
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
      if (element.innerHTML != endresult) {
        element.innerHTML = endresult;
      }
    };
    //Variable defining for decimal time
    var decimal;
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
      subdiff = diff
      endresult = adsp
      if (display.includes("w")) {
	endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24 * 7)).toString()
	subdiff = subdiff % (1000 * 60 * 60 * 24 * 7)
	endresult += wdsp
      }
      if (display.includes("d")) {
	endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24)).toString()
	subdiff = subdiff % (1000 * 60 * 60 * 24)
	endresult += ddsp
      }
      if (display.includes("h")) {
	endresult += Math.floor(subdiff / (864 * 100 * 100)).toString()
	subdiff = subdiff % (864 * 100 * 100)
	endresult += hdsp
      }
      if (display.includes("m")) {
	endresult += Math.floor(subdiff / (864 * 100)).toString()
	subdiff = subdiff % (864 * 100)
	endresult += mdsp
      }
      if (display.includes("s")) {
	endresult += Math.floor(subdiff / 864).toString()
	endresult += sdsp
      }
      if (diff < 0) {
        //Message based on mode
        if (element.hasAttribute("message")) {
          if (mode === "tb") {
            endresult = "NaN";
            console.log("Check your start and end values in scw-countdown.");
          } else {
            endresult = element.getAttribute("message");
            if (pe === false && mode !== "uf") {clearInterval(interval)}
          }
        } else {
          if (mode === "uf") {
            endresult = "The time at which the timer starts counting up hasn't even started yet!";
          } else if (mode === "tb") {
            endresult = "NaN";
            console.log("Check your start and end values in scw-countdown.");
          } else {
            endresult = "The time this countdown is counting down to has come";
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
      if (element.innerHTML != endresult) {
        element.innerHTML = endresult;
      }
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
