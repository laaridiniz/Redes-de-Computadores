import Swal, { SweetAlertResult } from "sweetalert2";

function avisoConcluido (): Promise<SweetAlertResult>  {
  return Swal.fire({
    title: "Sucesso",
    text: "Aluno cadastrado com sucesso!",
    icon: "success",
    confirmButtonColor: "#54C5CE",
  });
}

function avisoAlteracaoConcluida (): Promise<SweetAlertResult>  {
  return Swal.fire({
    title: "Sucesso",
    text: "Cadastro alterado com sucesso!",
    icon: "success",
    confirmButtonColor: "#54C5CE",
  });
}

async function avisoDeletar(): Promise<SweetAlertResult> {
  return Swal.fire({
    title: "Deletar cadastro",
    text: "Essa ação não pode ser revertida",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, deletar",
    cancelButtonText: "Cancelar",
  });
}

export { avisoAlteracaoConcluida, avisoConcluido, avisoDeletar };