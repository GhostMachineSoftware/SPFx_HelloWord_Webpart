var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField, PropertyPaneCheckbox, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import MockHttpClient from './MockHttpClient';
import { SPHttpClient } from '@microsoft/sp-http';
var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPart.prototype.render = function () {
        var title = '';
        var subTitle = '';
        var siteTabTitle = '';
        if (this._teamsContext) {
            // We have teams context for the web part
            title = "Welcome to Teams!";
            subTitle = "Building custom enterprise tabs for your business.";
            siteTabTitle = "We are in the context of following Team: " + this._teamsContext.teamName;
        }
        else {
            // We are rendered in normal SharePoint context
            title = "Welcome to SharePoint!";
            subTitle = "Customize SharePoint experiences using Web Parts.";
            siteTabTitle = "We are in the context of following site: " + this.context.pageContext.web.title;
        }
        this.domElement.innerHTML = "\n    <div class=\"" + styles.helloWorld + "\">\n      <div class=\"" + styles.container + "\">\n        <div class=\"" + styles.row + "\">\n          <div class=\"" + styles.column + "\">\n            <span class=\"" + styles.title + "\">Welcome to SharePoint!</span>\n            <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using web parts.</p>\n            <p class=\"" + styles.description + "\">" + escape(this.properties.description) + "</p>\n            <p class=\"" + styles.description + "\">" + escape(this.properties.test) + "</p>\n            <p class=\"" + styles.description + "\">Loading from " + escape(this.context.pageContext.web.title) + "</p>\n            <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n              <span class=\"" + styles.label + "\">Learn more</span>\n            </a>\n          </div>\n        </div>\n        <div id=\"spListContainer\" />\n      </div>\n    </div>";
        this._renderListAsync();
    };
    HelloWorldWebPart.prototype.onInit = function () {
        var _this = this;
        var retVal = Promise.resolve();
        if (this.context.microsoftTeams) {
            retVal = new Promise(function (resolve, reject) {
                _this.context.microsoftTeams.getContext(function (context) {
                    _this._teamsContext = context;
                    resolve();
                });
            });
        }
        return retVal;
    };
    HelloWorldWebPart.prototype._getMockListData = function () {
        return MockHttpClient.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    HelloWorldWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    HelloWorldWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n    <ul class=\"" + styles.list + "\">\n      <li class=\"" + styles.listItem + "\">\n        <span class=\"ms-font-l\">" + item.Title + "</span>\n      </li>\n    </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    HelloWorldWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (Environment.type === EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (Environment.type == EnvironmentType.SharePoint ||
            Environment.type == EnvironmentType.ClassicSharePoint) {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: 'Description'
                                }),
                                PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(BaseClientSideWebPart));
export default HelloWorldWebPart;
//# sourceMappingURL=HelloWorldWebPart.js.map