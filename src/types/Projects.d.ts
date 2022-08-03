export interface IProject {
    __typename:       string;
    title:            string;
    slug:             string;
    id:               number;
    imagesCollection: ImagesCollection;
    date:             string;
    category:         Category;
    techsCollection:  TechsCollection;
    description:      Description;
    source:           string;
    url:              string;
    isSelected?: boolean;
}

export interface Category {
    __typename: string;
    name:       string;
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

export interface ImagesCollection {
    __typename: string;
    items:      Item[];
}

export interface Item {
    __typename: string;
    url:        string;
}

export interface TechsCollection {
    __typename: string;
    items:      Category[];
}