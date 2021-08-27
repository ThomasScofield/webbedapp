import React, { Component } from "react";
import './components.css'

class Calculate extends Component {
    constructor(){  
        super();  
        this.state = {  
            formValues: {},
            errorTable: {},
            isValid: false,
            // -- inputs --
            tons: 0.0, // REDS INPUT
            postRackGallons: 0, // WHITES INPUT
            initialBrix: 0,
            initialTA: 0,
            yan: 0,

            brixTarget: 0,
            saignee: 0,// REDS INPUT
            taAdjustment: 0, 
            mlAdjustment: 0, // REDS INPUT
            yeast: 0,

            // -- outputs --
            // Saignee Water Additions
            initGallons: 0,
            saignee: 0,
            waterAdd: 0,
            calculatedGallons: 0,
            // Acid Additions and Reductoins
            tararicAcid: 0.00,
            malicAcid: 0.00,
            potassiumCarbonate: 0.00

        };  
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;
        this.setState({formValues})
        
    }

    handleSubmit(event){
        event.preventDefault();
        var valid = this.validate()
        if(!valid) return;
        console.log(this.state.formValues)
    }

    validate() {
        let fields = this.state.formValues;
        let errors = {};
        let valid = true;
        if(!fields['postRackGallons'] && this.props.class === 'white') {
            valid = false;
            errors['postRackGallons'] = 'Cannot be empty'
        }
        if(!fields['tons'] && this.props.class === 'red') {
            valid = false;
            errors['tons'] = 'Cannot be empty'
        }
        if(!fields['initialBrix']) {
            valid = false;
            errors['initialBrix'] = 'Cannot be empty'
        }
        if(!fields['initialTA']) {
            valid = false;
            errors['initialTA'] = 'Cannot be empty'
        }
        if(!fields['YAN']) {
            valid = false;
            errors['YAN'] = 'Cannot be empty'
        }
        if(!fields['brixTarget']) {
            valid = false;
            errors['brixTarget'] = 'Cannot be empty'
        }
        if(!fields['saignee'] && this.props.class === 'red') {
            valid = false;
            errors['saignee'] = 'Cannot be empty'
        }
        if(!fields['mlAdjustment'] && this.props.class === 'red') {
            valid = false;
            errors['mlAdjustment'] = 'Cannot be empty'
        }
        if(!fields['TAAdjustment']) {
            valid = false;
            errors['TAAdjustment'] = 'Cannot be empty'
        }
        if(!fields['yeast'] || fields['yeast'] === 'select') {
            valid = false;
            errors['yeast'] = 'Select a yeast'
        }
        
        this.setState({errorTable:errors})
        return valid
    }

    calculateOutputs() {

    }

    render() {  
        var redYeasts = [
            {label: '<Select Yeast>', value: 'select'},
            {label: 'D21', value: 'D21'}, 
            {label: 'F15', value: 'F15'}, 
            {label: 'FX10', value: 'FX10'}, 
            {label: 'BO213', value: 'BO213'}, 
            {label: 'UVA43', value: 'UVA43'}
        ]

        var whiteYeasts = [
            {label: '<Select Yeast>', value: 'select'},
            {label: 'BA11', value: 'BA11'},
            {label: 'VL3', value: 'VL3'},
            {label: 'SENSY', value: 'SENSY'},
            {label: 'VIN13', value: 'VIN13'},
            {label: 'CY3079', value: 'CY3079'},
            {label: 'CH9', value: 'CH9'}
        ]

        

        const renderSelectYeast = () => {
            if(this.props.class === 'red') {
                return (
                    <select id={this.props.class} name="yeast" class="form-control input-lg col-9" onChange={this.handleChange.bind(this)}>
                        {redYeasts.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                );
            }
            else if(this.props.class === 'white') {
                return (
                    <select id={this.props.class} name="yeast" class="form-control input-lg col-9" onChange={this.handleChange.bind(this)}>
                        {whiteYeasts.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                );
            }
        }

        const renderOutputs = () => {
            if(this.props.class === 'red') {
                return (
                    <div>
                        <div class="row">    
                            <h2>Saignee and Water Additions</h2>
                            <div class="col-6">                     
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>Initial Gallons</th>
                                            <th>Saignee (gal)</th>
                                            <th>Water Add (gal)</th>
                                            <th>Calculated Gallons</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <h2>Acid Additons and Reductions</h2>
                            <div class="col-6">                            
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>Tartaric Acid (lbs)</th>
                                            <th>Malic Acid (lbs)</th>
                                            <th>Potassium Carbonate (lbs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <h2>Yeast and Nutrients</h2>
                            <div class="col-8">
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>YAN Target (PPM)</th>
                                            <th>Yeast (lbs)</th>
                                            <th>1st DAP Add (lbs)</th>
                                            <th>1st Superfood Add (lbs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">                        
                            <div class="col-8">
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>GoFerm (lbs)</th>
                                            <th>2nd DAP Add (lbs)</th>
                                            <th>2nd Superfood (lbs)</th>
                                            <th>Brix Target for Add</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            }
            else if(this.props.class === 'white') {
                return (
                    <div>
                        <div class="row">    
                            <h2>Additions</h2>
                            <div class="col-6">                     
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>Water Add (gal)</th>
                                            <th>Tartaric Acid (lbs)</th>
                                            <th>Potassium Carbonate (lbs)</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <h2>Yeast and Nutrients</h2>
                            <div class="col-8">
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>YAN Target (PPM)</th>
                                            <th>Yeast (lbs)</th>
                                            <th>1st DAP Add (lbs)</th>
                                            <th>1st Superfood Add (lbs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">                        
                            <div class="col-8">
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>GoFerm (lbs)</th>
                                            <th>2nd DAP Add (lbs)</th>
                                            <th>2nd Superfood (lbs)</th>
                                            <th>Brix Target for Add</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">                        
                            <div class="col-2">
                                <table class="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>Rehydration Water (gal)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        const renderInputs = () => {
            if(this.props.class === 'red') {
                return (
                    <div class="row">
                        <div class="col-6">
                            <label>Tons</label>
                            <input id={this.props.class} name="tons" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['tons']}</p>
                            <label>Initial or Post Cold-Soak Brix</label>
                            <input id={this.props.class} name="initialBrix" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['initialBrix']}</p>
                            <label>Initial or Post Cold-Soak TA</label>
                            <input id={this.props.class} name="initialTA" type="number" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['initialTA']}</p>
                            <label>YAN</label>
                            <input id={this.props.class} name="YAN" type="number" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['YAN']}</p>
                        </div>
                        <div class="col-6">
                            <label>Brix Target</label>
                            <input id={this.props.class} name="brixTarget" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['brixTarget']}</p>
                            <label>Saignee (relative to water)</label>
                            <input id={this.props.class} name="saignee" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['saignee']}</p>
                            <label>TA Adjustment</label>
                            <input id={this.props.class} name="TAAdjustment" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['TAAdjustment']}</p>
                            <label>ML Adjustment</label>
                            <input id={this.props.class} name="mlAdjustment" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['mlAdjustment']}</p>
                            <label>Yeast</label>
                            {renderSelectYeast()}
                            <p class="error">{this.state.errorTable['yeast']}</p>
                        </div>
                    </div>
                );
            }
            else if(this.props.class === 'white') {
                return (
                    <div class="row">
                        <div class="col-6">
                            <label>Post-Rack Gallons</label>
                            <input id={this.props.class} name="postRackGallons" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['postRackGallons']}</p>
                            <label>Initial Brix</label>
                            <input id={this.props.class} name="initialBrix" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['initialBrix']}</p>
                            <label>Initial TA</label>
                            <input id={this.props.class} name="initialTA" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['initialTA']}</p>
                            <label>YAN</label>
                            <input id={this.props.class} name="YAN" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['YAN']}</p>
                        </div>
                        <div class="col-6">
                            <label>Brix Target</label>
                            <input id={this.props.class} name="brixTarget" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['brixTarget']}</p>
                            <label>TA Adjustment</label>
                            <input id={this.props.class} name="TAAdjustment" type="number" step=".00001" class="form-control input-lg col-9" placeholder="Enter number" inputmode="decimal" onChange={this.handleChange.bind(this)}/> 
                            <p class="error">{this.state.errorTable['TAAdjustment']}</p>
                            <label>Yeast</label>
                            {renderSelectYeast()}
                            <p class="error">{this.state.errorTable['yeast']}</p>
                        </div>
                    </div>
                );
            }
        }
        return (  
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>                    
                    <div class="row">
                        <h1 id="inputType" class="col-6">Fruit Inputs</h1>
                        <h1 id="inputType" class="col-6">Winemaking Inputs</h1>
                    </div>
                    {renderInputs()}
                    <button id="calcButton" type="submit" class="btn btn-dark"> Calculate</button>
                </form>
                {renderOutputs()}
            </div> 
        )  
    }  
}
export default Calculate;