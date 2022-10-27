---
title: Masonite Modules
date: '2022-10-10'
tags: ['masonite', 'modules', 'python']
draft: false
summary: Modularize your masonite project.
---

<p align="center">
<img src="https://banners.beyondco.de/Masonite%20Modules.png?theme=light&packageManager=pip+install&packageName=masonite-modules&pattern=charlieBrown&style=style_2&description=Modularize+your+masonite+application.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

## Installation

```bash
pip install masonite-modules
```

## Configuration

Add ModuleProvider to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from masonite_modules import ModuleProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    ModuleProvider,
    # ...
]
```

Publish the package resources by doing:

```bash
python craft package:publish modules
```

The default modules location will be `modules` in the root directory of your project. But if you want your own custom name then, update the module name in `config/modules.py` to your desired module path name.

```python
NAME=modules
```

## Installation

Once you finish publishing package, you need to install the modules by doing:

```bash
$ python craft module:install
```

Finally, you will see the modules directory created in your project root.

## Usage

To create the module, simply run:

```bash
$ python craft module:create <module_name>

# Example
$ python craft module:create blog
```

The above command will create a new module called `blogs` in the `modules` directory. It will also create all the necessary files and directories inside `blogs` so you can start working on your module.

Finally, visit `/<module_name>` i.e. `/blogs` then you will see a welcome message.

> Enjoy!
