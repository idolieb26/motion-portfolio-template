import { createContext, useContext } from "react"
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_PROJECTS } from '../utils/fetchData'
import { IProject, ITimeElement} from '../src/Types'

export type GlobalContent = {
    projects: IProject[],
    timeline: ITimeElement[]
}
