<?php

// autoload_psr4.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = dirname($vendorDir);

return array(
    'Models\\' => array($baseDir . '/models'),
    'Controllers\\' => array($baseDir . '/controllers'),
    // Cuando se llama el namespace de Models va a ir directamente a la carpeta de models
    // cuando se llama el namespace de Controllers va a ir directamente a la carpeta de controllers
);
