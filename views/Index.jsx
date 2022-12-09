const React = require('react');
const myStyle = {
    color: 'red',
    backgroundColor: '#000090',
    height: '40px',
    translate: '0px -10px'
};

class Index extends React.Component {
    render () {
        const {pokemon} = this.props;
    return (
        <div>
            <h1 style={myStyle}>Pokedex</h1>
        <ul>
        {pokemon.map((pokemons, i) => {
            return (
                <li>
                    <a href={`/pokemon/${pokemons.id} `}> {pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}
                        </a>
                            {/* - Color: {pokemons.color.charAt(0).toUpperCase() + pokemons.color.slice(1)}
                        / Type: {pokemons.type.charAt(0).toUpperCase() + pokemons.type.slice(1)} */}
                </li>
            );
        })}
    </ul>
    </div>
    )}
}

module.exports = Index;