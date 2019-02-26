<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Web resource currently unavailable</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.ico" />
        <style>
            html
            {
                background-color: #F9F9F9 !important;
                font-family: 'Trebuchet MS';
            }
            .wrapper
            {
                margin: 15px 50px;
                background-color: white !important;
                -webkit-box-shadow: 1px 1px 10px #ccc; /*horizontal-offset, vertical-offset, blur-radius (optional), spread-readius (optional), color*/
                -moz-box-shadow: 1px 1px 10px #ccc;
                -ms-box-shadow: 1px 1px 10px #ccc;
                -o-box-shadow: 1px 1px 10px #ccc;
                box-shadow: 1px 1px 10px #ccc;
                padding: 10px 20px;
            }
            ::selection
            {
                background-color: rgb(170, 211, 251);
            }
            ::-moz-selection
            {
                background-color: rgb(170, 211, 251);
            }
            #content
            {
                text-align: center;
            }
            .header
            {
                border: 1px solid black;
                border-radius: 5px;
                padding-left: 10px;
                background-color: #ffd800;
            }
            .submit
            {
                background-color: transparent;
                border: 1px solid #ccc;
                margin: 0 auto;
                cursor: pointer;
            }
            .submit:hover
            {
                background-color: transparent;
                border: 1px solid #09C;
                margin: 0 auto;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="header"><h1>Web resource currently unavailable</h1></div>
            <div id="content">
                <h3>Please check back soon.</h3>
                <p>The web resource you are trying to reach is currently unavailable, please try again later.</p>
                <p>This could be caused by the lack of internet connection, or that this website is currently under maintainance.</p>
                <p><input type="button" class="submit" value="Click to go to our homepage to try again" onclick="window.location.href = '../index.html'"></p>
            </div>
            <br>
        </div>
        
    </body>
</html>
