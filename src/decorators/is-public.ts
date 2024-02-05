import { SetMetadata, applyDecorators } from '@nestjs/common';
import { IS_PUBLIC_KEY } from 'src/modules/jwt/constants';

export function Public() {
  return applyDecorators(SetMetadata(IS_PUBLIC_KEY, true));
}
