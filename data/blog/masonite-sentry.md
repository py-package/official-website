---
title: Masonite Sentry
date: '2022-07-12'
tags: ['masonite', 'sentry', 'python']
draft: false
summary: Sentry SDK implementation for Masonite Apps.
---

<p align="center">
  <img src="https://banners.beyondco.de/Masonite%20Sentry.png?theme=light&packageManager=pip+install&packageName=masonite-sentry&pattern=charlieBrown&style=style_2&description=Sentry+sdk+implementation+for+Masonite+Apps.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

## Masonite Sentry

Sentry sdk implementation for Masonite.

## Installation

```bash
pip install masonite-sentry
```

## Configuration

Add SentryProvider to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from sentry import SentryProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    SentryProvider,
    # ...
]
```

Then you can publish the package resources (if needed) by doing:

```bash
python craft package:publish sentry
```

## Usage

Setup environment variables in your project's `.env` file:

```bash
SENTRY_DSN=
SENTRY_SAMPLE_RATE=1.0
```

Well that's it, you are done, congrats.

> Note: Sentry captures no any exceptions if you are on debug mode.
