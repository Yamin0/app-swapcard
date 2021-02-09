import * as React from "react";
import {ApolloError} from "@apollo/client";

interface IErrorProps {
    error: ApolloError
}

export const Error: React.FunctionComponent<IErrorProps> = ({error}) => {
    return (
        <div className="form row carrot-list-error">
            <div className="error col-12">
                <span className="oi oi-warning"/>
                An error occurred :
                {error.message}
            </div>
        </div>
    )
}

export const Loading: React.FunctionComponent = () => {
    return (
        <div className="form-loading d-flex align-items-center justify-content-center position-absolute">
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export const LoadingMore: React.FunctionComponent = () => {
    return (
        <div className="form-loading-more d-flex align-items-center justify-content-center position-absolute">
            <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}