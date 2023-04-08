/*scw.lib.js v3.6.0
Made by VoicefulBread66, 2019-2023*/
function countdown (a, b, c = "dt", d = "n", e = "w", f, g = true, h) {
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
          f = undefined;
        }
        //Variable defining for normal time
        var now, diff, w, wt, d, dt, ho, ht, m, mt, s, norm, interval, endf;
        //Defines the normal time function to be repeated with setInterval()
        norm = function () {
          //Defines the current time
          now = new Date().getTime();
          //Uses different settings for different modes
          if (c === "uf") {
            diff = now - b;
          } else if (c === "dt") {
            diff = b - now;
          } else {
            diff = c - b;
          }
          //Calculations, based on what is specified in 'e'
          if (e === "s") {
            s = Math.floor(diff / 1000);
          } else if (e === "m") {
            m = Math.floor(diff/ (1000 * 60));
            mt = diff % (1000 * 60)
            s = Math.floor(mt / 1000);
          } else if (e === "h") {
            ho = Math.floor(diff / (1000 * 60 * 60));
            ht = diff % (1000 * 60 * 60);
            m = Math.floor(ht / (1000 * 60));
            mt = ht % (1000 * 60)
            s = Math.floor(mt / 1000);
          } else if (e === "d") {
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
           if (diff >= 0) {
             //Message based on mode defined in 'e'
             if (e === "s" ) {
               doe = s + "s"
             } else if (e === "m") {
               doe = m + "m " + s + "s";
             } else if (e === "h") {
               doe = ho + "h " + m + "m " + s + "s";
             } else if (e === "d") {
               doe = d + "d " + ho + "h " + m + "m " + s + "s";
             } else {
              doe = w + "w " + d + "d " + ho + "h " + m + "m " + s + "s";
             }
           } else {
             //Message based on mode defined in 'c'
             if (f === undefined) {
              if (c === "uf") {
                doe = "The time at which the timer starts counting up hasn't even started yet!";
              } else if (c === "dt") {
                doe = "The time this countdown is counting down to has come";
                clearInterval(interval);
              } else {
                doe = "NaN"
                console.log("Check your values in b and c.")
              }
             } else {
              doe = f
              if (c === "dt") {clearInterval(interval)}
             }
             //Runs function after countdown if in "countdown" mode
            if (h !== undefined && c === "dt") {
              endf = Function(h);
              if (typeof endf === "function") {
                endf()
              }
            }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
        };
        //Variable defining for decimal time
        var mw, mwt, md, mdt, mh, mht, mm, mmt, ms, decimal;
        decimal = function () {
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
          if (e === "s") {
            ms = Math.floor(diff / 864);
          } else if (e === "m") {
            mm = Math.floor(diff / (864 * 100));
            mmt = diff % (864 * 100);
            ms = Math.floor(mmt / 864);
          } else if (e === "h") {
            mh = Math.floor(diff / (864 * 100 * 100));
            mht = diff % (864 * 100 * 100);
            mm = Math.floor(mht / (864 * 100));
            mmt = mht % (864 * 100);
            ms = Math.floor(mmt / 864);
          } else if (e === "d") {
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
             //Message based on mode defined in 'e'
             if (e === "s") {
               doe = ms + "s"
             } else if (e === "m") {
               doe = mm + "m " + ms + "s";
             } else if (e === "h") {
               doe = mh + "h " + mm + "m " + ms + "s";
             } else if (e === "d") {
               doe = md + "d " + mh + "h " + mm + "m " + ms + "s";
             } else {
              doe = mw + "w " + md + "d " + mh + "h " + mm + "m " + ms + "s";
             }
           } else {
             //Message based on mode
             if (f === undefined) {
              if (c === "uf") {
                doe = "The time at which the timer starts counting up hasn't even started yet!";
              } else if (c === "dt") {
                doe = "The time this countdown is counting down to has come";
                clearInterval(interval);
              } else {
                doe = "NaN"
                console.log("Check your values in b and c.")
              }
             } else {
               doe = f;
               if (c === "dt") {clearInterval(interval)}
             }
             //Runs function after countdown if in "countdown" mode
            if (h !== undefined && c === "dt") {
              endf = Function(h);
              if (typeof endf === "function") {
                endf()
              }
            }
           }
           //Puts text into HTML
           document.getElementById(a).innerHTML = doe;
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
function cdww (a, b, c = "dt", d = "n", f, g = true, h) {
  countdown(a, b, c, d, "d", f, g, h)
}
function countdown_sec (a, b, c = "dt", d = "n", f, g = true, h) {
  countdown(a, b, c, d, "s", f, g, h);
}
function countdown_m (a, b, c = "dt", d = "n", f, g = true, h) {
  countdown(a, b, c, d, "m", f, g, h)
}
function countdown_h (a, b, c = "dt", d = "n", f, g = true, h) {
  countdown(a, b, c, d, "h", f, g, h)
}
function timebtw (a, b, c, d = "uf", e = "n", f = "w") {
  if (b === undefined) {
    b = (new Date().getFullYear()).toString() + "-01-01T00:00Z";
  }
  if (c === undefined) {
    c = (new Date().getFullYear() + 1).toString() + "-01-01T00:00Z";
  }
  if (d === "dt") {
    countdown(a, c, b, e, f)
  } else {
    countdown(a, b, c, e, f)
  }
}
//To allow the function to be run without using every argument
function count_down({a, b, c = "dt", d = "n", e = "w", f, g = false, h}) {
  if (c !== "dt" && c !== "uf") {g = true}
  countdown(a, b, c, d, e, f, g, h)
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
function time2dec(a, b, c) {
  let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
  if (a === undefined) {
    //Stops program if no element id provided
    console.log("You did not specify an element id for the program");
    return
  } else {
    var d, e, dd, date, tsds, h, ht, m, mt, s;
    if (b === undefined) {
      //Defines b if no value provided in parameter
      b = new Date().getTimezoneOffset() * -1 * 60 * 1000;
    } else if (b === "default") {
      //Defines b if b parameter is "default"
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
      if (m < 10) {
        m = "0" + m
      }
      if (s < 10) {
        s = "0" + s
      }
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
        console.log("The values of b and c in scw-generate were swapped as your value of b was greater than your value for c.")
			}
		}
	}}, 100)}
