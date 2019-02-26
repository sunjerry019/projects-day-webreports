<?php

function strleft($s1, $s2) {
	return substr($s1, 0, strpos($s1, $s2));
}
function selfURL() {
	$s = empty($_SERVER["HTTPS"]) ? ''
		: ($_SERVER["HTTPS"] == "on") ? "s"
		: "";
	$protocol = strleft(strtolower($_SERVER["SERVER_PROTOCOL"]), "/").$s;
	$port = ($_SERVER["SERVER_PORT"] == "80") ? ""
		: (":".$_SERVER["SERVER_PORT"]);
	return $protocol."://".$_SERVER['SERVER_NAME'].$port.$_SERVER['REQUEST_URI'];
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Error 404 Page Not Found</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.ico" />
        <style>
            *{font-family: Calibri;}
            .header a
            {
                text-decoration: none;
                color: black;
            }
            p a:link, p a:visited
            {
                color: #3385D1;
            }
            p a:hover, p a:active
            {
                color: #3385D1;
                text-decoration: none;
            }
            #a
            {
                margin: 0 auto;
                width: 80%;
                text-align: center;
            }
            #ab
            {
                margin: 0 auto;
                width: min-content;
            }
            .header
            {
                /*background-color:#30d0e6;*/
                background:#B0B7FF;
	            border-bottom-width:1px;
	            border-bottom-color:black;
	            border-bottom-style:solid;
                margin: 0 auto;
                width: 80%;
                border: 1px solid black;
            }
            #abc
            {
                margin-right: 5px;
            }
            ins
            {
                color:#777;
                text-decoration:none;
            }
        </style>
    </head>
    <body>
        <div id="a">
            <div class="header">
                <table>
                    <tr>
    	                <td id="abc">
        	                <a href="index.html"><img src="images/icon.png" alt="Logo" name="Insert_logo" width="180" height="90" id="Insert_logo" style="background:#74CCFC; display:block;" /></a>
                        </td>
                        <td>
        	                <a href="index.html"><h1 style="text-align:left" width="180" height="90">Effects of Common Foods on Bacteria in Water</h1></a>
                        </td>
   	                </tr>
                </table>
            </div>
            <p><b>404.</b> <ins>That’s an error.</ins></p>
            <p>The requested URL 
            <?php
                $cururl = selfURL();
                echo "<b>".$cururl."</b>";
            ?>
            was not found on this server.  <ins>That’s all we know.</ins><p>
            <p>If you're in denial and think this is a conspiracy that cannot possibly be true, please try using my search box below. Or maybe you could just check the address! However, if you still cannot find your page, please <a href='mailto:grp1030.2012@gmail.com'>contact us</a>, we will try to fix the error.</p>
            <p>Or you can go back to your last page 
            <?php
                $lasturl = $_SERVER['HTTP_REFERER'];
                echo '<a href="' . $lasturl . '" >' . $lasturl . '</a>'; 
            ?>
            and try again.
            </p>
            <table id="ab">
                <tr>
                    <td style="vertical-align: top;">
                        <form action="search.php" method="get">
                            <input type="text" placeholder="Search here" name="q"/>
                            <input type="submit"/>
                    </form></td>
                </tr>
            </table>
        </div>
    </body>
</html>
