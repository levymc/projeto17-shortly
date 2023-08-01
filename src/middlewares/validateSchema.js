
export default function validateSchema(req, res, next, schema, url = null) {
    const { error } = schema.validate(req.body, { abortEarly: false });

    const status = url ? 422 : 400

    if (error) return res.status(status).send(error.details.map((detail) => detail.message))
    next()
}