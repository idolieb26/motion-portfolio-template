export interface IProject {
    id: number;
    attributes: IAttributes;
    isSelected?: boolean;
}

export interface IAttributes {
    __typename:  string;
    title:       string;
    slug:        string;
    cover:       Cover;
    date:        string;
    category:    Category;
    techs:       Tech[];
    description: string;
    source:      string;
    url:         string;
}

export interface Category {
    __typename: string;
    data:       CategoryData;
}

export interface CategoryData {
    __typename: string;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    __typename: string;
    Category:   string;
}

export interface Cover {
    __typename: string;
    data:       CoverData;
}

export interface CoverData {
    __typename: string;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    __typename: string;
    url:        string;
}

export interface Tech {
    __typename: string;
    tech:       string;
}


export interface ITimeElement {
    id:          number;
    title:       string;
    location:    string;
    description: string;
    buttonText:  string;
    date:        string;
    icon:        string;
}