import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { IS_ADMIN_KEY } from 'src/modules/jwt/constants';

export function Admin() {
  return applyDecorators(
    SetMetadata(IS_ADMIN_KEY, true),
    UseGuards(AdminJwtGuard),
  );
}
