---
title: Article manage
description: Article manage
pubDate: 2025-07-02
author: Luweijun
category: blog
tags:
  - remote
  - work
  - productivity
  - digital
  - nomad
  - work-life
  - balance
featured: true
thumb: https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80
large: https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80
---



## 一、项目概览

- **项目地址**：  
    [https://github.com/reporto/blog.github.io](https://github.com/reporto/blog.github.io)

- **管理方式**：  
    通过 Git 实现版本控制、差异比对和多人协作。
---

## 二、本地编辑流程

### 1. 克隆仓库

```
git clone git@github.com:reporto/blog.github.io.git
```

### 2. 编辑内容

- **推荐工具**：  
    Obsidian 或 VS Code（支持 Markdown 实时预览）
    
- **目录结构**：  
    所有文章位于 `src/content/article/` 目录下：
    
```
blog.github.io/
   └── src/
      └── content/
           └── article/
                ├── 示例文章.md
                └── ...
```
### 3. 提交更改


```
git add .
git commit -m "更新：新增文章《XXX》"
git push
```

- **自动触发**：  
    Push 后自动触发 GitHub Actions 构建，可通过 [Actions 面板](https://github.com/reporto/blog.github.io/actions) 查看部署状态。  


---

## 三、在线编辑（GitHub 界面）

1. 进入文件对应目录
    
2. 点击编辑按钮（✏️）
    
3. 修改后提交：
    
    - 填写 Commit 信息
        
    - 点击 **Commit changes**  
        [Pasted%2520image%252020250702102340.png](Pasted%2520image%252020250702102340.png/)


---

## 四、Front Matter 规范

### 基本格式


```
title: 文章标题
description: 文章摘要
date: YYYY-MM-DD
tags: [标签1, 标签2]
featured: false //是否精选
---
```


---

### 字段说明

|字段名|必填|示例值|用途|
|---|---|---|---|
|`title`|是|"Markdown 入门"|文章标题|
|`description`|否|"基础语法教程"|SEO 描述|
|`date`|是|2025-07-02|发布时间排序|
|`tags`|否|[教程, Markdown]|内容分类|
|`featured`|否|true|是否置顶展示|

---

## 五、注意事项

1. **文件命名**：

	- 使用英文+数字（如 `markdown-guide.md`）

	- 避免空格和特殊符号

2. **图片管理**：

	- 推荐存放在 `/public/` 目录

	- 引用方式：`![描述](images/example.png)`
	    
3. **构建失败排查**：

	- 检查 Front Matter 格式是否正确（YAML 语法）

	- 查看 GitHub Actions 日志中的报错信息
  

---

## 六、扩展工具

- **Markdown 校验**：  
    安装 [markdownlint](https://github.com/DavidAnson/markdownlint) 避免语法错误
    
- **本地预览**：  
    使用 `npm run dev` 本地实时预览
- **图片**
  ![图片](https://github.com/reporto/blog.github.io/blob/main/public/logos/logo-amazon-old.svg)
  ![图片2](http://doc.luweijun.com/images/logo-report-beta.svg)	
  ![图片3](https://raw.githubusercontent.com/reporto/blog.github.io/refs/heads/main/public/Pasted%20image%2020250702101936.png)

  test
  ![图片4](/images/logo-report-beta.svg)	
---

> 如有问题，请提交至 [Issues](https://github.com/reporto/blog.github.io/issues) 或通过 Discussions 讨论。
