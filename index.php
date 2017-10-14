<?php

    require_once 'vendor/autoload.php';

    $loader = new Twig_Loader_Filesystem('patterns/pages/');
    $twig = new Twig_Environment($loader);
    
    echo $twig->render('pageIndex.twig');

?>