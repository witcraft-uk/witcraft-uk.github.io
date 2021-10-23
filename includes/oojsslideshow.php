<div class="headline-home">
    Alphabets learning app in object-oriented JavaScript
</div>
<div class="home-hero-holder">
    <div id="ooslideshow">
        <div id="div1" class="one"></div>
        <div id="div2" class="two"></div>
        <div id="div3" class="three"></div>
        <img id="ooprev" alt="" src="images/controls/prev.png"/>
        <img id="oonext" alt="" src="images/controls/next.png"/>
     </div>
 </div>
<div class="copy-home">
    I have built this educational slideshow for children attending pre-school and reception incorporating randomised algorithm for colour selection to enhance the learning experience. First I declared a constructor function <code>Myobject</code> (with attributes <code>textvalue</code> and <code>objectColor</code>) and its prototype from which it inherits a method <code>get_random_color</code>. Next I declared an array <code>alphabets</code> and dynamically (using for loop) populate it with instances of <code>Myobject</code>. Then I declared <code>buttonclick</code> function which uses property access expressions and method invocations to step through <code>textvalue</code> and apply randomised colours to its string values (<code>Aa</code> to <code>Zz</code>). Finally my common timer function slides the alphabets across the screen. You can <a href="js/oo.js" target="_blank">view the script code</a> here, and <a href="contact.php">let me know</a> what you think.
</div>