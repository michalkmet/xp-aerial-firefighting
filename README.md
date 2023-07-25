# Awesome repo

You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can"t just be dropping tons of bombs, they need that money for the annual christmas party).

The given string is a 2D plane of random length consisting of two characters:

x representing fire
Y representing buildings.
Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

Note: all inputs will be valid.

Examples
"xxYxx" and w = 3      -->  2 waterbombs needed
"xxYxx" and w = 1      -->  4
"xxxxYxYx" and w = 5   -->  3
"xxxxxYxYx" and w = 2  -->  5

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story 1 - User can pass small 2D plane with only one fire or building, it should return 1 or 0 waterbomb needed
- ⚠ TODO UAT1.1: User can pass "x",1 - it should return 1 (waterbomb needed)
- ⚠ TODO UAT1.2 -  User can pass "Y",1 - it should return 0 (waterbomb needed)
- ⚠ TODO UAT1.3 -  User can pass "xY",1 - it should return 1 (waterbomb needed)
- ⚠ TODO UAT1.4 -  User can pass "Yx",2 - it should return 1 (waterbomb needed)
- ⚠ TODO UAT1.5 -  User can pass "YY",2 - it should return 0 (waterbomb needed)
- ⚠ TODO UAT1.6 -  User can pass "xx",2 - it should return 1 (waterbomb needed)
- ⚠ TODO UAT1.7 -  User can pass "xx",3 - it should return 1 (waterbomb needed)


Story 2 - User can pass small 2D plane with more fires or buildings, it should return 2 (waterbomb needed)
- ⚠ TODO UAT2.1 -  User can pass "xx",1 - it should return 2 (waterbombs needed)
- ⚠ TODO UAT2.2 -  User can pass "Yxx",1 - it should return 2 (waterbombs needed)
- ⚠ TODO UAT2.3 -  User can pass "xYx",1 - it should return 2 (waterbombs needed)
- ⚠ TODO UAT2.4 -  User can pass "YYYxx",1 - it should return 2 (waterbombs needed)
- ⚠ TODO UAT2.5 -  User can pass "xYx",2 - it should return 2 (waterbombs needed)
- ⚠ TODO UAT2.6 -  User can pass "xxYxx",2 - it should return 2 (waterbombs needed)

Story 3 - User can pass 2D plane with more fires or buildings, it should return how many waterbombs needed
- ⚠ TODO UAT3.1 -  User can pass "xxYxxYxx",2 - it should return 3 (waterbombs needed)
- ⚠ TODO UAT3.2 -  User can pass "YYYxxx",1 - it should return 3 (waterbombs needed)
- ⚠ TODO UAT3.3 -  User can pass "xxxYxxxYxxx",3 - it should return 3 (waterbombs needed)

