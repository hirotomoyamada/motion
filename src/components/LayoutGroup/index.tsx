import * as React from "react"
import { MutableRefObject, useRef } from "react"
import {
    LayoutGroupContext,
    LayoutGroupContextProps,
} from "../../context/LayoutGroupContext"
import { nodeGroup } from "../../projection"

export interface Props {
    prefix?: string
    children?: React.ReactChild // TODO Fix children type here to accept multiple children
}

export function LayoutGroup({ children, prefix }: Props) {
    const context = useRef(
        null
    ) as MutableRefObject<LayoutGroupContextProps | null>

    if (context.current === null) {
        context.current = {
            prefix,
            group: nodeGroup(),
        }
    }
    // TODO If parent id, incorporate
    return (
        <LayoutGroupContext.Provider value={context.current}>
            {children}
        </LayoutGroupContext.Provider>
    )
}
