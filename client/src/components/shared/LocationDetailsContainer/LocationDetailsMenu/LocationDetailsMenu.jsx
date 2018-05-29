import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar'

class LocationDetailsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this._sortMenuItemsByCategory = this._sortMenuItemsByCategory.bind(this);
        this._getFormattedMenuByCategory = this._getFormattedMenuByCategory.bind(this);
    }

    render() {
        return (
            <div className="location-details-menu">
                <div className="location-details-menu__title">
                    <h1>
                        Menu
                    </h1>
                </div>
                <div className="location-details-menu__dish">
                    <List>
                        {Object.keys(this._getFormattedMenuByCategory()).map((key, index) => {
                            return (<ListItem
                                primaryText={key}
                                initiallyOpen={false}
                                primaryTogglesNestedList={true}
                                nestedItems={
                                    this._getFormattedMenuByCategory()[key].map((item) => {
                                        return (<ListItem
                                            leftAvatar={<Avatar icon={<img src={item.image} />} />}
                                            key={item.name}
                                            primaryText={item.name}
                                            rightIcon={<span>{Math.round( item.price * 10) / 10}€</span>}
                                        />)
                                    })
                                }

                            >

                            </ListItem>)
                        })

                        }

                    </List>
                </div>
            </div>
        );
    }

    _sortMenuItemsByCategory() {
        console.log(this.props.locationDetails.menu);

        this.props.locationDetails.menu.sort(function (a, b) {
            var categoryA = a["category"].toLowerCase(), categoryB = b["category"].toLowerCase();
            return categoryA.localeCompare(categoryB);
        });
    }

    _getFormattedMenuByCategory() {

        this._sortMenuItemsByCategory();

        let formattedMenu = {};

        this.props.locationDetails.menu.forEach((item, index) => {
            let formattedItem = {
                name: item.name,
                price: item.price,
                score: item.score,
                image: item.image[0]
            }

            if (index === 0) {
                formattedMenu[item.category] = [];
                formattedMenu[item.category].push(formattedItem)

            } else if (item.category === this.props.locationDetails.menu[index - 1].category) {
                formattedMenu[item.category].push(formattedItem);

            } else {
                formattedMenu[item.category] = [];
                formattedMenu[item.category].push(formattedItem)
            }
        });
        return formattedMenu;
    }

}

export default LocationDetailsMenu;