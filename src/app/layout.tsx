
import React from 'react';

import '@fontsource/inter';
import '@fontsource/inter/700.css';
import '@/assets/main.scss';

export const metadata = {
    title: 'Brainwave - Personal Note',
    description: 'Personal Note App',
}

export interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout(props: DashboardLayoutProps) {
    return (
        <html lang="en">
            <body>
                <div className="w-full h-full">
                    {props.children}
                </div>
            </body>
        </html>
    )
}
