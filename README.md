# One-Line Gadget Roast

This entry is for make.fun's **One-Line Roast: The Gadget You Use Every Day** competition. It roasts a smartwatch that treats standing up as a major personal achievement:

> My smartwatch congratulates me for standing up, as if sitting was the hard part.

## Run

Node 22.18 or later runs the TypeScript entrypoint directly. Set `MAKEFUN_OUTPUT_DIR` to the directory where the entry should be written:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/gadget-roast-output node main.ts
```

The program creates that directory and writes the line to `entry.txt` without a trailing newline.
