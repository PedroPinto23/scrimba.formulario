import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      sobreNome: ""
    };
    this.mudarNome = this.mudarNome.bind(this);
  }
  mudarNome(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      friendily: true
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.nome}
          name="nome"
          placeholder="Nome"
          onChange={this.mudarNome}
        />
        <br />
        <input
          type="text"
          value={this.state.sobreNome}
          name="sobreNome"
          placeholder="Sobre Nome"
          onChange={this.mudarNome}
        />
        <h1>
          {this.state.nome} {this.state.sobreNome}
        </h1>
        <textarea value />
        <input type="checkbox" checked={this.state.friendily} />
      </form>
    );
  }
}
