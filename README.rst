django-object-admin
===================

Creates Add/Edit/Delete/History links for a Django model's object

Add ``"object_admin"`` to your ``INSTALLED_APPS`` then just add this tag into your template and go::

    {% if request.user.is_staff and object %}
    	{% object_admin_links object %}
	{% endif %}



NOTE: This is my first ever Django App. Based on adapted by me snippet from here: http://djangosnippets.org/snippets/1824/