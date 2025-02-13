export const baseUrl =`http://localhost:4000/api/`

export type mainOptionsType = {
    name: string,
    icon: JSX.Element,
    placeholder: string,
    needTooltip: boolean,
    tooltipPlaceholder: string | null,
    uniqueClassNames: string 
}

export type svgPropT = {
    fill: string,
    stroke: string,
    className:string
}

export type FolderOptionsT = {
    name: string,
    className: string,
    needTooltip: boolean,
    tooltipPlaceholder: string,
}