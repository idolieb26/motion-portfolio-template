export interface ITimeElement {
    __typename:  string;
    id:          number;
    title:       string;
    location:    string;
    date:        string;
    description: Description;
    icon:        Icon;
}

export interface Description {
    __typename: string;
    json:       JSON;
}

export interface JSON {
    data:     Data;
    content:  JSONContent[];
    nodeType: string;
}

export interface JSONContent {
    data:     Data;
    content:  ContentContent[];
    nodeType: string;
}

export interface ContentContent {
    data:     Data;
    marks:    any[];
    value:    string;
    nodeType: string;
}

export interface Data {
}

export interface Icon {
    __typename: string;
    name:       string;
}
