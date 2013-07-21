from django import template

register = template.Library()

@register.inclusion_tag('object_admin/object_admin_links.html')
def object_admin_links(object):
    return {'object':object}