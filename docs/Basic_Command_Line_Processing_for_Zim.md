# ZIM SUM

*The source material for the following comes from the openZim project https://github.com/openzim*

.ZIM files archive simple html websites, often Wikipedia, and preserve them for use offline. Kiwix is a free and open source .ZIM reader which can be used to navigate webpages without being connected to the internet.

|:----------------------:|:-------------:|
[The Reader](https://kiwix.org/en/applications/)
[The Source Code](https://github.com/openzim/zim-tools)
[The Format](https://openzim.org)

# Creating a .ZIM File 

## 1. Check for system updates 

$ sudo apt update
$ sudo apt upgrade

## 2. Install Dependencies 

## You may need all of the following to create your .zim using the zimwriterfs command:
	$ sudo snap install docker
	$ sudo apt install pkgconf
	$ sudo apt install googletest
	$ sudo apt install python3-pip meson

## 3. Install .ZIM tools
	$ sudo apt install zimwriterfs
	$ sudo apt install libzim-dev libmagic-dev zliblg-dev libgumbo-dev libicu-dev

Docker Alternative:
    $ sudo docker pull ghcr.io/openzim/zim-tools:3.6.0

## 4. Using the zimwriterfs command

## Purpose

zimwriterfs packages a directory containing:

*HTML
*CSS
*JavaScript
*PNGs
*JPGs
*GIFs
*Video, and other web resources into a single .ZIM archive

zimwriterfs [mandatory arguments] [optional arguments] HTML_DIRECTORY ZIM_FILE



 **Mandatory arguments:
    	-w, --welcome		path of default/main HTML page. The path must be relative to HTML_DIRECTORY.
	    -I, --illustration		path of ZIM file illustration. The path must be relative to HTML_DIRECTORY and the image a 48x48 PNG.
	    -l, --language		language code of the content in ISO639-3
	    -t, --title		title of the ZIM file
	    -d, --description	short description of the content
	    -c, --creator		creator(s) of the content
	    -p, --publisher		creator of the ZIM file itself

HTML_DIRECTORY		path of the directory containing the HTML pages you want to put in the ZIM file.
	ZIM_FILE		path of the ZIM file you want to obtain.

Optional arguments:
	    -v, --verbose		print processing details on STDOUT
	    -h, --help		print this help
	    -V, --version		print the version number
	    --clusterSize	number of bytes per ZIM cluster (default: 2048Kb)
	    -J, --threads	count of threads to utilize (default: 4)
	    -x, --inflateHtml	try to inflate HTML files before packing (*.html, *.htm, ...)
	    -r, --redirects		path to a TSV file containing a list of redirects (url title target_url).
	    -j, --withoutFTIndex	don't create and add a fulltext index of the content to the ZIM.
	    -a, --tags		tags - semicolon separated
	    -e, --source		content source URL
	    -n, --name		custom (version independent) identifier for the content
	    -o, --flavour		custom (version independent) content flavour
	    -s, --scraper		name & version of tool used to produce HTML content

*The mandatory arguments are MANDATORY, you will not be able to output a file without including the required arguments. The illustration argument can be used to create an icon for your page in the Kiwix reader. The icon does not need to be an img archived from the original URL. Any PNG of your choice can be moved into the HTML_Directory and used for this purpose. You will want to save this file before attempting to process your URL in the command line.*

Example:
	
	zimwriterfs --welcome=index.html --illustration=illustration.png --language=fra --title=foobar --description=mydescription \ --creator=Wikipedia --publisher=Kiwix ./my_project_html_directory my_project.zim

## Two example commands:

# ffmprovisr

$ zimwriterfs --welcome=index.html --illustration=shootingstar.png --language=en --title=ffmprovisr --description=offline --creator=amiaopensource --publisher=your_name amiaopensource.github.io/ffmprovisr ffmprovisr.zim

# cable-bible 

$ zimwriterfs --welcome=index.html --illustration=plug.png --language=en --title=cable-bible --description=offline --creator=amiaopensource --publisher=your_name amiaopensource.github.io/cable-bible cable-bible.zim

## Versioning
    Consider including semantic versioning in your file_name.zim if the URL source is a website or github repository that may be subject to contributions or updates over time. See: https://semver.org/
