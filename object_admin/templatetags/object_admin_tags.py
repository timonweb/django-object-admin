from django import template
from django.db import models
from django.urls import reverse

register = template.Library()


def _admin_url_name(obj, verb):
    return 'admin:{}_{}_{}'.format(
            obj._meta.app_label,
            obj._meta.model_name,
            verb
        )


@register.inclusion_tag('object_admin/object_admin_links.html')
def object_admin_links(obj):
    if isinstance(obj, models.Model):
        return {
            'object': obj,
            'opts': obj._meta
        }
