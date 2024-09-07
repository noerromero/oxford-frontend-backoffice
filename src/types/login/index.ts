import * as v from "valibot";

export const LoginSchema = v.object({
  email: v.pipe(
        v.string('Email inválido'),
        v.nonEmpty("Debe ingresar un email"),
        v.email("Email no contiene el formato correcto")
    ),
  password: v.pipe(
        v.string('Password inválido'),
        v.nonEmpty("Debe ingresar un password"),
        v.minLength(8, "Password debe contener 8 caracteres como mínimo"),
    ),
});

export type Login = v.InferOutput<typeof LoginSchema>;
