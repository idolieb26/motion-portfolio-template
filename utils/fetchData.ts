import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            data {
                id
                attributes {
                    title
                    slug
                    images {
                        data {
                            attributes {
                                url
                                }
                            }
                        }
                    date
                    category {
                        data {
                            attributes {
                                Category
                            }
                        }
                    }
                    techs {
                        tech
                    }
                    description
                    source
                    url
                }
            }
        }
    }
`;

export const GET_TIMELINE = gql`
    query GetTimeLine {
        timelineEvents {
            data {
                id
                attributes {
                    title
                    location
                    date
                    description
                    icon
                }
            }
        }
    }
`;
