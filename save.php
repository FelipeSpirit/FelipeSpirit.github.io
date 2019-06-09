<?php
	$conectar=@mysql_connect('localhost','root','');

	if(!$conectar){
		echo"No Se Pudo Conectar Con El Servidor";
	}else{
		$base=mysql_select_db('prueba');
		if(!$base){
			echo"No Se Encontro La Base De Datos";			
		}
	}

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$mensaje=$_POST['mensaje'];
	
	$sql="INSERT INTO datos VALUES('$nombre',
								   '$correo',
								   '$mensaje')";

	$ejecutar=mysql_query($sql);
	
	if(!$ejecutar){
		echo"Hubo Algun Error";
	}else{
		echo"Datos Guardados Correctamente
			<br>
			<a href='index.html'>Volver</a>";
	}
?>