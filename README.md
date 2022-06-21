# rodapf

Live reload tool for basic c programming.

## Installation

`npm install -g rodapf`

## Usage

`rodapf ../path/to/file.c`

## Options

- `-i`, `--in`, `--input`:

  `rodapf ../path/to/file.c -i input.txt`

  The same of manually running:

  `gcc ../path/to/file.c -o compiled.out && compiled.out < input.txt`

- `-o`, `--out`, `--output`:

  `rodapf ../path/to/file.c -o output.txt`

  The same of manually running:

  `gcc ../path/to/file.c -o compiled.out && compiled.out > output.txt`

- `-c`, `--compile`, `compile-options`:

  Appends gcc compilation options to the command.

  `rodapf ../path/to/file.c -c -lm`

  The same of manually running:

  `gcc ../path/to/file.c -o compiled.out -lm`

  > Also works to overwrite the compilation path:
  >
  > `rodapf ../path/to/file.c -c "-o ../other/path/to/compiled.out"`

---

> The code will be recompiled and executed whenever the c file is changed or the input file is changed.

