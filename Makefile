
postinstall:
	make css

css:
	./node_modules/less/bin/lessc \
		--clean-css="--s0" \
		--autoprefix="last 2 versions" \
		./src/less/main.less \
		./src/css/main.css

updates:
	npm outdated --depth 0
