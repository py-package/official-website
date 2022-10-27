---
title: Masonite Backup
date: '2022-08-11'
tags: ['masonite', 'backup', 'python']
draft: false
summary: Backup Solution for Masonite
---

<p align="center">
  <img src="https://banners.beyondco.de/Masonite%20Backup.png?theme=light&packageManager=pip+install&packageName=masonite-backup&pattern=charlieBrown&style=style_2&description=Backup+solution+for+Masonite+Apps.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

### Features

- [x] Backup Database
- [x] Backup Files
- [x] Store Backup Locally in the filesystem
- [x] Email Backup
- [ ] Store Backup in other Masonite Supported Storage Drivers [s3]

### Installation

```bash
pip install masonite-backup
```

### Configuration

Add BackupProvider to your project in `config/providers.py`:

```python
# config/providers.py
# ...
from backup import BackupProvider

# ...
PROVIDERS = [
    # ...
    # Third Party Providers
    BackupProvider,
    # ...
]
```

Then you can publish the package resources (if needed) by doing:

```bash
python craft package:publish backup
```

### Usage

Once you publish the package resources, you can use the `backup` command to backup your database and files. Before that if you want to configure options of backup then you can do that by updating `config/backup.py` configuration file.

```python
# config/backup.py

FILENAME = "backup"
DIRECTORY = "backup"
SOURCE = {
    "root": base_path(),
    "excludes": [
        ".git",
        "storage",
        "venv",
        "node_modules",
        "__pycache__",
        # add more...
    ],
}

EMAIL_BACKUP = False  # Whether or not to email the backup.
EMAIL_BACKUP_TO = ""  # The email address to send the backup to.
EMAIL_SUBJECT = "System Backup"  # The email subject.
```

> Note: Make sure you have `EMAIL_BACKUP` set to `True` and `EMAIL_BACKUP_TO` set to a valid email address, to send the backup via email. Also don't forget to setup SMTP in `config/mail.py` configuration file or in `.env` file.

```sh
MAIL_DRIVER=smtp
MAIL_FROM=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
```

**Backup Database and Files**

```bash
python craft backup:run
```

**Backup Database Only**

```bash
python craft backup:run --only-db
```

**Backup Files Only**

```bash
python craft backup:run --only-files
```
