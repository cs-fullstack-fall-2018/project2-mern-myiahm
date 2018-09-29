import React, {Component} from 'react'

class DisplayEntries extends Component {
    render() {
        var entries = this.props.entry.map(
            Item => {
                return (
                    <div><ul>
                        <li>{Item.username}</li>
                        <li> {Item.Title}</li>
                        <li> {Item.entry}</li>
                        <li> {Item.date}</li>
                    </ul><hr/>
                    </div>
                )

            }
        )
        return (<div>
                <h2>{entries}</h2>
            </div>

        )

    }
}
export default DisplayEntries;
