import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \src\infrastructure\config\environmentConfigModule } from './src/infrastructure/config/environment-config/src/infrastructure/config/environment-config.module';
import { \src\infrastructure\config\environmentConfigService } from './src/infrastructure/config/environment-config/src/infrastructure/config/environment-config.service';
import { EnvironmentConfigService } from './infrastructure/config/environment-config/environment-config.service';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypormModule } from './infrastructure/config/typorm/typorm.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [\src\infrastructure\config\environmentConfigModule, EnvironmentConfigModule, TypormModule, TypeormModule],
  controllers: [AppController],
  providers: [AppService, \src\infrastructure\config\environmentConfigService, EnvironmentConfigService],
})
export class AppModule {}
