DOCS         := $(CURDIR)/docs
NODE_OPTIONS := --max_old_space_size=8192
PNPM         := env NODE_OPTIONS="$(NODE_OPTIONS)" pnpm

all: build

build: docs
	$(PNPM) build

clean:
	$(RM) --recursive $(DOCS)/.vuepress/.cache
	$(RM) --recursive $(DOCS)/.vuepress/.temp
	$(RM) --recursive $(DOCS)/.vuepress/dist
	$(RM) $(DOCS)/.vuepress/public/favicon.ico

docs: favicon

favicon: $(DOCS)/.vuepress/public/favicon.ico

start: docs
	$(PNPM) start

$(DOCS)/.vuepress/public/favicon.ico:
	wget --output-document=$@ https://assets.liblaf.me/favicon/ico/b.ico
