# How to Run

1. create an environment: run `virtualenv venv`
2. start the environment: run `source venv/bin/activate`
3. install dependencies: run `pip install -r requirements.txt`
4. run `python3 app.py`
5. open http://127.0.0.1:5000/ in your browser

# Making Edits

Please use Git!!

## Edit website content

Edit HTML files that **do not** start with an underscore `_`

## Edit website style

Edit `assets/stylesheets/main.css`
Look at template.txt and outline.txt to get an idea.

Each file is generally organized following this order:

```
/* Basic */
    /*** LAYOUT ***/
    /*** APPEARANCE ***/
    /*** ANIMATIONS ***/
/* Navbar */
    /*** LAYOUT ***/
    /*** APPEARANCE ***/
    /*** ANIMATIONS ***/
/* Main */
    /*** LAYOUT ***/
    /*** APPEARANCE ***/
    /*** ANIMATIONS ***/
/* Footer */
    /*** LAYOUT ***/
    /*** APPEARANCE ***/
    /*** ANIMATIONS ***/
/* Components */
    /*** LAYOUT ***/
    /*** APPEARANCE ***/
    /*** ANIMATIONS ***/
```

where LAYOUT, APPEARANCE, and ANIMATIONS correspond to the **computed elements** when you inspect a page in a browser.

To inspect a page, right-click the page in a browser, select "inspect".

## Deploying the website to OCF

1. SSH into OCF's server with `ssh nice@ssh.ocf.berkeley.edu` in a terminal
2. run `cd website`
3. run `git pull`
