django-object-admin
===================

Adds a nice floating menu with "Add/Change/Delete/History/Go to admin" links for a current page object.

Almost any Django app has at lest one detailed view. A page that's created around a single Django object. For example: a blog post page, a product page, a user page, a static page, etc. 

If you want to edit such a page as an editor, it's always a huge pain to find that particular page hidden deep down in Django admin, especially if your
app has lots of pages. 

What if you could easily access such an object from it's frontend page without searching for it in Django admin? Well, this app solves that problem.

Django Object Admin adds a nice little floating menu with Add/Change/Delete/History links to every page that's built around a single object. 
So now you have a CMS-like ability of quickly-editing your pages. On pages that don't have a main object, it'll show you a nice "Go to admin" link,
which gives you a handy and quick way of jumping into Django Admin.

Installation is super simple, what you only need to do is:

1. add CSS and JS files to your site_base.html header:
  <script src="{% static 'object_admin/js/object_admin.js' %}"></script>
  <link rel="stylesheet" href="{% static 'object_admin/css/object_admin.css' %}">

2. add {% object_admin_links %} tag and pass it your main object, for example like this: 
{% load object_admin_tags %}
{% if user.is_staff %}
  {% object_admin_links object %}
{% endif %}

HINT: It's always a nice idea to add this configuration to your root html file like base.html or site_base.html so it's applied automatically and sitewide, especially, if you use Class Based Views.
However, if you use function views or want to get fancy, you can conditionaly include this tag on pages you really need and pass it any other Django Model's object, so you get a custom behaviour.