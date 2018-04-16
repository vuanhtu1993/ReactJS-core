import React, {Component} from 'react'

class ShoppingList extends Component {
    render() {
        return (
            <div>
                <h3>Shopping list for {this.props.name}</h3>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}
export default ShoppingList;