---
title: Sending Mail in Masonite Framework
date: '2022-11-20'
tags: ['masonite', 'mail', 'python']
draft: false
summary: Masonite ships with built in mail feature. Hence, we can easily send emails without too many hassles.
---

<p align="center">
    <img src="https://banners.beyondco.de/Sending Mail.png?theme=light&packageManager=Masonite&packageName=Framework&pattern=charlieBrown&style=style_2&description=in&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50" />
</p>

Masonite ships with built in mail feature. Hence, we can easily send emails without too many hassles. You can either send text message or use your `jinja` template to send emails.

## Some of the notable features

- [x] Mail support for sending emails quickly.
- [x] Queue support to speed your application up by sending jobs to run on a queue or asynchronously.
- [x] Notifications for sending notifications to your users simply and effectively.
- [x] Task scheduling to run your jobs on a schedule (like everyday at midnight) so you can set and forget your tasks.
- [x] Events you can listen for to execute listeners that perform your tasks when certain events happen in your app.
- [x] A BEAUTIFUL Active Record style ORM called Masonite ORM. Amazingness at your fingertips.

## Getting Started

Because this is built in feature, you don't need to install any extra dependencies. So let's start by setting up our project. I'll be using `Mac OS` so some of the command might differ. But if you follow along you'll get an idea on how everything works in the code.

**Setting Up Working environment**

1. Create a project folder, you can give any name but let's use `example-mail` as our project name. If you use console/terminal to create folder then:

```sh
$ mkdir example-mail
$ cd example-mail
```

2. Because it's always better to isolate development environment while working in `python` language. Let's create a virtual environment and then activate it.

```sh
$ python -m venv venv
$ source venv/bin/activate
```

3. Upgrade your pip, if it is not already upto date.

```sh
(venv) $ pip install --upgrade pip
```

4. Now it's time to install the framework package itself. And setup to the project.

```sh
(venv) $ pip install masonite
(venv) $ project start .
```

> The above command will setup all the required dependencies for you and will setup up the project for you in your current working directory. Also, optionally you can run `pip install -r requirements.txt` to make sure all the dependencies are installed correctly.

6. Finally, you can start your project.

```sh
(venv) $ python craft serve
```

> If you go to `localhost:8000` in your browser then you'll be able to see your project running.

**Setting Up Email Provider**

You can use default `termial` driver to log all of your emails (development only). Or for your production server you can use `mailgun` or other email providers by using `smtp` configuration. All the configuration details are inside your project's config folder: `config/mail.py`. It's always better to use `.env` file to project your secrets, hence update mail configuration accordingly in `.env` file.

```sh
MAIL_DRIVER=terminal
MAIL_FROM=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
```

**Creating Emails**

In order to send email, you need to create a `Mailable` class. Fortunately, framework provides easy command line to create that for us. Let's say we want to create Welcome Email.

```sh
(venv) $ python craft mailable Welcome
```

The above command will create a mailable which looks something like this:

```python
class Welcome(Mailable):
    def build(self):
        return (
            self.to("user@gmail.com")
            .subject("Masonite 4")
            .from_("admin@gmail.com")
            .text("Hello from Masonite!")
            .html("<h1>Hello from Masonite!</h1>")
        )
```

You can configure your own emails, subjects and the email contents in the above code. Let's configure `Mailable` class to fit our different use cases.

1. Simple text email

```python
class Welcome(Mailable):
    def build(self):
        return (
            self.to("user@gmail.com")
            .subject("Masonite 4")
            .from_("admin@gmail.com")
            .text("Hello from Masonite!")
        )
```

2. Email using HTML content

```python
class Welcome(Mailable):
    def build(self):
        return (
            self.to("user@gmail.com")
            .subject("Masonite 4")
            .from_("admin@gmail.com")
            .html("<h1>Hello from Masonite!</h1>")
        )
```

3. Email using `view` (advance)

```python
class Welcome(Mailable):
    def build(self):
        your_data = {
            "foo": "bar"
        }

        return (
            self.to("user@gmail.com")
            .subject("Masonite 4")
            .from_("admin@gmail.com")
            .view("mailables.welcome", your_data)
        )
```

> You need to have jinja template file `welcome.html` inside `templates/mailables/`

**Previewing Email**

You can also preview your email to know how exactly the email looks like. In your controller let's do minor changes.

```python
"""A OurController Module."""
from masonite.views import View
from masonite.controllers import Controller
from app.mailables.Welcome import Welcome


class OurController(Controller):
    """OurController Controller Class."""

    def index(self, view: View):
        return Welcome()
        # return view.render("our-template")
```

> Note: if you are using `view` to send emails then you also have to add few more things as shown in the code below.

```python
"""A OurController Module."""
from masonite.views import View
from masonite.controllers import Controller
from app.mailables.Welcome import Welcome


class OurController(Controller):
    """OurController Controller Class."""

    def index(self, view: View):
        from wsgi import application

        return Welcome().set_application(application)
        # return view.render("our-template")
```

**Sending Emails**

Sending email is pritty straight forward. Let's do some changes in our previous controller as shown below.

```python
"""A OurController Module."""
from masonite.views import View
from masonite.controllers import Controller
from app.mailables.Welcome import Welcome
from masonite.mail import Mail # we've imported this one


class OurController(Controller):
    """OurController Controller Class."""

    def index(self, view: View, mail: Mail): # changed here

        # creating mailable class and passing that in mailable method of mail object
        welcome_mailable = Welcome()
        mail.mailable(welcome_mailable).send()

        return view.render("our-template")
```

> If you are using `view` do not forget to attach `application` like below:

```python
"""A OurController Module."""
from masonite.views import View
from masonite.controllers import Controller
from app.mailables.Welcome import Welcome
from masonite.mail import Mail # we've imported this one


class OurController(Controller):
    """OurController Controller Class."""

    def index(self, view: View, mail: Mail): # changed here
        from wsgi import application # import application

        # creating mailable class and passing that in mailable method of mail object
        welcome_mailable = Welcome().set_application(application) # inject application to mailable class
        mail.mailable(welcome_mailable).send()

        return view.render("our-template")
```

Well, now you know how to send emails, let's try attaching files in email.

```python
"""A OurController Module."""
from masonite.views import View
from masonite.controllers import Controller
from app.mailables.Welcome import Welcome
from masonite.mail import Mail


class OurController(Controller):
    """OurController Controller Class."""

    def index(self, view: View, mail: Mail):
        from wsgi import application

        welcome_mailable = Welcome().set_application(application)
        # attaching file with file name and corresponding file path
        welcome_mailable.attach("welcome-cert.pdf", "storage/pdf/welcome-cert.pdf")

        mail.mailable(welcome_mailable).send()

        return view.render("our-template")
```

There might be times when you need some sort of data passed to your `Mailable` class in that case if have to make few changes in both the `Mailable` class and the `Controller` like below.

```python
# mailable class

class Welcome(Mailable):

    def __init__(self, data):
        self.data = data
        super().__init__()

    def build(self):

        return (
            self.to("user@gmail.com")
            .subject("Masonite 4")
            .from_("admin@gmail.com")
            .view("mailables.welcome", self.data)
        )
```

```python
# controller class

"""A OurController Module."""
from masonite.views import View
from masonite.controllers import Controller
from app.mailables.Welcome import Welcome
from masonite.mail import Mail


class OurController(Controller):
    """OurController Controller Class."""

    def index(self, view: View, mail: Mail):
        from wsgi import application

        your_data = {}

        welcome_mailable = Welcome(your_data).set_application(application)
        mail.mailable(welcome_mailable).send()

        return view.render("our-template")
```

Well, that's pretty much it. Now you have full understanding on how you can create and send emails.
