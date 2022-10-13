.PHONY: build
build: deps compile

.PHONY: deps
deps:
	npm install

.PHONY: compile
compile:
	npm run build

.PHONY: start
start:
	npm start

.PHONY: test
test:
	npm test

.PHONY: lint
lint:
	npm run lint

.PHONY: lint-fix
lint-fix:
	npm run lint:fix