import React, { Component } from 'react';

const RiderContext = React.createContext()


class RiderProvider extends Component
{
    state = {
        riders: [],
        loading: true,
        alertText: "",
        severity

        

    }

    componentDidMount()
    {
        fetch('https://bike-boulder-tour.herokuapp.com/api/v1/riders')
            .then(response => response.json())
            .then(riders =>{
                this.setState({ riders: riders, loading: false })

            })
            .catch(error => console.log(error))

    }







    render(){
        



        return (
            <RiderContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export { RiderProvider, RiderConsumer, RiderContext }