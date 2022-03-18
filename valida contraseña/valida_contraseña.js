/* CONSIGNA: Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
presione una tecla, luego de esto se cerrará el programa.
 */

let con, contrasenia;
let c=0;
con=prompt("Ingrese su contraseña");

while (c<3) {
    contrasenia=prompt("Ingrese su contraseña nuevamente");
        if (con==contrasenia) {
            document.write("Felicitaciones, recordas tu contraseña!"+"<br>")
            c=3;
            }
        if (con!=contrasenia) {
            c=c+1
        }                          
}

if (c=3) {
    document.write("Tenes que ejercitar la memoria"+"<br>")
}