import React, { Component } from 'react';

class NewItem extends Component {
    constructor() {
        super();
        this.state = {
            category: [
                "Indoor",
                "Outdoor",
            ],
        }
    }

    


    render() {
        return (
            <div>
                <form>
                        {/* Some Default Keys
                        Brand
                        Model
                        Category - Indoor Outdoor?
                            Have default categories for new user, editable/add cateogries (never less than 1) Note: error handling of editing/deleting categories with existing items in them
                    */}
                    
                    {/* Own Component which gets added onClick of a + button? */}
                    <div>
                        {/* for key */}
                        <label></label> 
                        <input></input>
                        {/* for value */}
                        <label></label>
                        <input></input>
                    </div>

                    {/* On click, adds new empty field component */}
                    <input type="button">+ Add Field</input>
                    <input type="submit">Save Item</input>
                </form>
            </div>
        )
    }
}

export default NewItem;