import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubModule } from './club/club.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        type: 'sqlite',
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
  }),
    ClubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
