---
title: Masonite Audit
date: '2022-10-10'
tags: ['masonite', 'audit', 'python']
draft: false
summary: Keep track of all your model changes with ease.
---

<p align="center">
    <img src="https://banners.beyondco.de/Masonite%20Audit.png?theme=light&packageManager=pip+install&packageName=masonite-audit&pattern=charlieBrown&style=style_2&description=Keep+track+of+all+your+model+changes+with+ease.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

## Getting Started

Install the package using pip:

```bash
pip install masonite-audit
```

Add AuditProvider to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from masonite_audit import AuditProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    AuditProvider,
    # ...
]
```

Publish the package configuration files.

```bash
python craft package:publish masonite-audit
```

This will add migrations and other `masonite-audit` related configuration to your project. Run your migrations to create the related database tables.

```bash
python craft migrate
```

Finally, inherit `Audit` mixin into all the models for which you need audit logging.

```python
from masonite_audit.mixins import Audit
class YourModel(Audit):
    pass
```

If you want to get the audit history for a model, you can use the `history` method:

```python
user = User.find(1)
user.history()
```

In order to rollback to previous versions of a model, you can use the `rollback` method:

```python
user = User.find(1)
user.rollback() # to rollback to previous version
# or
user.rollback(step=4) # to rollback to version 4
```
