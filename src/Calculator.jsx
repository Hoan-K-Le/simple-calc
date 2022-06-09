import React, {Component} from 'react'

export default class Calculator extends Component {
    state = {
        total: 0,
        num1: '',
        num2: '',
        operator: '+'
    }

    setNum = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
       // EVAL IS BAD.. NO NO... DO NOT DO THIS.. BROKEN DESIGN.. PLEASE IGNORE WHOEVER READS THIS.
       
       let evalValue = eval(`${this.state.num1} ${this.state.operator} ${this.state.num2}`) 
        this.setState (() => {
            return {total: evalValue}
            // num1: (''),
            // num2: (''),
            

                // total: parseInt(this.state.num1) + parseInt(this.state.num2),
                // total: parseInt(this.state.num1) - parseInt(this.state.num2),
                // total: parseInt(this.state.num1) * parseInt(this.state.num2),
                // total: parseInt(this.state.num1) / parseInt(this.state.num2),
            })
                
        
    }




    render() {
        
        return (
            <>
            <div className="caclulator">
                <h1>Add with React!</h1>

                <form onSubmit={this.calculate}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    
                        <select name='operator' onClick= {this.setNumber}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>

                        </select>

                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button onClick={this.handleSubmit}>=</button>
                    <h3>{this.state.total}</h3>
                </form>
            </div>
            </>
        )
    }
}
