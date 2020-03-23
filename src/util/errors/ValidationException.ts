import {ValidationError} from "@hapi/joi";

export class ValidationException extends Error {
    constructor (msg: ValidationError) {
        super(`ValidationException: ${msg}`);
        this.name = 'ValidationException';
        console.error(`ValidationException: ${msg}`);
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}