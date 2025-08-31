document.addEventListener('DOMContentLoaded', function() {

     1. 粘性导航栏滚动效果
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY  50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

     2. 移动端菜单切换
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('header nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

     (未来功能) 动态加载文章
     这部分是示例，说明如何用JS动态创建内容
     实际应用中，你会从服务器API获取 'articles' 数据
    
    const articles = [
        { 
            title 动态加载的文章标题, 
            authors 作者A, 作者B,
            metadata 期刊名  2023-11-01,
            abstract 这是通过JavaScript动态加载的文章摘要...,
            imgSrc httpsvia.placeholder.com300x200.pngtext=Dynamic+Load,
            tags [{text JS动态, class featured}]
        }
    ];

    const articlesFeed = document.querySelector('.articles-feed');

    function createArticleCard(article) {
         在这里创建和上面HTML中一样的 article-card 结构
         然后用 articlesFeed.appendChild() 添加到页面
    }

     articles.forEach(createArticleCard);
    

});