import React, {Component} from 'react'
import UserName from './UserNames'
//set up that handles new entries
class NewEntry extends Component {
    constructor(props) {
        super(props);
        this.handleusername =
            this.handleusername.bind(this);
        this.handleTitle =
            this.handleTitle.bind(this);
        this.handleentry =
            this.handleentry.bind(this);

        this.state = {
            username: "",
            Title: "",
            entry: "",
            requestFailed:""
        }
    }

    handleusername(event) {
        this.setState({username: event.target.value});
    }

    handleTitle(event) {
        this.setState({Title: event.target.value})
    }

    handleentry(event) {
        this.setState({entry: event.target.value})

    }

    addToJournal = event => {
        event.preventDefault();
        const newData = {
            username: this.state.username,
            Title: this.state.Title,
            entry: this.state.entry

        };

        fetch('/add/newentry',
        {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData),
        })
            .then(data => data.json())
            .then((res) => {
                if (!res.success) this.setState({requestFailed: res.error});
            });
        // Reload our entries

        window.location.reload();
    };

    render()
    {
        return(
            <div align="center"><tr>

                <td><input onChange={this.handleusername}
                name="UserName"
                className="UserNameInputField"
                value={this.state.username}
                           placeholder="Enter UserName"/></td>

               <td> <input onChange={this.handleTitle}
                       title="Title"
                       className="TitleInputField"
                       value={this.state.Title}
                           placeholder="Enter Title"/></td></tr>

               <tr><td> <textarea onChange={this.handleentry}
                       name="entry"
                       className="entryInputField"
                       value={this.state.entry}
                                  placeholder="What's on your mind"/></td>
                <button className="submitbutton"
                type="submit"
                            onClick={this.addToJournal}><em>Submit Entry</em></button>
            </tr>
            </div>
        )
    }

}


export default NewEntry;