import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IHelloWorldWebPartProps {
    description: string;
    test: string;
    test1: boolean;
    test2: string;
    test3: boolean;
}
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    render(): void;
    private _teamsContext;
    protected onInit(): Promise<any>;
    private _getMockListData;
    private _getListData;
    private _renderList;
    private _renderListAsync;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=HelloWorldWebPart.d.ts.map