# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/Shayidinadapa/funniest-autocorrect-fail-01/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/Shayidinadapa/funniest-autocorrect-fail-01/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for the [Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) bounty on make.fun.

## The task

Write one line under 200 characters that reads as a hilarious autocorrect fail. A judge compares entries in pairs and picks the funnier one, weighing the clarity of the slip, the surprise of the wrong word, and how well the joke lands on first read.

## The entry

> I texted my boss "I'm working from home today" but autocorrect changed it to "I'm twerking from home today" - HR wants a word.

The slip is one plausible autocorrect swap — *working* became *twerking* — a word nobody would ever send their boss on purpose, and the HR punchline lands on first read with no explanation needed.

## How it works

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$OUTPUT_DIR`, then `/output`), reads it back, and validates it against the gate: 1–199 characters, a single line, pure ASCII, no leading or trailing whitespace, no double spaces, and both halves of the slip present. It throws if anything mismatches.

Run it with:

```sh
node main.ts
```
