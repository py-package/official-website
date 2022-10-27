---
title: Masonite Multitenancy
date: '2022-07-17'
tags: ['masonite', 'multitenant', 'python']
draft: false
summary: Multitenancy package for Masonite!
---

<p align="center">
<img src="https://banners.beyondco.de/Masonite%20Multitenancy.png?theme=light&packageManager=pip+install&packageName=masonite-multitenancy&pattern=charlieBrown&style=style_2&description=Multitenancy+package+for+masonite.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

# Masonite Multitenancy (WIP)

Multitenancy package for Masonite!

Multitenancy is a feature that allows you to have multiple tenants in your application. This is useful for things like a company having multiple websites, or a company having multiple apps.

### Features

- [x] Create a new tenant (with domain)
- [x] Tenant specific configurations
- [x] Tenant specific migrations and seeders
- [x] Tenant middleware to specify tenant in request on the fly

### Installation

```bash
pip install masonite-multitenancy
```

### Configuration

Add _`MultitenancyProvider`_ to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from multitenancy import MultitenancyProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    MultitenancyProvider,
    # ...
]
```

Then you can publish the package resources (if needed) by doing:

```bash
python craft package:publish multitenancy
```

### Command Usage

You'll get bunch of commands to manage tenants.

**Create a new tenant**

This will prompt few questions just provider answers and that's it.

```bash
python craft tenancy:create
```

This will also automatically generate new database connection based on your `default` database connection from `config/database.py`.

**List all tenants**

```bash
python craft tenancy:list
```

**Delete a tenant**

```bash
# delete a tenant by database name
python craft tenancy:delete --tenants=tenant1
# or
python craft tenancy:delete --tenants=tenant1,tenant2
```

**Delete all tenants**

```bash
python craft tenancy:delete
```

**Migrate a tenant**

```bash
python craft tenancy:migrate --tenants=tenant1
# or
python craft tenancy:migrate --tenants=tenant1,tenant2
```

**Migrate all tenants**

```bash
python craft tenancy:migrate
```

Similary you can use `tenancy:migrate:refresh`, `tenancy:migrate:reset`, `tenancy:migrate:status` and `tenancy:migrate:rollback` commands.
All commands will take `--tenants` option to specify tenants if you ever need.

**Seed a tenant**

```bash
python craft tenancy:seed --tenants=tenant1
# or
python craft tenancy:seed --tenants=tenant1,tenant2
```

**Seed all tenants**

```bash
python craft tenancy:seed
```

### Using Tenancy Facade

**Create a new tenant**

```python
from multitenancy.facades import Tenancy

# creates a new tenant and returns instance of new Tenant
Tenancy.create(
  name='tenant1',
  domain='tenant1.example.com',
  database='tenant1',
)
```

**Get tenant**

```python
from multitenancy.facades import Tenancy

# by id
Tenancy.get_tenant_by_id(1)

# by domain
Tenancy.get_tenant_by_domain('tenant1.example.com')

# by database name
Tenancy.get_tenant_by_database('tenant1')
```

**Delete tenant**

```python
from multitenancy.facades import Tenancy


tenant = Tenant.find(1)
Tenancy.delete(tenant)
```

**Connections**

```python
from multitenancy.facades import Tenancy

# setting tenant specific connection
tenant = Tenant.find(1)
Tenancy.set_connection(tenant)

# resetting to default connection
Tenancy.reset_connection()
```

Event though above approach can be used to set tenant specific connection, and do tenant related tasks, it's recommended to use `TenantContext` instead.

### Using Tenant Context

You might sometime need to get data from different tenant in your application or you might have to do some logic based on tenant. In this case you can use `TenantContext` class to get tenant data.

```python
from multitenancy.contexts import TenantContext
from multitenancy.models.Tenant import Tenant

tenant = Tenant.where('name', '=', 'tenant1').first()

with TenantContext(tenant=tenant):
    # do something with tenant1 data
    # ...
```

You can also do all other tenant specific tasks like: `migrations`, `seeds`.

```python
from multitenancy.contexts import TenantContext
from multitenancy.models.Tenant import Tenant

tenant = Tenant.where('name', '=', 'tenant1').first()

with TenantContext(tenant=tenant) as ctx:
    # migrate the database
    ctx.migrate()
    ctx.migrate_refresh()
    ctx.migrate_rollback()
    ctx.migrate_reset()
    ctx.migrate_status()

    # seed the database
    ctx.seed()
```

### Final Step

Now the multitenancy is almost ready to use. The final step is to make use of tenancy middleware. This middleware will be used to specify tenant in request on the fly. So, basically you have to attach this middleware to all the routes that are tenant aware.

```python
# config/routes.py
# ...

Route.get("/", "WelcomeController@show")
Route.get("/tenant-aware-routes", "WelcomeController@show").middleware("multitenancy")
```

In above example, `/tenant-aware-routes` will be tenant aware. It means that if you have tenant setup and you are trying to access `/tenant-aware-routes` then you will get tenant specific items from the database.
