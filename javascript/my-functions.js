
// Acenda a Lâmpada
var quebrada = false;
function mudaLampada(tipo) {
   if (tipo == 1) {
      arquivo = "imagens/lampada-acesa.jpg";
   }
   if (tipo == 2) {
      arquivo = "imagens/lampada-apagada.jpg";
   }
   if (tipo == 3) {
      arquivo = "imagens/lampada-quebrada.jpg";
   }
   if(!quebrada) {
      document.getElementById("luz").src = arquivo;
      if (tipo == 3) {
         quebrada = true;
      }
   }
}

// Efeitos da barra de menus

function mudaFoto (foto)

   {
      document.getElementById("icone").src = foto;
   }