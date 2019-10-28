<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <!-- 这里用到了extend里边的过滤器  -->
          <a href="{{ item.url }}">{{ item.title }} -- {{helper.relativeTime(item.time)}}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>