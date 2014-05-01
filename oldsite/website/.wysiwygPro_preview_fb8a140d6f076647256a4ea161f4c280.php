<?php
if ($_GET['randomId'] != "pH3c7fLyMclyyn6C4a1ugFunrH_zcvfW05vHce7qBQ9Q1NXm0W_Fafs6X4AyF9Na") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
