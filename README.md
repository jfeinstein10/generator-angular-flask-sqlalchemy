# generator-afs

> a [Yeoman](http://yeoman.io) Angular-Flask-SQLAlchemy generator

## Setting Up

Make sure you have the following installed:
 - [`node`](https://nodejs.org/en/download/), `npm` (usually comes with `node`), and `yeoman` (`npm install -g yo`)
 - `python` ([for OS X](http://docs.python-guide.org/en/latest/starting/install/osx/) or [Windows](http://docs.python-guide.org/en/latest/starting/install/win/)), [`pip`](https://pip.pypa.io/en/latest/installing.html), and [`virtualenv`](https://virtualenv.pypa.io/en/latest/installation.html)

To install generator-afs from npm, run:
```bash
npm install -g generator-afs
```

## Creating an App
```bash
yo afs
```
You'll see the following prompts with the following options:
 * What would you like to name your project?
 * Which (if any) CSS pre-processor would you like to use? (None, less, scss, or sass)
 * Which (if any) CSS Framework would you like to use? (None, Bootstrap, Foundation, Angular Material)

After creating an app run the following commands in the same directory:
```bash
$ virtualenv venv                           # This creates a virtual environment so we can isolate the requirements of this app from the rest of your computer    
$ source venv/bin/activate                  # This activates the virtual environment (or venv\Scripts\activate for Windows users)
$ pip install -r requirements.txt           # This installs the app's Python dependencies within the virtual environment
$ migrate create migrate <your app name>    # This sets up database versioning (check out the sqlalchemy migration docs)
```

And you can finally run the app with
```bash
$ source venv/bin/activate      # Remember to stick to your virutal environment!
$ python serve.py               # And finally this starts the server
```

## Scaffold All the Things!
Then you can scaffold other parts of your app with the following subgenerators!

#### Creating new Flask Endpoints
```bash
yo afs:endpoints
```
You'll see the following prompts with the following options:
 * What would you like to name your controller?
 * What URL would you like this endpoint to have?
 * What methods would you like this endpoint to accept? (GET, POST, PUT, and DELETE)
 * What would you like to name the Python function for this endpoint?
 * Would you like to define another endpoint for this controller? (y/N)

#### Creating a new Angular page (a new collection of Angular components)
```bash
yo afs:page
```
You'll see the following prompts with the following options:
 * What would you like to name the page?

#### Creating a new Angular component (controller, directive, or service)
```bash
yo afs:component
```
You'll see the following prompts with the following options:
 * What type of component would you like to create? (controller, directive, or service)
 * What would you like the to name the [controller]?
 * Would you like to create a new route for this controller? (y/N) (only for controllers)
 * What would you like that route to be? (only for controllers)
 * What page would you like the [controller] to belong to?
