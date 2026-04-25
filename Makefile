.PHONY: default clean clean-all build build-dist backup-zipped-build watch

default: build-dist

clean:
	rm -rf $(pwd)/build
	rm -rf $(pwd)/dist

clean-all: clean
	rm -rf $(pwd)/.xpi-backups

build:
	printf '\n'
	tsc && printf '\033[0;32m+\033[0m Done with "tsc".\n'
	mkdir -p $(pwd)/build/icons
	cp -r $(pwd)/icons $(pwd)/build/ && printf '\033[0;32m+\033[0m Copied icons folder to build/icons/.\n'
	cp $(pwd)/manifest.json $(pwd)/build/ && printf '\033[0;32m+\033[0m Copied manifest to build/.\n'
	printf '\n'

build-dist: clean build
	printf '\n'
	mkdir -p $(pwd)/dist
	zip -r $(pwd)/dist/thunderbird-enhancer-$(node -p "require('./manifest.json').version").xpi $(pwd)/build
	printf '\n'

backup-zipped-build:
	printf '\n'
	mkdir -p $(pwd)/.xpi-backups
	cp -r $(pwd)/dist/* $(pwd)/.xpi-backups/
	printf '\n'

watch:
	tsc --watch
