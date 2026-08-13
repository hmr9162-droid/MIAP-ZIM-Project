
# $\color{#A9A9A9}\text{ZIM SUM  ‧₊˚ ⋅  𓐐𓎩 ‧₊˚ ⋅ (๑ᵔ⤙ᵔ๑)  }$ 

## Quick, Tasty, Beginner-Friendly Recipes 
If you're reading this there's a good chance you've unzipped a `.zip` file. If you are more familiar with internet archiving, you'll also recognize `.warc` which bundles up web material for re-access through tools like the Way Back Machine. Just like these, `.zim` is a $\color{#A9A9A9}\text{container format.}$ 

`.zim` bundles up webpages for re-access with [Kiwix](https://github.com/kiwix), or other `.zim` reader, to simulate web browsing $\color{#A9A9A9}\text{without being connected to the internet.}$ 

Anyone can archive the web for offline use regardless of their experience $\color{#A9A9A9}\text{in the kitchen.}$ 


* [Homepage](hmr9162-droid.github.io/ZimSum/)
* [Why .ZIM?](#Why-ZIM?)
* [Creating a .ZIM file](#Creating-a-.ZIM-File) 
* [Source Projects](#Source-projects)
* [Zibliography](https://github.com/hmr9162-droid/ZimSum#%E1%B4%A2%C9%AA%CA%99%CA%9F%C9%AA%E1%B4%8F%C9%A2%CA%80%E1%B4%80%E1%B4%98%CA%9C%CA%8F)
* [Contributors & Contributing](#Contributors)
* [License](#License)


## Why ZIM?

The `.zim` format is highly compressed and lossless, preserving quality without occupying a ton of disk space. Additionally, `.zim` enables fulltext search; thus, any personal library can function like an offline search engine. 

Together, the [Kiwix](https://github.com/kiwix) and [OpenZim](https://github.com/openzim) projects have utilized the format to make resources like Wikipedia, Project Gutenberg, Stack Exchange and Ask Ubuntu, accesible and searchable. These open source tools have led to many indvidual archive projects. In 2025, a `.zim` of [cdc.gov](https://archive.org/details/www.cdc.gov_en_all_novid_2025-01) was contributed to Internet Archive.
 
By compiling a URL source into an offline-accessible format, `.zim` may be particularly useful for archivists and librarians encountering:

+ little or no internet access 
+ limited electricity (online browsing drains power!) 
+ disaster-related restrictions 
+ the censorship or deletion of online materials

Some other considerations include: 

+ archival backups 
+ providing research or access copies of archived sites
+ remote educational tools, kits, and workshops! 

Lastly, the preservation of web resources, like a Github repository, for offline access may prove to be an important skill for digital archivists. Our project also aims to highlight the strengths and weaknesses of the `.zim` container format, compared to `.warc`, the existing web archiving standard. We've run crawls on [FFmprovisr](https://amiaopensource.github.io/ffmprovisr/), an FFmpeg resource, and archived the site as both ffmprovisr.zim and ffmprovisr.warc. By comparing use-cases and key features, archivists can make stronger arguments for utilizing the `.zim` format for their projects.

<br>

# $\color{#A9A9A9}\text{Creating a .ZIM File }$ 

## 1. Check for system updates 🛒 ⋆˙⟡

open MacOS terminal -> [command] + [space]  
open Windows terminal -> [win] + [r] then, [wt]
Then run: 

	$ sudo apt update

and, 

	$ sudo apt upgrade

## 2. Install Dependencies 🔥 ⊹₊
	
	$ sudo snap install docker
	$ sudo apt install pkgconf
	$ sudo apt install googletest
	$ sudo apt install python3-pip meson

## 3. Install .ZIM tools ⟡₊˚🥢 ♡ 🥄 *.ﾟ
	
	$ sudo apt install libzim-dev 
	$ sudo apt install libmagic-dev 
	$ sudo apt install zliblg-dev 
	$ sudo apt install libgumbo-dev 
	$ sudo apt install libicu-dev

## 3. Install zimwriterfs  ‧₊˚ ⋅🥕‧ 𖦹°‧₊

	$ sudo apt install zimwriterfs

zimwriterfs does the assembly of a webpages key ingredients, such as: 

| 📖 | 🥣 | 
|:--------------:|:----------------------------------------------------------:|
HTML | Hypertext Markup Language 
CSS | Cascading Style Sheets
JS | JavaScript
PNGs | Portable Network Graphics
JPGs | Joint Photographic Experts Group
GIFs | Graphics Interchange Format
MPEGs | Moving Picture Experts Group 


using the recipe below 

	$ zimwriterfs + [mandatory arguments] + [optional arguments] + HTML_DIRECTORY + [Name_for_your_delicious_new_zim_file]
	

Docker can also be used to compile all of the .ZIM tools in one command.

	$ sudo docker pull ghcr.io/openzim/zim-tools:3.6.0
	

## 4. Assembling an argument with zimwriterfs  𓐐𓎩 ⋆˙⟡ 𓌉◯𓇋 ⟡ ₊

Two example commands:

### ffmprovisr

	$ zimwriterfs --welcome=index.html --illustration=shootingstar.png --language=en --title=ffmprovisr --description=offline --creator=amiaopensource --publisher=your_name amiaopensource.github.io/ffmprovisr ffmprovisr.zim

### cable-bible 

	$ zimwriterfs --welcome=index.html --illustration=plug.png --language=en --title=cable-bible --description=offline --creator=amiaopensource --publisher=your_name amiaopensource.github.io/cable-bible cable-bible.zim

## 5. Enjoying your library 

## 6. Sharing your library 🥡

## 6. Versioning ‧₊˚🖇️✩ ₊˚📖
Consider including semantic versioning in your file_name.zim if the URL source is a website or github repository that may be subject to contributions or updates over time. See: https://semver.org/


## This project borrows from the following resources

| 🔗 | 📚
|:--------------:|:----------------------------------------------------------:|
[Warc](https://iipc.github.io/warc-specifications/specifications/warc-format/warc-1.0/) | Repository of warc format specifications
[OpenZim](https://openzim.org/) | MediaWiki for the openZim project
[OpenZim](https://github.com/openzim) | Repository for zim tools 
[Kiwix](https://github.com/kiwix) | Kiwix offline zim reader repository 
[FFmprovisr](https://amiaopensource.github.io/ffmprovisr/) | Repository of useful FFmpeg command lines for archivists!
[The Cable Bible](https://amiaopensource.github.io/cable-bible/) | A Guide to Cables and Connectors Used for Audiovisual Tech  


*If you contribute a zim of an archiving resource to our repository, we will link to the original webpage here and to the .zim source on our homepage!*

<br>

<img src="images/zim_file_white.png" width="80">   

## Zibliography

*A collection of `.zim` literature and related web archiving research* 
       
| 🔗 | 📚
|:--------------:|:----------------------------------------------------------:|
[Offline Wikipedia](https://doi.org/10.3991/ijet.v18i21.44313) | Al-Khmisy, R., Hosman, L., & Nova, R. (2023). Curating an Offline Wikipedia for Schools in any Language: A Road Map. International Journal of Emerging Technologies in Learning (iJET), 18(21), 129–148. 
[Verifying the Fixity of Archived Web Sources](https://digitalcommons.odu.edu/computerscience_etds/125) | Aturban, Mohamed. "A Framework for Verifying the Fixity of Archived Web Resources" (2020). Doctor of Philosophy (PhD), Dissertation, Computer Science, Old Dominion University, DOI: 10.25777/pc8d-y213 
[Archival Web=Replay](https://doi.org/10.1145/3589206) | Berlin, J., Kelly, M., Nelson, M. L., & Weigle, M. C. (2023). To Re-experience the Web: A Framework for the Transformation and Replay of Archived Web Pages. ACM Trans. Web, 17(4). 
[Archiving Websites](http://cfi.au.dk/fileadmin/www.cfi.au.dk/publikationer/archiving_underside/archiving.pdf) | Brügger, Niels. Archiving Websites: General Considerations and Strategies. Aarhus, Denmark: The Centre for Internet Research, 2005. 
[ZStandard Compression](https://iipc.github.io/warc-specifications/specifications/warc-zstd/) | International Internet Conservation Consortium. “ Zstandard Compression of Warc Files 1.0 Proposed.” Warc Specifications. Accessed December 5, 2025. 
[EOT Web Archive](https://digital.library.unt.edu/ark:/67531/metadc2201623/)| Phillips, Mark Edward; Phillips, Kristy & Alam, Sawood. Content-Based Characterization of the End of Term Web Archive, article, September 2023;  
[LoC Web Archive Formats](https://www.loc.gov/preservation/resources/rfs/) | “Recommended Formats Statement - Resources (Preservation, Library of Congress),” Library of Congress, n.d., 
[Xapian Delve](https://getting-started-with-xapian.readthedocs.io/en/latest/practical_example/indexing/verifying_the_index.html) | “Verifying the Index Using Xapian-Delve — Getting Started with Xapian V1.4.1.” 2018. Readthedocs.io. 2018. 

## Contributors

+ stp305-source (Jamie) 
+ pgaston99 (Phoenyx)
+ hmr9162-droid (Hayla)

We are Moving Image Archiving and Preservation (MIAP) students at NYU. During our studies, we became interested in the potential uses of `zim` for archivists and in promoting access to online tools. 

<br>

## Contributing

You are encouraged to experiment and contribute zim or warc files to this repository of archiving resources! 

Bug fixes and or other additions are also welcome. To contribute to this project directly clone this repository and create a new branch (`git checkout -b your-branch-name`) then upload your file to `docs` or modify the `index.html`. Then [submit a pull request](https://github.com/hmr9162-droid/MIAP-ZIM-Project) and the code will be reviewed and integrated. 

## License


