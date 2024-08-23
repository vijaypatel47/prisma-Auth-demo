import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from './User/user.module';
import { PostModule } from './Post/post.module';
import { GroupModule } from './Group/group.module';

@Module({
  imports: [PrismaModule, UserModule, PostModule, GroupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
