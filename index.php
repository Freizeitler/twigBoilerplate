<?php

    require_once 'vendor/autoload.php';

    $loader = new Twig_Loader_Filesystem('patterns/pages/');

    $json = file_get_contents('data/data.json');
    $obj = json_decode($json);

    $twig = new Twig_Environment($loader);

    echo $twig->render('pageIndex.twig', array('data' => $obj));

?>