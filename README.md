# HTML
It stands for Hypertext markup language which is used to create webpages.It uses tags and attributes to provide
structure and format to the webpages.


# Hypertext :
It is a text which contains links to other texts.
# Why Markup language :
It is used to defines the text documents within the tags to structure webpages. Here tags are also called Markup.

# Note :
HTML files are saved with .html or .htm extension.
<br>
combination of html tags and contents are called html elements .
<br>
HTML is called as language of the browser because browser understands html .

<br>
ASP : Active server pages
MDN : Mozilla developer network



# HTML tags and attributes :
Tags are the containers in html for some content or other html tag.
tags are like keywords which defines that how web browser will format and display the content.
<br>
attributes provide the additional information about the tags .

# Types of HTML elements :
1. Block elements 
<br>
HTML Block elements, are used to structure the main content of a webpage. They typically start on a new line and take up the full width of their container examples div, p, h1 to h6, and ul, etc.
<br>
2. Inline elements 
<br>
It does not start on a new line and takes up only the necessary width.examples : br,span etc

# head tag in Boilerplate code
It is used to write scripting(both client and server) to make dynamic web pages.It also contains page metadata.

# title tag
It is the subtag of head tag. It is used to show the title of webpages.

# formatting tags 
These type of tags are applied on the text.


# Types of HTML tags :
Semantic tags : These are the tags which are understandable to what task they actually perform.
ex- header, footer etc
<br>
Non Semantics tags : These are the tags which are not understandable to what task they actually perform.
ex- div tag etc


# Important Point from form :
In radio button id and name are same.

<br>

In form tag , **action** attribute is used to defines what actions need to be performed when the form is submitted.

<br>

The **fieldset** element is used to group related data in a form, and the **legend** element defines a caption for the fieldset element.
<br>


# Iframe tag
Iframe tag is used to provide link of another website in one website.
There are some websites link which we cannot use to as a part of our website like google.


# Video tag 
Video tag is used to show the Video on our websites.
<br><br>
Attributes of Video tag :
<br>
1. src : It is used to provide relative or absolute url.
<br>
2. controls : It is used to provide extra functionality like play ,download, resize of video etc.
<br> 
3. height and width attributes  :  It is  used for size.

<br>

4. loop :
It is used when we want to restart the video after complete once.

<br>
5 . autoplay :
It makes video autoplay when the webpage opens.



# CSS : Cascading style sheet
CSS is a language which is used to provide styling to a website.

# How to link a html with css files
<link rel="stylesheet" href= "style.css">

# There is a id element selector in css:
#main div{background-color:white;}

# padding :
It is used to fit text in a container properly.

padding:5px 6px      
here 5px is for top and bottom,
6px for Right and left


padding:5px 6px 7px
here 5px is for top ,
6px is for Right and left,
7px is for down


padding:1px 2px 3px 4px
here 1px is for top, 2px for right , 3px for down
and 4px for left


padding-top:5px 
padding-right :6px
padding-down :7px
padding-left :3px


padding:4px
here padding top,right,down,left are 4px.

# Shorthand for border:

border: 1px solid black;
<br>
In border attribute 1px is width, solid is style and black is color . THis is short hand way.

# overflow :
The CSS overflow property controls what happens to content that is too big to fit into an area.
It works for only Block elements.

# font-varients :
The font-variant property in CSS is used to control the usage of different font variants in a text. It allows you to enable or disable the use of alternative glyphs within a font, like small caps or old-style numerals.


# height : 90 vh and width : 1wh
here vh means viewport height.
<br>
1 vh is equal to 1% of the height of the viewport and same as in vw.

# position: sticky;
when the two elements are overlapping then with the use of z -index ,we can specify which element will be show in  upper layer or lower layer .Basically whose z -index is maximum,that will show in upper layer.


# flex-wrap :
The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

# display :grid;
Grid display provides a grid-based layout system with rows and columns. Bydefault it provides a single row and column.


# transform : matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
Here we can 6 properties in matrix method.
