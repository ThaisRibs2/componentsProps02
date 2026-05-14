function Perfil({ nome, email, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} width="150" />
      <h3>{nome}</h3>
      <p>{email}</p>
    </div>
  );
}

export default Perfil;