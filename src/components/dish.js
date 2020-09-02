import React, { Component } from "react";
import {
    Card,
    CardContent,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,
    TextField,
    IconButton
} from "@material-ui/core";
import ScatterPlot from "@material-ui/icons/ScatterPlot";
import Edit from "@material-ui/icons/Edit";

class Dish extends Component {
    state = {
        edit: false,
        name: this.props.name
    };

    // modificar el estado 
    edit = e => {
        this.setState({ edit: !this.state.edit });
    };

    // actualizacion de estados de manera local
    handleChange = e => {
        let newState = { ...this.state };
        newState.name = e.currentTarget.value;

        this.setState(newState);

        //comunicar al padre para updatear el metodo OnChange
        this.props.onUpdateDish(this.props.index, newState.name)
    };

    // para saber si el componente fue actualizado
    componentDidUpdate(){
        console.log("el componente fue actualizado")
    }

    render() {
        return (
            <Card className="card">
                <CardContent>
                    <List
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                                {this.state.edit ? (
                                    <TextField
                                        label="Platillo..."
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                ) : (
                                        this.props.name
                                    )}
                                <IconButton size="small" onClick={this.edit}>
                                    <Edit />
                                </IconButton>
                            </ListSubheader>
                        }
                    >
                        {this.props.ingredients.map((ingredient, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <ScatterPlot />
                                </ListItemIcon>
                                <ListItemText inset primary={ingredient} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        );
    }
}

export default Dish;
