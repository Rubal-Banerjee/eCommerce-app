"use client"

import { AppStore, makeStore } from "@/redux/store"
import { SessionProvider } from "next-auth/react"
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"

export default function Providers({ children }: { children: ReactNode }) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    }

    return <SessionProvider>
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    </SessionProvider>
}