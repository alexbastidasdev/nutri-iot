<?php
/* para que AppController se pueda llamar desde el autoload se tiene que proporcionar el 
namespace y este se da antes de la clase la ubicacion en donde esta*/
namespace Controllers;

use Models\cliente\Cliente;
use Models\User;

/* La clase AppController va a inicilializar la vista principal la cual
va a estar en la carpeta views
*/ 
class AppController
{   
    // Se enera un metodo estatico llamado starApp
    // startApp incluira la vista principal del archivo template.php
    public static function startApp(){
        //$cliente = new Cliente();
        //echo $cliente->nombre();
        //$user = new User();
        //echo $user->info();
        include __DIR__ .'/../views/template.php';
    }
}
?>