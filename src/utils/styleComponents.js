import Swal from "sweetalert2";

// creación de estilos para alerta sweetAlert
export const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "bg-blue-500 rounded-lg px-3 py-2 text-white mx-2",
    cancelButton: "bg-red-500 rounded-lg px-3 py-2 text-white mx-2",
  },
  buttonsStyling: false,
});

// creación de la alerta personalizada
export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  showCancelButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
