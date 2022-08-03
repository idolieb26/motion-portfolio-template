import { gql } from '@apollo/client';

export const GET_PROJECTS_FR = gql`
    query GetProj {
        projectsCollection(limit:30) {
            items {
                title(locale: "fr")
                slug(locale: "fr")
                id
                imagesCollection(limit:10) {
                    items {
                        url
                    }
                }
                date(locale: "fr")
                category {
                    name
                }
                techsCollection(limit:50) {
                    items {
                        name
                    }
                }
                description(locale: "fr") {
                    json
                }
                source
                url
            }
        }
    }
`;

export const GET_TIMELINE_FR = gql`
    query GetTimeLine {
        timelineEventCollection(limit:30) {
            items {
                id
                title(locale: "fr")
                location(locale: "fr")
                date(locale: "fr")
                description(locale: "fr") {
                    json
                }
                icon {
                    name
                }
            }
        }
    }
`;