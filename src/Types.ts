export interface IProject {
    __typename?: string;
    id: number;
    attributes: IAttributes;
    isSelected?: boolean;
}

export interface IProjectItem {
    __typename?:  string;
    id?: number;
    title:       string;
    slug:        string;
    images:       Cover;
    date:        string;
    category:    Category;
    techs:       Tech[];
    description: string;
    source:      string;
    url:         string;
    isSelected?: boolean;
}

export interface IAttributes {
    __typename:  string;
    title:       string;
    slug:        string;
    images:       Cover;
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
    data:       CoverData[];
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
    __typename: string;
    id:         number;
    attributes: ITimeAttributes;
}

export interface ITimeAttributes {
    __typename:  string;
    title:       string;
    location:    string;
    date:        string;
    description: string;
    icon:        string;
}