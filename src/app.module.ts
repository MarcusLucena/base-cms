import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { TypesModule } from './types/types.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { CompanyDataModule } from './company-data/company-data.module';

@Module({
  imports: [PostsModule, CategoriesModule, TypesModule, UsersModule, ImagesModule, CompanyDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
