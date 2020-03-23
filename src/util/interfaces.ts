import * as Joi from '@hapi/joi';

export interface Request {
    schema: Joi.ObjectSchema,
    operation: string
}