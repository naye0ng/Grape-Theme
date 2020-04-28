# Grape-Theme

![home](./assets/img/home.png)

블로그뿐만 아니라 포트폴리오 페이지도 지원하는 Grape-Theme를 자유롭게 사용하세요.

Welcome to Grape Theme!  It is good for a portfolio as well as a blog.
<br>
Customize Grape-Theme and use it for free.

[Demo](https://grape-theme.netlify.com)



## Installation

1. Fork and clone the Grape Theme repo

   ```
   git clone https://github.com/naye0ng/Grape-Theme.git
   ```

2. Install Jekyll 

   ```
   gem install jekyll
   ```

3. Install the theme's dependencies

   ```
   bundle install
   ```

4. Update `_config.yml` and `projects.yml` with your own settings.

5. Run the Jekyll server

   ```
   bundle exec jekyll serve
   ```

   

## Customizing

Grape-Theme에서는 자랑할 만한 두 가지 기능을 제공합니다. 홈 화면의 프로필 섹션과 포트폴리오 페이지의 프로젝트, 상세 프로필 기능이 그것 입니다. 이 모든 기능들은  `_config.yml` 와 `projects.yml` 파일을 수정하는 것만으로도 충분합니다.

Grape-Theme has two great features: the profile section and the project section of the portfolio page. Just by changing  `_config.yml` and `projects.yml` , you can use all of these features.



### Blog Settings

기본적인 블로그 설정은 `config.yml` 에서 가능합니다.

The blog configuration is available in `config.yml`.

#### Site configuration

```
baseurl: "{subpath}"
url : "https://{username}.github.io"

theme_settings :
  title : {blog title}
```



#### Profile Settings

간단한 프로필 정보는 홈 화면에서 출력되며, experience 및 skills 부분은 포트폴리오 페이지에서 함께 보여집니다.

Profile is displayed on the index page, and also experience and skills are displayed on the portfolio page.

```
profile :
  image : assets/img/{prorile image}
    username : {username}
    description : 
    experience :
      - start :
        end : 
        experience : {company name}, {title}
     skills : 
      - skill : 
        value : 85  # Percent value
```



#### Pagination

한 페이지에서 보여질 포스팅 개수를 정의합니다.

Defines the number of posts to be shown on one page.

```
paginate: 5
```



#### Disqus

[Disqus shortname](https://help.disqus.com/en/articles/1717111-what-s-a-shortname)을 설정하고, 포스팅 속성에 `comments : true` 를 추가하면 블로그 글에서 댓글을 사용할 수 있습니다.

you can use the comments by following [document](https://help.disqus.com/en/articles/1717111-what-s-a-shortname) and adding a `comments : true` 

``` 
disqus_shortname :
```



### Portfolio Settings

![home](./assets/img/portfolio.png)

프로젝트 세팅은 `_data/projects.yml`에서 가능합니다.

The Project configuration is available in `_data/projects.yml`.

포트폴리오 페이지에서는 프로젝트 목록과 상세보기를 모달로 지원합니다. 물론 상세보기는 선택적이며, 상세값이 `modal : False`인 경우 모달 버튼은 생성되지 않습니다.

The portfolio page provides projects and detailed views by modal.   If `modal : False` is selected, modal will not be displayed on site. 

- **print** : 
  
  -  `print : True` 를 선택한다면, 블로그의 홈 화면에서도 프로젝트의 정보가 출력됩니다.
  - If `print : True` is selected, it will be displayed on landing page
  
   ![print project](./assets/img/print-project.png)
  
- **modal** 
  - `modal : True` 를 선택한다면 모달 버튼이 활성와 됩니다.
  
  - If `modal : True` is selected, modal will be displayed on the Portfolio page
  
    ![home](./assets/img/modal.png)

```
print : True
modal : True  
```
당신의 프로젝트에 대한 링크와 상세 설명을 아래와 같이 추가하세요.

Add details(link, description) about your projects

```
url : https://github.com/naye0ng/Grape-Theme # Full URL
image : "portfolio.png" # path: assets/project/
date : 2019.06.09 - 2019.07.11
title : 
summary : 
description :  
# modal contents
contents :
  - title :
    image :      	    
    description : 
```



### Colors

블로그의 컬러들은 `_sass/base/_variable.scss` 에서 한번에 변경이 가능합니다.

You can change colors at once. colors are in `_sass/base/_variable.scss`



## Posts in Grape theme

이 블로그의 모든 포스팅 스타일은  `_sass/base/_utility.scss` 에 정의되어 있으며 [Demo page](https://grape-theme.netlify.com/2019/06/08/markdown-and-html.html)와 [Demo page](https://grape-theme.netlify.com/2019/06/09/grape-theme-style.html)에서 여러 태그들의 출력을 확인할 수 있습니다.

You can confirm how to draw tags at [here](https://grape-theme.netlify.com/2019/06/08/markdown-and-html.html) and [here](https://grape-theme.netlify.com/2019/06/09/grape-theme-style.html)

### Create a new post

1. Create a `.md` inside `_posts` folder

   ```
   2019-07-11-grape-theme.md
   ```
   > 한글로 파일 이름을 만드는 경우, 구글 검색을 붙였을때 문제가 발생합니다. 되로록 영어를 사용해주세요:D
2. Write the [Front Matter](https://jekyllrb.com/docs/front-matter/) and content in the file.

   ```
   ---
   layout: post
   title: title
   subtitle : subtitle
   tags: [tag1, tag2]
   author: 
   comments : 
   ---
   ```



## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

