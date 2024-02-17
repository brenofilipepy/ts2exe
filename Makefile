.PHONY: gen-blob crt-node-exec-cp inject-gen-blob-into-cp-exec

all: gen-exec

compile-ts-code:
	cd src && tsc && cd ..

gen-blob:
	node --experimental-sea-config ./sea-config.json

crt-node-exec-cp:
	node -e "require('fs').copyFileSync(process.execPath, '.\\bin\\evaluate.exe')"

inject-gen-blob-into-cp-exec:
	npx postject .\\bin\\evaluate.exe NODE_SEA_BLOB .\\blob\\sea-prep.blob ` --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2	

gen-exec: compile-ts-code gen-blob crt-node-exec-cp inject-gen-blob-into-cp-exec
	
