import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModule } from './user/user.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    CqrsModule,
    UserModule,
    ShareModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
