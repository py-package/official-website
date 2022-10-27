---
title: Masonite Commerce
date: '2022-08-21'
tags: ['masonite', 'ecommerce', 'commerce', 'python']
draft: false
summary: Full-fledge e-commerce solution in masonite [WIP]
---

# Masonite Commerce

<p align="center">
  <img src="https://banners.beyondco.de/Masonite Commerce.png?theme=light&packageManager=pip+install&packageName=masonite-commerce&pattern=charlieBrown&style=style_2&description=Full-fledge+e-commerce+solution+in+Masonite+Framework.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

## Features

- [x] Products
- [x] Custom Attributes
- [x] Categories
- [x] Tags
- [ ] Reviews
- [x] Comments
- [x] Cart
- [ ] Checkout
- [ ] Order
- [ ] Payment
- [ ] Shipping
- [ ] Tax
- [ ] Coupons
- [ ] Custom Reporting and Analytics

**Database Design (v1)**
![Database Design (v1)](https://github.com/yubarajshrestha/masonite-commerce/blob/master/docs/masonite_commerce.png?raw=true)

## Installation

```bash
pip install masonite-commerce
```

## Configuration

Add MasoniteCommerceProvider to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from masonite_commerce import MasoniteCommerceProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    MasoniteCommerceProvider,
    # ...
]
```

Then you can publish the package resources (if needed) by doing:

```bash
python craft package:publish masonite-commerce
```

## Usage

**Dummy Content Seeder**

```sh
python craft commerce:seed
python craft commerce:seed --clear
```
