"use client";
import { AnimatePresence } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { PropsWithChildren, useContext, useRef } from "react";

export default function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <AnimatePresence>
            <LayoutRouterContext.Provider value={frozen}>
                {props.children}
            </LayoutRouterContext.Provider>
        </AnimatePresence>
    );
}
