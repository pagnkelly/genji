# 笔记

## 仓库=>用途

仓库|描述|事例
--|----|---
@antfu/ni | npm操作 | nr update => npm run update ***** nr -C packages/scripts update => cd packages/scripts && npm run update
fast-glob | nodejs扫文件 | fg('*', { cwd: packageRoot })
simple-git | git操作| const git = Git(DIR_ROOT) git.raw(['log', '-1', '--format=%at', tsPath]) * 1000
gray-matter| 解析markdown | const { content: md, data: frontmatter } = matter(mdRaw)