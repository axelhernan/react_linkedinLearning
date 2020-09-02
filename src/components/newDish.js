import React, { Component } from 'react';
import { Fab, TextField } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component {

    // recuperar la informacion en el onSubmit
    newDish = React.createRef();


    // acceder a this usando arrow functions
    addDish = event => {
        console.log(this.newDish.value);

        // tengo que poner como parametro el event para evitar que se recargue la pagina, preventDefault() es una funcion que sirve para que no recargue la pagina
        event.preventDefault()
        this.props.onAddDish(this.newDish.value);
        this.newDish.value = ""; //para limpiar el value cuando toco enter
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.addDish}>
                <TextField
                    label="Platillo.."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={e => (this.newDish = e)}
                />
                <Fab
                    color="primary"
                    size="medium"
                    className="dish-form-icon"
                    onClick={this.addDish}
                >

                    <AddIcon />
                </Fab>
            </form>
        );
    }
}

export default NewDish;