---
title: ""
feature_image: "/assets/images/top_beach_view_goa.png"
feature_text: |
  i write my thoughts here
hide_title: true
---
# aryan's brain dump
life, travel, software and everything in between
 
**recent posts**
{% for post in site.posts limit:5 %}
- {{ post.date | date: "%Y-%m-%d" }} - [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}