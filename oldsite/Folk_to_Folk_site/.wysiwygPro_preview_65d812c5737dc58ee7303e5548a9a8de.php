<?php
if ($_GET['randomId'] != "jVesTk7yCUr0VXXTMoV_rb4FO968MfaIY_J9FGqDdcFQzhNliIQCHyFG8lvjcnEA") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
