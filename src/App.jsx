import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';
import Portal from './components/Portal/Portal';
import Toast from './components/Toast/Toast'

import toast from './service/ToastClass';

export function App(args) {

    toast.addToast(args);
    let toasts = toast.getToast();
    let commonProp = toast.getCommonProperties(args);
    return (
        <ErrorBoundary>
            <Portal>
                <Toast toasts={toasts} commonProp={commonProp}></Toast>
            </Portal>
        </ErrorBoundary>
    )
}
