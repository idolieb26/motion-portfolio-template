export interface IProject {
    category: string
    title:  string;
    description:  string;
    image:  string;
    tags: string[];
    source: string;
    visit:  string;
    id: string;
    isSelected?: boolean
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