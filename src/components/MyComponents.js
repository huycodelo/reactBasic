import React from 'react';
import '../views/App.scss';
import './ComponentsChild.js'
import ComponentsChild from './ComponentsChild.js';


class MyComponents extends React.Component 
{

    state= {
        FirstName: '',
        LastName: '',
        arrHuy: [
            { id: 123123, job: 'frontend', sale:'500$' },
            { id: 123, job: 'backend', sale:'400$' },
            { id: 12312312312123, job: 'dev', sale:'300$' },


        ]
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
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.FirstName} 
                    onChange={(event)=> this.handleChangeFirstname(event)}
                    />
                    <br/><br/>

                    <label htmlFor="lname"> Last name:</label><br/>
                    <input
                    type="text" 
                    value={this.state.LastName}
                    onChange={(event)=> this.handleChangeLastname(event)}
                    />
                    <br/>

                    <button 
                    type="button"
                    onClick={(event)=> this.handleSubmit(event)}
                    /> 
                    <br/>
                </form>

                <ComponentsChild
                name = {this.state.FirstName}
                age = {'21'}
                address = {'129/64 lien khu 5-6'}
                arrHuy = {this.state.arrHuy}
                />
    
                
            </React.Fragment>


            );
        }
}
export default MyComponents;