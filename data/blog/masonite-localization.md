---
title: Masonite Localization
date: '2022-10-10'
tags: ['masonite', 'localization', 'multi-language', 'python']
draft: false
summary: Add multi-language support in your application.
---

<p align="center">
  <img src="https://banners.beyondco.de/Masonite%20Localization.png?theme=light&packageManager=pip+install&packageName=masonite-localization&pattern=charlieBrown&style=style_2&description=Add+locale+support+in+your+application.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

## Introduction

Add multi-language support in your application.

## Installation

```bash
pip install masonite-localization
```

## Configuration

Add LocalizationProvider to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from localization import LocalizationProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    LocalizationProvider,
    # ...
]
```

Then you can publish the package resources (if needed) by doing:

```bash
python craft package:publish localization
```

## Usage

The setup is very simple. Once you publish the package verify if there's a `lang` directory in the root of your project or not, if not then create one and then create a json file named `en.json` put in some values in it or you can copy/paste following contents.

```json
{
  "message": "Hello"
}
```

By default you'll have `english` language setup in `config` which you can change. The locale can be changed on the fly as well.

You can add as many language json files as you wish. For eg; if need `Japanese` locale then, I will just copy everything from `en.json` file and then create new file named `jp.json` and then update the values in those json.

**Getting Current Locale**

```python
from localization.facades import Localization

# Returns current locale
Localization.current_locale()
```

**Changing Locale**

```python
from localization.facades import Localization

# Returns nothing
Localization.set_locale('jp')
```

**Checking if current local matches**

```python
from localization.facades import Localization

# returns either True or False
Localization.is_locale('jp')
```

**Retrieving Translations in Template**

Imagine you have following translations in `en.json` locale file.

```json
{
  "message": "Hello, World!",
  "notification": {
    "message": "This is notification message."
  }
}
```

Then you can retrieve translation strings as below in template.

```jinja
{{ __("message") }}
<!-- OR -->
{{ __("notification.message") }}
```
