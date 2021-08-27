
import React, { Component } from "react";
import './components.css'

class ReferenceInfo extends Component {
    

    render() {  
         if(this.props.class === 'red') return (  
            <div class="referenceInfo">
                <h1>Yeast Information</h1>
                <table class="table table-dark table-striped" id="YeastInformation"> 
                    <thead>
                        <tr>
                            <th>Strain</th>
                            <th>N2 Requirement</th>
                            <th>Alcohol Tolerance</th>
                            <th>Temperature Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>D21</td>
                            <td>Medium</td>
                            <td>16%</td>
                            <td>61* - 82*</td>
                        </tr>
                        <tr>
                            <td>F15</td>
                            <td>Medium</td>
                            <td>16%</td>
                            <td>68 - 89.6*</td>
                        </tr>
                        <tr>
                            <td>FX10</td>
                            <td>Low</td>
                            <td>16%</td>
                            <td>68* - 95*</td>
                        </tr>
                        <tr>
                            <td>BO213</td>
                            <td>Low</td>
                            <td>18%</td>
                            <td>50* - 90*</td>
                        </tr>
                        <tr>
                            <td>UVA43</td>
                            <td>Low</td>
                            <td>18%</td>
                            <td>55* - 95*</td>
                        </tr>
                    </tbody>
                </table>

                <h1 >YAN Target (PPM)</h1>
                <table class="table table-dark table-striped" id="YeastInformation" > 
                    <thead>
                        <tr>
                            <th>Initial Brix</th>
                            <th >Low N2 Required</th>
                            <th>Medium N2 Required</th>
                            <th> High N2 required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20</td>
                            <td>150</td>
                            <td>180</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>165</td>
                            <td>200</td>
                            <td>275</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>180</td>
                            <td>220</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>195</td>
                            <td>240</td>
                            <td>325</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ) 
        else if (this.props.class === 'white') return(
            <div> 
                <h1>Yeast Information</h1>
                <table class="table table-dark table-striped" id="YeastInformation"> 
                    <thead>
                        <tr>
                            <th>Strain</th>
                            <th>N2 Requirement</th>
                            <th>Alcohol Tolerance</th>
                            <th>Temperature Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >BA11</td>
                            <td>High</td>
                            <td>16%</td>
                            <td>50* - 77*</td>
                        </tr>
                        <tr>
                            <td>VL3</td>
                            <td>High</td>
                            <td>14.5%</td>
                            <td>59* - 70*</td>
                        </tr>
                        <tr>
                            <td>SENSY</td>
                            <td>Low</td>
                            <td>14.5%</td>
                            <td>54* - 64*</td>
                        </tr>
                        <tr>
                            <td>VIN13</td>
                            <td>Low</td>
                            <td>17%</td>
                            <td>50* - 59*</td>
                        </tr>
                        <tr>
                            <td>CY3079</td>
                            <td>High</td>
                            <td>15%</td>
                            <td>59* - 80**</td>
                        </tr>
                        <tr>
                            <td>CH9</td>
                            <td>Medium</td>
                            <td>16%</td>
                            <td>57* - 72*</td>
                        </tr>
                    </tbody>
                </table>

                <h1 >YAN Target (PPM)</h1>
                <table class="table table-dark table-striped" id="YeastInformation"> 
                    <thead>
                        <tr >
                            <th>Initial Brix</th>
                            <th>Low N2 Required</th>
                            <th>Medium N2 Required</th>
                            <th>High N2 required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >20</td>
                            <td>150</td>
                            <td>180</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>165</td>
                            <td>200</td>
                            <td>275</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>180</td>
                            <td>220</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>195</td>
                            <td>240</td>
                            <td>325</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }  
}
export default ReferenceInfo;