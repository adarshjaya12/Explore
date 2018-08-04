export interface IAutoComplete {
    place_id: string;
    description: string;
    latitude:string;
    longitude:string;
}

export interface PlaceObject{
    geometry: any;
    OpeningHours: any;
    place_id: string;
    name:string;
    Vicinity:string;
    rating: string;
    types: Array<string>;
}

export interface TypeResultObject{
    NextPage:string;
    Result:Array<PlaceObject>;
    Status:string;
}
export interface INearBySearchResult{
    type:string;
    searchResult: Array<PlaceObject>;
}