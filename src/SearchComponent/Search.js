import React, {
    Component
} from 'react';

export class Search extends Component {

    constructor() {
        super();
        this.searchWeatherreport = this.searchWeatherreport.bind(this);
    }

    searchWeatherreport() {
        alert('OK');
    }

    render() {
        return ( 
            <div > 
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search With City Name" aria-label="Search With City Name" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick= {this.searchWeatherreport}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}