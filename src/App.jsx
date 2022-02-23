import React from 'react';
import { useEffect, useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';
import Portal from './components/Portal/Portal';
import Toast from './components/Toast/Toast';

import toast from './service/ToastClass';

export function App(args) {
    if (!args.type) {
        toast.addToast(info);
        toast.addToast(error);
    }else{
        toast.addToast(args);
    }
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

let info = {
    type: 'info',
    position: 'bottom-right',
    textColor: '',
    padding: '10px',
    backgroundColor: '',
    autoDelete: false,
    showDuration: 5000,
    description: ' toast example',
    heading: ' toast',
    animation: 'in-left',
    icon: ''
};

let error = {
    type: 'error',
    position: 'bottom-right',
    textColor: '',
    padding: '10px',
    backgroundColor: '',
    autoDelete: false,
    showDuration: 5000,
    description: ' toast example',
    heading: ' toast',
    animation: 'in-left',
    icon: ''
};