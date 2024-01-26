import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  phone: z
    .string()
    .nonempty('O telefone é obrigatório')
    .regex(/^\d+$/, 'O telefone deve conter apenas números'),
  email: z.string().email('Email inválido').nonempty('O Email é obrigatório'),
});

type CreateData = z.infer<typeof schema>;

export { schema, CreateData };