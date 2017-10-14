<?php
require_once 'vendor/autoload.php';

$loader = new Twig_Loader_Array(array(
    'pageIndex' => 'Hello {{ name }}!',
));
$twig = new Twig_Environment($loader);

echo $twig->render('pageIndex', array('name' => 'Henry'));
?>