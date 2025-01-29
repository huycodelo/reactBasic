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
            console.log('>>> CHECK PROS : ',this.props)


            //javascript hay dung
            let { name , age, address, arrHuy } = this.props;
            return(
            <React.Fragment> 
                    <div className='list-job'>
                        { 
                            arrHuy.map((item,index) => {
                                return (
                                    <div key={item.id} >
                                        {item.job} - {item.sale}
                                    </div>
                                )
                            } ) 
                        }
                    </div>
                    <div>
                        day la {this.props.name} - {this.props.age} - {this.props.address}
                    </div>
            </React.Fragment>
            );
        }
}
export default ComponentsChild;