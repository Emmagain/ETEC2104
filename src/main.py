import cherrypy
import mako.template
import os.path
import random
import datetime

PYPATH = os.path.dirname(__file__)

nlist = ["Abby","Karen","Moxxie","Jeffrey", "Elizabeth","Nathan"]

class App:
    @cherrypy.expose
    def index(self):
        name = random.choice(nlist)
        home = mako.template.Template(filename=f"{PYPATH}/../html/home.html")
        return home.render(Name=name)

    @cherrypy.expose
    def signup(self):
        e = mako.template.Template(filename=f"{PYPATH}/../html/signup.html")
        return e.render(foobar=102)
    
    @cherrypy.expose
    def posts(self):
        time = []
        view = []
        while (len(time)<15):
            x = datetime.timedelta(minutes=random.randrange(8000))
            hoursago = int( x.seconds / 3600 )
            minutesago = round( (x.seconds - hoursago*3600)/60 )
            time.append( f"{x.days} days, {hoursago} hours, and {minutesago} minutes ago" )
            view.append(random.randint(1,100))
        l = mako.template.Template(filename=f"{PYPATH}/../html/posts.html")
        return l.render(times=time,views=view)

    @cherrypy.expose
    def test(self):
        t = mako.template.Template(filename=f"{PYPATH}/../html/test.html")
        return t.render(foobar=42)

srcdir = os.path.dirname(__file__)

app = App()
cherrypy.quickstart(
    app,
    '/',
    {
        "/html": {
            "tools.staticdir.on": True,
            "tools.staticdir.dir": f"{srcdir}/../html"
        }
    }
)