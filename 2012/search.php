<?php
    if(!isset($_GET["q"]))
    {
       header("Location: searchit.php");
    }
    else
    {
        $que = $_GET["q"];
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Search - Group 1-030 &lt;Effects of Common Foods on Bacteria in Water&gt;</title>
        <script>
          (function() {
            var cx = '014592506052825494694:lwcuukjcyee';
            var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                '//www.google.com/cse/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
          })();
        </script>
        <style>
            *{font-family:Calibri;}
            .page
            {
                font-weight: bold;
                padding: 2px;
                border-radius: 5px;
                border: 1px dashed black;
                background-color: #FF4B4B;
                color: white;
                display: inline-block;
            }
            input:not(.submit)
            {
                background: transparent;
                border-bottom: 1px solid #09C;
                width: 570px;
                font-size: 20px;
                margin: 5px;
                height: 27px;
                padding: 5px;
            }
            .submit
            {
                background-color: #FFFFFF;
                border: 1px solid #ccc;
                margin: 0 auto;
                cursor: pointer;
                height: 27px;
                padding: 5px;
                margin: 5px;
                position: absolute;
            }
            .submit:hover
            {
                background-color: #FFFFFF;
                border: 1px solid #09C;
                margin: 0 auto;
                height: 27px;
                padding: 5px;
                margin: 5px;
                position: absolute;
            }

            #searchform1
            {
                
            }
            form
            {
                margin: 10px;
                position: relative;
            }
            #icon
            {
                height: 27px;
                position: relative;
                top: 5px;
            }
            .center
            {
                margin: 50px;
                text-align: center;
                top: 50%;
                position: relative;
                bottom: 27px;
            }
        </style>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.ico" />
        <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34016937-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
    </head>
    <body>
        <?php
                echo '<form action="search.php" method="get" id="form" autocomplete="off" class="center"><img src="images/search.png" alt="Search" id="icon">&nbsp;<input type="search" placeholder="Search Here" name="q" value="'.$que.'" /><input type="submit" class="submit"/></form>';
        ?>
        <gcse:searchresults-only></gcse:searchresults-only> 
        <br>
        <p><a href="index.html">Return to homepage</a></p>
    </body>
</html>
