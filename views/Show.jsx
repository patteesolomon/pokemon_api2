const React = require('react');

class Show extends React.Component {
    render() {
        <DefaultLayout title = {"Edit Page"}>
        const {pokemons} = this.props;
        return(
            <div>
                <h1> - Gotta Catch 'Em All - </h1>
                <h2>{pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}</h2>
                <img src= {pokemons.img + ".jpg"}/>
                <a href="/pokemon/">Back</a>
            </div>
        );
    }
    </DefaultLayout>
}

module.exports = Show;