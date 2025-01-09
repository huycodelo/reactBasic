import React from 'react';
import '../views/App.scss';



class ComponentsChild extends React.Component 
{

    state= {
        FirstName: 'huy',
        LastName: ''
    }
    handleChangeFirstname = (event) => {
        this.setState({
            FirstName: event.target.value
        })
    }
    handleChangeLastname = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>> check data input: ', this.state)
    }

    render() 
        {
            console.log('>>> CALL RENDER: ',this.state)

            return(
            <React.Fragment>
                <div>
                    day la child {this.props.name}
                </div>

                
            </React.Fragment>
            );
        }
}
export default ComponentsChild;