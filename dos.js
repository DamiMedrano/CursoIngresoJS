function mostrar()
{
  var nombre;
  var localidad;

  nombre = documentGetElementById("elNombre").value;
  localidad = documentGetElementById("laLocalidad").value;

  alert("Usted es " + nombre + " y vive en la localidad de " + localidad ".");
}
