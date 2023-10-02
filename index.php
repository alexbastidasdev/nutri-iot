<?php 
    /* Al generar namespace se llama y se ejecutan las clases y los metodos 
    dentro de cada funcionalidad */
    require_once __DIR__.'/vendor/autoload.php';
    // usar de Controllers AppController
    use Controllers\AppController;
    AppController::startApp();
    /*La idea es que atravez del index.php que se tiene, valla y traiga la informacion
    del template.php que esta ubicado en las views. esto lo hara por medio de AppController
    ubicado en la carpeta controllers */
?>