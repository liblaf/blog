DOCS         := $(CURDIR)/docs
FAVICON      := $(DOCS)/.vuepress/public/favicon.ico
NODE_OPTIONS := --max_old_space_size=8192
PNPM         := env NODE_OPTIONS="$(NODE_OPTIONS)" pnpm

all: dist

clean:
	$(RM) --recursive $(DOCS)/.vuepress/.cache
	$(RM) --recursive $(DOCS)/.vuepress/.temp
	$(RM) --recursive $(DOCS)/.vuepress/dist
	$(RM) $(FAVICON)

dist: $(FAVICON)
	$(PNPM) build

pretty: $(CURDIR)/.gitignore
	prettier --write --ignore-path $< $(CURDIR)

start: $(FAVICON)
	$(PNPM) start

update:
	git submodule update --init --recursive
	git submodule foreach git pull

$(FAVICON):
	wget --output-document=$@ https://assets.liblaf.me/favicon/ico/b.ico
