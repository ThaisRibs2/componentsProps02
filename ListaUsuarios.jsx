import Usuario from "./Usuario";

function ListaUsuarios() {
  return (
    <div>
      <Usuario nome="Ana" idade={22} />
      <Usuario nome="Carlos" idade={30} />
      <Usuario nome="Maria" idade={25} />
    </div>
  );
}

export default ListaUsuarios;