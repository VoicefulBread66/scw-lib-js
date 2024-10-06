/*scw.lib.js v3.8.0
Made by VoicefulBread66, 2019-2024*/
function countdown (a, b, c = "dt", d = "n", e = "w", f, g = true, h, i) {
    if (a === undefined) {
      //If no element id, stop program
      console.log("You did not specify an element id for the program.");
      return
    } else {
        var offset = new Date().getTimezoneOffset() * 60000, d1 = new Date()
        if (c !== "uf" && c !== "dt") {g = true}
        if (g === false && b !== undefined) {offset = 0}
        if (b === undefined && c !== "uf") {
          //Defines variable b with default value if user didnt put in input
            b = new Date((d1.getFullYear() + 1).toString() + "-01-01T00:00Z").getTime() + offset;
        } else if (b === undefined && c === "uf") {
            b = new Date((d1.getFullYear()).toString() + "-01-01T00:00Z").getTime() + offset;
        } else {
          //if user puts in input, converts it to miliseconds
            b = new Date(b).getTime() + offset;
        }
        if (c !== "uf" && c !== "dt") {
          c = new Date(c).getTime() + offset;
          if (b > c) {[b, c] = [c, b]}
          f = undefined;
        }
        //Setting the variables for display output
        var adsp = "", wdsp = "w ", ddsp = "d ", hdsp = "h ", mdsp = "m ", sdsp = "s"
        if (typeof i === "object" && Array.isArray(i) === false) {
          if (i.a !== undefined) {adsp = i.a.toString()}
          if (i.w !== undefined) {wdsp = i.w.toString()}
          if (i.d !== undefined) {ddsp = i.d.toString()}
          if (i.h !== undefined) {hdsp = i.h.toString()}
          if (i.m !== undefined) {mdsp = i.m.toString()}
          if (i.s !== undefined) {sdsp = i.s.toString()}
        }
        if (typeof e === "string") {
          if (e === "d") {
            e = ["d", "h", "m", "s"]
	  } else if (e === "h") {
	    e = ["h", "m", "s"]
	  } else if (e === "m") {
	    e = ["m", "s"]
	  } else if (e === "s") {
	    e = ["s"]
	  } else {
	    e = ["w", "d", "h", "m", "s"]
	  }
        }
	if (typeof e !== "string" && Array.isArray(e) === false) {
          e = ["w", "d", "h", "m", "s"]
	}
        //Variable defining for calculation operations
        var now, diff, subdiff, norm, interval, endf, endresult;
        //Defines the normal time function to be repeated with setInterval()
        norm = function () {
          //Defines the current time
          now = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            diff = now - b
          } else if (c === "dt") {
            diff = b - now
          } else {
            diff = c - b
          }
          //Calculations, based on what is specified in 'e'
	  subdiff = diff
	  endresult = adsp
          if (e.includes("w")) {
	    endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24 * 7)).toString()
	    subdiff = subdiff % (1000 * 60 * 60 * 24 * 7)
	    endresult += wdsp
	  }
          if (e.includes("d")) {
	    endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24)).toString()
	    subdiff = subdiff % (1000 * 60 * 60 * 24)
	    endresult += ddsp
	  }
	  if (e.includes("h")) {
	    endresult += Math.floor(subdiff / (1000 * 60 * 60)).toString()
	    subdiff = subdiff % (1000 * 60 * 60)
	    endresult += hdsp
	  }
	  if (e.includes("m")) {
	    endresult += Math.floor(subdiff / (1000 * 60)).toString()
	    subdiff = subdiff % (1000 * 60)
	    endresult += mdsp
	  }
	  if (e.includes("s")) {
	    endresult += Math.floor(subdiff / 1000).toString()
	    endresult += sdsp
	  }
          if (diff < 0) {
	    //Message based on mode defined in 'c'
            if (f === undefined) {
	      if (c === "uf") {
                endresult = "The time at which the timer starts counting up hasn't even started yet!";
              } else if (c === "dt") {
                endresult = "The time this countdown is counting down to has come";
                clearInterval(interval);
              } else {
                endresult = "NaN"
                console.log("Check your values in b and c.")
              }
            } else {
              endresult = f
              if (c === "dt") {clearInterval(interval)}
             }
            //Runs function after countdown if in "countdown" mode
            if (h !== undefined && c === "dt") {
              endf = Function(h);
              endf()
            }
          }
          //Puts text into HTML
          if (document.getElementById(a).innerHTML != endresult) {
            document.getElementById(a).innerHTML = endresult;
	  }
        };
        var decimal = function () {
          //Defines the current time
          now = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            diff = now - b;
          } else if (c === "dt") {
            diff = b - now;
          } else {
            diff = c - b
          }
          //Calculations, based on what is specified in 'e'
          subdiff = diff
	  endresult = adsp
          if (e.includes("w")) {
	    endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24 * 7)).toString()
	    subdiff = subdiff % (1000 * 60 * 60 * 24 * 7)
	    endresult += wdsp
	  }
          if (e.includes("d")) {
	    endresult += Math.floor(subdiff / (1000 * 60 * 60 * 24)).toString()
	    subdiff = subdiff % (1000 * 60 * 60 * 24)
	    endresult += ddsp
	  }
	  if (e.includes("h")) {
	    endresult += Math.floor(subdiff / (864 * 100 * 100)).toString()
	    subdiff = subdiff % (864 * 100 * 100)
	    endresult += hdsp
	  }
	  if (e.includes("m")) {
	    endresult += Math.floor(subdiff / (864 * 100)).toString()
	    subdiff = subdiff % (864 * 100)
	    endresult += mdsp
	  }
	  if (e.includes("s")) {
	    endresult += Math.floor(subdiff / 864).toString()
	    endresult += sdsp
	  }
          if (diff < 0) {
	    //Message based on mode defined in 'c'
            if (f === undefined) {
	      if (c === "uf") {
                endresult = "The time at which the timer starts counting up hasn't even started yet!";
              } else if (c === "dt") {
                endresult = "The time this countdown is counting down to has come";
                clearInterval(interval);
              } else {
                endresult = "NaN"
                console.log("Check your values in b and c.")
              }
            } else {
              endresult = f
              if (c === "dt") {clearInterval(interval)}
             }
            //Runs function after countdown if in "countdown" mode
            if (h !== undefined && c === "dt") {
              endf = Function(h);
              endf()
            }
          }
          //Puts text into HTML
          if (document.getElementById(a).innerHTML != endresult) {
            document.getElementById(a).innerHTML = endresult;
	  }
        };
    }
    //Sets an interval, depending on parameter d
    if (d === "d") {
      interval = setInterval(decimal, 864);
    } else {
      interval = setInterval(norm, 1000)
    }
    if (c !== "uf" && c !== "dt") {
    	setTimeout(function() {
        clearInterval(interval)
      }, 2592)
    }
}
//To retain backwards compatibility
function cdww (a, b, c = "dt", d = "n", f, g = true, h, i) {
  countdown(a, b, c, d, "d", f, g, h, i)
}
function countdown_sec (a, b, c = "dt", d = "n", f, g = true, h, i) {
  countdown(a, b, c, d, "s", f, g, h, i);
}
function countdown_m (a, b, c = "dt", d = "n", f, g = true, h, i) {
  countdown(a, b, c, d, "m", f, g, h, i)
}
function countdown_h (a, b, c = "dt", d = "n", f, g = true, h, i) {
  countdown(a, b, c, d, "h", f, g, h, i)
}
function timebtw (a, b, c, d = "uf", e = "n", f = "w", i) {
  if (b === undefined) {
    b = (new Date().getFullYear()).toString() + "-01-01T00:00Z";
  }
  if (c === undefined) {
    c = (new Date().getFullYear() + 1).toString() + "-01-01T00:00Z";
  }
  if (d === "dt") {
    countdown(a, c, b, e, f, undefined, true, undefined, i)
  } else {
    countdown(a, b, c, e, f, undefined, true, undefined, i)
  }
}
//To allow the function to be run without using every argument
function count_down({a, b, c = "dt", d = "n", e = "w", f, g = false, h, i}) {
  if (c !== "dt" && c !== "uf") {g = true}
  countdown(a, b, c, d, e, f, g, h, i)
}
function generate(a, b = "16_16") {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    if (a === undefined) {
      // Stops program if element id not specified
      console.log("You did not specify an element id for the program");
      return
    } else {
      var digits = "0123456789ABCDEF", rdg = "", cc = 0, total = 16, b1 = 16
      if (b == "64_16") {
        digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$."
        b1 = 64
      } else if (b == "psw") {
        digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
        b1 = 72
      } else if (b == "yt") {
        digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_"
        b1 = 64
        total = 11
      }
      do {
        rdg += digits[Math.floor(Math.random() * b1)]
        if (cc < (total - 1)) {cc++}
        else if (b == "psw") {
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
            document.getElementById(a).innerHTML = rdg
            cc++
          }
        } else {
          document.getElementById(a).innerHTML = rdg
          cc++
        }
      } while (cc < total)
    }
}}, 100)}
//To retain backwards compatibility
function hex16(a) {
  generate(a)
}
function hex64_16(a) {
  generate(a, "64_16")
}
function pswgen(a) {
  generate(a, "psw")
}
function time2dec(a, b = "default", c) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
  if (a === undefined) {
    //Stops program if no element id provided
    console.log("You did not specify an element id for the program");
    return
  } else {
    var d, e, dd, date, tsds, h, ht, m, mt, s;
    if (b === "default") {
      //Defines b if no value provided in parameter
      b = new Date().getTimezoneOffset() * -1 * 60 * 1000;
    } else {
      //Defines b if b parameter is not "default"
      b = b * 60 * 60 * 1000;
    }
    var func = function () {
      if (c === undefined) {
        //Defines c if no value provided in parameter
        e = new Date().getTime();
      } else {
        //Defines c if value provided in parameter
        e = new Date(c).getTime();
      }
      //Variable for new Date() function
      if (c === undefined) {
        d = new Date();
      } else {
        d = new Date(c);
      }
      //Locale Date String to get [DD: Int.toString()] [MMM: string] [YYYY: Int.toString()]
      dd = d.toLocaleDateString("en-SG", {year: "numeric", month: "short", day: "numeric"});
      //Calculation of amount of time (days) minus hours, minutes, seconds
      date = Math.floor((e + b) / (864 * 100 * 100 * 10)) * 864 * 100 * 100 * 10;
      //Time since day start
      tsds = e - date + b;
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
      document.getElementById(a).innerHTML = dd + " " + "0" + h + ":" + m + ":" + s;
    }
    if (c === undefined) {
      var interval = setInterval(func, 864);
    } else {
      func()
    }
  }
}}, 100)}
function time2dec_c(a, b, c) {
  time2dec(a, b, c);
}
function gen_no(a, b = 0, c = 1000) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    if (a === undefined) {
      console.log("You did not specify an element id for the program");
      return
    } else {
      b = parseInt(b);
      c = parseInt(c)
      if (c > b) {
	document.getElementById(a).innerHTML = Math.round(Math.random() * (c - b)) + b
      } else {
        document.getElementById(a).innerHTML = Math.round(Math.random() * (b - c)) + c
        console.log("The values of b and c in the gen_no() function were swapped as your value of b was greater than your value for c.")
      }
    }
}}, 100)}
