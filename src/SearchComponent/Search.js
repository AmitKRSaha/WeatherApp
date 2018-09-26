import React, {
    Component
} from 'react';

export class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }

        this.weatherSearch = this.weatherSearch.bind(this);
    }

    handleChange(event){
        this.setState({ searchValue : event.target.value});
    }

    weatherSearch(){
        this.props.searchWeatherreport(this.state.searchValue);
    }

   

    render(props) {
        return ( 
            <div > 
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={ this.state.searchValue } onChange={this.handleChange.bind(this)} placeholder="Search With City Name" aria-label="Search With City Name" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick= {this.weatherSearch}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}