install:
	npm install

start:
	npx babel-node src/bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

generate-docs:
	npx jsdoc -c jsdoc.json

docs:
	open docs/index.html

.PHONY: docs