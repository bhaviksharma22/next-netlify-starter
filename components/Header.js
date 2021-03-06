export default function Header({ title }) {
  return <header id="header" class="title site-header header-style-2">{title}
            <nav class="navigation navbar navbar-default original">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="couple-logo">
                            <h1><a href="#home">K <i class="fi flaticon-shape-1"></i> V</a></h1>
                        </div>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse navbar-right navigation-holder">
                        <button class="close-navbar"><i class="fa fa-close"></i></button>
                        <ul class="nav navbar-nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#couple">Couple</a></li>
                            <li><a href="#people">People</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div><!-- end of nav-collapse -->
                </div><!-- end of container -->
            </nav><nav class="navigation navbar navbar-default sticky-2">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="couple-logo">
                            <h1><a href="#home">K <i class="fi flaticon-shape-1"></i> V</a></h1>
                        </div>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse navbar-right navigation-holder">
                        <button class="close-navbar"><i class="fa fa-close"></i></button>
                        <ul class="nav navbar-nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#couple">Couple</a></li>
                            <li><a href="#people">People</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div><!-- end of nav-collapse -->
                </div><!-- end of container -->
            </nav>
        </header>
}
