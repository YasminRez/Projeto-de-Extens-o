function Formulario() {
  return (
    <div id="Formulario">
      <h2>Entre em Contato</h2>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          placeholder="(00) 00000-0000"
        />

        <fieldset>
          <legend>Tipo de Serviço que você procura:</legend>

          <label>
            <input type="radio" name="servico" value="online" required />
            Aulas Online
          </label>

          <label>
            <input type="radio" name="servico" value="presencial" />
            Aulas Presenciais
          </label>

          <label>
            <input type="radio" name="servico" value="planilhas" />
            Planilhas Personalizadas
          </label>
        </fieldset>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
