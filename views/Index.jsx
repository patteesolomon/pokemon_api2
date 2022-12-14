const React = require('react');
const myStyle = {
    color: 'red',
    backgroundColor: '#000090',
    height: '40px',
    translate: '0px -10px'
};

class Index extends React.Component {
    render() {
        return (
        <div> 
            <h1 style={myStyle}> Pokedex </h1>
            <ul>
            {this.props.pokemons.map((poke, i) => {
                return (
                    <li><a href={`/pokemon/${poke.id}`}>{poke.name.substring(0,1).toUpperCase() + poke.name.substring(1) +
                    `${poke.color}` +
                    `${poke.type}`}</a>
                    <a href={`/pokemon/${pokemon.id}/edit`}>Edit</a>
                            <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                        </form>
                    </li>
                )
            })}    
            </ul>
            <nav>
                <a href="/pokemon/new">Add a new pokemon</a>
            </nav>
        </div>     
        );
    }
}

module.exports = Index;