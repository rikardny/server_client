<html>
<head>

<script type="text/javascript" language="javascript" src="jsme/jsme.nocache.js"></script>

<script>
 //this function will be called after the JavaScriptApplet code has been loaded.
    function jsmeOnLoad() {
        jsmeApplet = new JSApplet.JSME("jsme_container", "55.5%", "40%");
        jsmeApplet.setAfterStructureModifiedCallback(showEvent);
   	    var image = document.getElementById('image');
		//image.src = "https://cplogd.service.pharmb.io/v1/predictionImage?smiles=&imageWidth="+ Math.floor(window.innerWidth*0.9) +"&imageHeight=" + window.innerHeight/2
    }

    function imageNotFound() {
        document.getElementById('error_label').innerText = "ERROR: Something went wrong with rendering the prediction image. Please try with another molecule or contact a site administrator if the problem persists."
    }

    function imageFound() {
        document.getElementById('error_label').innerText = ""
    }

    function showEvent(event) {
        var smiles = jsmeApplet.smiles()
        window.setTimeout( function() { redraw(smiles) }, 900 );
    }

    function redraw(smiles) {
        if ( smiles != jsmeApplet.smiles() ) {
            return;
        }
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host;

        var imageurl = baseUrl + "/v1/predictionImage?smiles=" + jsmeApplet.smiles()
        var predictionurl = baseUrl + "/v1/predictionHR?smiles=" + jsmeApplet.smiles()
        var tester = new Image();
        tester.addEventListener('error', imageNotFound)
        tester.addEventListener('load', imageFound)
        tester.src = imageurl;
	      var image = document.getElementById('image');
		    image.src = imageurl;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('prediction_label').innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", predictionurl, true);
        xmlhttp.send();
    }

</script>
</head>

<body>
<div style="width: 100%; height: 74px; border-bottom: 1px solid #ccc; margin-bottom:1em;">
    <div style="width: 100%; margin: 0 auto;">
        <div style="width: 1024px; float: left;">
            <a href="http://www.pharmb.io" style="text-decoration : none; color : #aaa;"><h1 style="margin: .24em 0; font-family: Ubuntu, arial, helvetica, sans-serif; letter-spacing: -1px; color: #aaa;"><img src="pharmbio_logo.png" style="position: relative; top: 6px; height: 36px; margin-right: .2em;">pharm<span style="color: #c00"><span>b.io</span></span></a><span style="color: black; margin-left: 2em;color: #444;">MetPred </span><span style="color: black; font-size: 24px;">&mdash; Site-of-Metabolism and Reaction Type Prediction Service</span></h1>

        </div>

        <div style="width: 64px; float: right;">
            <a href="http://farmbio.uu.se/research/researchgroups/pb/?languageId=1"><img src="uu_logo.png"></a>
        </div>
    </div>
</div>

	<noscript>
		<div
			style="width: 22em; position: absolute; left: 50%; margin-left: -11em; color: red; background-color: white; border: 1px solid red; padding: 4px; font-family: sans-serif">
			Your web browser must have JavaScript enabled in order for this
			application to display correctly.</div>
	</noscript>

        <div style="width: 43%; background-color: white; border: padding: 4px; font-family: sans-serif; float:right;">
    <h3 style="margin-top: 0">MetPred &mdash; Site-of-Metabolism and Reaction Type Prediction Service</h3>
    <p>MetPred predicts site-of-metabolism using a data mining approach based on Reaction SMARTS to define reaction types.</p>

    <p><i>Instructions</i>: Draw your molecule in the editor, the prediction underneath will update as you draw.</p>

    <p><i>Web API</i>: Available as Open API 2.0 (Swagger) at: <a href="https://metpred.service.pharmb.io">https://metpred.service.pharmb.io</a></p>

    <p>For citing this service and for more information:<br>

    Improving Site-of-Metabolism Predictions by Defining Reaction Centers using Reaction SMARTS Patterns<br>
    Ola Spjuth, Lars Carlsson, Jonathan Alvarsson, Staffan Arvidsson, Catrin Hasselgren, Lucija Peterlin Masic, Wesley Schaal, and Scott Boyer
    [Submitted]</p>

    <p><i>Version</i>: 1.0.1-20180123</p>
    </div>

    <div id="jsme_container" style="width=57%; float=left;"></div>

    <div id="error_label" style="color:red"></div>
    <img id="image"  style="display: block; margin: auto; height: 50%; width: 66%; float:left;"></img>
    <div id="prediction_label" style="height: 50%; width: 33%;float:right;white-space: pre-wrap;"></div>
</body>
</html>
