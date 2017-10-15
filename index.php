<?php

    require_once 'vendor/autoload.php';

    $loader = new Twig_Loader_Filesystem('patterns/pages/');
    $twig = new Twig_Environment($loader);

    $json = file_get_contents('data/data.json');
    $obj = json_decode($json);
    
    echo $twig->render('pageIndex.twig');

?>