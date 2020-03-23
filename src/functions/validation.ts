import * as Joi from '@hapi/joi';
import {ValidationException} from "../util/errors/ValidationException";
import {operation} from "../util/enums";
import {Request} from "../util/interfaces";

export const handler = async (event: any) => {
    const request: Request = determineRequest(event);
    const schema: Joi.ObjectSchema = request.schema;
    const validation = schema.validate(event);
    if (validation.error) throw new ValidationException(validation.error);

    return {validation: true, operation: request.operation};
};

function determineRequest(payload: any): Request {
    if (payload.operation === operation.add_user) return {
        schema: userSchema,
        operation: payload.operation
    };
    if (payload.operation === operation.add_result) return {
        schema: resultSchema,
        operation: payload.operation
    };
    if (payload.operation === operation.top_ten) return {
        schema: fetchResultSchema,
        operation: payload.operation
    };
    if (payload.operation === operation.users_best) return {
        schema: userSchema,
        operation: payload.operation
    };
    throw new Error("Bad input, not able to detect validation schema");
}

const userSchema = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    operation: Joi.string().required()
});

const resultSchema = Joi.object().keys({
    user_id: Joi.number().required(),
    game_type: Joi.string().required(),
    result: Joi.number().required(),
    operation: Joi.string().required()
});

const fetchResultSchema = Joi.object().keys({});
