import { z } from 'zod';

const schema = z
  .object({
    name: z.string().nonempty('O nome é obrigatório'),
    phone: z
      .string()
      .nonempty('O telefone é obrigatório')
      .regex(/^\d+$/, 'O telefone deve conter apenas números'),
    email: z.string().email('Email inválido').nonempty('O Email é obrigatório'),
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
      ),
    confirmPassword: z.string().nonempty('Confirme sua senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não coincidem',
    path: ['confirmPassword'],
  });

type RegisterData = z.infer<typeof schema>;

export { schema, RegisterData };