---
title: Masonite Instant Articles
date: '2022-07-17'
tags: ['masonite', 'instant-articles', 'instant', 'articles', 'python']
draft: false
summary: This helps you generate facebooks instant articles and also regular feeds with enough customizations you might need.
---

<p align="center">
    <img src="https://banners.beyondco.de/Masonite%20Instant%20Article.png?theme=light&packageManager=pip+install&packageName=masonite-instant-article&pattern=charlieBrown&style=style_2&description=generate%20facebooks%20instant%20articles%20and%20feeds.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

**If you are seeking package for generating instant article or feeds in Masonite then yes, this package is for you.**

> This helps you generate facebooks instant articles and also regular feeds with enough customizations you might need.

## Installation

```shell
pip install masonite-instant-article
```

## Configuration

Add `InstantArticleProvider` to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from instant_article.providers import InstantArticleProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    InstantArticleProvider
    # ...
]
```

Then you can publish the configuration by doing:

```bash
python craft package:publish instant_article
```

## Update Configurations

You need to define options in your `instant_article` configuration file inside `config` directory.

```python
# config
INSTANT_ARTICLE = {
    "force_validate": False,
    "feed_details": {
        "your-custom-route-name.xml": {
            'model': 'path-to-your-model-class',
            'title': '',
            'description': '',
            'lang': 'en-us',
            'brand': '',
            'type': 'instant-article' # feed, instant-article
        }
    }
}

# Example
INSTANT_ARTICLE = {
    "force_validate": False,
    "feed_details": {
        "blogs-rss.xml": {
            'model': 'app.models.Blog',
            'title': 'Blog Feed',
            'description': '',
            'lang': 'en-us',
            'brand': '',
            'type': 'instant-article' # feed, instant-article
        },
        "news-rss.xml": {
            'model': 'app.models.News',
            'title': 'News Feed',
            'description': '',
            'lang': 'en-us',
            'brand': '',
            'type': 'instant-article' # feed, instant-article
        }
    }
}

# Above feeds can be access from:
"""
https://your-domain.com/rss/blogs-rss.xml
https://your-domain.com/rss/news-rss.xml
"""
```

## Implementation

```python
from instant_article.interfaces.instant_article_interface import InstantArticleInterface
from instant_article.models.instant_article import InstantArticle


class YourModel(Model, InstantArticleInterface):


    @staticmethod
    def get_feed_items():
        return YourModel.all() # can be any query returning proper values

    def format_feed(self):
        return InstantArticle.create({
            'id': self.id, # required | integer
            'title': self.name, # required | string
            'subtitle': '', # nullable | string
            'kicker': '', # nullable | string
            'summary': '', # required | string
            'description': '', # required | string
            'cover': '', # nullable | string
            'updated': self.updated_at, # required | date
            'published': self.created_at, # required | date
            'link': '', # full url to item...
            'author': '' # nullable | email | string
        })
```

Your project is now ready to go :+1:.
