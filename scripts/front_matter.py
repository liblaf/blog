import glob
import pathlib
import subprocess

import frontmatter


class YAMLHandler(frontmatter.YAMLHandler):
    def export(self, metadata: dict[str, object], **kwargs: object) -> str:
        metadata_str: str = super().export(metadata, **kwargs)
        proc: subprocess.CompletedProcess[str] = subprocess.run(
            ["prettier", "--write", "--parser", "yaml"],
            stdout=subprocess.PIPE,
            check=True,
            input=metadata_str,
            text=True,
        )
        return proc.stdout.strip()


def get_list(metadata: dict[str, object], key: str) -> list[str]:
    value = metadata.get(key, [])
    if isinstance(value, str):
        return [value]
    return value


files: list[pathlib.Path] = [
    pathlib.Path(p) for p in glob.glob("src/**/*.md", recursive=True)
]
for file in files:
    file = pathlib.Path(file)
    post = frontmatter.load(file)

    category = set(get_list(post, "category"))
    if "posts" in file.parts:
        category.add("Posts")
    if "course-notes" in file.parts:
        category.add("Course Notes")
    if "course-work" in file.parts:
        category.add("Course Work")
    if "research" in file.parts:
        category.add("Research")
        if "slides" in file.parts:
            category.add("Group Meeting")

    tag = set(get_list(post, "tag"))
    tag -= category

    print(file, category, tag)
    if category:
        post["category"] = sorted(category)
    if tag:
        post["tag"] = sorted(tag)
    frontmatter.dump(post, file, handler=YAMLHandler())
