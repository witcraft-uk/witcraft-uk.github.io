<div class="headline-home">
    Distance calculator in PHP, AJAX
</div>
<div class="interface">
<br />
<br />
<form>
        <label>From</label> 
        <select name="from" id="from"> 
        	<option value="select">select</option>
        	<option value="Adam">Adam</option>
            <option value="Alison">Alison</option>
            <option value="Alistair">Alistair</option>
            <option value="Amy">Amy</option>
            <option value="Charlie">Charlie</option>
            <option value="Claire">Claire</option>
            <option value="Craig">Craig</option>
            <option value="Divyesh">Divyesh</option>
            <option value="Donna">Donna</option>
            <option value="Garry">Garry</option>
            <option value="Gemma">Gemma</option>
            <option value="Ian">Ian</option>
            <option value="Jon">Jon</option>
            <option value="Jonathan">Jonathan</option>
            <option value="Kate">Kate</option>
            <option value="Kevin">Kevin</option>
            <option value="Kirsty">Kirsty</option>
            <option value="Lee">Lee</option>
            <option value="Lou">Lou</option>
            <option value="Lynda">Lynda</option>
            <option value="Mandy">Mandy</option>
            <option value="Michala">Michala</option>
            <option value="Natalie">Natalie</option>
            <option value="Natasha">Natasha</option>
            <option value="NickyB">NickyB</option>
            <option value="NickyO">NickyO</option>
            <option value="Richard">Richard</option>
            <option value="Ruban">Ruban</option>
            <option value="Sarah">Sarah</option>
            <option value="Smita">Smita</option>
            <option value="Steven">Steven</option>
            <option value="Tim">Tim</option>
            <option value="Wei">Wei</option>
        </select>
        <br />
        <br />
        <label>To</label>
        <select name="to" id="to">
        	<option value="select">select</option>
        	<option value="Adam">Adam</option>
            <option value="Alison">Alison</option>
            <option value="Alistair">Alistair</option>
            <option value="Amy">Amy</option>
            <option value="Charlie">Charlie</option>
            <option value="Claire">Claire</option>
            <option value="Craig">Craig</option>
            <option value="Divyesh">Divyesh</option>
            <option value="Donna">Donna</option>
            <option value="Garry">Garry</option>
            <option value="Gemma">Gemma</option>
            <option value="Ian">Ian</option>
            <option value="Jon">Jon</option>
            <option value="Jonathan">Jonathan</option>
            <option value="Kate">Kate</option>
            <option value="Kevin">Kevin</option>
            <option value="Kirsty">Kirsty</option>
            <option value="Lee">Lee</option>
            <option value="Lou">Lou</option>
            <option value="Lynda">Lynda</option>
            <option value="Mandy">Mandy</option>
            <option value="Michala">Michala</option>
            <option value="Natalie">Natalie</option>
            <option value="Natasha">Natasha</option>
            <option value="NickyB">NickyB</option>
            <option value="NickyO">NickyO</option>
            <option value="Richard">Richard</option>
            <option value="Ruban">Ruban</option>
            <option value="Sarah">Sarah</option>
            <option value="Smita">Smita</option>
            <option value="Steven">Steven</option>
            <option value="Tim">Tim</option>
            <option value="Wei">Wei</option>
        </select>
        <br />
        <br />
        <button id="calculate">Calculate</button> <!--onclick="return false";-->
</form> 
<br>
<div id="txtHint"></div>
</div>
<div class="copy-home">
    Have you ever wondered how far do you sit from your co–workers? I did so I developed this application to measure how far we sit from each other in the department of 35 people. Here I construct URL query strings and pass the values from HTML to PHP via <code>XMLHttpRequest</code> object. The use of JavaScript event model keeps my markup bare minimum. You can <a href="js/distance.js" target="_blank">view the script code</a> here, and <a href="contact.php">let me know</a> what you think.
</div>