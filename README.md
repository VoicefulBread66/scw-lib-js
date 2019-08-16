# features
Adds countdown (a, b, c, d) and hex16 (a) functions to any JavaScript in your HTML program. Basically a small JavaScript library. Note: Function names are case sensitive!
# how to use
Countdown
- The a parameter is the only compulsory one. It states the element id that will be used for the program. Inputs are strings.
- The b parameter states the time you are counting down to/up from in UTC format. Whatever your timezone, it is default UTC. Thus, if you are counting down to a specific time in the same time zone as where you are, set the format as "YYYY-MM-DDTHH:MM:SSZ". Inputs are strings.
- The c parameter states the mode of the program - whether to count down or up. If it is down, set the c parameter to "dt". If it is count up, set it to "uf"
- The d parameter states the type of time measurement - whether UTC time measurement or Decimal time measurement. If you want it normal, set the d parameter to "n". If you want it Decimal, set the d parameter to "d".

Hex16
- The a parameter is compulsory. It states the element id that will be used for the program.
# what it does
Countdown
- makes countdown/count-up in decimal or normal time format in a specific element

Hex16
- Generates a random 16-digit hexadecimal code
# copyright
This is copyrighted by Samuel Craig Wu, 2019. Any use of this must include credit to the rightful owner.
