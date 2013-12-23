Carouselite
========

A lightweight Carousel plugin for changing images inside a container, using the most simple and efficient code.

##[Demo page](http://codepen.io/vsync/pen/EhbLz)


## Basic use-case example:
    <div class='carousel'>
      <a class='arrow next'></a>
      <a class='arrow prev'></a>
      <div class='wrap'>
        <img src='http://farm4.static.flickr.com/3819/10344480386_051e318d8c.jpg' alt='' />
        <img src='http://farm9.static.flickr.com/8239/8662715913_7cea743e65.jpg' alt='' />
        <img src='http://farm4.static.flickr.com/3715/11420101565_93fa750dfb.jpg' alt='' />
        <img src='http://farm9.static.flickr.com/8101/8613630858_6933d52db8.jpg' alt='' />
        <img src='http://farm9.static.flickr.com/8545/8689950937_153cebcf9d.jpg' alt='' />
        <img src='http://farm9.static.flickr.com/8544/8625177130_f5ca373c79.jpg' alt='' />
      </div>
    </div>

    <script>
        // bind carousel elements
		$('.carousel').carouselite();
    </script>
	

## Settings


Name        | Info                                                                                                     | Default
----------- | -------------------------------------------------------------------------------------------------------- | -----------------------------
loop        | Loop back to last image before the first one and to the first image after last one.                      | true
orientation | 'V' or 'H'                                                                                               | 'H'
autoplay    | time in milliseconds to change between pages                                                             | 0
pagination  | Shows a list which corresponds to the number of pages in the carousel                                    | true
   

