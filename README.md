# TS2EXE

## This project
* This is a simple POC (Proof of concept) demonstrating how we can generate SEA's (Single Executable Applications) with Typescript in Windows.

### Single Executable Applications
* Disclaimer:
    This is an experimental feature, available on `Node.js v21.6.2`, and it's uses on production environments are not reccomended. Learn more on [Node Stability Index](https://nodejs.org/api/documentation.html#stability-index)

* Development team mention
    You can check more about the feature development by taking a look on the [team repository](https://github.com/nodejs/single-executable)

* Learn more on [Single executable applications](https://nodejs.org/api/single-executable-applications.html)

## Build process explanation

### Typescript compilation
First the `evaluator.ts` is compiled by using the `tsc`. The script it's very simple it's just using a V8 context feature to evaluate JavaScript code.

### sea-config.json
In this file we declare the input file (compiled `evaluator.js`) with `main`, and where do we want to generate the `.blob` file with `output`.

Note that I'm also disabling experimental warnings and using cached code.
We are using cached code, because we don't want that Node.js compiles everything from scratch but to use code cache to speed up the compilation. 

### blob file generation
We are generating the `.blob` files by using the node `--experimental-sea-config` flag and passing the 

### executable generation
After we have the blob file we simply generate the desired `.exe` file by using the Node File System module (`fs`).

### postject
Finally we use the postject to inject the `.blob` resources into the generated `.exe`

### *Remarks*
* After creating the executable with `fs` module the ideal was to remove the signature of the binary by using `signtool` from [Windows SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/)

* After injecting the `.blob` into the `.exe`, we should also sign the binary using the `signtool`.

* Since this project it's for educational purposes only we are not signing any generated executable, altough the binary it's still runnable its always good to remember that it's a good practice to add an certificate to your generated executables.


## How to run?
1. You need to have the `Node.js v21.6.2`
2. You'll have to install the `make`
    * You can install either by the Directly download from [Make for Windows](https://gnuwin32.sourceforge.net/packages/make.htm) or via chocolatey `choco install make`
3. Simply run `make` at the root of repository :) 
    * _Remember that this project it's supposed to run on Windows OS_