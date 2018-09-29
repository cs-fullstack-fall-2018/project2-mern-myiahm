import React, {Component} from 'react'
import DisplayEntries from './DisplayEntries'


class UserNames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: []

        };
    }
    componentDidMount(){
        this.allEntires();
    }

    allEntires = () => {
        fetch('/allentries/entries')
            .then(entry => entry.json())
            .then(response => this.setState({entry: response}))
    };


    render() {
        console.log(this.state.entry)
        return (
            <div>
                <DisplayEntries entry={this.state.entry}/>
            </div>
        )
    }
}
export default UserNames;