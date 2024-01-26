import { z } from 'zod';

const schema = z.object({
  email: z.string().nonempty().email('E-mail inválido'),
  password: z.string().nonempty('A senha é obrigatória'),
});

type LoginData = z.infer<typeof schema>;

export { schema, LoginData };